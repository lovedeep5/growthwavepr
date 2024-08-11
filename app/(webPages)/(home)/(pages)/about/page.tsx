import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl mb-5 font-bold">About</h1>
      <p className="leading-7 text-xl font-light mb-5">
        Welcome to Salon24, your ultimate destination for exquisite beauty and
        grooming services. Founded by Rajan Makeover, a renowned makeup artist
        who has worked with various film stars and Punjabi singers, Salon24
        brings celebrity-level expertise and a passion for perfection to the
        heart of Punjab.
      </p>

      <Image
        src="/pages/about/about.jpg"
        alt="makeup-image"
        width={800}
        height={500}
        className="mb-5"
      />

      <p className="leading-7 text-xl font-light mb-5">
        With years of experience in the entertainment industry, Rajan Makeover
        has now opened Salon24 to offer the same high-quality makeup and salon
        services to everyone. Whether you&#39;re preparing for a party, wedding,
        bridal event, or simply looking for the best in grooming, our team of
        professionals is dedicated to making you look and feel your best.
      </p>

      <p className="leading-7 text-xl font-light mb-5">
        At Salon24, we offer a wide range of services, from makeup artistry to
        complete salon treatments, all designed to enhance your natural beauty.
        Step into our salon and let us help you shine on your special day or any
        day you want to feel special.
      </p>
    </div>
  );
};

export default About;
