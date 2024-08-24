import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import CarHeader from "./CarHeader";
import Social from "./Social";
import BackButton from "./BackButton";

interface cardWrapperTypes {
  heading: string;
  message: string;
  backButton: string;
  backLink: string;
  showSocial: boolean;
  children: React.ReactNode;
}

const CardWrapper = ({
  heading,
  message,
  backButton,
  backLink,
  showSocial,
  children,
}: cardWrapperTypes) => {
  return (
    <Card className="min-w-[400px] shadow-md ">
      <CardHeader>
        <CarHeader label={message} heading={heading} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Social showSocial={showSocial} />
      </CardFooter>
      <CardFooter>
        <BackButton label={backButton} href={backLink} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
