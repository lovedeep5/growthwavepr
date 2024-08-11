import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  return (
    <header className=" bg-primary sticky w-full top-0 p-4 z-50 backdrop-blur-lg">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center ">
        <div className="logo font-jost text-white font-bold text-4xl">
          salon<span className="text-red-500">24</span>.
        </div>
        <div className="menu hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
