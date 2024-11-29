"use client";
import { Button, Card, Progress } from "antd";
import React from "react";
import BaseButton from "../../shared/base-button";
import { useGetProgram } from "@/hooks/program.hook";
import CardProgram from "./card-program";

const Program = () => {
  const { data, isFetching } = useGetProgram({ page: 1, per_page: 1 });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center space-y-4 lg:space-y-6 max-w-screen-xl px-4 py-8 mx-auto  lg:py-24 lg:px-6">
        <div className="col-span-2 ">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Program Kami
          </h2>

          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <CardProgram />
          ))}
        </div>
        <p className="text-center text-white font-bold cursor-pointer">
          Lihat Lainya
        </p>
      </div>
    </section>
  );
};

export default Program;
