import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-sky-500">
      {children}
    </div>
  );
};

export default AuthLayout;
