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
import { DonationType } from "@/type/donation.type";

export const usePostDonation = () => {
  const navigate = useRouter();
  const mutation = useMutation<any, Error, FormData>({
    mutationFn: async (body: FormData) => {
      const response = await fetcher.post("/login", body);
      return response.data;
    },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: "Login Sukses" });
      Cookie.set(process.env.COOKIE_NAME || "", data.data.access_token);
      navigate.push("/cms/home");
    }

    if (status == "error") {
      const error = mutation.error as AxiosError<any>;
      console.log({ error });
      const message = error.response?.data.message || "Gagal login";

      notification.error({ message: message });
    }
  }, [mutation.status]);

  return mutation;
};

export const useGetDonation = (params: { page: number; per_page: number }) => {
  const query = useQuery<BaseResponseListType<DonationType>>({
    queryKey: ["LIST_DONATION"],
    queryFn: async () => {
      const result = await fetcher.get("/donation", { params });
      return result.data;
    },
  });

  return query;
};
