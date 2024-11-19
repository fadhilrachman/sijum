"use client";
import AboutProgram from "@/components/cms/program/detail-program/about-program";
import NewsProgram from "@/components/cms/program/detail-program/news-program";
import ProgressProgram from "@/components/cms/program/detail-program/progress-program";
import LayoutProgramDetail from "@/components/cms/program/layout-program-detail";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Progress } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ProgramDetail = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <LayoutProgramDetail>
      <div className="relative">
        {" "}
        <img
          className=""
          src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
          alt=""
        />
        <Button
          className="absolute top-4 left-4"
          icon={<ArrowLeftOutlined />}
          shape="circle"
          onClick={() => {
            handleBack();
          }}
          size="large"
        />
      </div>
      <div className="py-2 px-2 space-y-2  md:px-4 ">
        <h3 className="text-xl font-semibold">Donasi Sijum</h3>
        <ProgressProgram />
        <Divider />
        <AboutProgram />
        <Divider />
        <NewsProgram />
      </div>
    </LayoutProgramDetail>
  );
};

export default ProgramDetail;
