"use client";
import { Button, Card, Progress } from "antd";
import React, { useState } from "react";
import BaseButton from "../../shared/base-button";
import { useGetProgram } from "@/hooks/program.hook";
import CardProgram from "./card-program";
import { useRouter } from "next/navigation";

const Program = () => {
  const [perPage, setPerPage] = useState(3);
  const { data, isFetching } = useGetProgram({ page: 1, per_page: perPage });
  return (
    <section className="bg-white dark:bg-gray-900" id="program">
      <div className="items-center space-y-4 lg:space-y-6 max-w-screen-xl px-4 py-8 mx-auto  lg:py-24 lg:px-6">
        <div className="col-span-2 ">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Program Kami
          </h2>

          <p className="font-light text-gray-500 text-sm md:text-xl dark:text-gray-400">
            Setiap kontribusi Anda akan membawa perubahan nyata, menciptakan
            senyuman, dan memberikan harapan baru.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data?.result.map((item, key) => (
            <CardProgram
              name={item.name as string}
              description={item.description}
              imgUrl={item.thumbnail?.url}
              totalDonation={item.total_donation}
              target_nominal={item.target_nominal}
              id={item.id}
              key={key}
            />
          ))}
        </div>
        {(data?.pagination?.total_data as number) > perPage && (
          <p
            className="text-center text-white font-bold cursor-pointer"
            onClick={() => {
              setPerPage((p) => p + 3);
            }}
          >
            Lihat Lainya
          </p>
        )}
      </div>
    </section>
  );
};

export default Program;
