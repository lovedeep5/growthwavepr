import React from "react";

interface SocialProps {
  showSocial: boolean;
}

const Social = ({ showSocial }: SocialProps) => {
  if (!showSocial) return;
  return <div>Social</div>;
};

export default Social;
