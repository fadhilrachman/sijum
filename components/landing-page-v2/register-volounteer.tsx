"use client";
import React from "react";
import { Button, Col, Form, FormItemProps, Input, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import BaseButton from "../shared/base-button";

const RegisterVoluenteer = () => {
  const [form] = Form.useForm();
  return (
    <section className="bg-white dark:bg-gray-900" id="volounteer">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Daftar jadi Volounteer
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Langsung daftar dibawah sini atau hubungi kami di Segera daftar
            melalui form di bawah ini atau hubungi kami di{" "}
            <a href="" className="underline">
              0881022077883
            </a>{" "}
            untuk informasi lebih lanjut!
          </p>
        </div>
        <div className="">
          <div>
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
            <BaseButton type="primary" size="large" className="w-full">
              Submit
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterVoluenteer;
