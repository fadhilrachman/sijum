"use client";
import FilterDonation from "@/components/cms/donation/filter-donation";
import ListDonation from "@/components/cms/donation/list-donation";
import LayoutCms from "@/components/shared/layout-cms";
import { useGetDonation } from "@/hooks/donation.hook";
import { FilterFilled, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Input, Skeleton } from "antd";
import React, { useState } from "react";

const Donation = () => {
  const { data, isFetching } = useGetDonation({ page: 1, per_page: 10 });
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
        {isFetching ? <Skeleton /> : <ListDonation data={data?.result || []} />}
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
