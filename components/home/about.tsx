import React from "react";
import { FaMosque } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import Title from "../shared/title";

const About = () => {
  return (
    <div className="px-[120px] py-12 w-full grid grid-cols-2">
      <div>cuy1</div>
      <div className=" space-y-2">
        <Title
          title="Tetang kami"
          // subtitle="Program berbagi nasi kotak di masjid setiap Jumat"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint nihil
        illo repudiandae rem ipsum. Omnis optio eum tenetur officiis. Autem eius
        debitis officiis enim ipsam distinctio esse minima incidunt?"
        />
        <div className="space-y-4 !mt-6">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 text-white rounded-full bg-primary flex justify-center items-center">
              <FaMosque />
            </div>
            <div className="text-third">
              <p className=" text-2xl font-bold">87,000</p>
              <p className="text-xs font-semibold ">
                Lebih dari 1000 masjid sudah kita datangi
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-secondary text-white flex justify-center items-center">
              <FaBowlRice />
            </div>
            <div className="text-third">
              <p className=" text-2xl font-bold">87,000</p>
              <p className="text-xs font-semibold ">
                Lebih dari 1000 masjid sudah kita datangi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
