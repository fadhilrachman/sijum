import React from "react";
import Title from "../shared/title";
import { FaBowlRice } from "react-icons/fa6";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const HowToHelp = () => {
  return (
    <section className="py-20 px-10 bg-third text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Prevent failure from to impacting your reputation
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#008080] rounded-full" />
                <p>Get an overview of failed Operations</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#008080] rounded-full" />
                <p>Start building with healthy platform</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="World Map"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
