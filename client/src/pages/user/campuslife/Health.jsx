import React from "react";
import styles from "./HealthService.module.css";

const HealthService = () => {
  return (
    <div className={styles.container}>

      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=400&fit=crop"
          alt="Hero Background"
        />
        <h1>Health Service</h1>
      </div>

      {/* FACILITIES */}
      <section className={styles.wrap}>
        <div className={styles.home}>

          <div className={styles.textSide}>
            <h2 className={styles.sectionHeading}>Our Facilities</h2>

            <div className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit
              deleniti tempore repudiandae, similique quia iusto iste non, ab enim
              culpa officia corporis excepturi molestias aperiam? Dolorum, enim saepe
              voluptates numquam illo nisi odit, rerum, autem animi ipsa recusandae
              consequatur blanditiis aperiam quaerat pariatur. Dolore, aliquam.
              Voluptate vel est dignissimos?
            </div>
          </div>

          <div className={styles.circle}></div>
        </div>
      </section>

      {/* SCROLLING SECTIONS */}
      <div className={styles.main}>
        {[1,2,3,4,5,6,7,8,9,10].map((n) => (
          <section
            key={n}
            className={
              `${styles.scrollSection} ${n % 2 === 0 ? styles.scrollSectionEven : ""}`
            }
          >
            <img
              src={`https://picsum.photos/400/400?random=${n}`}
              alt={`Section ${n}`}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Section {n} content.
            </p>
          </section>
        ))}
      </div>

    </div>
  );
};

export default HealthService;
