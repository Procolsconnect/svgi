import React from "react";
import "./sports_section.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PlacementCards = () => {
  const scrollCards = (direction) => {
    const container = document.getElementById("placement-cardList");
    const card = container.querySelector(".placement-card-item");
    const scrollAmount = card.offsetWidth + 24;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      img: "../../../public/images/training.jpg",
      title: "AI-Powered Supply Chains",
      desc: "Explore how real-time data and automation are transforming logistics and redefining global supply chain resilience.",
    },
    {
      img: "../../../public/images/images.jpeg",
      title: "Building Trust with Responsible AI",
      desc: "Companies are putting transparency and ethics at the center of their AI development.",
    },
    {
      img: "../../../public/images/training 1.jpg",
      title: "Energy Innovation at Scale",
      desc: "Digital twins and analytics are helping speed up the transition to cleaner energy systems.",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/hdr-palettes-astro-op/src/assets/images/img-4.avif",
      title: "The Future of Smart Manufacturing",
      desc: "See how automation and IoT are enabling fast, precise production at scale.",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/hdr-palettes-astro-op/src/assets/images/img-5.avif",
      title: "Connected Construction",
      desc: "See how real-time collaboration tools and automation are streamlining complex building projects.",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/hdr-palettes-astro-op/src/assets/images/img-6.avif",
      title: "Financial Services Reimagined",
      desc: "AI and cloud infrastructure are redefining fraud detection and client experiences.",
    },
  ];

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
            {cards.map((card, index) => (
              <li className="placement-card-item" key={index}>
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
