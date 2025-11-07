import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./WhySvg.css";
const ServiceOfferings = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

//   const styles = `
//     .service-container {
//       background-color: #111827;
//       color: white;
//       height: 120vh;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       padding: 20px;
//       overflow: hidden;
//     }

//     .service-header {
//       text-align: center;
//       margin-bottom: 1rem;
//       flex-shrink: 0;
//     }

//     .service-label {
//       color: #9ca3af;
//       font-size: 0.875rem;
//       max-width: 28rem;
//       margin: 0 auto 0.25rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-wrap: wrap;
//       gap: 0.5rem;
//       text-transform: capitalize;
//     }

//     @media (min-width: 768px) {
//       .service-label {
//         font-size: 1.125rem;
//         margin-bottom: 0.5rem;
//       }
//     }

//     .service-label svg {
//       color: #4f46e5;
//       width: 18px;
//       height: 18px;
//     }

//     @media (min-width: 768px) {
//       .service-label svg {
//         width: 24px;
//         height: 24px;
//       }
//     }

//     .service-title {
//       color: white;
//       font-size: 1.25rem;
//       font-weight: 600;
//       max-width: 48rem;
//       margin: 0 auto;
//       line-height: 1.2;
//       font-family: "Playfair Display", serif;
//       font-weight: 400;
//     }

//     @media (min-width: 640px) {
//       .service-title {
//         font-size: 1.5rem;
//       }
//     }

//     @media (min-width: 1024px) {
//       .service-title {
//         font-size: 1.875rem;
//       }
//     }

//     .service-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 0.75rem;
//       max-width: 56rem;
//       margin: 0 auto;
//       text-align: left;
//       flex: 1;
//       align-content: center;
//       min-height: 0;
//     }

//     @media (min-width: 768px) {
//       .service-grid {
//         gap: 1.25rem;
//       }
//     }

//     .service-card {
//       position: relative;
//       background-color: #1f2937;
//       padding: 1.25rem;
//       border-radius: 0.375rem;
//       overflow: hidden;
//       cursor: pointer;
//       transition: box-shadow 0.6s ease;
//       display: flex;
//       flex-direction: column;
//       justify-content: flex-end;
//       min-height: 200px;
//     }

//     @media (min-width: 768px) {
//       .service-card {
//         padding: 2rem;
//         min-height: 260px;
//       }
//     }

//     @media (min-width: 1024px) {
//       .service-card {
//         padding: 2rem;
//         min-height: 280px;
//       }
//     }

//     .service-card:hover {
//       box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.53);
//     }

//     .card-background {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background-color: #4f46e5;
//       transition: clip-path 0.6s ease;
//       z-index: 0;
//       top: 0;
//       left: 0;
//     }

//     .service-card:nth-child(1) .card-background {
//       bottom: 0;
//       right: 0;
//       clip-path: circle(calc(80px + 5vw) at 100% 100%);
//     }

//     .service-card:nth-child(1):hover .card-background {
//       clip-path: circle(110vw at 100% 100%);
//     }

//     .service-card:nth-child(2) .card-background {
//       bottom: 0;
//       left: 0;
//       clip-path: circle(calc(80px + 5vw) at 0% 100%);
//     }

//     .service-card:nth-child(2):hover .card-background {
//       clip-path: circle(110vw at 0% 100%);
//     }

//     .service-card:nth-child(3) .card-background {
//       top: 0;
//       right: 0;
//       clip-path: circle(calc(80px + 5vw) at 100% 0%);
//     }

//     .service-card:nth-child(3):hover .card-background {
//       clip-path: circle(110vw at 100% 0%);
//     }

//     .service-card:nth-child(4) .card-background {
//       top: 0;
//       left: 0;
//       clip-path: circle(calc(80px + 5vw) at 0% 0%);
//     }

//     .service-card:nth-child(4):hover .card-background {
//       clip-path: circle(110vw at 0% 0%);
//     }

//     .card-content {
//       position: relative;
//       z-index: 1;
//     }

