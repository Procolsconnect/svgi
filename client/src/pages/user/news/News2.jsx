import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './News2.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const API_URL = import.meta.env.VITE_API_URL + "/api";

const DownscrollEffect = () => {
  const containerRef = useRef(null);
  const opacityRevealRef = useRef(null);
  const liquifyScrollRef = useRef(null);
  const liquidRef = useRef(null);
  const stickSectionRef = useRef(null);
  const reverseScrollRefs = useRef([]);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/newssection`);
        if (response.data.success && response.data.data.length > 0) {
          setSectionData(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching news section data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Only run animation if sectionData is loaded or after a timeout to ensure SplitText can find the headings
    // However, since some content is static, we can run it on mount
    const ctx = gsap.context(() => {
      // Text reveal in black section
      if (opacityRevealRef.current) {
        const splitLetters = new SplitText(opacityRevealRef.current, { type: "chars" });
        gsap.set(splitLetters.chars, { opacity: "0.2", y: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: stickSectionRef.current,
            pin: true,
            start: "center center",
            end: "+=1500",
            scrub: 1,
            pinSpacing: true
          }
        })
          .to(splitLetters.chars, {
            opacity: 1,
            duration: 1,
            ease: "none",
            stagger: 1
          })
          .to({}, { duration: 10 })
          .to(opacityRevealRef.current, {
            opacity: 0,
            scale: 1.2,
            duration: 50
          });
      }

      // Reverse scroll effect
      reverseScrollRefs.current.forEach(element => {
        if (element) {
          gsap.to(element, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

      // Liquify text + fade in
      if (liquifyScrollRef.current) {
        gsap.set(liquifyScrollRef.current, { opacity: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: liquifyScrollRef.current,
            start: "top bottom",
            end: "bottom 60%",
            scrub: true
          }
        })
          .to(liquidRef.current, { attr: { scale: 0 } }, 0)
          .to(liquifyScrollRef.current, { opacity: 1, y: 0 }, 0);
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [sectionData]); // Rerun when data arrives

  const addToReverseScrollRefs = (el) => {
    if (el && !reverseScrollRefs.current.includes(el)) {
      reverseScrollRefs.current.push(el);
    }
  };

  return (
    <div id="smooth-wrapper" className={styles['ds-container']} ref={containerRef}>
      <div id="smooth-content">
        {/* SECTION 1 – Behind Curtain */}
        <section className={styles['ds-section-one']}>
          <div className={styles['ds-section-content']}>
            {/* Title Area */}
            <div ref={addToReverseScrollRefs} className={`${styles['ds-reverse-scroll']} ${styles['ds-area-title']}`}>
              <h2 className={styles['ds-heading']} dangerouslySetInnerHTML={{ __html: sectionData?.title?.replace(' ', '<br />') || "behind<br />curtain" }}></h2>
            </div>

            {/* Right Image (Central in Mobile stack) */}
            <div className={`${styles['ds-image-wrapper']} ${styles['ds-area-image']}`}>
              <img
                ref={addToReverseScrollRefs}
                className={`${styles['ds-reverse-scroll']} ${styles['ds-image']}`}
                src={sectionData?.image || "https://assets.codepen.io/204808/alice-curtain.jpg"}
                alt="Section Image"
              />
            </div>

            {/* Paragraphs Area */}
            <div ref={addToReverseScrollRefs} className={`${styles['ds-reverse-scroll']} ${styles['ds-area-paras']}`}>
              <p className={styles['ds-paragraph-top']}>
                {sectionData?.description ? sectionData.description.split('.')[0] + '.' : "She tried the little golden key in the lock, and to her great delight it fitted !"}
              </p>
              <p className={styles['ds-paragraph']}>
                {sectionData?.description ? sectionData.description.split('.').slice(1).join('.') : "Alice opened the door and found that it led into a small passage"}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 – Pinned Text Reveal */}
        <section className={styles['ds-section-stick']} ref={stickSectionRef}>
          <p ref={opacityRevealRef} className={styles['ds-opacity-reveal']}>
            It was all very well to say "Drink me," but the wise little Alice was not going to do that
          </p>
        </section>

        {/* SECTION 3 – Liquify Video */}
        <section className={styles['ds-video-section']}>
          <video
            className={styles['ds-video']}
            src="https://assets.codepen.io/204808/alice-in-wonderland-vid.mov"
            muted
            autoPlay
            loop
            playsInline
          />

          <h2 ref={liquifyScrollRef} className={styles['ds-liquify-scroll']}>
            Alice's Adventures in Wonderland
          </h2>

          {/* SVG Liquify Filter */}
          <svg className={styles['ds-hidden']}>
            <filter id="liquify">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="warp" />
              <feDisplacementMap
                ref={liquidRef}
                id="liquid"
                in="SourceGraphic"
                in2="warp"
                scale="100"
                xChannelSelector="R"
                yChannelSelector="B"
              />
            </filter>
          </svg>
        </section>


      </div>
    </div>
  );
};

export default DownscrollEffect;