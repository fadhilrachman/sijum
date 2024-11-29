import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import { AxiosError } from "axios";
import * as Cookie from "cookies-js";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { BaseResponseListType } from "@/type/shared.type";
import { ProgramType } from "@/type/program.type";
import { AdminType, CreateAdminType } from "@/type/admin.type";

export const usePostAdmin = () => {
  const navigate = useRouter();
  const mutation = useMutation<any, Error, CreateAdminType>({
    mutationFn: async (body: CreateAdminType) => {
      const response = await fetcher.post("/user", body);
      return response.data;
    },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: data.message });
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

export const useDeleteAdmin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<any, Error, { admin_id: string }>({
    mutationFn: async ({ admin_id }) => {
      const response = await fetcher.delete(`/user/${admin_id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LIST_ADMIN"] }); // Menggunakan invalidateQueries untuk memicu ulang query
    },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: data.message });
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

export const useGetAdmin = (params: { page: number; per_page: number }) => {
  const query = useQuery<BaseResponseListType<AdminType>>({
    queryKey: ["LIST_ADMIN"],
    queryFn: async () => {
      const result = await fetcher.get("/user", { params });
      return result.data;
    },
  });

  return query;
};
