import BaseButton from "@/components/shared/base-button";
import { HeartFilled } from "@ant-design/icons";
import React from "react";

const DonationSuccess = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-[480px] relative rounded-sm min-h-[100vh] m-auto flex items-center justify-center">
        <div className="space-y-8 relative text-center min-h-[100vh] px-6 flex flex-col items-center justify-center  text-gray-400 bg-gray-800  pb-20 ">
          <div>
            <HeartFilled className="text-primary text-5xl" />
            <h1 className="text-3xl font-semibold">
              Terima Kasih untuk Donasinya
            </h1>
          </div>
          <div className="space-y-2 text-center bg-gray-900 rounded-md px-4 py-6 w-full">
            <p className="text-3xl font-bold text-teal-500">Rp 200.000</p>
            <p className="text-slate-400">Program Nasi Jumat</p>
          </div>
          <BaseButton type="primary" className="w-full">
            Kembali{" "}
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;
