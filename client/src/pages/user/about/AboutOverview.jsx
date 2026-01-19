import React, { useState, useEffect } from "react";
import axios from "axios";
import BalticSlider from "./BalticSlider";
import styles from "./aboutOverview.module.css";
import CommonHero from "../../../components/CommonHero";
import History from "./History";

const API_BASE = import.meta.env.VITE_API_URL + "/api";

export default function SVGIOverview() {
  const [intro, setIntro] = useState(null);
  const [gridData, setGridData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [introRes, gridRes] = await Promise.all([
          axios.get(`${API_BASE}/about/overview/intro`),
          axios.get(`${API_BASE}/about/overview/grid`)
        ]);

        setIntro(introRes.data.data?.[0] || null);
        setGridData(gridRes.data.data?.[0] || null);
      } catch (error) {
        console.error("Error fetching overview data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading Overview...</div>;

  return (
    <div className={styles.root}>
      {/* Hero */}
      <CommonHero
        apiEndpoint="/api/about/overview/hero"
        defaultTitle="Overview"
        sectionsSelector={`.${styles.section}`}
        showArrow={true}
      />


      {/* Section 1 - Tilted Images + Text */}
      <section className={`${styles.section} ${styles.bigger}`}>
        <div className={styles.gridTilt}>
          {intro?.images?.map((img, idx) => (
            <img key={idx} src={img} alt={`Intro ${idx}`} />
          )) || (
              <>
                <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60" alt="" />
              </>
            )}
        </div>

        <div className={`${styles.text} ${styles.textBigger}`}>
          <p className={styles.textShortBigger}>{intro?.shortText || "Lorem ipsum dolor sit amet"}</p>
          <h2 className={styles.textTitleBigger}>{intro?.title || "Lorem ipsum dolor sit amet"}</h2>
          <p className={styles.textDescriptionBigger}>
            {intro?.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores velit laudantium similique impedit aliquid."}
          </p>
        </div>
      </section>

      {/* Section 2 - Text + Grid Layout */}
      <section className={`${styles.section} ${styles.gridLayout}`}>
        <div className={styles.heroSection}>
          {/* This title is visible ONLY on mobile — above the grid */}
          <h2 className={`${styles.textTitle} ${styles.mobileOnlyTitle}`}>
            {gridData?.title || "Lorem ipsum dolor sit amet"}
          </h2>

          <div className={styles.text}>
            {/* Original title — stays here for desktop */}
            <p className={styles.textShort}>{gridData?.shortText || "Lorem ipsum dolor sit amet"}</p>
            <h2 className={styles.textTitle}>{gridData?.title || "Lorem ipsum dolor sit amet"}</h2>
            <p className={styles.textDescription}>
              {gridData?.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, necessitatibus reiciendis. Voluptatem, eaque fugiat?"}
            </p>
          </div>

          <div className={styles.gridContainer}>
            {gridData?.gridImages?.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.gridItem} ${styles[["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"][idx]]}`}
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
              ></div>
            )) || Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className={`${styles.gridItem} ${styles[["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"][idx]]}`}></div>
            ))}
          </div>
        </div>
      </section>


      {/* Section 3 - BalticSlider */}
      <section className={styles.section}>
        <BalticSlider />
        <History />
      </section>
    </div>
  );
}
