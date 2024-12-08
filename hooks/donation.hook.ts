import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import { AxiosError } from "axios";
import * as Cookie from "cookies-js";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { BaseResponseListType } from "@/type/shared.type";
import { DonationPostType, DonationType } from "@/type/donation.type";

export const usePostDonation = ({ program_id }: { program_id: string }) => {
  const navigate = useRouter();
  const mutation = useMutation<any, Error, DonationPostType>({
    mutationFn: async (body: DonationPostType) => {
      const response = await fetcher.post(`/donation/${program_id}`, body);

      window.snap.pay(response.data.token, {
        onSuccess: function (result: any) {
          console.log("Transaction successful!", result);
          navigate.push(`donation/asdasdksad`);
          // alert("Payment successful!");
          // Redirect ke halaman sukses atau lakukan aksi lain
        },
        onPending: function (result: any) {
          console.log("Transaction is pending", result);
          // alert("Payment is pending. Please complete the payment.");
        },
        onError: function (result: any) {
          console.error("Transaction failed", result);
          notification.error({ type: "error", message: "Donasi Gagal" });
          // alert("Payment failed. Please try again.");
        },
        onClose: function () {
          console.log("Payment popup closed.");
          // alert("Payment popup was closed without completing the payment.");
        },
      });
      return response.data;
    },
  });

  useEffect(() => {
    const status = mutation.status;

    if (status == "error") {
      const error = mutation.error as AxiosError<any>;
      console.log({ error });
      const message = error.response?.data.message || "Gagal login";

      notification.error({ message: message });
    }
  }, [mutation.status]);

  return mutation;
};

export const useGetDonation = (params: {
  page: number;
  per_page: number;
  program_id?: string;
}) => {
  const query = useQuery<BaseResponseListType<DonationType>>({
    queryKey: ["LIST_DONATION"],
    queryFn: async () => {
      const result = await fetcher.get("/donation", { params });
      return result.data;
    },
  });

  return query;
};
