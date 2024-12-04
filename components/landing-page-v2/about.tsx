import { Coins, Share, Sofa, UserRoundPlus } from "lucide-react";
import React from "react";
import { FaMosque } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";

const About = () => {
  const listHowToHelp = [
    {
      label: "Ikut Berdonasi",
      description:
        "Dukung dengan donasi uang untuk membantu mereka yang membutuhkan",
      icon: Coins,
    },
    {
      label: "Jadi Volounteer",
      description:
        "Bergabunglah sebagai relawan untuk membantu langsung di lapangan",
      icon: UserRoundPlus,
    },
    {
      label: "Berdonasi Barang",
      description:
        "Sumbangkan barang bermanfaat seperti peralatan masak, buku, atau kebutuhan lainnya",
      icon: Sofa,
    },
    {
      label: "Share Program",
      description: "Bagikan program ini untuk menjangkau lebih banyak orang",
      icon: Share,
    },
  ];
  return (
    <section className="bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Row --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Tentang Kami
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Kami adalah komunitas berbagi nasi Jumat keliling yang hadir untuk
              menyebarkan kebaikan. Setiap Jumat, kami mendistribusikan nasi
              kepada mereka yang membutuhkan di berbagai masjid di daerah Garut.
              Bersama, kita wujudkan kepedulian dan kebahagiaan untuk sesama
            </p>
            {/* <!-- List --> */}
            <div className="space-y-4 flex items-center !mt-6 border-t border-gray-700 pt-3">
              <div className="flex items-center  space-x-4">
                <div className="h-6 md:h-12 w-6 md:w-12 text-primary md:text-white rounded-full md:bg-primary flex justify-center items-center">
                  <FaMosque />
                </div>
                <div className="">
                  <p className=" text-2xl font-bold">50++</p>
                  <p className="text-xs font-semibold ">
                    Lebih dari 50 masjid sudah kita datangi
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-6 md:h-12 w-6 md:w-12 rounded-full md:bg-secondary text-secondary md:text-white flex justify-center items-center">
                  <FaBowlRice />
                </div>
                <div className="">
                  <p className=" text-2xl font-bold">2000++</p>
                  <p className="text-xs font-semibold ">
                    Lebih dari 2000 kotak nasi sudah kita bagikan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/rice.png"
            alt="dashboard feature image"
          />
        </div>
        {/* <!-- Row --> */}
        <div className="items-center space-y-4 lg:space-y-6 grid ">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Bagaimana anda bisa ikut membantu?
            </h2>
            <p className=" font-light lg:text-xl">
              Bantu kami menciptakan dampak yang lebih besar. Donasi, dukungan,
              dan aksi kecil Anda berarti segalanya
            </p>

            {/* <!-- List --> */}
          </div>
          <div className=" border-t border-gray-700 pt-4 space-y-6 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {listHowToHelp.map((val, key) => {
              return (
                <div key={key} className="space-y-2">
                  <val.icon className="text-primary h-8 md:h-16 w-8 md:w-16" />
                  <h3 className="mb-2 text-lg md:text-2xl font-bold dark:text-white">
                    {val.label}
                  </h3>
                  <p className="font-light text-gray-500  text-sm md:text-base dark:text-gray-400">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
