import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./leadership.module.css";

const API_BASE = import.meta.env.VITE_API_URL + "/api";

export default function LeadershipPage() {
  const [hero, setHero] = useState(null);
  const [materialCards, setMaterialCards] = useState([]);
  const [quoteCards, setQuoteCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, materialRes, quoteRes] = await Promise.all([
          axios.get(`${API_BASE}/leadership/hero`),
          axios.get(`${API_BASE}/leadership/material-card`),
          axios.get(`${API_BASE}/leadership/quote`)
        ]);

        setHero(heroRes.data.data);
        setMaterialCards(materialRes.data.data || []);
        setQuoteCards(quoteRes.data.data || []);
      } catch (error) {
        console.error("Error fetching leadership data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCardToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  if (loading) return <div>Loading Leadership...</div>;

  // Helper to normalize color names for CSS modules (e.g. 'red' -> 'Red')
  const getColorClass = (c) => {
    if (!c) return styles['Red'];
    const normalized = c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();
    return styles[normalized] || styles['Red'];
  };

  // Featured top cards
  const topCards = materialCards.slice(0, 2);
  // We'll show ALL material cards in the grid as per user preference (avoiding "only one card" issue)
  const fullGridCards = materialCards;

  return (
    <div className={styles.body}>
      {/* HERO */}
      <div id="lp-hero" className={styles.hero}>
        <img src={hero?.image || "/images/instu.jpg"} alt="Hero Background" />
        <h1>{hero?.title || "Leadership"}</h1>
      </div>

      {/* Leadership Heading */}
      <div className={styles.leftHeading}>Leadership That Inspires</div>

      {/* Card Row 1 - Static Chairman */}
      <div className={styles.wholeCard}>
        <div className={styles.card}>
          <div className={styles.overflow}>
            <div className={styles.model}>
              <img
                src="/images/WhatsApp_Image_2025-08-01_at_16.31.09_43d29991-removebg-preview.png"
                alt="Chairman"
                className={styles.imageModel}
              />
            </div>
          </div>
          <div className={styles.glass}></div>
          <div className={styles.content}>
            <h2>Thiru. P. VENKATACHALAM</h2>
            <p>Chairman</p>
          </div>
        </div>
        <p>
          Shree Venkateshwara group of institutions set to take the mission of
          implementation of the newest educational methodologies which enables
          the innovative thinking of students and initiative performance...
        </p>
      </div>

      {/* Card Row 2 - Static Secretary */}
      <div className={styles.wholeCards}>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.overflow}>
            <div className={styles.model}>
              <img
                src="/images/WhatsApp_Image_2025-08-01_at_16.15.06_95e75b66-removebg-preview.png"
                alt="Secretary"
                className={styles.imageModel}
              />
            </div>
          </div>
          <div className={styles.glass}></div>
          <div className={styles.content}>
            <h2>Mr.K.C.Karupanan</h2>
            <p>Secretary</p>
          </div>
        </div>
        <p>
          Shree Venkateshwara Group of Institutions takes keen interest in
          updating its infrastructures to meet the technological revolution...
        </p>
      </div>

      {/* MATERIAL CARDS SECTION */}
      {fullGridCards.length > 0 && (
        <section className={styles.materialSection}>
          <div className={styles.container}>
            <div className={styles.pageHeader}>
              <h1>
                Material Cards Demo
                <br />
                <small>
                  See full features on{" "}
                  <a href="https://github.com/marlenesco/material-cards" target="_blank" rel="noreferrer">
                    Github
                  </a>
                </small>
              </h1>
            </div>

            <div className={styles.row}>
              {fullGridCards.map((card, index) => (
                <div key={index} className={styles.colMd4}>
                  <article
                    className={`${styles.materialCard} ${getColorClass(card.color)} ${activeCard === index ? styles.mcActive : ""
                      }`}
                  >
                    <div className={styles.mcContent}>
                      <div className={styles.imgContainer}>
                        <img src={card.img} alt={card.name} />
                      </div>
                      <div className={styles.cardHeader}>
                        <span>{card.name}</span>
                        <strong>{card.movie}</strong>
                      </div>
                      <div className={styles.mcDescription}>{card.desc}</div>
                    </div>

                    <button className={styles.mcBtnAction} onClick={() => handleCardToggle(index)}>
                      <i className={activeCard === index ? "fa fa-times" : "fa fa-bars"}></i>
                    </button>

                    <div className={styles.mcFooter}>
                      <h4>Social</h4>
                      <div className={styles.socialLinks}>
                        {card.social?.facebook && (
                          <a href={card.social.facebook} target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <i className="fab fa-facebook"></i>
                          </a>
                        )}
                        {card.social?.twitter && (
                          <a href={card.social.twitter} target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                        {card.social?.linkedin && (
                          <a href={card.social.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <i className="fab fa-linkedin"></i>
                          </a>
                        )}
                        {card.social?.googlePlus && (
                          <a href={card.social.googlePlus} target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <i className="fab fa-google-plus"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUOTE SECTION + GRID CARDS */}
      {quoteCards.length > 0 && (
        <section className={styles.quoteSection}>
          <main className={styles.quoteMain}>
            <blockquote>I have never said any of those.</blockquote>
            <small>~ Multiple sources.</small>
          </main>

          <div className={styles.pageContent}>
            {quoteCards.map((c, i) => (
              <div key={i} className={styles.gridCard}>
                {/* Dynamically applying the background image to match the original design's appearance */}
                <div
                  className={styles.cardBg}
                  style={{
                    backgroundImage: `url(${c.image})`,
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%',
                    height: '110%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                />
                <div className={styles.gridContent}>
                  <h2 className={styles.title}>{c.title}</h2>
                  <p className={styles.copy}>{c.text}</p>
                  <button className={styles.btn}>
                    {c.link ? "Read More" : "View Trips"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <img src="/sun.png" alt="" className={styles.sun} />
          <img src="/left.png" alt="" className={styles.left} />
        </section>
      )}
    </div>
  );
}
