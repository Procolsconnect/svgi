import React, { useEffect, useRef, useState } from 'react';
import './CampusEventGallery.css';

const HorizontalScrollGallery = () => {
  const portfolioRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stripRef.current || !portfolioRef.current) return;

      const strip = stripRef.current;
      const portfolio = portfolioRef.current;
      const rect = portfolio.getBoundingClientRect();

      // Only start scrolling when section top reaches viewport top
      if (rect.top > 0) {
        strip.style.transform = "translateX(0px)";
        return;
      }

      // Calculate how far we've scrolled into the pinned section
      const scrolled = Math.abs(rect.top);
      const maxScroll = strip.scrollWidth - window.innerWidth;
      
      // Clamp the translation to not exceed max scroll
      const translateX = Math.min(scrolled, maxScroll);
      strip.style.transform = `translateX(-${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set CSS variable for margin-bottom calculation
    const updateStripWidth = () => {
      if (stripRef.current && portfolioRef.current) {
        const stripWidth = stripRef.current.scrollWidth;
        portfolioRef.current.style.setProperty('--stripWidth', `${stripWidth}px`);
      }
    };

    updateStripWidth();
    window.addEventListener('resize', updateStripWidth);
    return () => window.removeEventListener('resize', updateStripWidth);
  }, []);

  const projectImages = [
    'https://assets.codepen.io/16327/portrait-image-1.jpg',
    'https://assets.codepen.io/16327/portrait-image-2.jpg',
    'https://assets.codepen.io/16327/portrait-image-3.jpg',
    'https://assets.codepen.io/16327/portrait-image-4.jpg',
    'https://assets.codepen.io/16327/portrait-image-5.jpg',
    'https://assets.codepen.io/16327/portrait-image-6.jpg'
  ];

  return (
    <div className="hsg-root">
      {/* TOP SECTION WITH LEFT-ALIGNED CONTENT */}
      <section className="hsg-panel">
        <h3 className="hsg-main-heading">Campus Events</h3>
        <p className="hsg-main-text">
          Campus events are activities like sports days, cultural festivals, seminars, and social gatherings
          that enrich the student experience beyond academics. They foster community and connection,
          helping students develop important life skills like communication, teamwork, and leadership
          through participation and organization. Engaging in these events can also enhance student
          satisfaction, retention, and help uncover future career interests.
        </p>
      </section>

      {/* GALLERY SECTION */}
      <section className="hsg-portfolio" ref={portfolioRef}>
        <div className="hsg-container-fluid">
          <div className="hsg-horiz-gallery-wrapper">
            <div 
              className="hsg-horiz-gallery-strip"
              ref={stripRef}
            >
              {projectImages.map((imgSrc, index) => (
                <div key={index} className="hsg-project-wrap">
                  <img 
                    src={imgSrc} 
                    alt={`Campus event ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default HorizontalScrollGallery;