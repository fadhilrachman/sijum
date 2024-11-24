"use client";
import LayoutProgramDetail from "@/components/cms/program/layout-program-detail";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  FormItemProps,
  Input,
  InputNumber,
  Row,
  Space,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import BaseButton from "@/components/shared/base-button";
import { currencyFormat } from "@/lib/helper";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const AdminEdit = () => {
  const router = useRouter();

  const [isTargetDateDonation, setIsTargetDateDonation] =
    useState<Boolean>(false);
  const [form] = Form.useForm();
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleBack = () => {
    router.back();
  };
  const handleSubmit = (value: any) => {
    const formatedDescription = value.description.replace(/\n/g, "<br/>");

    console.log({ formatedDescription });
  };

  console.log({ value: Form.useWatch("description", form) });

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
          <h3 className="text-xl font-semibold">Edit Admin</h3>
        </div>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          onFinish={handleSubmit}
          className="mt-4"
          id="form"
        >
          <Form.Item
            name="name"
            label="Nama "
            rules={[
              {
                required: true,
                message: "Field ini harus diisi",
              },
            ]}
          >
            <Input placeholder="Nama" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Field ini harus diisi",
              },
            ]}
          >
            <Input
              placeholder="Email"
              size="large"
              type="email"
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Passsword"
            rules={[
              {
                required: true,
                message: "Field ini harus diisi",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              type="password"
              className="w-full"
            />
          </Form.Item>
        </Form>
        <BaseButton
          type="primary"
          size="large"
          htmlType="submit"
          form="form"
          className="w-full"
        >
          Submit
        </BaseButton>
      </div>
    </LayoutProgramDetail>
  );
};

export default AdminEdit;
