import BaseButton from "@/components/shared/base-button";
import { useDeleteAdmin } from "@/hooks/admin.hook";
import { AdminType } from "@/type/admin.type";
import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ListAdmin = ({ data }: { data: AdminType[] }) => {
  const router = useRouter();
  const { mutateAsync, status } = useDeleteAdmin();
  const handleDeleteAdmin = async (id: string) => {
    await mutateAsync({ admin_id: id });
    Modal.destroyAll();
  };
  const handleTrigerModalDelete = (id: string) => {
    Modal.confirm({
      title: "Hapus Admin",
      content: (
        <div>
          "Apakah anda yakin ingin menghapus Cuy?"
          <div className="space-x-2 mt-2 flex justify-end">
            <BaseButton
              onClick={() => {
                Modal.destroyAll();
              }}
            >
              Kembali
            </BaseButton>
            <BaseButton
              loading={status == "pending"}
              // type="secondary"
              onClick={() => {
                handleDeleteAdmin(id);
              }}
            >
              Hapus
            </BaseButton>
          </div>
        </div>
      ),
      footer: false,
    });
  };

  return (
    <div className="divide-y divide-gray-700">
      {data.map((val, index) => (
        <div key={index} className="flex b items-start gap-4 p-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
            {val.user_name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium ">{val.user_name}</h3>
                <p className="text-sm text-blue-400">{val.email}</p>
              </div>
              <Dropdown
                menu={{
                  items: [
                    {
                      label: <div>Hapus</div>,
                      key: val.id,
                      onClick: (val) => {
                        handleTrigerModalDelete(val.key);
                      },
                    },
                  ],
                }}
                trigger={["click"]}
              >
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
  );
};

export default ListAdmin;