//     .card-content-wrapper {
//       display: flex;
//       flex-direction: column;
//     }

//     .card-title {
//       font-family: "Playfair Display", serif;
//       color: white;
//       margin-bottom: 0.5rem;
//       font-size: 0.8rem;
//       line-height: 1.2;
//       font-weight: 400;
//     }

//     @media (min-width: 640px) {
//       .card-title {
//         font-size: 1.125rem;
//         margin-bottom: 0.75rem;
//       }
//     }

//     @media (min-width: 1024px) {
//       .card-title {
//         font-size: 1.5rem;
//         margin-bottom: 1rem;
//       }

//       .service-card:nth-child(1) .card-content-wrapper {
//         padding-right: 8rem;
//       }

//       .service-card:nth-child(2) .card-content-wrapper {
//         padding-left: 8rem;
//       }

//       .service-card:nth-child(3) .card-content-wrapper {
//         padding-right: 8rem;
//       }

//       .service-card:nth-child(4) .card-content-wrapper {
//         padding-left: 8rem;
//       }
//     }

//     .card-description {
//       color: #d1d5db;
//       transition: color 0.6s ease;
//       line-height: 1.2;
//       font-size: 0.8rem;
//     }

//     @media (min-width: 640px) {
//       .card-description {
//         font-size: 0.9rem;
//         line-height: 1.5;
//       }
//     }

//     @media (min-width: 1024px) {
//       .card-description {
//         font-size: 0.95rem;
//       }
//     }

//     .service-card:hover .card-description {
//       color: white;
//     }

//     .card-circle {
//       position: absolute;
//       width: 120px;
//       height: 120px;
//       z-index: 0;
//       background-size: cover;
//       background-position: center;

//     }

//     @media (min-width: 768px) {
//       .card-circle {
//         width: 160px;
//         height: 160px;
//       }
//     }

//     // @media (min-width: 1024px) {
//     //   .card-circle {
//     //     display: block;
//     //     width: 208px;
//     //     height: 200px;
//     //   }
//     // }

//     .card-circle.card-1 {
//       bottom: 0;
//       right: 0;
//       clip-path: circle(calc(80px + 5vw) at 100% 100%);
//     }

//     .card-circle.card-2 {
//       bottom: 0;
//       left: 0;
//       clip-path: circle(calc(80px + 5vw) at 0% 100%);
//     }

//     .card-circle.card-3 {
//       top: 0;
//       right: 0;
//       clip-path: circle(calc(80px + 5vw) at 100% 0%);
//     }

//     .card-circle.card-4 {
//       top: 0;
//       left: 0;
//       clip-path: circle(calc(80px + 5vw) at 0% 0%);
//     }
//   `;

  const cards = [
    {
      id: 1,
      title: "🎯 Curriculum Designed with Industry Experts",
      description:
        "Our academic programs are developed in collaboration with leading industry professionals.",
      image: "/images/whatsapp1.jpg",
    },
    {
      id: 2,
      title: "💼 On-Campus IT Companies Offering Real-Time Experience",
      description:
        "Students get hands-on exposure to real-time projects through our partnered IT companies within the campus.",
      image: "/images/whatsapp2.jpg",
    },
    {
      id: 3,
      title: "🎓 100% Placement-Oriented Training with MNC Tie-ups",
      description:
        "Our placement cell offers intensive training focused on employability and career growth with strong MNC partnerships.",
      image: "/images/whatsapp3.jpg",
    },
    {
      id: 4,
      title: "🎓 Scholarships & Financial Aid for Deserving Students",
      description:
        "We provide scholarships and financial assistance to meritorious and financially challenged students.",
      image: "/images/whatsapp4.jpg",
    },
  ];

  return (
    <>

      <section className="service-container">
        <div className="service-header">
          <div className="service-label">
            what we're offering
            <ArrowRight size={24} />
          </div>

          <h1 className="service-title">Why Choose SVGI?</h1>
        </div>

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
                  backgroundImage: `url(${card.image})`,
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
    </>
  );
};

export default ServiceOfferings;