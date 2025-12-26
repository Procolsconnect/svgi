import React from "react";
import styles from "./FloatingIcons.module.css";

const VerticalFloat = () => {
  return (
    <div className={styles.griddyFloatSm}>
      
      <div className={`${styles.griddyFlFl} ${styles.griddyFloatFb}`}>
        <a href="#">Direct Enquiry!</a>
      </div>

      <div className={`${styles.griddyFlFl} ${styles.griddyFloatIg}`}>
        <a href="#">Admission now!</a>
      </div>

    </div>
  );
};

export default VerticalFloat;
