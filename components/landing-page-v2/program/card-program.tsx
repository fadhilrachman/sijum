import BaseButton from "@/components/shared/base-button";
import { Progress } from "antd";
import React from "react";

const CardProgram = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-800/50 shadow-xl transition-transform ">
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quam
          adipisci eveniet.
        </p>

        <div className="mb-4 space-y-2">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Tercapai : Rp.12.000.00</span>
            <span>Target : Rp.12.000.00</span>
          </div>

          <Progress showInfo={false} percent={30} strokeColor={"#008080"} />
        </div>

        <BaseButton type="primary" size="large" className="w-full">
          Ikut Donasi
        </BaseButton>
      </div>
    </div>
  );
};

export default CardProgram;
