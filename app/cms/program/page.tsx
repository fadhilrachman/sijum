"use client";
import LayoutCms from "@/components/shared/layout-cms";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Progress } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Program = () => {
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
        <div className="space-y-4">
          {[1, 2, 4, 5].map((val, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  hanleRoute(`/cms/program/${key}`);
                }}
                className=" px-2 text-gray-400 cursor-pointer space-y-2 md:px-4 py-4 border-b border-gray-600"
              >
                <div className="flex space-x-2 ">
                  <img
                    className="h-24 w-36 rounded-md"
                    src="/bg-home.jpg"
                    // src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                    alt=""
                  />
                  <div>
                    <h3 className="font-semibold">Donasi Palestina</h3>
                    <p className="line-clamp-2 text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam recusandae quaerat rem iusto? Autem eligendi
                      facilis corporis porro explicabo ratione.
                    </p>

                    <Progress
                      percent={50}
                      showInfo={false}
                      strokeColor={"#EAB308"}
                    />
                    <div className="flex text-[12px] mt-1 justify-between items-center">
                      <h3 className="font-semibold ">
                        Terkumpul Rp 27.000.000
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutCms>
  );
};

export default Program;
