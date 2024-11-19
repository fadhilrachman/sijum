import { Button, Card, Progress } from "antd";
import React from "react";
import BaseButton from "../shared/base-button";

const Program = () => {
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
            <div
              key={item}
              className="overflow-hidden rounded-2xl bg-slate-800/50 shadow-xl transition-transform "
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/bg-home.jpg"
                  alt="Volunteers handling food donations"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold text-white">
                  Program Nasi Jumat
                </h2>

                <p className="mb-6 text-slate-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla quam adipisci eveniet.
                </p>

                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>Tercapai : Rp.12.000.00</span>
                    <span>Target : Rp.12.000.00</span>
                  </div>

                  <Progress
                    showInfo={false}
                    percent={30}
                    strokeColor={"#008080"}
                  />
                </div>

                <BaseButton type="primary" size="large" className="w-full">
                  Ikut Donasi
                </BaseButton>
              </div>
            </div>
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
