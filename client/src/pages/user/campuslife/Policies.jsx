import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './policies.module.css';
import CommonHero from '../../../components/CommonHero';

const API_BASE = import.meta.env.VITE_API_URL + '/api/campus';

const PolicyCard = ({ index, text, image, tiltEffect }) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

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
      } else {
        X = 0; Y = 0;
      }

      card.style.setProperty('--rY', X.toFixed(2));
      card.style.setProperty('--rX', Y.toFixed(2));
      card.style.setProperty('--bY', (80 - X / 4).toFixed(2) + '%');
      card.style.setProperty('--bX', (50 - Y / 4).toFixed(2) + '%');
      card.style.transform = `rotateX(calc(${Y.toFixed(2)} * 1deg)) rotateY(calc(${X.toFixed(2)} * 1deg))`;
      card.style.backgroundPosition = `${(50 - Y / 4).toFixed(2)}% ${(80 - X / 4).toFixed(2)}%`;
    };

    const handleMouseEnter = () => {
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
  const cardClass = `${styles.card} ${index === 2 ? styles.card2 : index === 3 ? styles.card3 : ''}`;

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div
        ref={cardRef}
        className={cardClass}
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.1)), url("${image || 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'}")`
        }}
      >
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default function PolicyCards() {
  const [titleData, setTitleData] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [titleRes, cardRes] = await Promise.all([
          axios.get(`${API_BASE}/policytitle`),
          axios.get(`${API_BASE}/policycard`)
        ]);

        if (titleRes.data.success && titleRes.data.data.length > 0) {
          setTitleData(titleRes.data.data[0]);
        }
        setCards(cardRes.data.data || []);
      } catch (err) {
        console.error("Error fetching policy data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&display=swap"
        rel="stylesheet"
      />

      <div className={styles.reset}>
        <div className={styles.container}>
          {/* Hero Section */}
          <CommonHero apiEndpoint="/api/campus/policyhero" />

          {/* Section Heading */}
          <div className={styles.sectionHeadingWrapper}>
            <h1 className={styles.sectionTitle}>{titleData?.title || "Policies on Core Values"}</h1>
            <p className={styles.sectionSubtitle}>{titleData?.subTitle || "Hover over the cards"}</p>
          </div>

          {/* Cards */}
          <section className={styles.main}>
            {cards.length > 0 ? (
              cards.map((policy, idx) => (
                <PolicyCard
                  key={policy._id || idx}
                  index={idx + 1}
                  text={`${idx + 1}. ${policy.title}`}
                  image={policy.image}
                  tiltEffect={idx % 2 === 0 ? 'reverse' : 'normal'}
                />
              ))
            ) : !loading && (
              /* Fallback cards */
              [
                { id: 1, text: '1. Equity, Diversity and Inclusion Policy', tilt: 'reverse' },
                { id: 2, text: '2. Anti Corruption and Anti Bribery Policy', tilt: 'normal' },
                { id: 3, text: '3. Establishing an Ethical Ambience in the Institution', tilt: 'reverse' }
              ].map((p) => (
                <PolicyCard
                  key={p.id}
                  index={p.id}
                  text={p.text}
                  tiltEffect={p.tilt}
                />
              ))
            )}
          </section>
        </div>
      </div>
    </>
  );
}