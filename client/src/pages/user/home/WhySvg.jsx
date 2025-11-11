import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./WhySvg.css";

const apiurl = import.meta.env.VITE_API_URL;

const ServiceOfferings = () => {
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
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
    <section className="service-container">
      <div className="service-header">
        <div className="service-label">
          what we're offering
          <ArrowRight size={24} />
        </div>
        <h1 className="service-title">Why Choose SVGI?</h1>
      </div>

      {loading && <p className="loading-text">Loading offerings...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="service-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="service-card"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-background"></div>
            <div
              className={`card-circle card-${index + 1}`}
              style={{
                backgroundImage: `url(${apiurl}/${card.image})`,
              }}
            ></div>
            <div className="card-content">
              <div className="card-content-wrapper">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOfferings;
