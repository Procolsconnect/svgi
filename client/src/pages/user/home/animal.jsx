import React, { useState, useEffect, useRef } from "react";
import "./animal.css";
import axios from "axios";

const apiurl = import.meta.env.VITE_API_URL;

const BigCatStack = () => {
  const [cards, setCards] = useState([]);
  const [k, setK] = useState(0);
  const sectionRef = useRef(null);

  // Fetch cards from backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/events`);

        // ✅ Expect response: { data: [ { title, desc, img }, ... ] }
        const fetched = res.data.data || res.data || [];

        // ✅ Add a random rotation angle for each card
        const cardsWithAngle = fetched.map((card) => ({
          ...card,
          angle: `${Math.floor(Math.random() * 20 - 10)}deg`, // random -10° to +10°
        }));

        setCards(cardsWithAngle);
      } catch (err) {
        console.error("Failed to fetch placements:", err);
      }
    };

    fetchCards();
  }, []);

  // Update CSS variable for animation
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
    <div className="bigcat-container">
      {/* === CENTERED HEADING === */}
      <h1 className="bigcat-heading">Latest Events</h1>

      {/* === MAIN CONTENT === */}
      <div className="bigcat-content">
        {/* === LEFT COLUMN === */}
        <div className="bigcat-left">
          {/* === Image Stack Section === */}
          <section
            ref={sectionRef}
            className="animal-section"
            style={{ "--n": cards.length }}
          >
            {cards.map((card, index) => (
              <article
                key={card._id || index}
                className="animal-card"
                style={{ "--i": index, "--a": card.angle }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="animal-image"
                  loading="lazy"
                />
              </article>
            ))}
          </section>

          {/* === Navigation Buttons === */}
          <div className="animal-nav">
            <button
              aria-label="previous"
              className="animal-btn animal-btn-prev"
              onClick={() => handleClick(-1)}
            ></button>
            <button
              aria-label="next"
              className="animal-btn animal-btn-next"
              onClick={() => handleClick(1)}
            ></button>
          </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="bigcat-right">
          {cards.length > 0 ? (
            <>
              <div className="bigcat-title-row">
                <h2 className="bigcat-image-title">{currentCard.title}</h2>
                <span className="bigcat-counter">
                  {k + 1}/{cards.length}
                </span>
              </div>
              <p
                className="bigcat-image-desc"
                dangerouslySetInnerHTML={{ __html: currentCard.desc }}
              ></p>
            </>
          ) : (
            <p className="text-center mt-5">Loading events...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigCatStack;
