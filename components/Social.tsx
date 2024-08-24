import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { Button } from "@/components/ui/button";

interface SocialProps {
  showSocial: boolean;
}

const Social = ({ showSocial }: SocialProps) => {
  if (!showSocial) return;
  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button variant="outline" size="lg" className="w-full ">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button variant="outline" size="lg" className="w-full">
        <FaFacebook className="w-5 h-5 text-sky-600" />
      </Button>
    </div>
  );
};

export default Social;
