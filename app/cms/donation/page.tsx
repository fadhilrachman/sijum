"use client";
import FilterDonation from "@/components/cms/donation/filter-donation";
import LayoutCms from "@/components/shared/layout-cms";
import { FilterFilled, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Input } from "antd";
import React, { useState } from "react";

const Donation = () => {
  const [modal, setModal] = useState({ filter: false });
  return (
    <LayoutCms>
      <div className="space-y-4">
        {" "}
        <div className="flex space-x-4">
          <Input
            placeholder="Cari donasi"
            allowClear
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            onClick={() => {
              setModal((p) => ({ ...p, filter: true }));
            }}
            icon={<FilterFilled />}
          >
            Filter
          </Button>
        </div>
        <div className=" bg-white px-2 md:px-4 py-4 rounded-md">
          <div className="space-y-2">
            <div className="space-y-4">
              {[0, 1, 23, 4].map((val, key) => {
                return (
                  <Badge.Ribbon
                    key={key}
                    text="Donasi Sijum"
                    className="absolute -top-5"
                  >
                    <div className={`${key != 3 && "border-b"} pb-2`}>
                      <div className={`flex justify-between items-center   `}>
                        <div className="flex space-x-2 items-center">
                          <Avatar size={"default"} icon={<UserOutlined />} />
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="text-xs">Fadhil Rahman</p>
                            </div>
                            <a
                              href="https://wa.me/62881022077883"
                              className="text-blue-500 underline"
                              target="_blank"
                            >
                              +62881022077883
                            </a>
                          </div>
                        </div>
                        <div>
                          <small className="text-gray-700">7 menit lalu</small>
                          <h3>Rp 20.000</h3>
                        </div>{" "}
                      </div>
                      <p className="text-neutral-500 text-xs">
                        Pesan : Sehat Selalu kak
                      </p>
                    </div>
                  </Badge.Ribbon>
                );
              })}
            </div>
          </div>
        </div>
        <FilterDonation
          isOpen={modal.filter}
          onClose={() => {
            setModal((p) => ({ ...p, filter: false }));
          }}
        />
      </div>
    </LayoutCms>
  );
};

export default Donation;
