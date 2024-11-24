"use client";
import LayoutCms from "@/components/shared/layout-cms";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, Modal } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Admin = () => {
  const router = useRouter();
  const handleRoute = (url: string) => {
    router.push(url);
  };
  const handleTrigerModalDelete = () => {
    Modal.confirm({
      title: "Hapus Admin",
      content: "Apakah anda yakin ingin menghapus Cuy?",
      cancelText: "Kembali",
      okText: "Submit",
      okButtonProps: {
        type: "primary",
      },
    });
  };
  const donations = [
    {
      name: "Fadhil Rahman",
      phone: "example@gmail.com",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "example@gmail.com",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "example@gmail.com",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "example@gmail.com",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: <div>Edit</div>,
      key: "0",
      onClick: () => {
        handleRoute(`/cms/admin/${0}`);
      },
    },
    {
      label: <div>Hapus</div>,
      key: "1",
      onClick: () => {
        handleTrigerModalDelete();
      },
    },
  ];

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
      <div className="divide-y divide-gray-700">
        {donations.map((donation, index) => (
          <div key={index} className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
              {donation.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium ">{donation.name}</h3>
                  <p className="text-sm text-blue-400">{donation.phone}</p>
                </div>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button
                    // variant="text"
                    type="text"
                    shape="circle"
                    icon={
                      <MoreOutlined className="text-gray-400 text-[200px] font-extrabold" />
                    }
                  />
                </Dropdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LayoutCms>
  );
};

export default Admin;
