import React from "react";
import { Button, Form, Input } from "antd";
import BaseButton from "@/components/shared/base-button";
import { CreateAdminType } from "@/type/admin.type";
import { usePostAdmin } from "@/hooks/admin.hook";
import { useRouter } from "next/navigation";

const FormAdmin = () => {
  const router = useRouter();
  const [form] = Form.useForm<CreateAdminType>();
  const { mutateAsync, status } = usePostAdmin();

  const handleSubmit = async (value: CreateAdminType) => {
    await mutateAsync(value);
    router.push("/cms/admin");
  };

  return (
    <>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        onFinish={handleSubmit}
        className="mt-4"
        id="form"
      >
        <Form.Item
          name="user_name"
          label="Nama "
          rules={[
            {
              required: true,
              message: "Field ini harus diisi",
            },
          ]}
        >
          <Input placeholder="Nama" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Field ini harus diisi",
            },
          ]}
        >
          <Input
            placeholder="Email"
            size="large"
            type="email"
            className="w-full"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Passsword"
          rules={[
            {
              required: true,
              message: "Field ini harus diisi",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            size="large"
            type="password"
            className="w-full"
          />
        </Form.Item>
      </Form>
      <BaseButton
        type="primary"
        size="large"
        htmlType="submit"
        form="form"
        className="w-full"
        loading={status == "pending"}
      >
        Submit
      </BaseButton>
    </>
  );
};

export default FormAdmin;
