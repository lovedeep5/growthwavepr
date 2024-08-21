import React from "react";

interface CardHeaderTypes {
  label: string;
}

const CarHeader = ({ label }: CardHeaderTypes) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center text-center gap-y-4">
      <div className=" text-3xl font-semibold "> 🔐 Auth </div>
      <p className=" text-sm text-muted-foreground ">{label}</p>
    </div>
  );
};

export default CarHeader;
