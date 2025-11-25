import React from "react";
import "./HealthService.css"; // Uses fully scoped CSS below

const HealthService = () => {
  const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur accusamus quaerat corrupti quam consequatur modi saepe vitae, obcaecati veritatis dolorum officia itaque inventore illum quae sint minus totam magnam!",
    "Aut veritatis perspiciatis nulla natus, possimus laborum nam perferendis magni debitis id accusantium consequuntur laboriosam reprehenderit voluptas vel magnam error. Pariatur sit amet, aliquid illo quas alias reprehenderit quibusdam velit.",
    "Necessitatibus ipsa iste consectetur provident in blanditiis sapiente consequuntur! Sit omnis odit nihil quam totam voluptates laudantium quis. Quo recusandae voluptatibus ipsa accusantium modi neque molestias, magnam facilis unde. Dolores!",
    "Eum numquam odit, quaerat repellendus quidem asperiores, itaque officiis quam sequi, temporibus dolorum. Molestias, accusamus aspernatur officia placeat natus fugit, iusto voluptas omnis porro exercitationem, distinctio sit reiciendis tempora vitae?",
    "Animi aliquid reiciendis voluptates velit dolor debitis ipsum quam odio vitae? Eligendi facilis nobis voluptate tenetur incidunt qui laudantium animi totam suscipit est veniam obcaecati nam hic, mollitia quis nisi.",
    "Blanditiis recusandae, unde voluptate minus reprehenderit dignissimos nesciunt sint fugit tempora alias doloremque consequatur beatae numquam possimus ex perferendis non quod, eaque nobis laboriosam officiis. A in inventore consectetur voluptates.",
    "Quod quam dolorem debitis esse libero aut, aliquid repellendus. Totam, facere? Molestias dignissimos numquam adipisci voluptates voluptatum eos error explicabo itaque quod quam? Eum omnis ipsum commodi, eaque veniam vel?",
    "Nemo, dignissimos officiis, ipsum nulla suscipit aperiam ratione dicta quos sapiente sed at molestiae. Autem tempora iure dignissimos veritatis velit cumque, delectus rerum, dicta nobis accusantium veniam nostrum nulla consequatur.",
    "Neque, ipsum, at illo harum ut cupiditate adipisci unde quis, illum veniam laboriosam. Quasi adipisci nemo perferendis eligendi beatae sunt earum quaerat, soluta odit perspiciatis quibusdam recusandae? Quia, dolorum. Quas.",
    "Quod praesentium natus ullam recusandae soluta quidem aliquid? Accusamus aspernatur sed odit a est quisquam repellat nihil nobis, placeat maxime. Cum maiores minus vero facilis dolorem sit ab dolores eius?",
  ];

  return (
    <div className="hs-container">
      {/* HERO */}
      <div className="hs-hero">
        <img src="hero img.jpg" alt="Hero" className="hs-hero-img" />
        <h1 className="hs-hero-title">Health Service</h1>
      </div>

      {/* FACILITIES */}
      <section className="hs-wrap">
        <div className="hs-home">
          <div className="hs-text-side">
            <h2 className="hs-section-heading">Our Facilities</h2>
            <div className="hs-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit
              deleniti tempore repudiandae, similique quia iusto iste non, ab enim
              culpa officia corporis excepturi molestias aperiam? Dolorum, enim saepe
              voluptates numquam illo nisi odit, rerum, autem animi ipsa recusandae
              consequatur blanditiis aperiam quaerat pariatur. Dolore, aliquam.
              Voluptate vel est dignissimos?
            </div>
          </div>
          <div className="hs-circle"></div>
        </div>
      </section>

      {/* SCROLLING SECTIONS - EXACT ORIGINAL ANIMATION */}
      <main className="hs-main">
        <div className="hs-content-wrapper">
        {paragraphs.map((text, i) => (
          <section key={i} className="hs-section">
            <img
              src={`https://picsum.photos/400/400?random=${i + 1}`}
              alt=""
              className="hs-section-img"
            />
            <p className="hs-section-text">{text}</p>
          </section>
        ))}
        </div>
      </main>
    </div>
  );
};

export default HealthService;