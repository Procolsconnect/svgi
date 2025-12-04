import React from 'react';
import styles from './Newshero.module.css';

const SVGINews = () => {
  return (
    <div className={styles.newshero}>
      {/* HERO */}
      <section className={styles['newshero-hero']}>
        <div className={styles['newshero-hero-content']}>
          <h1 className={styles['newshero-title']}>SVGI News</h1>
          <p className={styles['newshero-description']}>
            Breaking stories. Unfiltered truth. Delivered with clarity, courage, and style.
          </p>
        </div>

        <div className={styles['newshero-hero-image']}>
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
            alt="Journalism in action"
          />
        </div>
      </section>

      {/* VIDEO LEFT + TEXT RIGHT */}
      <section className={styles['newshero-feature']}>
        <div className={styles['newshero-video-wrapper']}>
          <iframe 
            className={styles['newshero-video']}
            src="https://www.youtube.com/embed/MeW8hfmJaTg?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={styles['newshero-text-content']}>
          <h2 className={styles['newshero-feature-title']}>
            Featured <span className={styles['newshero-highlight']}>Report</span>
          </h2>
          <p className={styles['newshero-feature-text']}>
            Exclusive on-the-ground coverage from conflict zones, hidden truths, 
            and stories the mainstream won't touch. This is journalism without compromise.
          </p>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['newshero-link']}
          >
            Watch Full Report
          </a>
        </div>
      </section>
    </div>
  );
};

export default SVGINews;