// AdmissionsSection.jsx
import React, { useEffect, useRef } from 'react';
import styles from './procedure.module.css';

const AdmissionsSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const lines = text.innerText.split('. ').filter(Boolean);
    text.innerHTML = lines.map(line => 
      `<div class="${styles.lineWrapper}"><div class="${styles.line}">${line}.</div></div>`
    ).join('');

    const animate = () => {
      const lineElements = text.querySelectorAll(`.${styles.line}`);

      lineElements.forEach((line, i) => {
        line.style.transform = 'translateY(100%)';
        line.style.opacity = '0.2';
        line.style.filter = 'blur(8px)';

        setTimeout(() => {
          line.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.9s, filter 0.9s';
          line.style.transform = 'translateY(0)';
          line.style.opacity = '1';
          line.style.filter = 'blur(0)';
        }, i * 80);
      });

      setTimeout(animate, 3000);
    };

    animate();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>Admissions Procedure</h1>
      </section>

      {/* TEXT + VIDEO SECTION */}
      <section className={styles.content}>
        <div className={styles.textContainer}>
          <h1 ref={textRef} className={styles.text}>
            Crafting digital experiences that blend innovation with intuitive design.
            Each pixel tells a story of creativity and purpose.
          </h1>
        </div>
        <div className={styles.videoBox}>
          <video autoPlay muted loop playsInline className={styles.video}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* BUBBLE CHAT SECTION */}
      <section className={styles.bubbleSection}>
        <div className={styles.leftHeading}>Our Student Career Foundation</div>
        <div className={styles.container}>
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
        </div>
      </section>
    </div>
  );
};

export default AdmissionsSection;