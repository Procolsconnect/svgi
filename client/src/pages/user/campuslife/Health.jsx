import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HealthService.module.css";
import CommonHero from "../../../components/CommonHero";

const API_BASE = import.meta.env.VITE_API_URL + "/api/campus";

const HealthService = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardRes] = await Promise.all([
          axios.get(`${API_BASE}/healthcard`)
        ]);

        setCards(cardRes.data.data || []);
      } catch (err) {
        console.error("Error fetching health data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>

      {/* HERO */}
      <CommonHero apiEndpoint="/api/campus/healthhero" />

      {/* FACILITIES */}
      <section className={styles.wrap}>
        <div className={styles.home}>

          <div className={styles.textSide}>
            <h2 className={styles.sectionHeading}>Our Facilities</h2>

            <div className={styles.info}>
              {cards.length > 0 ? (
                cards[0].description
              ) : (
                "SVGI provides comprehensive medical and health services to ensure the well-being of our students and staff. Our campus is equipped with emergency care facilities, qualified medical professionals, and round-the-clock support to handle health needs efficiently."
              )}
            </div>
          </div>

          <div className={styles.circle}></div>
        </div>
      </section>

      {/* SCROLLING SECTIONS */}
      <div className={styles.main}>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <section
              key={card._id || index}
              className={
                `${styles.scrollSection} ${(index + 1) % 2 === 0 ? styles.scrollSectionEven : ""}`
              }
            >
              <img
                src={card.image}
                alt={card.title}
              />
              <p>
                <strong>{card.title}</strong>
                {card.description}
              </p>
            </section>
          ))
        ) : !loading && (
          [1, 2, 3].map((n) => (
            <section
              key={n}
              className={
                `${styles.scrollSection} ${n % 2 === 0 ? styles.scrollSectionEven : ""}`
              }
            >
              <img
                src={`https://picsum.photos/400/400?random=${n}`}
                alt={`Section ${n}`}
              />
              <p>
                Medical facility detail {n}. Comprehensive health support for SVGI students.
              </p>
            </section>
          ))
        )}
      </div>

    </div>
  );
};

export default HealthService;
