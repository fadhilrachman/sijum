"use client";
import FormGenerator, { DataFormType } from "@/components/shared/form-genrator";
import { useGetProgramDetail } from "@/hooks/program.hook";
import { formatRupiah } from "@/lib/utils";
import { ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
const listNominalDonation = [50000, 100000, 300000, 500000, 1000000, "other"];

const Donation = () => {
  const [form] = Form.useForm();

  const router = useRouter();
  const [choosedDonation, setChoosedDonation] = useState<string | number>(
    50000
  );
  const { program_id } = useParams();
  const { data } = useGetProgramDetail({ program_id: program_id as string });
  const dataFinally = data?.result;
  const handleRoute = (href: string) => {
    router.push(href);
  };

  const [dataForm, setDataForm] = useState<DataFormType[]>([
    {
      name: "name",
      type: "text",
      label: "Nama",
      placeholder: "Nama anda",
    },

    {
      name: "target_date_donation",
      label: "Tanggal Target Donasi Terkumpul",
      type: "date",
      placeholder: "Pilih tanggal",
      //   disabled: isTargetDateDonation as boolean,
      bottomCustom: (
        <Checkbox
          className="mt-4"
          //   checked={isTargetDateDonation as boolean}
          onClick={() => {
            form.setFieldValue("target_date_donation", undefined);
            // form.set
            // setIsTargetDateDonation((p) => !p);
          }}
        >
          Jangan tentukan nominal
        </Checkbox>
      ),
    },
    {
      name: "description",
      type: "textarea",
      label: "Pesan",
      placeholder: "Berikan pesan atau doa disini (optional)",
    },
  ]);

  useEffect(() => {
    if (choosedDonation == "other") {
      setDataForm((p) => [
        {
          name: "donation",
          type: "number",
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
              //   disabled={status == "pending"}
              form={form}
              className="mt-4"
              onSubmit={(val) => {
                console.log({ val });

                // handleSubmit(val);
              }}
              dataForm={dataForm}
              id="form"
            />
          </div>
          <div className="fixed flex bg-gray-800   border-t border-gray-600 bottom-0 w-[480px]  gap-x-4 py-2 px-2 md:px-8">
            <Button
              type="primary"
              className="w-full"
              size="large"
              onClick={() => {
                handleRoute(`/program/${program_id}/donation`);
              }}
            >
              Donasi {formatRupiah(choosedDonation as number)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
