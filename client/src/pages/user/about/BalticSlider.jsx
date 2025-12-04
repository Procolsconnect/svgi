import React, { useEffect, useRef } from "react";
import styles from "./balticSlider.module.css";

const BalticSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    class BeerSlider {
      constructor(el, { start = "50" } = {}) {
        this.start = Math.min(100, Math.max(0, parseInt(el.dataset.start || start) || 50));
        this.element = el;
        this.revealContainer = el.children[1];
        this.revealElement = this.revealContainer.children[0];

        this.range = this.addElement("input", {
          type: "range",
          class: styles.range,
          value: this.start,
          "aria-valuenow": this.start,
        });

        this.handle = this.addElement("span", { class: styles.handle });

        this.onImagesLoad();
      }

      init() {
        this.element.classList.add(styles.ready);
        this.move();
        this.addListeners();
      }

      loadImg(src) {
        return new Promise((resolve, reject) => {
          if (!src) return resolve();
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      }

      loadBoth() {
        const a = this.element.querySelector(`.${styles.winter} image`)?.getAttribute("xlink:href");
        const b = this.revealElement.querySelector("image")?.getAttribute("xlink:href");
        return Promise.all([this.loadImg(a), this.loadImg(b)]);
      }

      onImagesLoad() {
        this.loadBoth().then(() => this.init());
      }

      addElement(tag, attrs) {
        const el = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        this.element.appendChild(el);
        return el;
      }

      addListeners() {
        ["input", "change"].forEach((ev) =>
          this.range.addEventListener(ev, () => this.move())
        );
      }

      move() {
        const value = this.range.value;
        this.revealContainer.style.setProperty("--width", `${value}%`);
        this.handle.style.left = `${value}%`;
        this.range.setAttribute("aria-valuenow", value);

        this.element.classList.toggle(styles.more, value > 55);
        this.element.classList.toggle(styles.less, value < 45);
      }
    }

    if (sliderRef.current) {
      new BeerSlider(sliderRef.current, { start: "75" });
    }
  }, []);

  return (
    <>
      <div id="baltic-slider" className={styles.slider} data-start="75" ref={sliderRef}>
        {/* Winter Side */}
        <div className={`${styles.ctnr} ${styles.winter}`}>
          <svg width="100%" height="100%" viewBox="0 0 600 361" preserveAspectRatio="xMidYMid slice">
            <image
              xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/winter.jpg"
              width="100%"
              height="100%"
            />
          </svg>

          <section className={`${styles.text} ${styles.textRight}`}>
            <h2>Baltic sea during Winter time</h2>
            <p>
              At -10.6 °C | 12.9 °F on average, January is the coldest month.
              It is also the driest month with precipitation of only 12 mm.
            </p>
          </section>
        </div>

        {/* Summer Side (Reveal) */}
        <div className={styles.reveal}>
          <div className={`${styles.ctnr} ${styles.summer}`}>
            <svg width="100%" height="100%" viewBox="0 0 600 361" preserveAspectRatio="xMidYMid slice">
              <image
                xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/warmsphere-baltic.jpg"
                width="100%"
                height="100%"
              />
            </svg>

            <section className={`${styles.text} ${styles.textLeft}`}>
              <h2>Baltic sea during Summer time</h2>
              <p>
                With an average of 22.8 °C | 73.0 °F, July is the warmest month.
                In June, rainfall reaches its peak with 98 mm.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <h1>Welcome to the Baltic seaside</h1>
        <p>
          The Baltic Sea is a mediterranean sea of the Atlantic Ocean, enclosed by Denmark,
          Estonia, Finland, Latvia, Lithuania, Sweden, Germany, Poland, and Russia.
          It stretches from 53°N to 66°N latitude.
        </p>
      </section>

      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" className={styles.svgDefs}>
        <defs>
          <clipPath
            id="balticSvgPath"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.00083 0.0075)"
          >
            <path
              d="M1397,490H204c263,0,160-32,371-33,191.52-.91,150.49-135.14,225-92C990,475,1144,490,1397,490Z"
              transform="translate(-178 -350.46)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default BalticSlider;