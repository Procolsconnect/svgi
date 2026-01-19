import React, { useState, useEffect, useRef } from 'react';
import styles from './Milo.module.css';

// Using Unsplash images for the slider
const sliderImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&q=80&w=800", label: "Classroom Activities" },
  { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", label: "Campus Life" },
  { id: 3, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", label: "Graduation Day" },
  { id: 4, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", label: "Library Sessions" },
  { id: 5, src: "https://images.unsplash.com/photo-1544531696-934841a88b99?auto=format&fit=crop&q=80&w=800", label: "Team Projects" },
  { id: 6, src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800", label: "University Park" },
];

export default function Milo() {
  const [startIndex, setStartIndex] = useState(0);
  const totalItems = sliderImages.length;
  // Use a ref to ensure the interval closure always sees current state or valid functions if needed,
  // but strictly for interval clearing logic.
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Auto-slide effect
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % totalItems);
    }, 3000); // 3 seconds per slide

    return () => {
      resetTimeout();
    };
  }, [startIndex]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Calculate distinct items to display based on startIndex
  // We want to show 2 items, but we want the transition to be smooth.
  // A common trick is to render all items or a large window and translate, but 
  // with this "window" approach, we just select the current 2 to render.
  // To make it smooth via CSS, we might need to actually render all of them and translate the track.
  // Let's switch to transforming the track for true smoothness.

  return (
    <div className={styles.mainContainer}>
      {/* Background/Map Section (Left) */}
      <div className={styles.mapSection}>
        {/* Map is set via CSS background */}
      </div>

      {/* Content Section (Right) */}
      <div className={styles.contentSection}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>News SVGI</h2>
          <p className={styles.subtitle}>Explore the News  and Events</p>
        </div>

        <div className={styles.sliderWrapper}>
          <button onClick={prevSlide} className={styles.navButton} aria-label="Previous">
            &#10094;
          </button>

          <div className={styles.sliderOverflow}>
            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(calc(-1 * var(--slide-width, 50%) * ${startIndex}))` }}
            >
              {/* Render items twice to allow seamless infinite scroll feel (optional) or just map normally */}
              {sliderImages.map((img) => (
                <div key={img.id} className={styles.slide}>
                  <img src={img.src} alt={img.label} className={styles.slideImage} />
                  <div className={styles.imageLabel}>{img.label}</div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className={styles.navButton} aria-label="Next">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}