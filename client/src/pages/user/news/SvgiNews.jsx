import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SvgiNews.module.css";

const API_URL = import.meta.env.VITE_API_URL + "/api";

const SVGICollege = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_URL}/newscollege`);
        if (response.data.success) {
          setNewsItems(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching college news:", error);
      }
    };
    fetchNews();
  }, []);

  // Fallback to demo data if API is empty
  const displayData = newsItems.length > 0 ? newsItems : [
    { type: "text", text: "SVGI College stands as a symbol of academic strength and modern education, shaping students into industry-ready professionals through innovation, discipline, and excellence." },
    { type: "image", url: "/images/arts.jpeg" },
    { type: "image", url: "/images/artss.jpg" },
    { type: "text", text: "Vision-driven leadership and experienced faculty ensure that every student receives practical knowledge along with strong theoretical foundations to succeed in a competitive world." },
    { type: "image", url: "/images/artss.jpg" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <h2 className={styles.heading}>
            SVGI College – A New Generation of Learning Excellence
          </h2>

          {displayData.map((item, index) => {
            if (item.type === "text") {
              const text = item.text || "";
              const firstLetter = text.charAt(0);
              const rest = text.slice(1);

              return (
                <p key={item._id || index} className={styles.paragraph}>
                  <span className={styles.cap}>{firstLetter}</span>
                  {rest}
                </p>
              );
            }

            if (item.type === "image") {
              return (
                <img
                  key={item._id || index}
                  src={item.url}
                  alt="SVGI College"
                  className={styles.image}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default SVGICollege;