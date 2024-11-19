import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";

const SmallNavbar = () => {
  return (
    <div className="bg-third text-white p-2 text-sm px-32 flex justify-end">
      <div className="space-x-4 flex items-center">
        <span>Ikuti kami</span>
        <div className="space-x-2">
          <a href="https://www.facebook.com/">
            <FacebookFilled />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramFilled />
          </a>
          <a href="https://www.instagram.com/">
            <YoutubeFilled />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallNavbar;
