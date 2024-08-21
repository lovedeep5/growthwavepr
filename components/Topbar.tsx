import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="border-b border-white/20 bg-primary">
      <div className="max-w-screen-2xl mx-auto p-2 flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
        <div className="text-center text-white">
          <span>
            website is under construction, for any query please call us
            <Link href="tel:+918507002222">
              <span className="font-bold"> 8507002222 </span>
            </Link>
          </span>
        </div>
        {/*         
        <div className=" text-white/90 hidden lg:block">
          Follow us on social media to get
          <span className="font-bold">20% discount</span>
        </div>

        <div className=" text-white/90 ">
          Call us
          <Link href="tel:+918507002222">
            <span className="font-bold"> 85070-02222 </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
