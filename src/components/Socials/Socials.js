import React from "react";
import "./Socials.css";
import FeatherIcon from "feather-icons-react";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/ImagoTijl"
        target="_blank"
        rel="noreferrer"
      >
        <FeatherIcon size="24" className="icon" icon="facebook" />
      </a>
      <a
        href="https://www.instagram.com/imagotijl/"
        target="_blank"
        rel="noreferrer"
      >
        <FeatherIcon size="24" className="icon" icon="instagram" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCjbCxgFBbNhgYYygFQgdtpg"
        target="_blank"
        rel="noreferrer"
      >
        <FeatherIcon size="24" className="icon" icon="youtube" />
      </a>
    </div>
  );
};

export default Socials;
