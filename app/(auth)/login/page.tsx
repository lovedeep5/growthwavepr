import CardWrapper from "@/components/CardWrapper";
import { Button } from "@/components/ui/button";
import React from "react";

const Login = () => {
  return (
    <div className="">
      <CardWrapper
        heading="Auth"
        message="Welcome back again"
        backButton="Already have an account?"
        backLink="/"
        showSocial
      >
        Auth Inputs
      </CardWrapper>
    </div>
  );
};

export default Login;
