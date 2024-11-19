"use client";
import { Button, Col, Form, FormItemProps, Input, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Title from "../shared/title";
import BaseButton from "../shared/base-button";
const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup: React.FC<
  React.PropsWithChildren<MyFormItemGroupProps>
> = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} className="!text-white" {...props} />;
};
const RegisterVoluenteer = () => {
  const [form] = Form.useForm();
  return (
    <section className="py-20 px-10 grid grid-cols-2 gap-x-4 text-white  bg-third">
      <div></div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-secondary ">Daftar voluenter</h3>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          id="form"
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label={<label style={{ color: "white" }}>Nama</label>}
          >
            <Input placeholder="Nama" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<label style={{ color: "white" }}>Email</label>}
          >
            <Input placeholder="Email" size="large" type="email" />
          </Form.Item>
          <Form.Item
            name="description"
            label={<label style={{ color: "white" }}>Deskripsi</label>}
          >
            <TextArea size="large" />
          </Form.Item>
        </Form>
        <BaseButton type="secondary" size="large" className="w-full">
          Submit
        </BaseButton>
      </div>
    </section>
  );
};

export default RegisterVoluenteer;
