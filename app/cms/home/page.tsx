"use client";
import React from "react";
import { Pie } from "@ant-design/plots";
import { Avatar, Badge, Card } from "antd";
import { DollarOutlined, UserOutlined } from "@ant-design/icons";
import LayoutCms from "@/components/shared/layout-cms";
const Home = () => {
  const [data, setData] = React.useState<any>([]);
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
            <h4 className="text-gray-700">Total Semua Donasi</h4>
            <DollarOutlined className="text-xl" />
          </div>
          <h3 className="text-2xl mt-2 font-semibold">Rp 27.000.000</h3>
        </Card>
        {/* <Pie {...config} className={"bg-white rounded-2xl"} /> */}
        <div className=" bg-white px-2 md:px-4 py-4 rounded-md">
          <div className="space-y-2">
            <h3 className="text-gray-700">Live Donation</h3>
            <div className="space-y-4">
              {[0, 1, 23, 4].map((val, key) => {
                return (
                  <div key={key}>
                    <Badge.Ribbon
                      text="Donasi Sijum"
                      className="absolute -top-5"
                    >
                      <div
                        className={`flex justify-between items-center  pb-2 ${
                          key != 3 && "border-b"
                        }`}
                      >
                        <div className="flex space-x-2 items-center">
                          <Avatar size={"default"} icon={<UserOutlined />} />
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="text-xs">Fadhil Rahman</p>
                            </div>
                            <h3>cuy@gmail.com</h3>
                          </div>
                        </div>
                        <div>
                          <small className="text-gray-700">7 menit lalu</small>
                          <h3>Rp 20.000</h3>
                        </div>{" "}
                      </div>
                    </Badge.Ribbon>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </LayoutCms>
  );
};

export default Home;
