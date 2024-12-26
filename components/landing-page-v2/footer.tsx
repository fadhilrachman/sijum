import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 space-y-4">
        <div className="text-center ">
          <span className="block text-sm text-left  ">
            © 2024{" "}
            <a href="" className="text-purple-500">
              Sijum
            </a>
            . Mari bersama-sama menciptakan dunia yang lebih baik melalui
            berbagi
          </span>
        </div>
        <div className="flex space-x-2 justify-start ">
          <a
            href="https://www.linkedin.com/in/muhammad-fadhil-rahman-856096247/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-fadhil-rahman-856096247/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
