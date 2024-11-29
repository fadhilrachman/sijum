import { Progress } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { ProgramType } from "@/type/program.type";

const ListProgram = ({ data }: { data: ProgramType[] }) => {
  const router = useRouter();
  const hanleRoute = (string: string) => {
    router.push(string);
  };
  return (
    <div className="space-y-4">
      {data.length == 0 ? (
        <p className="text-center mt-4">Tidak ada program</p>
      ) : (
        data.map((val, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                hanleRoute(`/cms/program/${key}`);
              }}
              className=" px-2 text-gray-400 cursor-pointer space-y-2 md:px-4 py-4 border-b border-gray-600"
            >
              <div className="flex space-x-2 ">
                <img
                  className="h-24 w-36 rounded-md"
                  src="/bg-home.jpg"
                  // src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold">{val.name}</h3>
                  <p className="line-clamp-2 text-xs">{val.description}</p>

                  <Progress
                    percent={50}
                    showInfo={false}
                    strokeColor={"#EAB308"}
                  />
                  <div className="flex text-[12px] mt-1 justify-between items-center">
                    <h3 className="font-semibold ">Terkumpul Rp 27.000.000</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListProgram;
