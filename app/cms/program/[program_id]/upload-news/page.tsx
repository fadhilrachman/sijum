"use client";
import LayoutProgramDetail from "@/components/cms/program/layout-program-detail";
import React, { useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import BaseButton from "@/components/shared/base-button";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const UploadNews = () => {
  const router = useRouter();

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
          <h3 className="text-xl font-semibold">
            Tambahkan Berita di Program "Donasi Jumat"
          </h3>
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
            label="Upload Foto"
            valuePropName="fileList"
            rules={[
              {
                required: true,
                message: "Field ini harus diisi",
              },
            ]}
            getValueFromEvent={normFile}
          >
            <Upload
              action="/upload.do"
              multiple={false}
              listType="picture-card"
            >
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item name="target_donation" label="Tanggal">
            <Input placeholder="Nama" size="large" type="date" />
          </Form.Item>

          <Form.Item name="description" label="Deskripsi">
            <TextArea size="large" />
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

export default UploadNews;
