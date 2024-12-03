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
import {
  BaseResponseDetailType,
  BaseResponseListType,
} from "@/type/shared.type";
import { ProgramType } from "@/type/program.type";
import { NewsPostType, NewsType } from "@/type/news.type";

export const usePostNews = () => {
  const mutation = useMutation<any, Error, NewsPostType>({
    mutationFn: async (body: NewsPostType) => {
      const response = await fetcher.post("/news", body);
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

export const useGetNews = (params: {
  page: number;
  per_page: number;
  program_id?: string;
}) => {
  const query = useQuery<BaseResponseListType<NewsType>>({
    queryKey: ["LIST_NEWS"],
    queryFn: async () => {
      const result = await fetcher.get("/news", { params });
      return result.data;
    },
  });

  return query;
};

export const useGetProgramDetail = ({ program_id }: { program_id: string }) => {
  const query = useQuery<BaseResponseDetailType<ProgramType>>({
    queryKey: ["LIST_PROGRAM_DETAIL"],
    queryFn: async () => {
      const result = await fetcher.get(`/program/${program_id}`);
      return result.data;
    },
  });

  return query;
};