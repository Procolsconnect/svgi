import React, { useState, useEffect, useRef } from 'react';
import styles from './Overview.module.css';
import Arrow from '../../../components/Arrow';

const TrainingPlacementsPage = () => {
  const [scrollClicked, setScrollClicked] = useState(false);
  const [scrollRotate, setScrollRotate] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [startX, setStartX] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [cardInfo, setCardInfo] = useState({ title: '', desc: '' });
  const [cards, setCards] = useState([]);

  const [processedSteps, setProcessedSteps] = useState(0);
  const [cloneStyle, setCloneStyle] = useState(null);
  const cardsRef = useRef([]);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const sectionsRef = useRef([]);

  const cardData = [
    { title: "Beverage Branding", desc: "Fresh and vibrant packaging design for premium juice products with natural ingredients", image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=800&fit=crop" },
    { title: "Apparel Design", desc: "Minimalist fashion collection with sustainable materials and modern aesthetics", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop" },
    { title: "Luxury Packaging", desc: "Premium product packaging with attention to detail and sophisticated finishes", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=800&fit=crop" },
    { title: "Cosmetics Brand", desc: "Clean beauty brand identity with elegant and timeless design approach", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=800&fit=crop" },
    { title: "Fashion Editorial", desc: "Editorial photography and art direction for contemporary fashion magazine", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=800&fit=crop" },
    { title: "Botanical Series", desc: "Natural product line with organic ingredients and eco-friendly packaging", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=800&fit=crop" },
    { title: "Product Photography", desc: "Professional product photography with creative lighting and composition", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop" },
    { title: "Streetwear Brand", desc: "Urban fashion line with bold graphics and contemporary street style", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop" },
    { title: "Tech Accessories", desc: "Minimalist tech product design with user-centered functionality", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop" },
    { title: "Wellness Products", desc: "Holistic wellness brand with natural and calming visual identity", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=800&fit=crop" },
    { title: "Home Decor", desc: "Contemporary home accessories with Scandinavian design influence", image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&h=800&fit=crop" }
  ];

  const positions = [
    { height: 310, z: 220, rotateY: 48, y: 0, clip: "polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)" },
    { height: 290, z: 165, rotateY: 35, y: 0, clip: "polygon(0px 0px, 100% 8%, 100% 92%, 0px 100%)" },
    { height: 248, z: 110, rotateY: 15, y: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
    { height: 210, z: 66, rotateY: 15, y: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
    { height: 177, z: 46, rotateY: 6, y: 0, clip: "polygon(0px 0px, 100% 7%, 100% 93%, 0px 100%)" },
    { height: 155, z: 0, rotateY: 0, y: 0, clip: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    { height: 177, z: 54, rotateY: 348, y: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
    { height: 210, z: 89, rotateY: -15, y: 0, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
    { height: 248, z: 135, rotateY: -15, y: 1, clip: "polygon(0px 7%, 100% 0px, 100% 100%, 0px 93%)" },
    { height: 290, z: 195, rotateY: 325, y: 0, clip: "polygon(0px 8%, 100% 0px, 100% 100%, 0px 92%)" },
    { height: 310, z: 240, rotateY: 312, y: 0, clip: "polygon(0px 10%, 100% 0px, 100% 100%, 0px 90%)" }
  ];

  useEffect(() => {
    setCards(cardData);
  }, []);


  
  const rotateSlider = (direction) => {
    if (expandedCard !== null) return;

    setCards(prevCards => {
      const newCards = [...prevCards];
      if (direction === 'next' || direction === 'prev') {
        const first = newCards.shift();
        newCards.push(first);
      } else {
        const last = newCards.pop();
        newCards.unshift(last);
      }
      return newCards;
    });
  };

  const handleCardClick = (index) => {
    if (isDragging || expandedCard !== null) return;

    const cardEl = cardsRef.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();
    const pos = positions[index] || positions[5];

    // Set initial clone style to match the card's current position and size
    setCloneStyle({
      position: 'fixed',
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      clipPath: pos.clip,
      transform: 'none',
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      zIndex: 1000,
      margin: 0,
    });

    setExpandedCard(index);

    // Trigger animation to center
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
        title: cards[index].title,
        desc: cards[index].desc
      });
    }, 20);
  };

  const closeCard = () => {
    if (expandedCard === null) return;

    const index = expandedCard;
    const cardEl = cardsRef.current[index];

    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      const pos = positions[index] || positions[5];

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
    }, 800);
  };

  const handleDragStart = (e) => {
    if (expandedCard !== null) return;
    setIsDragging(true);
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setDragDistance(0);
    setProcessedSteps(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const distance = clientX - startX;
    setDragDistance(distance);

    const threshold = 60;
    const steps = Math.floor(Math.abs(distance) / threshold);

    if (steps > processedSteps) {
      const direction = distance > 0 ? 'prev' : 'next';
      rotateSlider(direction);
      setProcessedSteps(steps);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragDistance(0);
    setProcessedSteps(0);
  };

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
  }, [expandedCard]);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>Training & Placements</h1>
             <Arrow sectionsSelector="section" />
      </div>


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
            {cards.map((card, index) => {
              const pos = positions[index] || positions[5];
              return (
                <div
                  key={card.title}
                  ref={el => cardsRef.current[index] = el}
                  className={`${styles.card} ${expandedCard === index ? styles.expanded : ''}`}
                  style={{
                    height: `${pos.height}px`,
                    clipPath: pos.clip,
                    transform: `translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) translateY(${pos.y}px)`,
                    transition: 'all 0.5s ease'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <img src={card.image} alt={card.title} />
                  <div className={styles.hoverOverlay}>
                    <span>Click to see more</span>
                  </div>
                </div>
              );
            })}
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

        {expandedCard !== null && cloneStyle && (
          <div
            className={styles.card}
            style={cloneStyle}
          >
            <img
              src={cards[expandedCard].image}
              alt={cards[expandedCard].title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
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