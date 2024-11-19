import { UserOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import React from "react";

const ProgressProgram = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <UserOutlined />
          <span>12 Donatur</span>
        </div>
        <div>12 September 2012</div>
      </div>
      <Progress percent={50} showInfo={false} strokeColor={"#EAB308"} />
      <div>
        <p className="text-lg">
          Terkumpul{" "}
          <span className="text-secondary font-semibold">Rp 27.000</span> Target
          <span className="text-secondary font-semibold"> Rp 27.000</span>
        </p>
      </div>
    </div>
  );
};

export default ProgressProgram;
