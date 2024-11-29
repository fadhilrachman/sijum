import { useGetNews } from "@/hooks/news.hook";
import { Steps } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import moment from "moment";
const NewsProgram = () => {
  const { program_id } = useParams();
  const { data, isFetching } = useGetNews({
    page: 1,
    per_page: 10,
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
            src={val.thumbnail.url}
            // src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            alt=""
          />
        </div>
      ),
      description: <div className="mt-4">{val.description}</div>,
    };
  });

  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Berita Program</h4>
      <Steps direction="vertical" progressDot current={4} items={items} />
    </div>
  );
};

export default NewsProgram;
