import { CONSTANT_PROVIDER } from "@/lib/constant-provider";
import { formatRupiah } from "@/lib/utils";
import { UserOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import React from "react";
import { IoIosInfinite } from "react-icons/io";
// import mome
const ProgressProgram = ({
  target_nominal,
  total_donation,
}: {
  target_nominal: number;
  total_donation: number;
}) => {
  console.log({ total_donation });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <UserOutlined />
          <span>12 Donatur</span>
        </div>
        <div>12 September 2012</div>
      </div>
      <div className="flex space-x-2 items-center">
        <Progress
          percent={
            target_nominal ? (total_donation / target_nominal) * 100 : 100
          }
          showInfo={false}
          trailColor={CONSTANT_PROVIDER.textColor}
          strokeColor={"#EAB308"}
        />
        <span>
          {target_nominal ? (
            `${(total_donation / target_nominal) * 100}%`
          ) : (
            <IoIosInfinite />
          )}
        </span>
      </div>
      <div>
        <p className="text-lg">
          Terkumpul{" "}
          <span className="text-secondary font-semibold">
            {formatRupiah(total_donation)}
          </span>{" "}
          {target_nominal && (
            <>
              {" "}
              Target
              <span className="text-secondary font-semibold">
                {" "}
                {formatRupiah(target_nominal)}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProgressProgram;
