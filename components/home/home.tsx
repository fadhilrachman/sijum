import { PhoneFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h- relative h-[600px]">
      <div className="absolute bg-[url('/bg-home.jpg')] inset-0 h-[600px] bg-cover "></div>
      <div className="absolute bg-[url('/overlay.png')] inset-0 h-[600px] bg-cover "></div>
      <div className=" h-[600px] absolute px-[120px] space-y-8 w-full   border pt-40">
        <div className="space-y-2 text-white ">
          <div className="font-bold text-3xl flex font-pacifico">
            Na
            <div className="animate-bounce flex items-center ">
              <p className="text-primary">SI</p>
              <p className="text-yellow-500 ml-2">JUM</p>
            </div>{" "}
            at Garut
          </div>
          <h1 className="font-bold text-4xl max-w-[620px] ">
            Menebar Kebaikan dengan Setiap Suapan
          </h1>
          <p className=" max-w-[620px]">
            Mari menjadi bagian dari gerakan berbagi yang membawa kebahagiaan
            dan harapan di setiap Jumat. Dengan berbagi makanan, kita dapat
            meringankan beban mereka yang membutuhkan dan menciptakan perubahan
            positif dalam hidup orang lain
          </p>
        </div>
        <div className="flex justify-start space-x-4">
          <Button type="primary" className="" color="danger" size="large">
            Donasi Sekarang
          </Button>
          <Button
            // variant="text"

            className="secondary-btn"
            size="large"
          >
            <PhoneFilled />
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
