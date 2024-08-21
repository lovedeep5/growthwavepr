import React from "react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="pt-4 bg-primary-foreground ">
      <div className="pt-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-5 p-4">
        <div className="mb-5 md:col-span-3 ">
          <div className="logo font-jost text-primary font-bold text-4xl mb-3">
            salon<span className="text-red-500">24</span>.
          </div>
          <div className="text-xl  md:text-3xl max-w-screen-sm">
            Providing the best makeup services in Bahadurgarh, Patiala and the
            surrounding areas
          </div>
          <div className="pt-5">
            <Button variant="default" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>

        <div className="mb-5 ">
          <span className="font-bold  border-b-4">Links</span>

          <ul className="leading-8 mt-5">
            <li>
              {" "}
              <Link href="/about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/services">Services</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/gallery">Gallery</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="mb-5 ">
          <span className="font-bold  border-b-4">Social Media</span>

          <div className="mt-5 flex gap-4">
            <div className="bg-primary text-white rounded-sm p-2">
              <Link href="https://www.facebook.com/theesalon24/">
                <FacebookIcon />
              </Link>
            </div>

            <div className="bg-primary text-white rounded-sm p-2">
              <Link href="https://www.instagram.com/the.salon24/">
                <InstagramIcon />
              </Link>
            </div>

            <div className="bg-primary text-white rounded-sm p-2">
              <Link href="https://www.youtube.com/channel/UCQR84wfAlTtCmOaxcJDOXWA">
                <YoutubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar bg-primary/10  text-center p-1">
        <span className="mx-w-screen-2xl font-light text-sm mx-auto">
          If you have trouble accessing our content, please{" "}
          <Link className="font-bold" href="mailto:lovedeep5.abh@gmail.com">
            contact us
          </Link>{" "}
          for assistance.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
