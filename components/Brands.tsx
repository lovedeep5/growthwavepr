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
    <div
      className="brand-slider "
      style={
        { "--count": brands.length, "--width": "200px" } as React.CSSProperties
      }
    >
      {brands.map((brand, i) => {
        return (
          <div
            className="brand-slider-item "
            key={i}
            style={{ "--position": i } as React.CSSProperties}
          >
            <Image src={brand.url} alt={brand.alt} width={200} height={100} />
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
