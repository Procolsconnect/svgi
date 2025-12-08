// File: SvgVideoMask.jsx
import React, { useEffect, useRef } from "react";
import styles from "./Mask.module.css";

export default function SvgVideoMask({
  title = "SVGI",

  poster = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg",
  sources = [
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm", type: "video/webm" },
    { src: "http://thenewcode.com/assets/videos/ocean-small.mp4", type: "video/mp4" }
  ],

}) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (videoRef.current) {
        videoRef.current.removeAttribute("autoplay");
        videoRef.current.pause();
      }
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
    <header className={styles.headerMask}>
  <video
    ref={videoRef}
    className={styles.coverVideo}
    autoPlay
    playsInline
    muted
    loop
    preload="metadata"
    poster={poster}
    style={{
      maskImage: 'url(#textmask)',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      maskSize: 'contain',
      WebkitMaskImage: 'url(#textmask)',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      WebkitMaskSize: 'contain',
    }}
  >
    {sources.map((s, i) => (
      <source key={i} src={s.src} type={s.type} />
    ))}
    Your browser does not support the video tag.
  </video>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 285 80"
    preserveAspectRatio="xMidYMid meet"
    className={styles.svgMask}
    style={{ background: 'transparent', pointerEvents: 'none' }}
    aria-hidden="true"
  >
    <defs>
      <mask id="textmask">
        <rect width="100%" height="100%" fill="#000" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fontFamily="Biko, system-ui, sans-serif"
          fontWeight="700"
          fontSize="48px"
          letterSpacing="6px"
          text-transform="uppercase"
          fill="#fff"
        >
          {title}
        </text>
      </mask>
    </defs>
    {/* ← DELETE EVERYTHING ELSE INSIDE SVG — NO <rect>, NO nothing */}
  </svg>
</header>
      </div>

   
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* File: SvgVideoMask.module.css                                        */
