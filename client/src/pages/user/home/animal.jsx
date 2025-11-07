import React, { useState, useEffect, useRef } from 'react';
import './animal.css';

const BigCatStack = () => {
  const [k, setK] = useState(0);
  const n = 7;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--k', k);
    }
  }, [k]);

  const handleClick = (inc) => {
    setK((prev) => (prev + inc + n) % n);
  };

  const cards = [
    {
      title: 'Magizh 2025',
      desc: "This is the first time such a grand function has been held in our college. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: '/images/magizh .jpg',
      angle: '-7deg',
    },
    {
      title: 'National Service Awareness',
      desc: 'A discussion was held for students on National Service Awareness.',
      img: '/images/natunal .jpg',
      angle: '8deg',
    },
    {
      title: '1st Year Inauguration Ceremony',
      desc: 'Department of BE / B.Tech',
      img: '/images/inagration.jpg',
      angle: '-3deg',
    },
    {
      title: 'Tech Trend Path of Success',
      desc: 'The future of technology is bright and full of possibilities.',
      img: '/images/tech .jpg',
      angle: '6deg',
    },
    {
      title: 'Freshers Day 2025',
      desc: 'Department of Computer Application',
      img: '/images/Freshers.jpg',
      angle: '-11deg',
    },
    {
      title: 'Farewell Day 2025',
      desc: 'Grand celebration of the physiotherapy class.',
      img: '/images/farawell.jpg',
      angle: '9deg',
    },
    {
      title: 'Cougar',
      desc: 'Puma concolor',
      img: '/images/inagration.jpg',
      angle: '-4deg',
    },
  ];

  const currentCard = cards[k];

  return (
    <div className="bigcat-container">
      {/* === CENTERED HEADING === */}
      <h1 className="bigcat-heading">Latest Events</h1>

      {/* === MAIN CONTENT === */}
      <div className="bigcat-content">
        {/* === LEFT COLUMN === */}
        <div className="bigcat-left">
          {/* === Image Stack Section (No Counters Here) === */}
          <section ref={sectionRef} className="animal-section" style={{ '--n': n }}>
            {cards.map((card, index) => (
              <article
                key={index}
                className="animal-card"
                style={{ '--i': index, '--a': card.angle }}
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
          <div className="bigcat-title-row">
            <h2 className="bigcat-image-title">{currentCard.title}</h2>
            <span className="bigcat-counter">{k + 1}/{n}</span>
          </div>
          <p
            className="bigcat-image-desc"
            dangerouslySetInnerHTML={{ __html: currentCard.desc }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default BigCatStack;
