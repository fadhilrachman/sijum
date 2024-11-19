import React from "react";
import BaseButton from "../shared/base-button";

const Jumbotron = () => {
  return (
    <section className=" min-h-[90vh] bg-gray-900 text-white">
      <div className="grid max-w-screen-xl px-4 pt-32 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-44">
        <div className="mr-auto space-y-4 place-self-center lg:col-span-7">
          <div className="flex  space-x-2">
            <div>
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-8xl ">
                <span className="text-primary">Si</span>
                <span className="text-secondary">Jum</span>
              </h1>
              <h3 className="text-2xl text-secondary font-extrabold leading-none">
                <span className="text-primary"> Berbagi nasi</span>
                <span className="text-secondary"> jumat di</span>
              </h3>
            </div>
            <h1 className="max-w-2xl text-primary font-pacifico mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-8xl ">
              Garut
            </h1>
          </div>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Jadilah bagian dari gerakan berbagi setiap Jumat. Dengan berbagi
            makanan, kita dapat meringankan beban mereka yang membutuhkan dan
            membawa harapan baru.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <BaseButton type="primary" size="large">
              Ikut Donasi
            </BaseButton>
            <BaseButton type="secondary" size="large">
              Hubungi Kami
            </BaseButton>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/bg-home.jpg"
            alt="hero image"
            className="rounded-lg shadow-xl shadow-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
