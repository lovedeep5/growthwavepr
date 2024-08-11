import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const services = [
  { label: "Bridal", image: "/services/bridal.jpg" },
  { label: "Skin", image: "/services/skin.jpg" },
  { label: "Nails", image: "/services/nails.jpg" },
  { label: "Hairs", image: "/services/hairs.jpg" },
];

const Services = () => {
  return (
    <div className="bg-primary/10 mb-5">
      <div className="w-full mx-auto text-center ">
        <h2 className=" text-3xl mb-4 font-bold text-white bg-primary p-4">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
          {services.map((service) => {
            return (
              <div
                className={cn("service h-96 relative bg-cover bg-center")}
                key={service.label}
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="service-label absolute bottom-0 bg-primary/90 text-white w-full h-20 p-2 flex items-center justify-center transition-all ">
                  {service.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
