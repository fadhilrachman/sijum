import { Button, Card, Divider, Progress } from "antd";
import React from "react";
import Title from "../shared/title";

const Program = () => {
  return (
    <div className="px-[120px] py-12 space-y-8  ">
      <Title
        title="Program Kami"
        className="text-center"
        description="ausdausduyasd"
      />
      <div className="grid grid-cols-3 gap-8">
        <Card
          bordered={false}
          hoverable
          className="hover:scale-95 transition-all"
        >
          <div className="space-y-4">
            <img src="/bg-home.jpg" alt="asdasd" className="rounded-md" />

            <h3 className="text-2xl font-semibold ">Program Nasi Jumat</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              quam adipisci eveniet.
            </p>
            <div>
              <div className="flex font-semibold     justify-between text-sm">
                <p>Tercapai : Rp.12.000.00</p>
                <p>Target : Rp.12.000.00</p>
              </div>
              <Progress showInfo={false} percent={30} strokeColor={"#008080"} />
            </div>
            <div className="flex justify-end">
              <Button type="primary" size="large">
                Ikut Donasi
              </Button>
            </div>
          </div>
        </Card>
        <Card
          bordered={false}
          hoverable
          className="hover:scale-95 transition-all"
        >
          <div className="space-y-4">
            <img src="/bg-home.jpg" alt="asdasd" className="rounded-md" />

            <h3 className="text-2xl font-semibold ">Program Nasi Jumat</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              quam adipisci eveniet.
            </p>
            <div>
              <div className="flex font-semibold     justify-between text-sm">
                <p>Tercapai : Rp.12.000.00</p>
                <p>Target : Rp.12.000.00</p>
              </div>
              <Progress showInfo={false} percent={30} strokeColor={"#008080"} />
            </div>
            <div className="flex justify-end">
              <Button type="primary" size="large">
                Ikut Donasi
              </Button>
            </div>
          </div>
        </Card>
        <Card
          bordered={false}
          hoverable
          className="hover:scale-95 transition-all"
        >
          <div className="space-y-4">
            <img src="/bg-home.jpg" alt="asdasd" className="rounded-md" />

            <h3 className="text-2xl font-semibold ">Program Nasi Jumat</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              quam adipisci eveniet.
            </p>
            <div>
              <div className="flex font-semibold     justify-between text-sm">
                <p>Tercapai : Rp.12.000.00</p>
                <p>Target : Rp.12.000.00</p>
              </div>
              <Progress showInfo={false} percent={30} strokeColor={"#008080"} />
            </div>
            <div className="flex justify-end">
              <Button type="primary" size="large">
                Ikut Donasi
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Program;
