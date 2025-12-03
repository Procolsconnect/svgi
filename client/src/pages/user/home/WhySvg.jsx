import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./WhySvg.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const ServiceOfferings = () => {
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Fetches the service offerings from the API and updates the state
 * @returns {Promise<void>} 
 */
/*******  52c85ef0-c1fc-4428-a999-8d7d1958f3db  *******/    const fetchCards = async () => {
      try {
        const response = await fetch(`${apiurl}/api/service-offerings`);
        if (!response.ok) {
          throw new Error("Failed to fetch service offerings");
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <section className={styles.serviceContainer}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLabel}>
          what we're offering
          <ArrowRight size={24} />
        </div>
        <h1 className={styles.serviceTitle}>Why Choose SVGI?</h1>
      </div>

      {loading && <p className="loading-text">Loading offerings...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className={styles.serviceGrid}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={styles.serviceCard}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardBackground}></div>
            <div
              className={`${styles.cardCircle} ${styles[`card${index + 1}`]}`}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardContentWrapper}>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOfferings;