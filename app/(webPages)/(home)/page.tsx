import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Topbar from "@/components/Topbar";
import React from "react";
import Services from "@/components/Services";
import Callouts from "@/components/Callouts";
import Testimonails from "@/components/Testimonails";
import Tagline from "@/components/Tagline";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="font-jost">
      <Topbar />
      <Header />

      <main>
        <Banner />
        <Brands />
        <Content />
        <Services />
        <Callouts />
        <Testimonails />
        <Tagline />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
