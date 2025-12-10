import React, { useState, useEffect } from 'react';
import styles from './Feedback.module.css';

const SVGIFeedback = () => {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState({});

  const testimonials = [
    { img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Rahul Sharma", text: "The labs and faculty support are top-notch. Got placed in a reputed company!" },
    { img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Priya Mehta", text: "Cultural events and placement training helped me grow holistically." },
    { img: "https://randomuser.me/api/portraits/men/45.jpg", name: "Akash Verma", text: "Digital resources made learning easy and flexible. Highly recommend SVGI!" },
    { img: "https://randomuser.me/api/portraits/women/65.jpg", name: "Sneha Kapoor", text: "Safe campus, good hostel, and supportive staff. Feels like home." },
    { img: "https://randomuser.me/api/portraits/men/12.jpg", name: "Vikram Singh", text: "Mock interviews and GD sessions prepared me perfectly for placements." }
  ];

  const faqs = [
    [
      { q: "Do you work full time as a developer?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
      { q: "Do you require a deposit before working?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
      { q: "Will I own the website?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
      { q: "Are there other costs involved?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", hasExtra: true }
    ],
    [
      { q: "What is hosting? Will I need it?", a: "Lorem ipsum dolor sit amet..." },
      { q: "Will you work for equity on a new idea I have?", a: "Lorem ipsum dolor sit amet..." },
      { q: "How much experience do you have?", a: "Lorem ipsum dolor sit amet..." },
      { q: "What if I need changes. Can I edit it myself?", a: "Lorem ipsum dolor sit amet..." }
    ]
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxActive) setLightboxActive(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [lightboxActive]);

  const toggleFAQ = (index) => {
    setActiveFAQ(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className={styles.heroSection}>
        <img src="/images/instu.jpg" alt="Hero Background" />
        <h1 className={styles.heroTitle}>Feedback</h1>
      </div>

      {/* Feedback Section */}
      <section className={styles.feedbackContainer}>
        <div className={styles.photoWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.cardShadow}></div>
            <div className={styles.floatingCard} onClick={() => setLightboxActive(true)}>
              <div className={styles.cardPicture}>
                <div className={styles.cardFrame}></div>
                <img src="https://images.unsplash.com/photo-1642478881792-4726327bb0bc?crop=entropy&cs=srgb&fm=jpg" alt="SVGI Group Avatar" />
              </div>
              <h4><b>SVGI Group</b></h4>
              <p>Overall Institutional Feedback Report</p>
            </div>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: '3em' }}>
            SVGI – Overall Feedback Summary
          </h1>
          <ul style={{ padding: '2.5em 2.5em', fontSize: '1em', lineHeight: '1.5em', listStyleType: 'disc', textAlign: 'left' }}>
            <li>The overall campus environment is appreciated for being clean, secure, and student-friendly.</li>
            <li>Students expressed satisfaction with the quality of teaching across Engineering, Arts, Nursing, and Paramedical streams.</li>
            <li>Laboratory infrastructure and practical exposure were highlighted as major strengths.</li>
            <li>Faculty members are supportive, approachable, and provide useful academic guidance.</li>
            <li>Students appreciate the cultural activities, technical events, and placement training sessions.</li>
            <li>Transport and hostel facilities received positive feedback with suggestions for minor improvements.</li>
            <li>Many students value the placement cell initiatives and industry-oriented training programs.</li>
            <li>Digital learning resources and online notes were found helpful by most students.</li>
            <li>Overall satisfaction levels across departments indicate a positive student experience.</li>
          </ul>

          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: '2.2em' }}>Key Observations</h1>
          <ul style={{ padding: '1.5em 2.5em', listStyleType: 'disc' }}>
            <li>Students want more hands-on workshops and real-time project exposure.</li>
            <li>Some departments requested upgraded lab equipment and additional subject-oriented tools.</li>
            <li>Few students suggested enhancing sports activities and inter-college events.</li>
          </ul>

          <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: '2.2em' }}>
            Recommendations for Improvement
          </h1>
          <ul style={{ padding: '1.5em 2.5em', listStyleType: 'disc' }}>
            <li>Introduce department-wise industry mentorship programs.</li>
            <li>Conduct monthly technical seminars and career-oriented bootcamps.</li>
            <li>Strengthen placement preparation with mock tests, coding challenges, and GD training.</li>
          </ul>
        </div>
      </section>

      {/* Lightbox (uncomment when needed) */}
      <div className={`${styles.lightbox} ${lightboxActive ? styles.active : ''}`} onClick={() => setLightboxActive(false)}>
        <span className={styles.lightboxClose} onClick={() => setLightboxActive(false)}>×</span>
        <img src="https://images.unsplash.com/photo-1642478881792-4726327bb0bc?crop=entropy&cs=srgb&fm=jpg" alt="Full" onClick={e => e.stopPropagation()} />
      </div>

      <section className={styles.gridLayout}>
        <h2>Heading: the grid layout solution</h2>
        <p>The content is restricted to a certain max-width in the middle, but the section and consequently its image background is full-width.</p>
      </section>

      <section className={`${styles.borderImage}`}>
        <h2>Heading: border-image solution</h2>
        <p>The section is restricted to a certain max-width in the middle, but the border-image created backdrop is full-width.</p>
      </section>

      {/* Testimonial Slider */}
      <section className={styles.testimWrapper}>
        <div className={styles.testimContainer}>
          <span className={`${styles.testimArrow} ${styles.testimArrowLeft}`} onClick={() => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}>‹</span>
          <span className={`${styles.testimArrow} ${styles.testimArrowRight}`} onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}>›</span>

          <div className={styles.testimDots}>
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.testimDot} ${currentSlide === idx ? styles.testimDotActive : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>

          <div className={styles.testimContent}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`${styles.testimSlide} ${currentSlide === idx ? styles.testimSlideActive : ''}`}>
                <div className={styles.testimImg}>
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <h2>{testimonial.name}</h2>
                <p>"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.lineHeading}>Frequently Asked Questions</h2>
          <h3 className={styles.largeHeading}>
            Some of the most common questions asked about Website Design & Development.
          </h3>
          <div className={styles.faqGrid}>
            {faqs.map((column, colIdx) => (
              <div key={colIdx}>
                {column.map((faq, faqIdx) => {
                  const key = `${colIdx}-${faqIdx}`;
                  return (
                    <div key={key}>
                      <button className={styles.collapsibleBtn} onClick={() => toggleFAQ(key)}>
                        {faq.q} <span style={{ float: 'right', fontWeight: 'bold' }}>{activeFAQ[key] ? '-' : '+'}</span>
                      </button>
                      <div className={`${styles.faqContent} ${activeFAQ[key] ? styles.faqContentActive : ''}`}>
                        <p>{faq.a}</p>
                        {faq.hasExtra && (
                          <>
                            <ul>
                              <li>Custom LI</li>
                              <li>Custom LI</li>
                            </ul>
                            <p>Contact me via <a href="mailto:#">EMAIL</a></p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SVGIFeedback;