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
    <div className="bg-neutral-200">
      <Layout className="max-w-[440px] elative rounded-sm min-h-[100vh] m-auto">
        <Content>
          <Layout className=" relative bg-white   pb-20 space-y-2">
            {children}
          </Layout>
          <div className="fixed flex   border-t bottom-0 w-[440px] bg-neutral-100 gap-x-4 py-2 px-2 md:px-8">
            <Button size="large" icon={<EditOutlined />}>
              Edit Program
            </Button>
            <Button
              type="primary"
              className="w-full"
              size="large"
              icon={<CameraOutlined />}
            >
              Tambah Berita
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default LayoutProgramDetail;
