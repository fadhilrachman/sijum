import { DonationType } from "@/type/donation.type";
import React from "react";

const ListDonationProgram = ({ data }: { data: DonationType[] }) => {
  return (
    <div className="   rounded-md">
      <div className="space-y-2">
        <div className="divide-y divide-gray-700">
          {data.length == 0 ? (
            <p className="text-center">Tidak ada donasi</p>
          ) : (
            data.map((donation, index) => (
              <div key={index} className="flex items-start gap-4  py-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                  {donation.user_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">
                        {donation.user_name}
                      </h3>
                      <p className="text-sm text-blue-400">{donation.phone}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-400 mt-1">
                        {/* {donation.time} */}7 menit yg lalu
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Pesan: {donation.message}
                  </p>
                  <p className="text-sm font-medium text-white mt-1">
                    {donation.donation}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListDonationProgram;
