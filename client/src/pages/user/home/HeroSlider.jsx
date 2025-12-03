import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './HeroSlider.module.css';

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slides, setSlides] = useState([]);

  const startTimeRef = useRef(null);
  const rafIdRef = useRef(null);
  const videoRefs = useRef([]);
  const duration = 15000;
  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const { data } = await axios.get(`${apiurl}/api/hero`);
        const mappedSlides = data.data.map((item) => ({
          id: item.id,
          type: item.media_type === 'video' ? 'video' : 'image',
          src: item.media_url,
          title: item.title,
          description: item.description,
          button: item.button_text,
          align: 'center',
        }));
        setSlides(mappedSlides);
      } catch (err) {
        console.error('Failed to fetch slides:', err);
      }
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    if (!isPlaying || slides.length === 0) return;

    const loop = (now) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        setActiveIndex((i) => (i + 1) % slides.length);
        setProgress(0);
        startTimeRef.current = performance.now();
      }
      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafIdRef.current);
  }, [isPlaying, activeIndex, slides.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.playbackRate = 0.5;
        if (!video.src) {
          video.src = slides[i].src;
          video.load();
        }
      } else {
        video.playbackRate = 1.0;
      }
    });
  }, [activeIndex, slides]);

  const handlePagination = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      cancelAnimationFrame(rafIdRef.current);
    } else {
      setIsPlaying(true);
      const elapsed = (progress / 100) * duration;
      startTimeRef.current = performance.now() - elapsed;
    }
  };

  const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon} viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon} viewBox="0 0 24 24">
      <path d="M6 19h4V5H6zm8-14v14h4V5h-4z" />
    </svg>
  );

  return (
    <div className={styles.wrapperSlider}>
      <div className={styles.mainSlider}>
        <div className={styles.sliderWrapper}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ''}`}
            >
              <div className={styles.item}>
                {slide.type === 'video' ? (
                  <div className={styles.video}>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={index === activeIndex ? 'auto' : 'none'}
                    >
                      {index === activeIndex && <source src={slide.src} type="video/mp4" />}
                    </video>
                  </div>
                ) : (
                  <picture className={styles.picture}>
                    <img src={slide.src} alt={slide.title} />
                  </picture>
                )}
                <div className={styles.parentText}>
                  <div className={`${styles.infoText} ${slide.align === 'left' ? styles.alignLeft : ''}`}>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <a href="#">{slide.button}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.paginationBullet} ${index === activeIndex ? styles.bulletActive : ''}`}
              onClick={() => handlePagination(index)}
            >
              {index === activeIndex ? (
                <div className={styles.bulletContent}>
                  <button
                    className={styles.playpauseBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>
                  <div
                    className={`${styles.percentage} ${styles.show}`}
                    style={{
                      '--p': progress,
                      background: `conic-gradient(#1C69D4 0deg, #1C69D4 ${progress * 3.6}deg, #c9d6d7 ${progress * 3.6}deg, #c9d6d7 360deg)`,
                    }}
                  >
                    <div className={styles.number}>{index + 1}</div>
                  </div>
                </div>
              ) : (
                <span className={styles.number}>{index + 1}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;