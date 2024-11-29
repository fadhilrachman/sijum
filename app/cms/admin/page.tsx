"use client";
import ListAdmin from "@/components/cms/admin/list-admin";
import LayoutCms from "@/components/shared/layout-cms";
import { useGetAdmin } from "@/hooks/admin.hook";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, Modal, Skeleton } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Admin = () => {
  const { data, isFetching } = useGetAdmin({ page: 1, per_page: 10 });
  const router = useRouter();
  const handleRoute = (url: string) => {
    router.push(url);
  };

  return (
    <LayoutCms>
      <div className="flex space-x-4 text-gray-400">
        <Input
          size="middle"
          placeholder="Cari admin"
          prefix={<SearchOutlined />}
        />
        <Button
          size="middle"
          type="primary"
          onClick={() => {
            handleRoute("/cms/admin/create");
          }}
        >
          Tambah Admin
        </Button>
      </div>
      {isFetching ? <Skeleton /> : <ListAdmin data={data?.result || []} />}
    </LayoutCms>
  );
};

export default Admin;
