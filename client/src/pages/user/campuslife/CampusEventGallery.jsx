import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CampusEventGallery.module.css';

const apiurl = import.meta.env.VITE_API_URL;
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollGallery = () => {
  const portfolioRef = useRef(null);
  const stripRef = useRef(null);
  const wrapperRef = useRef(null);
  const [projectImages, setProjectImages] = useState([]);

  useEffect(() => {
    axios.get(`${apiurl}/api/campus/eventgallery`)
      .then(res => {
        setProjectImages(res.data.data.map(img => img.image));
      })
      .catch(err => console.error('Error loading event images:', err));
  }, []);

  useEffect(() => {
    if (!stripRef.current || !wrapperRef.current || projectImages.length === 0) return;

    const mm = gsap.matchMedia();

    // Desktop Animation (Only runs if width > 900px)
    mm.add("(min-width: 901px)", () => {
      const strip = stripRef.current;
      const wrapper = wrapperRef.current;

      const getScrollAmount = () => {
        const stripWidth = strip.scrollWidth;
        const viewWidth = window.innerWidth;
        return -(stripWidth - viewWidth + 100);
      };

      gsap.to(strip, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Recalculate if dimensions change (e.g. images load)
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(strip);

      return () => resizeObserver.disconnect();
    });

    return () => {
      mm.revert();
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
      <section className={styles.portfolio} ref={wrapperRef}>
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