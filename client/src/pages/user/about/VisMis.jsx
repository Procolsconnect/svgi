import React from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './vismis.module.css';

export default function MissionVisionValues() {
  return (
    <div className={styles.body}>
      <CommonHero
        apiEndpoint="/api/about/vismishero"
        defaultTitle="Mission & Vision"
        showArrow={false}
      />
      {/* ================= MISSION ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2  className={styles.h2 }>Our Mission</h2 >
            <p className={styles.p}>
              Our mission is to deliver innovative and reliable digital solutions that
              empower organizations and individuals to achieve sustainable growth.
            </p>
            <p className={styles.p}>
              We focus on quality, integrity, and continuous improvement in everything we do.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
              <image
                href="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=764&q=80"
                width="200"
                height="200"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"
              />
              <clipPath id="blobClip">
                <path d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                  transform="translate(100 100)" />
              </clipPath>
              <path id="textPath1"
                d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100)"
                fill="none"
                pathLength="100"
              />
              <text className={styles.textContent}>
                <textPath href="#textPath1" startOffset="0%">
                  MISSION • MISSION • MISSION • MISSION • MISSION • MISSION • MISSION
                  <animate attributeName="startOffset" from="0%" to="100%" dur="15s" repeatCount="indefinite" />
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className={styles.section} style={{ paddingTop: '10px' }}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
              <image
                href="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=764&q=80"
                width="200"
                height="200"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"
              />
              <path id="textPath2"
                d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100)"
                fill="none"
                pathLength="100"
              />
              <text className={styles.textContent}>
                <textPath href="#textPath2" startOffset="0%">
                  OUR VISION • FUTURE • INNOVATION • OUR VISION • FUTURE • INNOVATION
                  <animate attributeName="startOffset" from="0%" to="100%" dur="15s" repeatCount="indefinite" />
                </textPath>
              </text>
            </svg>
          </div>
          <div className={styles.content}>
            <h2  className={styles.h2 }>Our Vision</h2 >
            <p className={styles.p}>
              Our vision is to become a leading force in digital innovation by building
              future-ready solutions that create meaningful impact.
            </p>
            <p className={styles.p}>
              We aspire to inspire progress, nurture creativity, and shape a smarter,
              technology-driven tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className={styles.coreSection}>
        <div className={styles.coreWrapper}>
          {/* LEFT CIRCLE */}
          <div className={styles.coreCircle}>
            <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#bfc1c3"
                strokeWidth="16"
                strokeDasharray="140 400"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#00a1d9"
                strokeWidth="16"
                strokeDasharray="120 400"
                strokeDashoffset="-140"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#0a6f7f"
                strokeWidth="16"
                strokeDasharray="90 400"
                strokeDashoffset="-260"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#a6ce39"
                strokeWidth="16"
                strokeDasharray="110 400"
                strokeDashoffset="-350"
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className={styles.coreText}>
              <span className={styles.coreTextSpan}>Our</span>
              <h2 className={styles.coreTextH2}>Core<br />Values</h2>
            </div>
          </div>
          {/* RIGHT VALUES */}
          <div className={styles.valuesContainer}>
            <div className={styles.valueBox}>Student focus</div>
            <div className={styles.valueBox}>Strong ethics</div>
            <div className={styles.valueBox}>Striving for excellence</div>
            <div className={styles.valueBox}>Social development</div>
            <div className={styles.valueBox}>Respect for all</div>
          </div>
        </div>
      </section>
    </div>
  );
}