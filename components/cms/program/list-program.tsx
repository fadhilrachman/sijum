import { Progress } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { ProgramType } from "@/type/program.type";
import { CONSTANT_PROVIDER } from "@/lib/constant-provider";
import { IoIosInfinite } from "react-icons/io";
import { formatRupiah } from "@/lib/utils";

const ListProgram = ({ data }: { data: ProgramType[] }) => {
  const router = useRouter();
  const hanleRoute = (string: string) => {
    router.push(string);
  };
  return (
    <div className="space-y-4">
      {data.length == 0 ? (
        <p className="text-center mt-4">Belum ada program</p>
      ) : (
        data.map((val, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                hanleRoute(`/cms/program/${val.id}`);
              }}
              className=" px-2 text-gray-400 cursor-pointer space-y-2 md:px-4 py-4 border-b border-gray-600"
            >
              <div className="flex space-x-2 ">
                <img
                  className="h-24 w-36 rounded-md"
                  src={val.thumbnail.url}
                  // src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                  alt=""
                />
                <div className="w-full">
                  <h3 className="font-semibold">{val.name}</h3>
                  <p className="line-clamp-2 text-xs">{val.description}</p>
                  <div className="flex space-x-2 items-center">
                    <Progress
                      percent={
                        val.target_nominal
                          ? (val.total_donation / val.target_nominal) * 100
                          : 100
                      }
                      showInfo={false}
                      trailColor={CONSTANT_PROVIDER.textColor}
                      strokeColor={"#EAB308"}
                    />
                    <span>
                      {val.target_nominal ? (
                        `${(val.total_donation / val.target_nominal) * 100}%`
                      ) : (
                        <IoIosInfinite />
                      )}
                    </span>
                  </div>
                  <div className="flex text-[12px] mt-1 justify-between items-center">
                    <h3 className="font-semibold ">
                      Terkumpul {formatRupiah(val.total_donation)}
                    </h3>
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
