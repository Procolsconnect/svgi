import React from 'react';
import styles from './OurDiamonds.module.css';
import CommonHero from '../../../components/CommonHero';

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
    <div className={styles['diamond-showcase']}>
      {/* HERO */}
      <CommonHero apiEndpoint="/api/campus/diamondhero" defaultTitle="Our Diamonds" />

      {/* CARDS GRID */}
      <main className={styles['diamond-main']}>
        {cards.map((card, index) => (
          <div key={index} className={styles['diamond-card-animation-layer']}>
            <article className={styles['diamond-card']}>
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