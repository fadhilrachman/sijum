"use client";
import React, { useEffect } from "react";
import Cookie from "cookies-js";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const token = Cookie.get(process.env.COOKIE_NAME as string);

    if (!token) {
      router.push("/login");
    }
  }, [router]);
  return children;
};

export default Layout;
