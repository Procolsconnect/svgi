import React, { useEffect, useRef, useState } from "react";
import BalticSlider from "./BalticSlider";
import styles from "./aboutoverview.module.css";

export default function SVGIOverview() {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll(`.${styles.section}`));
  }, []);

  const handleScrollClick = () => {
    const total = sectionsRef.current.length;

    setClicked(true);
    setTimeout(() => setClicked(false), 600);

    if (index >= total) {
      setRotate(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIndex(0);
      return;
    }

    const target = sectionsRef.current[index];
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }

    const nextIndex = index + 1;
    setIndex(nextIndex);

    if (nextIndex === total) {
      setRotate(true);
    }
  };

  return (
    <div className={styles.root}>
      {/* Hero */}
      <div className={styles.hero}>
        <img src="/images/instu.jpg" alt="Hero Background" />
        <h1 className={styles.heroTitle}>Overview</h1>
      </div>

      {/* Scroll Button */}
      <div
        id="svgio-scroll"
        onClick={handleScrollClick}
        className={`${styles.scrollBtn} ${clicked ? styles.clicked : ""} ${
          rotate ? styles.rotate : ""
        }`}
      >
        <span className={styles.arrowBounce}>&#8595;</span>
      </div>

      {/* Section 1 - Tilted Images + Text */}
      <section className={`${styles.section} ${styles.bigger}`}>
        <div className={styles.gridTilt}>
          <img
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <div className={`${styles.text} ${styles.textBigger}`}>
          <p className={styles.textShortBigger}>Lorem ipsum dolor sit amet</p>
          <h1 className={styles.textTitleBigger}>
            Lorem ipsum dolor sit amet
          </h1>
          <p className={styles.textDescriptionBigger}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            maiores velit laudantium similique impedit aliquid.
          </p>
        </div>
      </section>

      {/* Section 2 - Text + Grid Layout */}
      <section className={`${styles.section} ${styles.gridLayout}`}>
        <div className={styles.heroSection}>
          <div className={styles.text}>
            <p className={styles.textShort}>Lorem ipsum dolor sit amet</p>
            <h1 className={styles.textTitle}>Lorem ipsum dolor sit amet</h1>
            <p className={styles.textDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, necessitatibus reiciendis. Voluptatem, eaque fugiat?
            </p>
          </div>

          <div className={styles.gridContainer}>
            <div className={`${styles.gridItem} ${styles.one}`}></div>
            <div className={`${styles.gridItem} ${styles.two}`}></div>
            <div className={`${styles.gridItem} ${styles.three}`}></div>
            <div className={`${styles.gridItem} ${styles.four}`}></div>
            <div className={`${styles.gridItem} ${styles.five}`}></div>
            <div className={`${styles.gridItem} ${styles.six}`}></div>
            <div className={`${styles.gridItem} ${styles.seven}`}></div>
            <div className={`${styles.gridItem} ${styles.eight}`}></div>
            <div className={`${styles.gridItem} ${styles.nine}`}></div>
            <div className={`${styles.gridItem} ${styles.ten}`}></div>
            <div className={`${styles.gridItem} ${styles.eleven}`}></div>
            <div className={`${styles.gridItem} ${styles.twelve}`}></div>
          </div>
        </div>
      </section>
      <BalticSlider />
    </div>
  );
}