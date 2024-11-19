import { Button } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-third text-white px-32 py-4 items-center justify-between">
      <div>Logo</div>
      <div className="flex space-x-8 items-center">
        <div className="space-x-4">
          <span>Home</span>
          <span>Tentang</span>
          <span>Program</span>
          <span>Galeri</span>
          <span>Blog</span>
          <span>Volunteer</span>
        </div>
        <Button type="primary" size="large">
          Masuk
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
