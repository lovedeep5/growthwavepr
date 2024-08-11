import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Navbar from "./Navbar";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-primary">
        <Navbar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
