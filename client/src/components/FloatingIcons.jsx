import React from "react";
import styles from "./FloatingIcons.module.css";

const VerticalFloat = () => {
  return (
    <div className={styles.griddyFloatSm}>
      
      <div className={`${styles.griddyFlFl} ${styles.griddyFloatFb}`}>
        <i className="fa fa-facebook"></i>
        <a href="#">Direct Enquiry!</a>
      </div>

      <div className={`${styles.griddyFlFl} ${styles.griddyFloatIg}`}>
        <i className="fa fa-instagram"></i>
        <a href="#">Admission now!</a>
      </div>

    </div>
  );
};

export default VerticalFloat;
