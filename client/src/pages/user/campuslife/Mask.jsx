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
        >
          {sources.map((s, i) => (
            <source key={i} src={s.src} type={s.type} />
          ))}
          Your browser does not support the video tag.
        </video>

        <div className={styles.overlay}>
          <h1 className={styles.textMask}>{title}</h1>
        </div>
      </header>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* File: SvgVideoMask.module.css                                        */
