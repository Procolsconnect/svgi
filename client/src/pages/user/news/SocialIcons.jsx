import React from "react";
import "./SocialIcons.css";

// React Icons (Font Awesome pack)
import { FaLinkedin, FaTwitter, FaInstagram, FaComment } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="sicon-root">
      <div className="sicon-flex">

        <div className="sicon-icon">
          <FaLinkedin />
        </div>

        <div className="sicon-icon">
          <FaTwitter />
        </div>

        <div className="sicon-icon">
          <FaInstagram />
        </div>

        <div className="sicon-icon">
          <FaComment />
        </div>

      </div>
    </div>
  );
};

export default SocialIcons;
