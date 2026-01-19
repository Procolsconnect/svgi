import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./balticSlider.module.css";

const API_BASE = import.meta.env.VITE_API_URL + "/api";

const BalticSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchBalticData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/about/baltic-data`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching baltic data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBalticData();
  }, []);

  useEffect(() => {
    if (loading || !data) return;

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

    let sliderInstance = null;

    if (sliderRef.current) {
      // Clean up any existing slider elements first
      const existingRange = sliderRef.current.querySelector('input[type="range"]');
      const existingHandle = sliderRef.current.querySelector(`.${styles.handle}`);

      if (existingRange) existingRange.remove();
      if (existingHandle) existingHandle.remove();

      sliderInstance = new BeerSlider(sliderRef.current, { start: "75" });
    }

    // Cleanup function to prevent duplicates
    return () => {
      if (sliderRef.current) {
        const range = sliderRef.current.querySelector('input[type="range"]');
        const handle = sliderRef.current.querySelector(`.${styles.handle}`);

        if (range) range.remove();
        if (handle) handle.remove();
      }
    };
  }, [loading, data]);

  if (loading) return <div>Loading Slider...</div>;

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
            <h2>{data?.winter?.title || "Baltic sea during Winter time"}</h2>
            <p>{data?.winter?.description}</p>
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
              <h2>{data?.summer?.title || "Baltic sea during Summer time"}</h2>
              <p>{data?.summer?.description}</p>
            </section>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <h2 >{data?.contentSection?.title || "Welcome to the Baltic seaside"}</h2 >
        <p>{data?.contentSection?.description}</p>
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
