import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tagline from "@/components/Tagline";
import Topbar from "@/components/Topbar";
import React from "react";

const webPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-jost ">
      <Topbar />
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 py-10">{children}</main>
      <Tagline />
      <Footer />
    </div>
  );
};

export default webPagesLayout;
