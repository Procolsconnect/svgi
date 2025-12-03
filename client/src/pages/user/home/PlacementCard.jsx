import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import styles from "./PlacementCards.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const PlacementCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/placements`);
        setCards(Array.isArray(res.data.data) ? res.data.data : []);
      } catch (err) {
        console.error("Failed to fetch placements:", err);
        setCards([]);
      }
    };
    fetchPlacements();
  }, []);

  const scrollCards = (direction) => {
    const container = document.getElementById("placement-cardList");
    const card = container.querySelector(`.${styles.cardItem}`);
    const scrollAmount = card.offsetWidth + 24;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className="container text-center py-4 placement-heading">
        <h1 className={styles.type}>PLACEMENT & ACHIEVEMENT CELLS</h1>
      </div>

      <section className={styles.section}>
        <div className={styles.scrollWrapper}>
          <button
            className={`${styles.arrowBtn} ${styles.arrowLeft} material-symbols-outlined`}
            onClick={() => scrollCards(-1)}
          >
            chevron_left
          </button>
          <button
            className={`${styles.arrowBtn} ${styles.arrowRight} material-symbols-outlined`}
            onClick={() => scrollCards(1)}
          >
            chevron_right
          </button>

          <ul className={styles.cards} id="placement-cardList">
            {cards.map((card) => (
              <li className={styles.cardItem} key={card._id}>
                <div className={styles.visual}>
                  <img src={card.img} alt={card.title} />
                </div>
                <div className={styles.content}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <a href="#" className={styles.cardLink}>
                    Learn more
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PlacementCards;