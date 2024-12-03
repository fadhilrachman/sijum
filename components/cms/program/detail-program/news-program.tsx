import { useGetNews } from "@/hooks/news.hook";
import { Steps } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import moment from "moment";
import BaseButton from "@/components/shared/base-button";
const NewsProgram = () => {
  const { program_id } = useParams();
  const [perPage, setPerPage] = useState(3);
  const { data, isFetching, refetch } = useGetNews({
    page: 1,
    per_page: perPage,
    program_id: program_id as string,
  });

  const items = data?.result.map((val) => {
    return {
      title: (
        <div className="space-y-4">
          <h3 className="font-semibold">
            {moment(val.date).format("D MMMM YYYY")}
          </h3>

          <img
            className=" rounded-md"
            src={val?.thumbnail?.url}
            // src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            alt=""
          />
        </div>
      ),
      description: (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: val.description as string }}
        />
      ),
    };
  });

  useEffect(() => {
    refetch();
  }, [perPage]);

  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Berita Program</h4>
      <Steps direction="vertical" progressDot current={4} items={items} />
      {(data?.pagination?.total_data as number) > perPage && (
        <div className="w-full justify-center  flex">
          <BaseButton
            type="primary"
            onClick={() => {
              setPerPage((p) => p + 3);
            }}
          >
            More
          </BaseButton>
        </div>
      )}
    </div>
  );
};

export default NewsProgram;
