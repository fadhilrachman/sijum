"use client";
import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { Nunito_Sans } from "next/font/google";
import { nunito, roboto, pacifico } from "./font";
// import "../app/";
const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <StyleProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#008080",
            fontFamily: `var(${nunito.variable}), var(${roboto.variable}), var(${pacifico.variable})`,
          },
          components: {},
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default Provider;
