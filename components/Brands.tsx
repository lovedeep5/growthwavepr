import Image from "next/image";
import React from "react";

const brands = [
  {
    name: "Loreal",
    url: "/loreal.png",
    alt: "loreal-logo",
  },
  {
    name: "Lakme",
    url: "/lakme.png",
    alt: "Lakme-logo",
  },
  {
    name: "Tresemme",
    url: "/tresemme.png",
    alt: "tresemme-logo",
  },
  {
    name: "Matrix",
    url: "/matrix.png",
    alt: "matrix-logo",
  },
  {
    name: "Mamaearth",
    url: "/mamaearth.png",
    alt: "mamaearth-logo",
  },
  {
    name: "Sugar",
    url: "/sugar.png",
    alt: "sugar-logo",
  },
];

const Brands = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex  flex-col md:flex-row justify-center items-center gap-4 grayscale">
      {brands.map((brand, i) => (
        <Image
          src={brand.url}
          alt={brand.alt}
          width={200}
          height={100}
          key={i}
        />
      ))}
    </div>
  );
};

export default Brands;
