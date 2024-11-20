import React from "react";
import { FaMosque } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";

const About = () => {
  const listAbout = ["cuy", "cay", "coy"];
  const listHowToHelp = [
    {
      label: "Ikut Berdonasi",
      description:
        "Dukung dengan donasi uang untuk membantu mereka yang membutuhkan",
    },
    {
      label: "Jadi Volounteer",
      description:
        "Bergabunglah sebagai relawan untuk membantu langsung di lapangan",
    },
    {
      label: "Berdonasi Barang",
      description:
        "Sumbangkan barang bermanfaat seperti peralatan masak, buku, atau kebutuhan lainnya",
    },
    {
      label: "Share Program",
      description: "Bagikan program ini untuk menjangkau lebih banyak orang",
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
            <div className="space-y-4 flex !mt-6 border-t border-gray-700 pt-3">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 text-white rounded-full bg-primary flex justify-center items-center">
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
                <div className="h-12 w-12 rounded-full bg-secondary text-white flex justify-center items-center">
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
          <div className=" border-t border-gray-700 pt-4 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {listHowToHelp.map((val, key) => {
              return (
                <div key={key}>
                  <svg
                    className="w-10 h-10 mb-2 text-primary md:w-12 md:h-12 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h3 className="mb-2 text-2xl font-bold dark:text-white">
                    {val.label}
                  </h3>
                  <p className="font-light text-gray-500 dark:text-gray-400">
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
