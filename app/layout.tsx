// import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Nunito_Sans, Pacifico } from "next/font/google";
import "./globals.scss";
import "../styles/overide.css";

import React from "react";
import Provider from "@/lib/provider";
import { nunito, pacifico } from "@/lib/font";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={`${nunito.variable} font-nunito ${pacifico.variable}`}>
      <Provider>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
