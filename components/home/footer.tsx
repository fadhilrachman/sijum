import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-[#008080] font-bold text-2xl mb-4">
              Pinwheel
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Works
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Career
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Customer Support
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Delivery Details
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Free eBooks
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                Development Tutorial
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                How to - Blog
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#008080] block"
              >
                YouTube Playlist
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Pinwheel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
