"use client";
import React from "react";
import {
  DollarOutlined,
  HomeFilled,
  HomeOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
import { usePathname, useRouter } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    label: "Dashboard",
    icon: HomeOutlined,
    link: "/cms/home",
  },
  {
    label: "Donation",
    icon: DollarOutlined,
    link: "/cms/donation",
  },
  {
    label: "Program",
    icon: SettingOutlined,
    link: "/cms/program",
  },
  {
    label: "Admin",
    icon: UserOutlined,
    link: "/cms/admin",
  },
];

const LayoutCms: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleRouter = (link: string) => {
    router.push(link);
  };

  return (
    <div className="bg-neutral-200">
      <Layout className="max-w-[440px] relative rounded-sm min-h-[100vh] m-auto">
        <Content>
          <Layout className="py-6 px-2 md:px-4 pb-20 space-y-2 bg-white">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar size={"large"} icon={<UserOutlined />} />
              <div>
                <p className="text-xs text-gray-700">Fadhil Rahman</p>
                <h3 className="font-semibold text-primary ">
                  Keep healthy today
                </h3>
              </div>
            </div>
            <h3 className="text-xl capitalize">{pathName.split("/")[2]}</h3>
            {children}
          </Layout>
          <div className="fixed grid grid-cols-4 border-t bottom-0 w-[440px] bg-neutral-100 gap-x-4 py-2 px-2 md:px-8">
            {items.map((val, key) => {
              return (
                <div
                  key={key}
                  onClick={() => {
                    handleRouter(val.link);
                  }}
                  className={`text-center cursor-pointer hover:bg-slate-200 p-1 rounded-md`}
                >
                  <val.icon
                    className={` md:text-xl ${
                      val.link == pathName && "text-primary"
                    }`}
                  />
                  <p
                    className={`text-xs ${
                      val.link == pathName && "text-primary font-semibold"
                    }`}
                  >
                    {val.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutCms;
