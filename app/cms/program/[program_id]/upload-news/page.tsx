"use client";
import LayoutProgramDetail from "@/components/cms/program/layout-program-detail";
import React, { useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import BaseButton from "@/components/shared/base-button";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import FormGenerator from "@/components/shared/form-genrator";
import { usePostNews } from "@/hooks/news.hook";

const UploadNews = () => {
  const router = useRouter();
  const { mutateAsync, status } = usePostNews();
  const [form] = Form.useForm();
  const { program_id } = useParams();
  const handleBack = () => {
    router.back();
  };
  const handleSubmit = async (value: any) => {
    const formatedDescription = value.description.replace(/\n/g, "<br/>");
    const payload = {
      date: value.date.toDate(),
      description: formatedDescription,
      thumbnail_img_id: value?.thumbnail?.id,
      program_id,
    };
    await mutateAsync(payload);
    router.push(`/cms/program/${program_id}`);
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
        <FormGenerator
          form={form}
          onSubmit={(val) => {
            handleSubmit(val);
          }}
          dataForm={[
            {
              name: "thumbnail",
              label: "Thumbnail",
              type: "file",
              placeholder: "Pilih tanggal",
            },
            {
              name: "date",
              label: "Tanggal",
              type: "date",
              placeholder: "Pilih tanggal",
              rules: [
                {
                  required: true,
                  message: "Field ini wajib diisi",
                },
              ],
            },
            {
              name: "description",
              type: "textarea",
              label: "Deskripsi",
              rules: [
                {
                  required: true,
                  message: "Field ini wajib diisi",
                },
              ],
            },
          ]}
          id="form"
        />
        <BaseButton
          type="primary"
          size="large"
          htmlType="submit"
          form="form"
          className="w-full"
          loading={status == "pending"}
        >
          Submit
        </BaseButton>
      </div>
    </LayoutProgramDetail>
  );
};

export default UploadNews;
