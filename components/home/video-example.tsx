import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const VideoExample = () => {
  return (
    <section className="py-20 px-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Accountability that works for you
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button className="flex items-center space-x-2 text-[#008080]">
              <span>Know About Us</span>
              <PlayCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Video Thumbnail"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExample;
