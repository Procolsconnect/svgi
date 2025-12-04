import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './CampusEventGallery.module.css';

const apiurl = import.meta.env.VITE_API_URL;

const HorizontalScrollGallery = () => {
  const portfolioRef = useRef(null);
  const stripRef = useRef(null);
  const [projectImages, setProjectImages] = useState([]);

  useEffect(() => {
    axios.get(`${apiurl}/api/campus/eventgallery`)
      .then(res => {
        setProjectImages(res.data.data.map(img => img.image));
      })
      .catch(err => console.error('Error loading event images:', err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!stripRef.current || !portfolioRef.current) return;

      const strip = stripRef.current;
      const portfolio = portfolioRef.current;
      const rect = portfolio.getBoundingClientRect();

      if (rect.top > 0) {
        strip.style.transform = "translateX(0px)";
        return;
      }

      const scrolled = Math.abs(rect.top);
      const maxScroll = strip.scrollWidth - window.innerWidth;
      const translateX = Math.min(scrolled, maxScroll);
      strip.style.transform = `translateX(-${translateX}px)`;
    };

    const updateStripWidth = () => {
      if (stripRef.current && portfolioRef.current) {
        const stripWidth = stripRef.current.scrollWidth;
        portfolioRef.current.style.setProperty('--stripWidth', `${stripWidth}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateStripWidth);
    handleScroll();
    updateStripWidth();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateStripWidth);
    };
  }, [projectImages]);

  return (
    <div className={styles.root}>
      {/* Top Text Section */}
      <section className={styles.panel}>
        <h3 className={styles.mainHeading}>Campus Events</h3>
        <p className={styles.mainText}>
          Campus events are activities like sports days, cultural festivals, seminars, and social gatherings
          that enrich the student experience beyond academics. They foster community and connection,
          helping students develop important life skills like communication, teamwork, and leadership
          through participation and organization. Engaging in these events can also enhance student
          satisfaction, retention, and help uncover future career interests.
        </p>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section className={styles.portfolio} ref={portfolioRef}>
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryStrip} ref={stripRef}>
            {projectImages.map((imgSrc, index) => (
              <div key={index} className={styles.projectWrap}>
                <img
                  src={imgSrc}
                  alt={`Campus event ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollGallery;