import React, { useEffect, useState } from "react";
import "./sports_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL;

const PlacementCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
  const fetchPlacements = async () => {
    try {
      const res = await axios.get(`${apiurl}/api/placements`);
      // ensure cards is an array
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
    const card = container.querySelector(".placement-card-item");
    const scrollAmount = card.offsetWidth + 24;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="placement-cards-container">
      <div className="container text-center py-4 placement-heading">
        <h1 className="placement-type">PLACEMENT & ACHIEVEMENT CELLS</h1>
      </div>

      <section className="placement-section">
        <div className="placement-scroll-wrapper position-relative">
          <button
            className="placement-arrow-btn placement-arrow-left material-symbols-outlined"
            onClick={() => scrollCards(-1)}
          >
            chevron_left
          </button>
          <button
            className="placement-arrow-btn placement-arrow-right material-symbols-outlined"
            onClick={() => scrollCards(1)}
          >
            chevron_right
          </button>

          <ul className="placement-cards d-flex" id="placement-cardList">
            {cards.map((card) => (
              <li className="placement-card-item" key={card._id}>
                <div className="placement-visual">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="placement-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <a href="#" className="placement-card-link">
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
