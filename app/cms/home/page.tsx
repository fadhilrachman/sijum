"use client";
import React from "react";
import { Pie } from "@ant-design/plots";
import { Avatar, Badge, Card } from "antd";
import { DollarOutlined, UserOutlined } from "@ant-design/icons";
import LayoutCms from "@/components/shared/layout-cms";
const Home = () => {
  const [data, setData] = React.useState<any>([]);
  const donations = [
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
  ];
  const config = {
    data,
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  React.useEffect(() => {
    setTimeout(() => {
      setData([
        { type: "cuy", value: 27 },
        { type: "asd", value: 25 },
        { type: "cs", value: 15 },
      ]);
    }, 1000);
  }, []);
  return (
    <LayoutCms>
      <div className="space-y-4">
        <Card className="rounded-2xl">
          <div className="flex justify-between items-center">
            <h4 className="">Total Semua Donasi</h4>
            <DollarOutlined className="text-xl" />
          </div>
          <h3 className="text-2xl mt-2 font-semibold">Rp 27.000.000</h3>
        </Card>
        {/* <Pie {...config} className={"bg-white rounded-2xl"} /> */}
        <div className="  px-2 md:px-4 py-4 rounded-md">
          <h3 className="text-lg">Donasi Hari ini</h3>
          <div className="space-y-2">
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
                        <h3 className="font-medium text-white">
                          {donation.name}
                        </h3>
                        <p className="text-sm text-blue-400">
                          {donation.phone}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <button className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-md transition duration-300 ease-in-out">
                          Donasi Sijum
                        </button>
                        <span className="text-xs text-gray-400 mt-1">
                          {donation.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Pesan: {donation.message}
                    </p>
                    <p className="text-sm font-medium text-white mt-1">
                      {donation.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutCms>
  );
};

export default Home;
