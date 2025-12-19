import React, { useState, useRef, useEffect } from 'react';

import styles from './Green.module.css';

export default function GreenSvgiCampus() {
  const [focalPoint, setFocalPoint] = useState({ x: 0, y: 0 });
  const [bgPosition, setBgPosition] = useState('0% 0%');
  const [isDragging, setIsDragging] = useState(false);
  const pickerRef = useRef(null);
  const pointRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging || !pickerRef.current) return;

      const rect = pickerRef.current.getBoundingClientRect();
      let x = event.clientX - rect.left - 12;
      let y = event.clientY - rect.top - 12;

      x = Math.max(0, Math.min(x, rect.width - 24));
      y = Math.max(0, Math.min(y, rect.height - 24));

      const xPercent = ((x / (rect.width - 24)) * 100).toFixed(1);
      const yPercent = ((y / (rect.height - 24)) * 100).toFixed(1);

      setFocalPoint({ x, y });
      setBgPosition(`${xPercent}% ${yPercent}%`);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const photoStreamImages = [
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05620_qfwycq.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05462_b33uvp.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05489_mqzktl.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05476_dlkjza.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05497_abbd3c.jpg',
  ];

  return (
    <div className={styles.gsvgiCampusRoot}>
      {/* Hero Section */}
      <div className={`${styles.gsvgiHeroSection} ${styles.gsvgiHeroOverlay}`}>
        <img
          className={styles.gsvgiHeroImage}
          src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?auto=format&fit=crop&w=1000&q=80"
          alt="Hero Background"
        />
        <h1 className={styles.gsvgiHeroTitle}>Green SVGI</h1>
      </div>

      {/* Title Section */}
      <div className={styles.gsvgiTitleSection}>
        <h1 className={styles.gsvgiPageTitle}>
          <div>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="S">S</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="V">V</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="G">G</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="I">I</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="">&nbsp;</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="G">G</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="R">R</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="E">E</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="E">E</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="N">N</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="">&nbsp;</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="C">C</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="A">A</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="M">M</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="P">P</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="U">U</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="S">S</span>
          </div>
          <div>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="A">A</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="N">N</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="">&nbsp;</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="E">E</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="C">C</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="O">O</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="">&nbsp;</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="F">F</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="R">R</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="I">I</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="E">E</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="N">N</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="D">D</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="L">L</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="Y">Y</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="">&nbsp;</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="C">C</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="A">A</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="M">M</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="P">P</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="U">U</span>
            <span className={`${styles.gsvgiGlitch} ${styles.gsvgiCharacter}`} data-text="S">S</span>
          </div>
        </h1>
      </div>

      {/* Preview Section */}
      <div className={styles.gsvgiContainer}>

        <div className={styles.gsvgiViewport}>
          <div className={styles.gsvgiBgContainer} style={{ backgroundPosition: bgPosition }}></div>
        </div>

        <div className={styles.gsvgiPositioner}>
          <p className={styles.gsvgiPickerTitle}>Choose background image focal point:</p>
          <div className={styles.gsvgiPicker} ref={pickerRef}>
            <img
              className={styles.gsvgiPickerImg}
              src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?auto=format&fit=crop&w=1000&q=80"
              alt="focal point"
            />
            <div
              ref={pointRef}
              className={styles.gsvgiPoint}
              onMouseDown={handleMouseDown}
              style={{
                left: `${focalPoint.x}px`,
                top: `${focalPoint.y}px`,
              }}
            />
          </div>
          <div className={styles.gsvgiResults}>
            Position: {((focalPoint.x / (pickerRef.current?.offsetWidth - 24 || 1)) * 100).toFixed(1)}% {((focalPoint.y / (pickerRef.current?.offsetHeight - 24 || 1)) * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <ul className={styles.gsvgiGallery}>
        {photoStreamImages.map((img, idx) => (
          <li key={idx} className={styles.gsvgiGalleryItem}>
            <img src={img} alt={`gallery-${idx}`} className={styles.gsvgiGalleryImg} />
          </li>
        ))}
        <li className={styles.gsvgiGalleryItem}></li>
      </ul>
    </div>
  );
}