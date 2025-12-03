import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./logo_section1.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const InfiniteLogoSlider = () => {
  const [logos, setLogos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/logosection2`);
        const data = res?.data?.data || res?.data || [];

        if (Array.isArray(data)) {
          const urls = data.map((item) => item.url || item.img || item.image || item);
          setLogos(urls.filter(Boolean));
        } else {
          throw new Error("Invalid data format from API");
        }
      } catch (err) {
        console.error("Error fetching logos:", err);
        setError("Failed to load logos. Please try again later.");
      }
    };

    fetchLogos();
  }, []);

  if (error) {
    return (
      <div className={styles.infiniteLogoSliderContainer}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  if (logos.length === 0) {
    return (
      <div className={styles.infiniteLogoSliderContainer}>
        <p>Loading logos...</p>
      </div>
    );
  }

  const half = Math.ceil(logos.length / 2);
  const topRowLogos = logos.slice(0, half);
  const bottomRowLogos = logos.slice(half);

  return (
    <div className={styles.infiniteLogoSliderContainer}>
      {/* Desktop / Tablet: Single Track */}
      <div className={`${styles.infiniteLogoSliderTrack} ${styles.desktopTrack}`}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className={styles.infiniteLogoSlide}>
            <img src={logo} alt={`logo-${index}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Mobile: Two Opposite Rows */}
      <div className={styles.infiniteLogoMobile}>
        <div className={`${styles.infiniteLogoSliderRow} ${styles.topRow}`}>
          {topRowLogos.concat(topRowLogos).map((logo, index) => (
            <div key={`top-${index}`} className={styles.infiniteLogoSlide}>
              <img src={logo} alt={`top-logo-${index}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={`${styles.infiniteLogoSliderRow} ${styles.bottomRow}`}>
          {bottomRowLogos.concat(bottomRowLogos).map((logo, index) => (
            <div key={`bottom-${index}`} className={styles.infiniteLogoSlide}>
              <img src={logo} alt={`bottom-logo-${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;