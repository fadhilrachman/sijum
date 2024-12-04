"use client";
import React from "react";
import {
  CameraFilled,
  CameraOutlined,
  DollarOutlined,
  EditFilled,
  EditOutlined,
  HomeFilled,
  HomeOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SettingOutlined,
  ShareAltOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Breadcrumb, Button, Layout, Menu, theme } from "antd";
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

const LayoutProgramDetail: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleRouter = (link: string) => {
    router.push(link);
  };

  return (
    <div className="bg-gray-900">
      <Layout className="max-w-[480px] relative rounded-sm min-h-[100vh] m-auto">
        <Content>
          <Layout className=" relative min-h-[100vh] text-gray-400 bg-gray-800  pb-20 space-y-2">
            {children}
          </Layout>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutProgramDetail;
