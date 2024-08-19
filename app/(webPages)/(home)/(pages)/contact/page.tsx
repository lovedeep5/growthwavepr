import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl mb-5 font-bold">Contact Salon24</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 font-light ">
        <div>
          <div className="phone flex gap-2 mb-8 justify-start items-center letter tracking-wider ">
            <div className="p-3 bg-primary rounded-full text-white">
              <Phone />
            </div>
            <Link href="tel:+918507002222">
              <span className="text-lg">85070-02222</span>
            </Link>
          </div>
          <div className="phone flex gap-2 mb-8 justify-start items-center letter tracking-wider ">
            <div className="p-3 bg-primary rounded-full text-white">
              <Phone />
            </div>
            <Link href="tel:+918427066601">
              <span className="text-lg">84270-66601</span>
            </Link>
          </div>
          <div className="email flex gap-2 mb-8 justify-start items-center letter tracking-wider ">
            <div className="p-3 bg-primary rounded-full text-white">
              <Mail />
            </div>
            <Link href="mailto:lovedeep5.abh@gmail.com">
              <span className="text-lg">email</span>
            </Link>
          </div>

          <div className="mb-5">
            <h2 className=" text-2xl font-bold mb-3">Location</h2>
            <span className="text-lg ">
              Salon24, Seel road, Bhadurgarh, <br /> Patiala, Punjab, 147021
            </span>
            <Link href="#" className="block underline">
              get directions
            </Link>
          </div>

          <div className="mb-5">
            <h2 className=" text-2xl font-bold mb-3">Hours</h2>
            <span className="text-lg">Monday - Sunday: 8:30 AM - 8:00 PM</span>
          </div>
        </div>
        {/* Right col */}
        <div>
          <h2 className=" text-2xl font-bold mb-3">Online Request</h2>
          <p className="text-lg mb-10">
            Feel free to call us to schedule an appointment, or complete our
            form and we will follow up with you.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
