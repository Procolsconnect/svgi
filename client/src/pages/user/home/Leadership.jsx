// components/Leaders.jsx
import React from "react";
import styles from "./Leadership.module.css";

export default function Leaders() {
  const changeModelStyle = (e, deg, invert = 0) => {
    const card = e.target.closest(`.${styles.leadersCard}`);
    const img = card.querySelector(`.${styles.leadersImageModel}`);
    img.style.filter = `hue-rotate(${deg}deg) invert(${invert})`;
  };

  return (
    <div className={styles.leadersBodyWrapper}>
      <div className={styles.leadersLeftHeading}>Leadership That Inspires</div>

      {/* Row 1 */}
      <div className={styles.leadersRow}>
        <div className={styles.leadersCard}>
          <div className={styles.leadersOverflow}>
            <div className={styles.leadersModel}>
              <img
                src="/images/WhatsApp_Image_2025-08-01_at_16.31.09_43d29991-removebg-preview.png"
                alt="PandaKey"
                className={styles.leadersImageModel}
              />
            </div>
          </div>

          <div className={styles.leadersGlass}></div>

          <div className={styles.leadersContent}>
            <h2>Thiru. P. VENKATACHALAM</h2>
            <p>Chairman</p>
          </div>
        </div>

        <p className={styles.leadersText}>
          Shree Venkateshwara group of institutions set to take the mission of
          implementation of the newest educational methodologies which enables
          the innovative thinking of students and initiative performance. It
          also encourages independent thinking and decision making of students,
          thus enabling them to develop wholesome personalities.
        </p>
      </div>

      {/* Row 2 */}
      <div className={`${styles.leadersRow} ${styles.reverse}`}>
        <div className={styles.leadersCard}>
          <div className={styles.leadersOverflow}>
            <div className={styles.leadersModel}>
              <img
                src="images/WhatsApp_Image_2025-08-01_at_16.15.06_95e75b66-removebg-preview.png"
                alt="TopoKey"
                className={styles.leadersImageModel}
              />
            </div>
          </div>

          <div className={styles.leadersGlass}></div>

          <div className={styles.leadersContent}>
            <h2>Mr.K.C.Karupanan</h2>
            <p>Secretary</p>
          </div>
        </div>

        <p className={styles.leadersText}>
          Shree Venkateshwara Group of Institutions takes keen interest in
          updating its infrastructures to meet the technological revolution and
          new challenges of the modern era. SVASC has a reputation as an
          innovative and dynamic educational institution that maintains the
          highest standards of norms and provides complete student support
          systems using latest developments in instructional technology with
          utmost care.
        </p>
      </div>
    </div>
  );
}