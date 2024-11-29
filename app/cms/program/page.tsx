"use client";
import ListProgram from "@/components/cms/program/list-program";
import LayoutCms from "@/components/shared/layout-cms";
import { useGetProgram } from "@/hooks/program.hook";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Progress, Skeleton } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Program = () => {
  const { data, isFetching } = useGetProgram({ page: 1, per_page: 1 });

  const router = useRouter();
  const hanleRoute = (string: string) => {
    router.push(string);
  };
  return (
    <LayoutCms>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <Input
            size="middle"
            placeholder="Cari program"
            prefix={<SearchOutlined />}
          />
          <Button
            size="middle"
            type="primary"
            onClick={() => {
              hanleRoute("/cms/program/create");
            }}
          >
            Tambah Program
          </Button>
        </div>
      </div>
      {isFetching ? <Skeleton /> : <ListProgram data={data?.result || []} />}
    </LayoutCms>
  );
};

export default Program;
