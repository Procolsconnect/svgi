// AdmissionsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import SplitType from 'split-type';
import styles from './procedure.module.css';
import CommonHero from '../../../components/CommonHero';

const AdmissionsSection = () => {
  const textRef = useRef(null);
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
        const [procedureRes] = await Promise.all([
          axios.get(`${API_URL}/api/procedure`)
        ]);

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
    const textRefCurrent = textRef.current;
    if (!textRefCurrent || loading) return;

    // Split text into lines
    const split = new SplitType(textRefCurrent, { types: 'lines' });

    // Wrap each line in a container for overflow: hidden
    split.lines.forEach((line) => {
      const wrapper = document.createElement('div');
      wrapper.className = styles.lineWrapper;
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
      line.classList.add(styles.line);
    });

    // GSAP infinite animation
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.7
    });

    tl.from(`.${styles.line}`, {
      duration: 0.9,
      yPercent: 100,
      opacity: 0.2,
      filter: "blur(8px)",
      stagger: 0.08,
      ease: "power4.out",
      yoyo: true,
      repeat: 1,
      repeatDelay: 0.7
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, [loading, procedureData.content]);

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION */}
      <CommonHero
        apiEndpoint="/api/procedurehero"
        defaultTitle="Admissions Procedure"
      />

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
