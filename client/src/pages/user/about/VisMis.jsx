import React from 'react';

export default function MissionVisionValues() {
  return (
    <div style={styles.body}>
      {/* ================= MISSION ================= */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.h1}>Our Mission</h1>
            <p style={styles.p}>
              Our mission is to deliver innovative and reliable digital solutions that
              empower organizations and individuals to achieve sustainable growth.
            </p>
            <p style={styles.p}>
              We focus on quality, integrity, and continuous improvement in everything we do.
            </p>
          </div>
          <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={styles.svg}>
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
              <text style={styles.textContent}>
                <textPath href="#textPath1" startOffset="0%">
                  MISSION • MISSION • MISSION • MISSION • MISSION • MISSION • MISSION
                  <animate attributeName="startOffset" from="0%" to="100%" dur="15s" repeatCount="indefinite"/>
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section style={{...styles.section, paddingTop: '10px'}}>
        <div style={styles.container}>
          <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={styles.svg}>
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
              <text style={styles.textContent}>
                <textPath href="#textPath2" startOffset="0%">
                  OUR VISION • FUTURE • INNOVATION • OUR VISION • FUTURE • INNOVATION
                  <animate attributeName="startOffset" from="0%" to="100%" dur="15s" repeatCount="indefinite"/>
                </textPath>
              </text>
            </svg>
          </div>
          <div style={styles.content}>
            <h1 style={styles.h1}>Our Vision</h1>
            <p style={styles.p}>
              Our vision is to become a leading force in digital innovation by building
              future-ready solutions that create meaningful impact.
            </p>
            <p style={styles.p}>
              We aspire to inspire progress, nurture creativity, and shape a smarter,
              technology-driven tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section style={styles.coreSection}>
        <div style={styles.coreWrapper}>
          {/* LEFT CIRCLE */}
          <div style={styles.coreCircle}>
            <svg viewBox="0 0 200 200" style={{width: '100%', height: '100%'}}>
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
            <div style={styles.coreText}>
              <span style={styles.coreTextSpan}>Our</span>
              <h2 style={styles.coreTextH2}>Core<br/>Values</h2>
            </div>
          </div>
          {/* RIGHT VALUES */}
          <div style={styles.valuesContainer}>
            <div style={styles.valueBox}>Student focus</div>
            <div style={styles.valueBox}>Strong ethics</div>
            <div style={styles.valueBox}>Striving for excellence</div>
            <div style={styles.valueBox}>Social development</div>
            <div style={styles.valueBox}>Respect for all</div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: '"Montserrat", sans-serif',
    background: '#ffffff',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 20px',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'center',
  },
  content: {},
  h1: {
    fontSize: '40px',
    marginBottom: '16px',
    fontWeight: 700,
  },
  p: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#555',
    marginBottom: '12px',
  },
  svg: {
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    aspectRatio: '1/1',
    display: 'block',
  },
  textContent: {
    font: '700 9.5px/1.2 system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    letterSpacing: '1.4px',
    textTransform: 'uppercase',
    fill: 'black',
  },
  coreSection: {
    width: '100%',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  coreWrapper: {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  coreCircle: {
    flex: '0 0 260px',
    height: '260px',
    position: 'relative',
  },
  coreText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  coreTextSpan: {
    display: 'block',
    fontSize: '18px',
    color: '#0a6f7f',
    fontWeight: 600,
  },
  coreTextH2: {
    margin: 0,
    fontSize: '46px',
    lineHeight: 1,
    color: '#0a6f7f',
  },
  valuesContainer: {
    flex: 1,
    background: '#001f3f',
    padding: '30px',
    borderRadius: '18px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '18px',
  },
  valueBox: {
    background: '#ffffff',
    padding: '22px 14px',
    borderRadius: '14px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 700,
    color: '#001f3f',
    boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
  },
};