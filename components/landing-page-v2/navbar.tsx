"use client";
import React, { useState } from "react";
import BaseButton from "../shared/base-button";
import { useRouter } from "next/navigation";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const listNavbar = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Tentang",
      href: "#about",
    },
    {
      title: "Program",
      href: "#program",
    },
    {
      title: "Volunteer",
      href: "#volounteer",
    },
  ];

  return (
    <header className="fixed w-full z-50">
      <nav className=" border-gray-200 py-3 bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <div className="flex items-center justify-end w-full lg:w-max space-x-4 lg:order-2">
            <BaseButton
              type="primary"
              size="large"
              className="hidden lg:flex"
              onClick={() => {
                router.push("/login");
              }}
            >
              Masuk
            </BaseButton>

            <Button
              type="text"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500  border-gray-600-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => {
                setIsDrawerOpen(true);
              }}
              icon={<MenuOutlined />}
            />
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {listNavbar.map((val, key) => {
                return (
                  <li key={key}>
                    <a
                      href={val.href}
                      className="block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      {val.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* RESPONSIVE */}
      <Drawer
        placement={"top"}
        className="!bg-gray-900 text-gray-400"
        closable={false}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        open={isDrawerOpen}
      >
        <ul className="flex flex-col mt-4 font-medium lg:hidden lg:flex-row lg:space-x-8 lg:mt-0">
          {listNavbar.map((val, key) => {
            return (
              <li key={key}>
                <a
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                  href={val.href}
                  className="block py-2 border-b  pl-3 pr-4 text-white  border-gray-600 lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  {val.title}
                </a>
              </li>
            );
          })}
        </ul>
        <BaseButton
          type="primary"
          size="large"
          className="mt-3 w-full"
          onClick={() => {
            router.push("/login");
          }}
        >
          Masuk
        </BaseButton>
      </Drawer>
    </header>
  );
};

export default Navbar;
