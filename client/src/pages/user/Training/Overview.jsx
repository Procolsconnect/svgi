import React, { useState, useEffect, useRef } from 'react';
import './Overview.css';

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
  
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cloneRef = useRef(null);
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

  const smoothScroll = (targetIndex) => {
    if (targetIndex === -1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionsRef.current[targetIndex]) {
      sectionsRef.current[targetIndex].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    setScrollClicked(true);
    const totalSections = sectionsRef.current.length;
    
    if (currentSection >= totalSections) {
      setCurrentSection(0);
      smoothScroll(-1);
      setScrollRotate(false);
    } else {
      smoothScroll(currentSection);
      if (currentSection === totalSections - 1) {
        setScrollRotate(true);
      }
      setCurrentSection(currentSection + 1);
    }
  };

  const rotateSlider = (direction) => {
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
  };

  const handleCardClick = (index) => {
    if (!isDragging && expandedCard === null) {
      setExpandedCard(index);
      setCardInfo({
        title: cards[index].title,
        desc: cards[index].desc
      });
    }
  };

  const closeCard = () => {
    setExpandedCard(null);
    setCardInfo({ title: '', desc: '' });
  };

  const handleDragStart = (e) => {
    if (expandedCard !== null) return;
    setIsDragging(true);
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setDragDistance(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const distance = clientX - startX;
    setDragDistance(distance);
    
    const threshold = 60;
    if (Math.abs(distance) >= threshold) {
      const direction = distance > 0 ? 'prev' : 'next';
      rotateSlider(direction);
      setStartX(clientX);
      setDragDistance(0);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragDistance(0);
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
    <div className="training-placements-page">
      {/* Hero Section */}
      <div className="tp-hero">
        <img src="hero img.jpg" alt="Hero Background" />
        <div className="tp-hero-overlay" />
        <h1 className="tp-hero-title">Training & Placements</h1>
      </div>

      {/* Scroll Button */}
      <div 
        className={`tp-scroll ${scrollClicked ? 'clicked' : ''} ${scrollRotate ? 'rotate' : ''}`}
        onClick={handleScrollClick}
      >
        <span className="arrow-bounce">&#8595;</span>
      </div>

      {/* About Section */}
      <section className="tp-about-wrapper" ref={el => sectionsRef.current[0] = el}>
        <div className="tp-container">
          <div className="tp-row">
            <div className="tp-col-lg-6">
              <div className="tp-media left">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1472&q=80" alt="banner" />
              </div>
            </div>
            <div className="tp-col-lg-6">
              <div>
                <h6 className="tp-text-primary">About Us</h6>
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <ul className="tp-list">
                <li>It has survived not only five centuries, but also the leap into electronic typesetting.</li>
                <li>Get a view of events and trends. Be updated on our recent news.</li>
                <li>A reader will be distracted by readable content when looking at its layout.</li>
                <li>Stay informed with our latest developments and achievements.</li>
              </ul>
              <button className="tp-btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="tp-slider-section" ref={el => sectionsRef.current[1] = el}>
        <div className="tp-header">
          <p className="tp-subtitle">In Our College Have</p>
          <h1 className="tp-main-title">Centralized Placement Process for all Campuses</h1>
        </div>

        <div 
          className={`tp-slider-container ${isDragging ? 'dragging' : ''}`}
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className={`tp-slider-track ${expandedCard !== null ? 'blurred' : ''}`} ref={trackRef}>
            {cards.map((card, index) => {
              const pos = positions[index] || positions[5];
              return (
                <div
                  key={index}
                  className={`tp-card ${expandedCard === index ? 'expanded' : ''}`}
                  style={{
                    height: `${pos.height}px`,
                    clipPath: pos.clip,
                    transform: `translateZ(${pos.z}px) rotateY(${pos.rotateY}deg) translateY(${pos.y}px)`,
                    transition: 'all 0.5s ease'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <img src={card.image} alt={card.title} />
                  <div className="tp-hover-overlay">
                    <span>Click to see more</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button 
          className={`tp-close-btn ${expandedCard !== null ? 'visible' : ''}`}
          onClick={closeCard}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
{expandedCard !== null && (
  <div className="tp-expanded-image-wrapper">
    <img 
      src={cards[expandedCard].image} 
      alt={cards[expandedCard].title} 
      className="tp-expanded-image"
    />
  </div>
)}
        <div className={`tp-card-info ${expandedCard !== null ? 'visible' : ''}`}>
          
          <h2>{cardInfo.title}</h2>
          <p>{cardInfo.desc}</p>
        </div>
      </section>

      {/* Placement Training Section */}
      <section className="tp-placement-training-section" ref={el => sectionsRef.current[2] = el}>
        <div className="tp-placement-container">
          <div className="tp-left-content">
            <h2>Placement Training</h2>
            <p>
              Our Placement Training process is designed with a structured approach to help every student
              achieve professional readiness. From skill development to final campus recruitment, each
              stage ensures confidence, capability, and career success.
            </p>
          </div>

          <div className="tp-diagram">
            <div className="tp-outer-circle"></div>
            <div className="tp-center-circle">Placement<br />Training</div>
            <div className="tp-outer-item item1">Career Awareness & Student Registration</div>
            <div className="tp-outer-item item2">Aptitude & Soft Skills Development</div>
            <div className="tp-outer-item item3">Technical Skill Enhancement</div>
            <div className="tp-outer-item item4">Resume & Profile Building</div>
            <div className="tp-outer-item item5">Group Discussion & Interview Prep</div>
            <div className="tp-outer-item item6">Pre-Placement Orientation</div>
            <div className="tp-outer-item item7">Campus Recruitment Drive</div>
            <div className="tp-outer-item item8">Feedback & Continuous Improvement</div>
          </div>
        </div>
      </section>

      {/* Career Counselling Section */}
      <section className="tp-career-section" ref={el => sectionsRef.current[3] = el}>
        <h1>Career Counselling and Higher Education</h1>
        <div className="tp-career-header">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num}>
              <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-${num}.jpg`} alt={`Image ${num}`} />
            </div>
          ))}
        </div>
        <p>
          <span className="tp-dropcap">C</span>areer Counselling & Higher Education cell, which is a unit of Career Development Centre, plays a predominant role in shaping up the career goals of students. Its primary objective is to assist students in making and implementing informed educational and occupational choices. The concept of career Counselling & Higher Education should be explicitly presented to students early in their university lives. It also aims to empower students through career counselling services, so that they could act responsibly when career-related concerns arise during the course of their entire program or course.
        </p>
      </section>

      {/* Industry Certifications Section */}
      <section className="tp-industry-certifications-section" ref={el => sectionsRef.current[4] = el}>
        <h1>Industry Certifications</h1>
        <p>
          Industry certifications are recognized credentials that validate a professional's skills and knowledge in a specific field. They help students and professionals gain credibility, increase employability, and demonstrate expertise in their chosen domain. Obtaining certifications from recognized institutions or organizations provides a competitive edge in the job market and enhances career growth opportunities.
        </p>
        <div className="tp-image-container-wrapper">
          <div className="tp-image-container" style={{ flex: 1 }}>
            <img src="https://picsum.photos/300/300" alt="placeholder" />
          </div>
          <div className="tp-image-container" style={{ flex: 1 }}>
            <img src="https://picsum.photos/350/350" alt="placeholder" />
          </div>
          <div className="tp-image-container" style={{ flex: 0.5 }}>
            <img src="https://picsum.photos/300/600" alt="placeholder" />
          </div>
          <div className="tp-image-container" style={{ flex: 2 }}>
            <img src="https://picsum.photos/600/300" alt="placeholder" />
          </div>
          <div className="tp-image-container" style={{ flex: 0.56 }}>
            <img src="https://picsum.photos/450/800" alt="placeholder" />
          </div>
        </div>
        <div className="tp-industry-card-container">
          <div className="tp-industry-card">
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
          <div className="tp-industry-card">
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
      <section className="tp-pyramid-section" ref={el => sectionsRef.current[5] = el}>
        <h1>Placement Training Functions</h1>
        <div className="tp-pyramid">
          {[
            ['Consortium', 'Industry Conclave'],
            ['Contests', 'Hackathons'],
            ['Skill Development Cell', 'Alumni Events'],
            ['Industry Certification', 'Higher Education Training'],
            ['Industry Engagements', 'Industry Internships'],
            ['Soft Skills Training', 'Digital Process'],
            ['Career Counselling', 'Placement Training']
          ].map((activities, index) => (
            <div key={index} className="tp-layer">
              {activities.map((activity, i) => (
                <div key={i} className="tp-activity">{activity}</div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrainingPlacementsPage;