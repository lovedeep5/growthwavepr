import { MedalIcon } from "lucide-react";

import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="banner h-[500px] md:h-[calc(100vh-211px)] bg-black w-full bg-cover bg-center  bg-[url('/salon1.jpg')] relative">
      <div className="inner absolute inset-0  backdrop-brightness-50 flex flex-col justify-end items-start bg-primary/40">
        <div className="discount bg-primary p-6 text-center w-full md:w-auto">
          <p className="text-6xl text-white mb-4">Save 20%</p>
          <p className="font-bold text-white text-2xl max-w-52 mx-auto">
            Receive 20% off your first visit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
