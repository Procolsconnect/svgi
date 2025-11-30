import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import './news2.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const DownscrollEffect = () => {
  const containerRef = useRef(null);
  const opacityRevealRef = useRef(null);
  const liquifyScrollRef = useRef(null);
  const liquidRef = useRef(null);
  const reverseScrollRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal in black section
      if (opacityRevealRef.current) {
        const splitLetters = new SplitText(opacityRevealRef.current, { type: "chars" });
        gsap.set(splitLetters.chars, { opacity: "0.2", y: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".ds-section-stick",
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
  }, []);

  const addToReverseScrollRefs = (el) => {
    if (el && !reverseScrollRefs.current.includes(el)) {
      reverseScrollRefs.current.push(el);
    }
  };

  return (
    <div className="ds-container" ref={containerRef}>
      <div className="ds-content-wrapper">
        {/* SECTION 1 – Behind Curtain */}
        <section className="ds-section-one">
          <div className="ds-section-content">
            {/* Left Text */}
            <div ref={addToReverseScrollRefs} className="ds-reverse-scroll">
              <h1 className="ds-heading">behind<br />curtain</h1>
              <p className="ds-paragraph-top">
                She tried the little golden key in the lock, and to her great delight it fitted !
              </p>
              <p className="ds-paragraph">
                Alice opened the door and found that it led into a small passage
              </p>
            </div>

            {/* Right Image */}
            <div className="ds-image-wrapper">
              <img
                ref={addToReverseScrollRefs}
                className="ds-reverse-scroll ds-image"
                src="https://assets.codepen.io/204808/alice-curtain.jpg"
                alt="Alice behind curtain"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 – Pinned Text Reveal */}
        <section className="ds-section-stick">
          <p ref={opacityRevealRef} className="ds-opacity-reveal">
            It was all very well to say "Drink me," but the wise little Alice was not going to do that
          </p>
        </section>

        {/* SECTION 3 – Liquify Video */}
        <section className="ds-video-section">
          <video
            className="ds-video"
            src="https://assets.codepen.io/204808/alice-in-wonderland-vid.mov"
            muted
            autoPlay
            loop
            playsInline
          />

          <h1 ref={liquifyScrollRef} className="ds-liquify-scroll">
            Alice's Adventures in Wonderland
          </h1>

          {/* SVG Liquify Filter */}
          <svg className="ds-hidden">
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