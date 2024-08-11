import Link from "next/link";
import React from "react";
const menus = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <ul className="flex flex-col md:flex-row md:justify-center md:items-center gap-5">
      {menus.map((menu) => (
        <li className="text-white group text-sm" key={menu.path}>
          <Link href={menu.path} className="group-hover:opacity-75 p-2 ">
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
