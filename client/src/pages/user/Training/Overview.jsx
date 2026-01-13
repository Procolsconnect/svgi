import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import styles from './Overview.module.css';
import CommonHero from '../../../components/CommonHero';

const API_BASE = import.meta.env.VITE_API_URL + "/api";

// Desktop 3D positions
const positions = [
  { height: 310, z: 220, rotateY: 48, y: 0, x: 0, clip: "polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)" },
  { height: 290, z: 165, rotateY: 35, y: 0, x: 0, clip: "polygon(0px 0px, 100% 8%, 100% 92%, 0px 100%)" },
  { height: 248, z: 110, rotateY: 15, y: 0, x: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
  { height: 210, z: 66, rotateY: 15, y: 0, x: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
  { height: 177, z: 46, rotateY: 6, y: 0, x: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
  { height: 155, z: 0, rotateY: 0, y: 0, x: 0, clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  { height: 177, z: 54, rotateY: 348, y: 0, x: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
  { height: 210, z: 89, rotateY: -15, y: 0, x: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
  { height: 248, z: 135, rotateY: -15, y: 1, x: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
  { height: 290, z: 195, rotateY: 325, y: 0, x: 0, clip: "polygon(0px 8%, 100% 0px, 100% 100%, 0px 92%)" },
  { height: 310, z: 240, rotateY: 312, y: 0, x: 0, clip: "polygon(0px 10%, 100% 0px, 100% 100%, 0px 90%)" }
];

// Mobile Flat positions (Linear spread using translateX)
const mobilePositions = [
  { height: 155, z: -200, rotateY: 0, y: 0, x: -300, opacity: 0, clip: "none" }, // Hidden left
  { height: 155, z: -150, rotateY: 0, y: 0, x: -240, opacity: 0.5, clip: "none" },
  { height: 155, z: -100, rotateY: 0, y: 0, x: -180, opacity: 0.7, clip: "none" },
  { height: 155, z: -50, rotateY: 0, y: 0, x: -120, opacity: 0.9, clip: "none" },
  { height: 155, z: -25, rotateY: 0, y: 0, x: -60, opacity: 1, clip: "none" }, // Near Left
  { height: 180, z: 0, rotateY: 0, y: 0, x: 0, opacity: 1, clip: "none" },    // Center (Active)
  { height: 155, z: -25, rotateY: 0, y: 0, x: 60, opacity: 1, clip: "none" }, // Near Right
  { height: 155, z: -50, rotateY: 0, y: 0, x: 120, opacity: 0.9, clip: "none" },
  { height: 155, z: -100, rotateY: 0, y: 0, x: 180, opacity: 0.7, clip: "none" },
  { height: 155, z: -150, rotateY: 0, y: 0, x: 240, opacity: 0.5, clip: "none" },
  { height: 155, z: -200, rotateY: 0, y: 0, x: 300, opacity: 0, clip: "none" } // Hidden right
];

const TrainingPlacementsPage = () => {
  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [cardInfo, setCardInfo] = useState({ title: '', desc: '' });
  const [cards, setCards] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [processedSteps, setProcessedSteps] = useState(0);
  const [cloneStyle, setCloneStyle] = useState(null);
  const cardsRef = useRef([]);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const sectionsRef = useRef([]);

  // Resize listener to update isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [sliderRes] = await Promise.all([
          axios.get(`${API_BASE}/placementslider`)
        ]);

        if (sliderRes.data.data) {
          setCards(sliderRes.data.data);
        }
      } catch (err) {
        console.error("Error fetching Training Overview data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // ... Other functions ...

  const rotateSlider = useCallback((direction) => {
    if (expandedCard !== null) return;

    setCards(prevCards => {
      const newCards = [...prevCards];
      if (direction === 'next') {
        const first = newCards.shift();
        newCards.push(first);
      } else {
        const last = newCards.pop();
        newCards.unshift(last);
      }
      return newCards;
    });
  }, [expandedCard]);

  const handleCardClick = useCallback((index) => {
    if (isDragging || expandedCard !== null) return;

    const displayCardsCount = Math.min(cards.length, 11);
    const startPos = Math.max(0, Math.floor((11 - displayCardsCount) / 2));
    const cardsArrayIndex = index - startPos;
    if (cardsArrayIndex < 0 || cardsArrayIndex >= cards.length) return;

    const cardEl = cardsRef.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();
    const currentPositions = isMobile ? mobilePositions : positions;
    const pos = currentPositions[index] || currentPositions[5];

    setCloneStyle({
      position: 'fixed',
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      clipPath: pos.clip,
      transform: 'none',
      transition: 'all 0.6s cubic-bezier(0.2, 1, 0.3, 1)',
      zIndex: 1000,
      margin: 0,
    });

    setExpandedCard(index);

    setTimeout(() => {
      const maxHeight = window.innerHeight * 0.8;
      const finalWidth = 500;
      const finalHeight = Math.min(325, maxHeight);
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setCloneStyle(prev => ({
        ...prev,
        top: centerY - finalHeight / 2,
        left: centerX - finalWidth / 2,
        width: finalWidth,
        height: finalHeight,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }));

      setCardInfo({
        title: cards[cardsArrayIndex].title,
        desc: cards[cardsArrayIndex].description || cards[cardsArrayIndex].desc
      });
    }, 50);
  }, [isDragging, expandedCard, cards, isMobile]);

  const closeCard = useCallback(() => {
    if (expandedCard === null) return;

    const index = expandedCard;
    const cardEl = cardsRef.current[index];

    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      const currentPositions = isMobile ? mobilePositions : positions;
      const pos = currentPositions[index] || currentPositions[5];

      setCloneStyle(prev => ({
        ...prev,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        clipPath: pos.clip
      }));
    }

    setCardInfo({ title: '', desc: '' });

    setTimeout(() => {
      setExpandedCard(null);
      setCloneStyle(null);
    }, 600);
  }, [expandedCard, isMobile]);

  const handleDragStart = useCallback((e) => {
    if (expandedCard !== null) return;
    setIsDragging(true);
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setProcessedSteps(0);
  }, [expandedCard]);

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;

    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const distance = clientX - startX;
    const threshold = 40;
    const steps = Math.floor(Math.abs(distance) / threshold);

    if (steps > processedSteps) {
      const direction = distance > 0 ? 'prev' : 'next';
      rotateSlider(direction);
      setProcessedSteps(steps);
    }
  }, [isDragging, startX, processedSteps, rotateSlider]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setProcessedSteps(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedCard !== null) {
        closeCard();
      } else if (e.key === 'ArrowLeft' && expandedCard === null) {
        rotateSlider('prev');
      } else if (e.key === 'ArrowRight' && expandedCard === null) {
        rotateSlider('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [expandedCard, closeCard, rotateSlider]);

  // Auto-scroll effect for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile && !isDragging && expandedCard === null) {
        rotateSlider('next');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging, expandedCard, rotateSlider, isMobile]);

  // ... 

  // Calculate mapping to center cards in the 11 positions
  const renderCards = () => {
    const totalSlots = 11;
    const displayCount = Math.min(cards.length, totalSlots);
    const startPos = Math.floor((totalSlots - displayCount) / 2);

    const currentPositions = isMobile ? mobilePositions : positions;

    return cards.slice(0, displayCount).map((card, i) => {
      const positionIndex = startPos + i;
      const pos = currentPositions[positionIndex] || currentPositions[5];
      // On mobile, use x translation; on desktop use rotateY logic
      // Actually both can use the same transform string if desktop pos has x=0

      const transform = isMobile
        ? `translateX(${pos.x}px) translateZ(${pos.z}px) scale(${pos.height / 155})`
        : `translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) translateY(${pos.y}px)`;

      return (
        <div
          key={card._id || card.title || i}
          ref={el => cardsRef.current[positionIndex] = el}
          className={`${styles.card} ${expandedCard === positionIndex ? styles.expanded : ''}`}
          style={{
            height: `${pos.height}px`,
            clipPath: pos.clip,
            transform: transform,
            opacity: pos.opacity !== undefined ? pos.opacity : 1,
            transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          onClick={() => handleCardClick(positionIndex)}
        >
          <img src={card.image} alt={card.title} />
          <div className={styles.hoverOverlay}>
            <span>Click to see more</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.page}>
      <CommonHero
        apiEndpoint="/api/placementhero"
        defaultTitle="Training & Placements"
        sectionsSelector="section"
        showArrow={true}
      />
      {/* About Section */}
      <section className={`${styles.aboutWrapper} ${styles.section}`} ref={el => sectionsRef.current[0] = el}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colLg6}>
              <div className={`${styles.media} ${styles.left}`}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1472&q=80" alt="banner" />
              </div>
            </div>
            <div className={styles.colLg6}>
              <div>
                <h6 className={styles.textPrimary}>About Us</h6>
                <h2>How we train our students?</h2>
                <p>SVGI training and placement cell can help shape their skills to empower every student's career</p>
              </div>
              <ul className={styles.list}>
                <li>SVGI's Placement Training program develops confident, skilled, and industry-ready professionals.</li>
                <li>Training enhances technical skills, communication, problem-solving, and professional behavior.</li>
                <li>Students participate in expert-led sessions, workshops, mock interviews, and résumé building.</li>
                <li>Program bridges academic learning with corporate expectations for modern workplace demands.</li>
                <li>Focus on analytical thinking, teamwork, and career-specific competencies to secure job opportunities.</li>
              </ul>
              <button className={styles.btnPrimary}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className={`${styles.sliderSection} ${styles.section}`} ref={el => sectionsRef.current[1] = el}>
        <div className={styles.header}>
          <p className={styles.subtitle}>In Our College Have</p>
          <h1 className={styles.mainTitle}>Centralized Placement Process for all Campuses</h1>
        </div>
        <div
          className={`${styles.sliderContainer} ${isDragging ? styles.dragging : ''}`}
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className={`${styles.sliderTrack} ${expandedCard !== null ? styles.blurred : ''}`} ref={trackRef}>
            {renderCards()}
          </div>
        </div>

        <button
          className={`${styles.closeBtn} ${expandedCard !== null ? styles.visible : ''}`}
          onClick={closeCard}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        {expandedCard !== null && cloneStyle && (() => {
          const displayCount = Math.min(cards.length, 11);
          const startPos = Math.floor((11 - displayCount) / 2);
          const dataIndex = expandedCard - startPos;
          const cardData = cards[dataIndex];

          return (
            <div className={styles.card} style={cloneStyle}>
              {cardData && (
                <img
                  src={cardData.image}
                  alt={cardData.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}
            </div>
          );
        })()}
        <div className={`${styles.cardInfo} ${expandedCard !== null ? styles.visible : ''}`}>
          <h2>{cardInfo.title}</h2>
          <p>{cardInfo.desc}</p>
        </div>
      </section>

      {/* Placement Training Section */}
      <section className={`${styles.placementTrainingSection}${styles.section}`} ref={el => sectionsRef.current[2] = el}>
        <div className={styles.placementContainer}>
          <div className={styles.leftContent}>
            <h2>Placement Training</h2>
            <p>
              Training & Placement cell, which is a unit of Career Development Centre, plays a predominant role in shaping up the career goals of students. Its primary objective is to assist students in making and implementing informed educational and occupational choices. The concept of career Counselling & Higher Education should be explicitly presented to students early in their university lives. It also aims to empower students through career counselling services, so that they could act responsibly when career-related concerns arise during the course of their entire program or course.
            </p>
          </div>

          <div className={styles.diagram}>
            <div className={styles.outerCircle}></div>
            <div className={styles.centerCircle}>Placement<br />Training</div>
            <div className={`${styles.outerItem} ${styles.item1}`}><span>Career Awareness & Student Registration</span></div>
            <div className={`${styles.outerItem} ${styles.item2}`}><span>Aptitude & Soft Skills Development</span></div>
            <div className={`${styles.outerItem} ${styles.item3}`}><span>Technical Skill Enhancement</span></div>
            <div className={`${styles.outerItem} ${styles.item4}`}><span>Resume & Profile Building</span></div>
            <div className={`${styles.outerItem} ${styles.item5}`}><span>Group Discussion & Interview Prep</span></div>
            <div className={`${styles.outerItem} ${styles.item6}`}><span>Pre-Placement Orientation</span></div>
            <div className={`${styles.outerItem} ${styles.item7}`}><span>Campus Recruitment Drive</span></div>
            <div className={`${styles.outerItem} ${styles.item8}`}><span>Feedback & Continuous Improvement</span></div>
          </div>
        </div>
      </section>

      {/* Career Counselling Section */}
      <section className={`${styles.careerSection} ${styles.section}`} ref={el => sectionsRef.current[3] = el}>
        <h1>Career Counselling and Higher Education</h1>
        <div className={styles.careerHeader}>
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num}>
              <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-${num}.jpg`} alt={`Image ${num}`} />
            </div>
          ))}
        </div>
        <p>
          <span className={styles.dropcap}>I</span>ndustry certifications are recognized credentials that validate a professional’s skills and knowledge in a specific field. They help students and professionals gain credibility, increase employability, and demonstrate expertise in their chosen domain. Obtaining certifications from recognized institutions or organizations provides a competitive edge in the job market and enhances career growth opportunities.
        </p>
      </section>

      {/* Industry Certifications Section */}
      <section className={`${styles.industryCertificationsSection}${styles.section}`} ref={el => sectionsRef.current[4] = el}>
        <h1>Industrial  Certifications</h1>
        <p>
          Industry certifications are recognized credentials that validate a professional's skills and knowledge in a specific field. They help students and professionals gain credibility, increase employability, and demonstrate expertise in their chosen domain. Obtaining certifications from recognized institutions or organizations provides a competitive edge in the job market and enhances career growth opportunities.
        </p>
        <div className={styles.imageContainerWrapper}>
          <div className={styles.imageContainer} style={{ flex: 1 }}>
            <img src="https://picsum.photos/300/300" alt="placeholder" />
          </div>
          <div className={styles.imageContainer} style={{ flex: 1 }}>
            <img src="https://picsum.photos/350/350" alt="placeholder" />
          </div>
          <div className={styles.imageContainer} style={{ flex: 0.5 }}>
            <img src="https://picsum.photos/300/600" alt="placeholder" />
          </div>
          <div className={styles.imageContainer} style={{ flex: 2 }}>
            <img src="https://picsum.photos/600/300" alt="placeholder" />
          </div>
          <div className={styles.imageContainer} style={{ flex: 0.56 }}>
            <img src="https://picsum.photos/450/800" alt="placeholder" />
          </div>
        </div>
        <div className={styles.industryCardContainer}>
          <div className={styles.industryCard}>
            <h2>Professional Benefits</h2>
            <ul>
              <li>Boost Your Resume</li>
              <li>Enhance Knowledge & Skills</li>
              <li>Improve Credibility</li>
              <li>Better Job Opportunities</li>
              <li>Increase Salary</li>
              <li>Stay Competitive</li>
              <li>Job Security</li>
            </ul>
          </div>
          <div className={styles.industryCard}>
            <h2>Career Advantages</h2>
            <ul>
              <li>Global Recognition</li>
              <li>Open Career Opportunities</li>
              <li>Competitive Edge</li>
              <li>Professional Recognition</li>
              <li>Networking</li>
              <li>Access to Interesting Work</li>
              <li>Skill Validation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pyramid Section */}
      <section className={`${styles.pyramidSection} ${styles.section}`} ref={el => sectionsRef.current[5] = el}>
        <h1>Placement Training Functions</h1>
        <div className={styles.pyramid}>
          {[
            ['Consortium', 'Industry Conclave'],
            ['Contests', 'Hackathons'],
            ['Skill Development Cell', 'Alumni Events'],
            ['Industry Certification', 'Higher Education Training'],
            ['Industry Engagements', 'Industry Internships'],
            ['Soft Skills Training', 'Digital Process'],
            ['Career Counselling', 'Placement Training']
          ].map((activities, index) => (
            <div key={index} className={styles.layer}>
              {activities.map((activity, i) => (
                <div key={i} className={styles.activity}>{activity}</div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrainingPlacementsPage;