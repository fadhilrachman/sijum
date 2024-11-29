"use client";
import BaseButton from "@/components/shared/base-button";
import { useLogin } from "@/hooks/auth.hook";
import { Card, Button, Checkbox, Col, Form, FormItemProps, Input } from "antd";
import React from "react";

const Login = () => {
  const [form] = Form.useForm();
  const { mutate, status } = useLogin();
  const handleSubmit = (val: any) => {
    console.log({ val });
    mutate(val);
  };

  return (
    <div className="bg-gray-900 min-h-[100vh] flex items-center justify-center">
      <Card bordered={false} className="min-w-[400px]">
        <h3 className="text-2xl font-semibold">Masuk</h3>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          disabled={status == "pending"}
          onFinish={handleSubmit}
          className="mt-4"
          id="form"
        >
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
          loading={status == "pending"}
          className="w-full"
        >
          Submit
        </BaseButton>
      </Card>
    </div>
  );
};

export default Login;
