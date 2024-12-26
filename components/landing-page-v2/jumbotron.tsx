import React from "react";
import BaseButton from "../shared/base-button";

const Jumbotron = () => {
  return (
    <section className="min-h-[90vh] bg-gray-900  flex items-center">
      <div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 lg:grid-cols-12 lg:py-16">
        {/* Image Section */}
        <div className="flex justify-center lg:col-span-5 lg:order-2">
          <img
            src="/bg-home.jpg"
            alt="hero image"
            className="rounded-lg shadow-lg md:shadow-xl shadow-primary w-full max-w-md lg:max-w-full"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4 place-self-center lg:col-span-7 lg:order-1 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            <img src="/logo.svg" alt="Logo" />
          </div>
          <p className="max-w-2xl text-left mx-auto lg:mx-0 font-light text-gray-400 md:text-lg lg:text-xl">
            Jadilah bagian dari gerakan berbagi setiap Jumat. Dengan berbagi
            makanan, kita dapat meringankan beban mereka yang membutuhkan dan
            membawa harapan baru.
          </p>
          <div className="flex space-x-2">
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
