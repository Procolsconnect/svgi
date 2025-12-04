import React, { useEffect, useRef } from 'react';
import styles from './policies.module.css';

const CourseOutcome = () => {
  const wrap1Ref = useRef(null);
  const container1Ref = useRef(null);
  const wrap2Ref = useRef(null);
  const container2Ref = useRef(null);
  const wrap3Ref = useRef(null);
  const container3Ref = useRef(null);

  useEffect(() => {
    class parallaxTiltEffect {
      constructor({element, container, tiltEffect}) {
        this.element = element;
        this.container = container;
        this.size = [300, 360];
        [this.w, this.h] = this.size;
        this.tiltEffect = tiltEffect;
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.init();
      }
      handleMouseMove(event) {
        const {offsetX, offsetY} = event;
        let X, Y;
        if (this.tiltEffect === "reverse") {
          X = ((offsetX - (this.w/2)) / 3) / 3;
          Y = (-(offsetY - (this.h/2)) / 3) / 3;
        } else if (this.tiltEffect === "normal") {
          X = (-(offsetX - (this.w/2)) / 3) / 3;
          Y = ((offsetY - (this.h/2)) / 3) / 3;
        }
        this.setProperty('--rY', X.toFixed(2));
        this.setProperty('--rX', Y.toFixed(2));
        this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
        this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
      }
      handleMouseEnter() { this.container.classList.add("container--active"); }
      handleMouseLeave() { this.defaultStates(); }
      defaultStates() {
        this.container.classList.remove("container--active");
        this.setProperty('--rY', 0);
        this.setProperty('--rX', 0);
        this.setProperty('--bY', '80%');
        this.setProperty('--bX', '50%');
      }
      setProperty(p, v) { this.container.style.setProperty(p, v); }
      init() {
        this.element.addEventListener('mousemove', this.handleMouseMove);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
      }
    }
    new parallaxTiltEffect({ element: wrap1Ref.current, container: container1Ref.current, tiltEffect: 'reverse' });
    new parallaxTiltEffect({ element: wrap2Ref.current, container: container2Ref.current, tiltEffect: 'normal' });
    new parallaxTiltEffect({ element: wrap3Ref.current, container: container3Ref.current, tiltEffect: 'reverse' });
  }, []);

  return (
    <div className={styles.root}>
      {/* HERO (100% width) */}
      <div className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" />
        <h1>SVGI Policies</h1>
      </div>

      {/* HEADING + SUBHEADING WITH PROPER SPACING */}
      <div className={styles['section-heading-wrapper']}>
        <h1 className={styles['section-title']}>Policies on Core Values</h1>
        <p className={styles['section-subtitle']}>Hover over the cards</p>
      </div>

      {/* CARDS */}
      <section className={styles.main}>
        <div ref={wrap1Ref} className={`${styles.wrap} ${styles['wrap--1']}`}>
          <div ref={container1Ref} className={`${styles.container} ${styles['container--1']}`}>
            <p>1. Equity, Diversity and Inclusion Policy</p>
          </div>
        </div>
        <div ref={wrap2Ref} className={`${styles.wrap} ${styles['wrap--2']}`}>
          <div ref={container2Ref} className={`${styles.container} ${styles['container--2']}`}>
            <p>2. Anti Corruption and Anti Bribery Policy</p>
          </div>
        </div>
        <div ref={wrap3Ref} className={`${styles.wrap} ${styles['wrap--3']}`}>
          <div ref={container3Ref} className={`${styles.container} ${styles['container--3']}`}>
            <p>3. Establishing an Ethical Ambience in the Institution</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseOutcome;