import React from "react";
import BaseButton from "../shared/base-button";

const Jumbotron = () => {
  return (
    <section className=" min-h-[90vh] bg-gray-900 text-white">
      <div className="grid space-y-4 max-w-screen-xl px-4 pt-16 md:pt-32 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-44">
        <div className=" md:order-2 lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/bg-home.jpg"
            alt="hero image"
            className="rounded-lg shadow-lg md:shadow-xl shadow-primary"
          />
        </div>
        <div className="mr-auto md:order-1 space-y-4 place-self-center lg:col-span-7">
          <div className="flex  space-x-2">
            <img src="/logo.svg" alt="" />
          </div>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Jadilah bagian dari gerakan berbagi setiap Jumat. Dengan berbagi
            makanan, kita dapat meringankan beban mereka yang membutuhkan dan
            membawa harapan baru.
          </p>
          <div className="space-y-4 space-x-2 sm:flex sm:space-y-0 sm:space-x-4">
            <BaseButton type="primary" size="large">
              Ikut Donasi
            </BaseButton>
            <BaseButton type="primary" size="large">
              Hubungi Kami
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
