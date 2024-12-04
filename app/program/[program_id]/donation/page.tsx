"use client";
import FormGenerator, { DataFormType } from "@/components/shared/form-genrator";
import { usePostDonation } from "@/hooks/donation.hook";
import { useGetProgramDetail } from "@/hooks/program.hook";
import { formatRupiah } from "@/lib/utils";
import { ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
const listNominalDonation = [50000, 100000, 300000, 500000, 1000000, "other"];

const Donation = () => {
  const { program_id } = useParams();
  const { mutateAsync, status } = usePostDonation({
    program_id: program_id as string,
  });
  const [form] = Form.useForm();

  const router = useRouter();
  const [choosedDonation, setChoosedDonation] = useState<string | number>(
    50000
  );
  const { data } = useGetProgramDetail({ program_id: program_id as string });
  const dataFinally = data?.result;
  const handleRoute = (href: string) => {
    router.push(href);
  };

  const [dataForm, setDataForm] = useState<DataFormType[]>([
    {
      name: "user_name",
      type: "text",
      label: "Nama",
      placeholder: "Nama anda",
      rules: [
        {
          required: true,
          message: "Field ini harus diisi",
        },
      ],
    },

    {
      name: "phone",
      type: "text",
      label: "Nomor Hp",
      placeholder: "Nomor Hp anda",
      addonBefore: "+62",
      rules: [
        {
          required: true,
          message: "Field ini harus diisi",
        },
      ],
    },

    {
      name: "message",
      type: "textarea",
      label: "Pesan",
      placeholder: "Berikan pesan atau doa disini (optional)",
    },
  ]);

  const handleSubmit = async (val: any) => {
    const phone = val.phone[0] == "0" ? val.phone : `0${val.phone}`;
    const payload = {
      message: val.message,
      user_name: val.user_name,
      phone,
      donation: choosedDonation as number,
    };
    console.log({ payload });

    await mutateAsync(payload);
    handleRoute(`/program/${program_id}`);
  };

  useEffect(() => {
    if (choosedDonation == "other") {
      setDataForm((p) => [
        {
          name: "donation",
          type: "number",
          placeholder: "Berikan donasi terbaik disini",
          label: "Nominal Donasi",
          addonBefore: "Rp",
          bottomCustom: <Divider className="bg-gray-600" />,
        },
        ...p,
      ]);
    } else {
      const filterDataForm = dataForm.filter((val) => val.name != "donation");
      setDataForm(filterDataForm);
    }
  }, [choosedDonation]);

  return (
    <div className="bg-gray-900">
      <div className=" max-w-[480px] relative rounded-sm min-h-[100vh] m-auto">
        <div className="relative min-h-[100vh]  text-gray-400 bg-gray-800  pb-20 space-y-2">
          <Button
            className="m-4"
            icon={<ArrowLeftOutlined />}
            shape="circle"
            onClick={() => {
              // handleBack();
              handleRoute("/");
            }}
            size="middle"
          />

          <div className="bg bg-gray-700 p-4 flex items-start space-x-4">
            <img
              className="h-24 w-36 rounded-md"
              src={dataFinally?.thumbnail.url}
              alt=""
            />
            <div>
              <small>Anda akan berdonasi dalam program :</small>
              <h3 className="text-primary font-bold text-2xl">
                {dataFinally?.name}
              </h3>
            </div>
          </div>
          <div className="p-4">
            <h3>Donasi terbaik anda</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {listNominalDonation.map((val, key) => {
                return (
                  <div
                    onClick={() => {
                      setChoosedDonation(val);
                    }}
                    className={`bg-gray-900 relative px-3 border-[2px] cursor-pointer py-5 rounded-md text-center ${
                      val == choosedDonation
                        ? " border-primary "
                        : "border-gray-900"
                    }`}
                    key={key}
                  >
                    {val == choosedDonation && (
                      <CheckCircleFilled className="absolute right-1 top-1 text-primary" />
                    )}
                    <p className="text-sm">
                      {val != "other" ? (
                        formatRupiah(val as number)
                      ) : (
                        <p>Nominal Lainya</p>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
            {choosedDonation != "other" && <Divider className="bg-gray-600" />}
            <FormGenerator
              form={form}
              className="mt-4"
              disabled={status == "pending"}
              onSubmit={(val) => {
                console.log({ val });

                handleSubmit(val);
              }}
              dataForm={dataForm}
              id="form"
            />
          </div>
          <div className="fixed flex bg-gray-800   border-t border-gray-600 bottom-0 w-[480px]  gap-x-4 py-2 px-2 md:px-8">
            <Button
              type="primary"
              className="w-full"
              htmlType="submit"
              form="form"
              size="large"
              loading={status == "pending"}
              // onClick={() => {
              //   handleRoute(`/program/${program_id}/donation`);
              // }}
            >
              Donasi{" "}
              {choosedDonation != "other"
                ? formatRupiah(choosedDonation as number)
                : Form.useWatch("donation", form)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
