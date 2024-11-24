"use client";
import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { Nunito_Sans } from "next/font/google";
import { nunito, roboto, pacifico } from "./font";
import { CONSTANT_PROVIDER } from "./constant-provider";
// import "../app/";
const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <StyleProvider>
      <ConfigProvider
        theme={{
          token: {
            // colorBgBase: "#4B5563",
            // color
            colorPrimary: "#008080",
            fontFamily: `var(${nunito.variable}), var(${roboto.variable}), var(${pacifico.variable})`,
          },
          components: {
            Card: {
              colorBgContainer: CONSTANT_PROVIDER.bgColor,
              colorText: CONSTANT_PROVIDER.textColor,
              colorTextHeading: CONSTANT_PROVIDER.textColor,
            },
            Modal: {
              colorBgBase: CONSTANT_PROVIDER.bgColor,
              colorBgContainer: CONSTANT_PROVIDER.bgColor,
              contentBg: CONSTANT_PROVIDER.bgColor,
            },
            Input: {
              colorPrimary: "#4B5563",
              colorText: CONSTANT_PROVIDER.textColor,
              activeBorderColor: CONSTANT_PROVIDER.textColor,
              colorBorder: "#4B5563",
              colorTextPlaceholder: "#4B5563",
              colorBgBase: CONSTANT_PROVIDER.bgColor,
              colorTextLabel: CONSTANT_PROVIDER.textColor,
              algorithm: true, // Enable algorithm
            },
            Checkbox: {
              colorText: CONSTANT_PROVIDER.textColor,
            },
            Dropdown: {
              colorBgBase: CONSTANT_PROVIDER.bgColor,
              // colorText: CONSTANT_PROVIDER.textColor,
              colorBgLayout: CONSTANT_PROVIDER.bgColor,
              colorBgContainer: CONSTANT_PROVIDER.bgColor,
              colorBgBlur: CONSTANT_PROVIDER.bgColor,
              colorPrimaryBg: CONSTANT_PROVIDER.bgColor,
            },
            InputNumber: {
              colorPrimary: "#4B5563",
              colorText: CONSTANT_PROVIDER.textColor,
              activeBorderColor: CONSTANT_PROVIDER.textColor,
              colorBorder: "#4B5563",
              colorTextPlaceholder: "#4B5563",
              colorBgBase: CONSTANT_PROVIDER.bgColor,
              colorTextLabel: CONSTANT_PROVIDER.textColor,
              algorithm: true, // Enable algorithm
            },
            Form: {
              labelColor: CONSTANT_PROVIDER.textColor,
            },
            Steps: {
              colorText: CONSTANT_PROVIDER.textColor,
              colorTextDescription: CONSTANT_PROVIDER.textColor,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default Provider;
