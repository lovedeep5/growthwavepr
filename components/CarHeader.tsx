import React from "react";

interface CardHeaderTypes {
  label: string;
  heading: string;
}

const CarHeader = ({ label, heading }: CardHeaderTypes) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center text-center gap-y-4">
      <div className=" text-3xl font-semibold "> 🔐 {heading} </div>
      <p className=" text-sm text-muted-foreground ">{label}</p>
    </div>
  );
};

export default CarHeader;
