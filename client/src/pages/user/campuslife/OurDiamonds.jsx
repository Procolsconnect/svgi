import React from 'react';
import './OurDiamonds.css';

const DiamondShowcase = () => {
  const cards = [
    {
      img: "https://assets.codepen.io/2585/Roboto.svg",
      text: "Short and tiny content here.",
      link: "Cool art"
    },
    {
      img: "https://assets.codepen.io/2585/Entertainment.svg",
      text: "The words here are tolerable but a bit long.",
      link: "By Pablo Stanley"
    },
    {
      img: "https://assets.codepen.io/2585/Mechanical+Love.svg",
      text: "I'm brief comparatively.",
      link: "Find more"
    },
    {
      img: "https://assets.codepen.io/2585/Waiting.svg",
      text: "Sometimes the message is just right.",
      link: "Share good art"
    },
    {
      img: "https://assets.codepen.io/2585/Roboto.svg",
      text: "Short and tiny content here.",
      link: "Cool art"
    },
    {
      img: "https://assets.codepen.io/2585/Entertainment.svg",
      text: "The words here are tolerable but a bit long.",
      link: "By Pablo Stanley"
    },
    {
      img: "https://assets.codepen.io/2585/Mechanical+Love.svg",
      text: "I'm brief comparatively.",
      link: "Find more"
    },
    {
      img: "https://assets.codepen.io/2585/Waiting.svg",
      text: "Sometimes the message is just right.",
      link: "Share good art"
    }
  ];

  return (
    <div className="diamond-showcase">
      {/* HERO */}
      <div className="diamond-hero">
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200" alt="Hero Background" />
        <h1>Our Diamonds</h1>
      </div>

      {/* CARDS GRID */}
      <main className="diamond-main">
        {cards.map((card, index) => (
          <div key={index} className="diamond-card-animation-layer">
            <article className="diamond-card">
              <img src={card.img} alt="Art" />
              <p>{card.text}</p>
              <a href="#">{card.link}</a>
            </article>
          </div>
        ))}
      </main>
    </div>
  );
};

export default DiamondShowcase;