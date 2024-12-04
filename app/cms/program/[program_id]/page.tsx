"use client";
import AboutProgram from "@/components/cms/program/detail-program/about-program";
import DonationProgram from "@/components/cms/program/detail-program/donation-program";
import NewsProgram from "@/components/cms/program/detail-program/news-program";
import ProgressProgram from "@/components/cms/program/detail-program/progress-program";
import LayoutProgramDetail from "@/components/cms/program/layout-program-detail";
import { useGetProgramDetail } from "@/hooks/program.hook";
import {
  ArrowLeftOutlined,
  CameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Progress } from "antd";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const ProgramDetail = () => {
  const { program_id } = useParams();
  const { data } = useGetProgramDetail({ program_id: program_id as string });
  const dataProgram = data?.result;
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const handleRoute = (href: string) => {
    router.push(href);
  };

  return (
    <LayoutProgramDetail>
      <div className="relative">
        {" "}
        <img className="" src={dataProgram?.thumbnail.url} alt="" />
        <Button
          className="absolute top-4 left-4"
          icon={<ArrowLeftOutlined />}
          shape="circle"
          onClick={() => {
            // handleBack();
            handleRoute("/cms/program");
          }}
          size="middle"
        />
      </div>
      <div className="py-2 px-2 space-y-2  md:px-4 ">
        <h3 className="text-xl font-semibold">{dataProgram?.name}</h3>
        <ProgressProgram
          target_nominal={dataProgram?.target_nominal || 0}
          total_donation={dataProgram?.total_donation || 0}
        />
        <div className="space-y-3">
          <Divider className="bg-gray-600" />
          <AboutProgram description={dataProgram?.description || ""} />
          <Divider className="bg-gray-600" />
          <NewsProgram />
          <Divider className="bg-gray-600" />
          <DonationProgram />
        </div>
      </div>
      <div className="fixed flex bg-gray-800   border-t border-gray-600 bottom-0 w-[480px]  gap-x-4 py-2 px-2 md:px-8">
        {/* <Button size="large" icon={<EditOutlined />}>
              Edit Program
            </Button> */}
        <Button
          type="primary"
          className="w-full"
          size="large"
          onClick={() => {
            handleRoute(`/cms/program/${program_id}/upload-news`);
          }}
          icon={<CameraOutlined />}
        >
          Tambah Berita
        </Button>
      </div>
    </LayoutProgramDetail>
  );
};

export default ProgramDetail;
