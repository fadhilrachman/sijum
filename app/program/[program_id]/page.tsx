"use client";
import AboutProgram from "@/components/cms/program/detail-program/about-program";
import DonationProgram from "@/components/cms/program/detail-program/donation-program";
import NewsProgram from "@/components/cms/program/detail-program/news-program";
import ProgressProgram from "@/components/cms/program/detail-program/progress-program";
import { useGetProgramDetail } from "@/hooks/program.hook";
import { ArrowLeftOutlined, CameraOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DetailProgram = () => {
  const router = useRouter();
  const { program_id } = useParams();
  const { data } = useGetProgramDetail({ program_id: program_id as string });
  const dataFinally = data?.result;
  const handleRoute = (href: string) => {
    router.push(href);
  };
  return (
    <div className="bg-gray-900">
      <div className=" max-w-[440px] relative rounded-sm min-h-[100vh] m-auto">
        <div className="relative min-h-[100vh] text-gray-400 bg-gray-800  pb-20 space-y-2">
          <div className="relative">
            {" "}
            <img className="" src={dataFinally?.thumbnail.url} alt="" />
            <Button
              className="absolute top-4 left-4"
              icon={<ArrowLeftOutlined />}
              shape="circle"
              onClick={() => {
                // handleBack();
                handleRoute("/");
              }}
              size="middle"
            />
          </div>
          <div className="py-2 px-2 space-y-2  md:px-4 ">
            <h3 className="text-xl font-semibold">{dataFinally?.name}</h3>
            <ProgressProgram
              target_nominal={dataFinally?.target_nominal || 0}
              total_donation={dataFinally?.total_donation || 0}
            />
            <div className="space-y-3">
              <Divider className="bg-gray-600" />
              <AboutProgram description={dataFinally?.description || ""} />
              <Divider className="bg-gray-600" />
              <NewsProgram isPublic={true} />
              <Divider className="bg-gray-600" />
              <DonationProgram />
            </div>
          </div>
          <div className="fixed flex bg-gray-800   border-t border-gray-600 bottom-0 w-[440px]  gap-x-4 py-2 px-2 md:px-8">
            {/* <Button size="large" icon={<EditOutlined />}>
              Edit Program
            </Button> */}
            <Button
              type="primary"
              className="w-full"
              size="large"
              onClick={() => {
                // handleRoute(`/cms/program/${program_id}/upload-news`);
              }}
              icon={<CameraOutlined />}
            >
              Donasi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProgram;
