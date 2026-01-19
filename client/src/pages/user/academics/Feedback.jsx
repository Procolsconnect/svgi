import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './Feedback.module.css';
import CommonHero from '../../../components/CommonHero';

const API_BASE = import.meta.env.VITE_API_URL + "/api";

const SVGIFeedback = () => {
  const [hero, setHero] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [faqsData, setFaqsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState({});

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const [heroRes, reviewRes, faqRes] = await Promise.all([
          axios.get(`${API_BASE}/feedbackhero`),
          axios.get(`${API_BASE}/feedbackreview`),
          axios.get(`${API_BASE}/faq`)
        ]);

        setHero(heroRes.data.data?.[0] || null);
        setTestimonials(reviewRes.data.data || []);
        setFaqsData(faqRes.data.data || []);
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbackData();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [currentSlide, testimonials.length]);

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

  // Split FAQs into two columns if we have data
  const midIndex = Math.ceil(faqsData.length / 2);
  const faqColumns = [
    faqsData.slice(0, midIndex),
    faqsData.slice(midIndex)
  ];

  if (loading) {
    return <div className={styles.loading}>Loading Feedback...</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <CommonHero
        apiEndpoint="/api/feedbackhero"
        defaultTitle="Feedback"
        sectionsSelector="section"
      />

      {/* Feedback Section */}
      <section className={styles.feedbackContainer}>
        {/* PHOTO CARD (Sticky when scrolled to section) */}
        <div className={styles.photoWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.cardShadow}></div>
            <div
              className={styles.floatingCard}
              id="profileImageTrigger"
              onClick={() => setLightboxActive(true)}
            >
              <div className={styles.cardPicture}>
                <div className={styles.cardFrame}></div>
                <img src={hero?.image || "https://images.unsplash.com/photo-1642478881792-4726327bb0bc?crop=entropy&cs=srgb&fm=jpg"} alt="SVGI Group Avatar" />
              </div>
              <h4><b>SVGI Group</b></h4>
              <p>Overall Institutional Feedback Report</p>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className={styles.textWrapper}>
          <header>
            <h2 >SVGI – Overall Feedback Summary</h2 >
          </header>
          <ul>
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

          <header>
            <h2 >Key Observations</h2 >
          </header>
          <ul>
            <li>Students want more hands-on workshops and real-time project exposure.</li>
            <li>Some departments requested upgraded lab equipment and additional subject-oriented tools.</li>
            <li>Few students suggested enhancing sports activities and inter-college events.</li>
          </ul>

          <header>
            <h2 >Recommendations for Improvement</h2 >
          </header>
          <ul>
            <li>Introduce department-wise industry mentorship programs.</li>
            <li>Conduct monthly technical seminars and career-oriented bootcamps.</li>
            <li>Strengthen placement preparation with mock tests, coding challenges, and GD training.</li>
          </ul>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`${styles.lightbox} ${lightboxActive ? styles.active : ''}`}
        onClick={() => setLightboxActive(false)}
      >
        <span className={styles.lightboxClose} onClick={() => setLightboxActive(false)}>
          &times;
        </span>
        <img
          src={hero?.image || "https://images.unsplash.com/photo-1642478881792-4726327bb0bc?crop=entropy&cs=srgb&fm=jpg"}
          alt="Full"
          onClick={e => e.stopPropagation()}
        />
      </div>

      {/* New Sections from Snippet */}
      <section className={styles.gridLayout}>
        <h2>Heading: the grid layout solution</h2>
        <p>
          The content is restricted to a certain max-width in the middle,
          but the section and consequently its image background is full-width.
        </p>
      </section>

      <section className={styles.gridLayout}>
        <h2>Heading: border-image solution</h2>
        <p>
          The section is restricted to a certain max-width in the middle,
          but the border-image created backdrop is full-width.
        </p>
      </section>

      {/* Testimonial Slider */}
      {testimonials.length > 0 && (
        <section className={styles.testimWrapper}>
          <div className={styles.testimContainer}>
            <button
              className={`${styles.testimArrow} ${styles.testimArrowLeft}`}
              onClick={() => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}
              style={{ background: 'none', border: 'none' }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className={`${styles.testimArrow} ${styles.testimArrowRight}`}
              onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}
              style={{ background: 'none', border: 'none' }}
            >
              <ChevronRight size={32} />
            </button>

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
                <div key={testimonial._id || idx} className={`${styles.testimSlide} ${currentSlide === idx ? styles.testimSlideActive : ''}`}>
                  <div className={styles.testimImg}>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h2>{testimonial.name}</h2>
                  <p>"{testimonial.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqsData.length > 0 && (
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2 className={styles.lineHeading}>Frequently Asked Questions</h2>
            <h3 className={styles.largeHeading}>
              Some of the most common questions asked about SVGI and its academic environment.
            </h3>
            <div className={styles.faqGrid}>
              {faqColumns.map((column, colIdx) => (
                <div key={colIdx}>
                  {column.map((faq, faqIdx) => {
                    const key = `${colIdx}-${faqIdx}`;
                    return (
                      <div key={faq._id || key} style={{ marginBottom: '10px' }}>
                        <button
                          className={styles.collapsibleBtn}
                          onClick={() => toggleFAQ(key)}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                          {faq.question}
                          <span style={{ fontWeight: 'bold' }}>{activeFAQ[key] ? '-' : '+'}</span>
                        </button>
                        <div className={`${styles.faqContent} ${activeFAQ[key] ? styles.faqContentActive : ''}`}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SVGIFeedback;
