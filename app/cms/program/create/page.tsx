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

const ProgramCreate = () => {
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
          <h3 className="text-xl font-semibold">Buat Program</h3>
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
            label="Upload Thumbnail"
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
          <Form.Item
            name="name"
            label="Nama Program"
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
            label="Target Nominal"
            rules={[
              {
                required: true,
                message: "Field ini harus diisi",
              },
            ]}
          >
            <InputNumber
              placeholder="Email"
              size="large"
              type="number"
              className="w-full"
              addonBefore={"Rp"}
              min={1}
              formatter={(value) => currencyFormat(value as number)}
              parser={(value): any => value?.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="target_donation"
            label="Tanggal Target Donasi Terkumpul"
          >
            <Input
              disabled={isTargetDateDonation as boolean}
              placeholder="Nama"
              size="large"
              type="date"
            />
            <Checkbox
              className="mt-4"
              checked={isTargetDateDonation as boolean}
              onClick={() => {
                form.setFieldValue("target_donation", "");
                // form.set
                setIsTargetDateDonation((p) => !p);
              }}
            >
              Jangan tentukan tanggal target
            </Checkbox>
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

export default ProgramCreate;
