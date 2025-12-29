import React from "react";
import styles from "./SocialIcons.module.css";

// React Icons (Font Awesome pack)
import { FaLinkedin, FaTwitter, FaInstagram, FaComment } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={styles.root}>
      <div className={styles.flex}>
        <div className={styles.icon}>
          <FaLinkedin />
        </div>

        <div className={styles.icon}>
          <FaTwitter />
        </div>

        <div className={styles.icon}>
          <FaInstagram />
        </div>

        <div className={styles.icon}>
          <FaComment />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;