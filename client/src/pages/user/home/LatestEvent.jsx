import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./LatestEvent.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const LatestEvent = () => {
  const [cards, setCards] = useState([]);
  const [k, setK] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/events`);
        const fetched = res.data.data || res.data || [];

        const cardsWithAngle = fetched.map((card) => ({
          ...card,
          angle: `${Math.floor(Math.random() * 20 - 10)}deg`,
        }));

        setCards(cardsWithAngle);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--k", k);
    }
  }, [k]);

  const handleClick = (inc) => {
    setK((prev) => (prev + inc + cards.length) % cards.length);
  };

  const currentCard = cards[k] || {};

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest Events</h1>

      <div className={styles.content}>
        {/* Left Column */}
        <div className={styles.left}>
          <section
            ref={sectionRef}
            className={styles.animalSection}
            style={{ "--n": cards.length }}
          >
            {cards.map((card, index) => (
              <article
                key={card._id || index}
                className={styles.animalCard}
                style={{ "--i": index, "--a": card.angle }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className={styles.animalImage}
                  loading="lazy"
                />
              </article>
            ))}
          </section>

          <div className={styles.animalNav}>
            <button
              aria-label="previous"
              className={`${styles.animalBtn} ${styles.animalBtnPrev}`}
              onClick={() => handleClick(-1)}
            />
            <button
              aria-label="next"
              className={`${styles.animalBtn} ${styles.animalBtn} animal-btn-next`}
              onClick={() => handleClick(1)}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          {cards.length > 0 ? (
            <>
              <div className={styles.titleRow}>
                <h2 className={styles.imageTitle}>{currentCard.title}</h2>
                <span className={styles.counter}>
                  {k + 1}/{cards.length}
                </span>
              </div>
              <p
                className={styles.imageDesc}
                dangerouslySetInnerHTML={{ __html: currentCard.desc }}
              />
            </>
          ) : (
            <p className="text-center mt-5">Loading events...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestEvent;