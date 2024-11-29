"use client";
import LayoutProgramDetail from "@/components/cms/program/layout-program-detail";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import BaseButton from "@/components/shared/base-button";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import FormAdmin from "@/components/cms/admin/form-admin";

const AdminCreate = () => {
  const router = useRouter();

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleBack = () => {
    router.back();
  };

  return (
    <LayoutProgramDetail>
      <div className="p-4">
        <div className="flex space-x-2 items-center">
          <Button
            className=""
            icon={<ArrowLeftOutlined />}
            shape="circle"
            onClick={() => {
              handleBack();
            }}
            size="middle"
          />{" "}
          <h3 className="text-xl font-semibold">Buat Admin</h3>
        </div>
        <FormAdmin />
      </div>
    </LayoutProgramDetail>
  );
};

export default AdminCreate;
