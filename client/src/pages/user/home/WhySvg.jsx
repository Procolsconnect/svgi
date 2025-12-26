import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./WhySvg.module.css";
import axios from "axios";

const apiurl = import.meta.env.VITE_API_URL;

const ServiceOfferings = () => {
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${apiurl}/api/service-offerings`);
        if (response.data && response.data.success) {
          setCards(response.data.data);
        } else {
          throw new Error(response.data.message || "Failed to fetch service offerings");
        }
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

      {loading && <p className={styles.loadingText}>Loading offerings...</p>}
      {error && <p className={styles.errorText}>{error}</p>}

      <div className={styles.serviceGrid}>
        {cards.map((card, index) => (
          <div
            key={card._id}
            className={styles.serviceCard}
            onMouseEnter={() => setHoveredCard(card._id)}
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