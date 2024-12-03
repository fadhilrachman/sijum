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
import FormGenerator from "@/components/shared/form-genrator";
import { usePostProgram } from "@/hooks/program.hook";

const ProgramCreate = () => {
  const router = useRouter();
  const { mutateAsync, status } = usePostProgram();
  const [isTargetDonation, setIsTargetDonation] = useState<Boolean>(false);
  const [isTargetDateDonation, setIsTargetDateDonation] =
    useState<Boolean>(false);
  const [form] = Form.useForm();

  const handleBack = () => {
    router.back();
  };
  const handleSubmit = async (value: any) => {
    const formatedDescription = value.description.replace(/\n/g, "<br/>");

    await mutateAsync({
      name: value?.name,
      target_nominal: value?.target_nominal,
      description: formatedDescription,
      target_date_donation: value?.target_date_donation.toDate(),
      thumbnail_img_id: value?.thumbnail?.id,
      is_not_target_date_donation: isTargetDateDonation as boolean,
      is_not_target_donaion: isTargetDonation as boolean,
    });

    router.push("/cms/program");
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
          <h3 className="text-xl font-semibold">Buat Program</h3>
        </div>
        <FormGenerator
          disabled={status == "pending"}
          form={form}
          className="mt-4"
          onSubmit={(val) => {
            console.log({ val });

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
              name: "name",
              type: "text",
              label: "Nama Program",
              placeholder: "Nama program",
              rules: [
                {
                  required: true,
                  message: "Field ini wajib diisi",
                },
              ],
            },
            {
              name: "target_nominal",
              type: "number",
              label: "Target Nominal Donasi",
              placeholder: "Target nominal donasi",
              disabled: isTargetDonation as boolean,

              rules: [
                {
                  required: !isTargetDonation as boolean,
                  message: "Field ini wajib diisi",
                },
              ],
            },

            {
              name: "target_date_donation",
              label: "Tanggal Target Donasi Terkumpul",
              type: "date",
              placeholder: "Pilih tanggal",
              disabled: isTargetDateDonation as boolean,
              bottomCustom: (
                <Checkbox
                  className="mt-4"
                  checked={isTargetDateDonation as boolean}
                  onClick={() => {
                    form.setFieldValue("target_date_donation", undefined);
                    // form.set
                    setIsTargetDateDonation((p) => !p);
                  }}
                >
                  Jangan tentukan nominal
                </Checkbox>
              ),
              rules: [
                {
                  required: !isTargetDateDonation as boolean,
                  message: "Field ini wajib diisi",
                },
              ],
            },
            {
              name: "description",
              type: "textarea",
              label: "Deskripsi",
              placeholder: "Deskripsi",
            },
          ]}
          id="form"
        />
        <BaseButton
          type="primary"
          size="large"
          htmlType="submit"
          form="form"
          loading={status == "pending"}
          className="w-full"
        >
          Submit
        </BaseButton>
      </div>
    </LayoutProgramDetail>
  );
};

export default ProgramCreate;
