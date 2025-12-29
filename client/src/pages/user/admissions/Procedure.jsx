// AdmissionsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './procedure.module.css';

const AdmissionsSection = () => {
  const textRef = useRef(null);
  const [heroData, setHeroData] = useState({ title: 'Admissions Procedure', image: 'hero img.jpg' });
  const [procedureData, setProcedureData] = useState({
    content: 'Crafting digital experiences that blend innovation with intuitive design. Each pixel tells a story of creativity and purpose.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    steps: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, procedureRes] = await Promise.all([
          axios.get(`${API_URL}/api/procedurehero`),
          axios.get(`${API_URL}/api/procedure`)
        ]);

        if (heroRes.data.success && heroRes.data.data.length > 0) {
          const { title, image } = heroRes.data.data[0];
          setHeroData({ title: title || 'Admissions Procedure', image });
        }

        if (procedureRes.data.success && procedureRes.data.data.length > 0) {
          const data = procedureRes.data.data[0];
          setProcedureData({
            content: data.content || '',
            video: data.video || '',
            steps: data.steps || []
          });
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching procedure data", err);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  useEffect(() => {
    const text = textRef.current;
    if (!text || loading) return;

    // Reset innerHTML before splitting again to avoid duplication or nested structures
    const originalText = procedureData.content;
    const lines = originalText.split('. ').filter(Boolean);
    text.innerHTML = lines.map(line =>
      `<div class="${styles.lineWrapper}"><div class="${styles.line}">${line}${line.endsWith('.') ? '' : '.'}</div></div>`
    ).join('');

    let timeoutIds = [];

    const animate = () => {
      const lineElements = text.querySelectorAll(`.${styles.line}`);

      lineElements.forEach((line, i) => {
        line.style.transform = 'translateY(100%)';
        line.style.opacity = '0.2';
        line.style.filter = 'blur(8px)';

        const tid = setTimeout(() => {
          line.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.9s, filter 0.9s';
          line.style.transform = 'translateY(0)';
          line.style.opacity = '1';
          line.style.filter = 'blur(0)';
        }, i * 80);
        timeoutIds.push(tid);
      });

      const nextRoundTid = setTimeout(animate, 5000); // Increased delay for readability
      timeoutIds.push(nextRoundTid);
    };

    animate();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [loading, procedureData.content]);

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        {loading ? (
          <div style={{ background: '#ccc', height: '100%', width: '100%', position: 'absolute' }}></div>
        ) : (
          <img src={heroData.image} alt="Hero Background" className={styles.heroBg} />
        )}
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>{heroData.title}</h1>
      </section>

      {/* TEXT + VIDEO SECTION */}
      <section className={styles.content}>
        <div className={styles.textContainer}>
          <h1 ref={textRef} className={styles.text}>
            {procedureData.content}
          </h1>
        </div>
        <div className={styles.videoBox}>
          {procedureData.video && (
            <video autoPlay muted loop playsInline className={styles.video} key={procedureData.video}>
              <source src={procedureData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>

      {/* BUBBLE CHAT SECTION */}
      <section className={styles.bubbleSection}>
        <div className={styles.leftHeading}>Our Student Career Foundation</div>
        <div className={styles.container}>
          {procedureData.steps.length > 0 ? (
            procedureData.steps.map((step, i) => (
              <div key={step._id || i} className={styles.bubble}>
                <p>{step.text}</p>
              </div>
            ))
          ) : (
            <>
              {[
                "Step 1: Research colleges based on interests, goals, location, programs, rankings, tuition, and campus life.",
                "Step 2: Gather transcripts, test scores (SAT/ACT), recommendations, essays, resumes, portfolios.",
                "Step 3: Fill out applications (Common App or specific). Note deadlines: early decision, early action, regular.",
                "Step 4: Submit applications with fees (or waivers). Track status via portals and provide additional info if needed.",
                "Step 5: Receive offers, compare aid, choose college. Submit deposit, complete enrollment (housing, orientation)."
              ].map((step, i) => (
                <div key={i} className={styles.bubble}>
                  <p>{step}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdmissionsSection;
