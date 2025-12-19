import React, { useRef, useEffect } from 'react';

import styles from './policies.module.css';

const PolicyCard = ({ index, text, tiltEffect }) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    const handleMouseMove = (event) => {
      const rect = wrap.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      let X, Y;
      if (tiltEffect === 'reverse') {
        X = ((offsetX - w / 2) / 3) / 3;
        Y = (-(offsetY - h / 2) / 3) / 3;
      } else if (tiltEffect === 'normal') {
        X = (-(offsetX - w / 2) / 3) / 3;
        Y = ((offsetY - h / 2) / 3) / 3;
      }

      card.style.setProperty('--rY', X.toFixed(2));
      card.style.setProperty('--rX', Y.toFixed(2));
      card.style.setProperty('--bY', (80 - X / 4).toFixed(2) + '%');
      card.style.setProperty('--bX', (50 - Y / 4).toFixed(2) + '%');
      card.style.transform = `rotateX(calc(${Y.toFixed(2)} * 1deg)) rotateY(calc(${X.toFixed(2)} * 1deg))`;
      card.style.backgroundPosition = `${(50 - Y / 4).toFixed(2)}% ${(80 - X / 4).toFixed(2)}%`;
    };

    const handleMouseEnter = () => {
      // Use styles.cardActive for the hashed class name
      card.classList.add(styles.cardActive);
    };

    const handleMouseLeave = () => {
      card.classList.remove(styles.cardActive);
      card.style.setProperty('--rY', '0');
      card.style.setProperty('--rX', '0');
      card.style.setProperty('--bY', '80%');
      card.style.setProperty('--bX', '50%');
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      card.style.backgroundPosition = '50% 80%';
    };

    wrap.addEventListener('mousemove', handleMouseMove);
    wrap.addEventListener('mouseenter', handleMouseEnter);
    wrap.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrap.removeEventListener('mousemove', handleMouseMove);
      wrap.removeEventListener('mouseenter', handleMouseEnter);
      wrap.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [tiltEffect]);

  // Compose dynamic classes using styles object
  const cardClass = `${styles.card} ${index === 2 ? styles.card2 : index === 3 ? styles.card3 : ''
    }`;

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div ref={cardRef} className={cardClass}>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default function PolicyCards() {
  const policies = [
    { id: 1, text: '1. Equity, Diversity and Inclusion Policy', tilt: 'reverse' },
    { id: 2, text: '2. Anti Corruption and Anti Bribery Policy', tilt: 'normal' },
    { id: 3, text: '3. Establishing an Ethical Ambience in the Institution', tilt: 'reverse' }
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&display=swap"
        rel="stylesheet"
      />

      <div className={styles.reset}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
              alt="Hero Background"
              className={styles.heroImg}
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroTitle}>
              SVGI Policies
              <div className={styles.heroUnderline} />
            </div>
          </div>

          {/* Section Heading */}
          <div className={styles.sectionHeadingWrapper}>
            <h1 className={styles.sectionTitle}>Policies on Core Values</h1>
            <p className={styles.sectionSubtitle}>Hover over the cards</p>
          </div>

          {/* Cards */}
          <section className={styles.main}>
            {policies.map((policy) => (
              <PolicyCard
                key={policy.id}
                index={policy.id}
                text={policy.text}
                tiltEffect={policy.tilt}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}