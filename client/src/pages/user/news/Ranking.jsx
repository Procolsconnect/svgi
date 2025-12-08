import React from "react";
import styles from "./Ranking.module.css";

export default function RankingsPosters() {
  return (
    <section className={styles.home}>
      <div className={styles.cards}>
        {/* LEFT CARD */}
        <div className={styles.cardWrapper}>
          <div className={styles.textWrapper}>
            <h2>Rankings 2025</h2>
            <p>Top performing institutions evaluated nationwide</p>
          </div>
          <div className={styles.imageCard}>
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"
              alt="Rankings 2025"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.cardWrapper}>
          <div className={styles.textWrapperRight}>
            <h2>Poster 2025</h2>
            <p>Latest creative posters released nationwide</p>
          </div>
          <div className={styles.imageCard}>
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"
              alt="Poster 2025"
            />
          </div>
        </div>
      </div>
    </section>
  );
}