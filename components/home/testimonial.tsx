import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our customers have nice things to say about us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Customer"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Customer Name</h3>
              <p className="text-gray-600 mb-4">Company Name</p>
              <p className="text-gray-600 mb-4">
                Our platform helps developers and designers to collaborate
                better
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
