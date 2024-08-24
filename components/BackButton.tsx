import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface backButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: backButtonProps) => {
  return (
    <div className="w-full">
      <Button
        variant="link"
        className="w-full text-sm tracking-tight text-center text-muted-foreground"
        asChild
      >
        <Link href={href} className="w-full">
          {label}
        </Link>
      </Button>
    </div>
  );
};

export default BackButton;
