import Link from "next/link";
import React from "react";

const callouts = [
  { line1: "Read", line2: "Reviews", link: "/contact" },
  { line1: "View", line2: "Gallery", link: "/gallery" },
  { line1: "Join", line2: "Our Team", link: "/contact" },
];

const Callouts = () => {
  return (
    <div className="bg-primary/10 mb-5">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {callouts.map((callout, index) => {
          return (
            <Link href={callout.link} key={index}>
              <div className="border border-primary flex flex-col justify-center items-center p-5 cursor-pointer group hover:bg-primary transition-all">
                <span className="text-2xl group-hover:text-white transition-all">
                  {callout.line1}
                </span>
                <span className="text-4xl font-bold group-hover:text-white">
                  {callout.line2}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Callouts;
