import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // External CSS file

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const startTimeRef = useRef(null);
  const rafIdRef = useRef(null);
  const duration = 15000;

  const slides = [
    {
      type: 'video',
      src: '/videos/College Dron.mp4',
      title: 'Welcome to SVGI',
      subtitle: 'Group of Institutions',
      description: 'Transforming knowledge into real-world impact, Shree Vengadeshwara empowers you with skills for a thriving career. Your future-ready education starts here.',
      button: 'Explore',
      align: 'center'
    },
    {
      type: 'image',
      src: '/images/WhatsApp Image 2025-07-31 at 17.54.07_0eeece1f.jpg',
      title: 'Skill-Focused & Actionable',
      description: '"Beyond the classroom, into your career. We bridge theory with practice, ensuring you gain the essential skills employers demand."',
      button: 'Learn More',
      align: 'center'
    },
    {
      type: 'image',
      src: '/images/sky clg.jpg',
      title: '"Pedagogy" The method and practice of teaching',
      description: 'A place for higher learning, sometimes part of a university.',
      button: 'See More',
      align: 'left'
    },
    {
      type: 'video',
      src: '/videos/College Dron 1.mp4',
      title: 'Beach Video',
      description: 'Another video slide slowed down.',
      button: 'Dive In',
      align: 'left'
    }
  ];

  const videoRefs = useRef([]);

  /* ---------- AUTO PLAY LOGIC ---------- */
  useEffect(() => {
    if (!isPlaying) return;

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

  /* ---------- VIDEO SPEED & LOAD ONLY ACTIVE ---------- */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === activeIndex) {
          video.playbackRate = 0.5;
          if (!video.src) {
            video.src = slides[i].src;
            video.load();
          }
        } else {
          video.playbackRate = 1.0;
        }
      }
    });
  }, [activeIndex, slides]);

  /* ---------- PAGINATION CLICK ---------- */
  const handlePagination = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  /* ---------- PLAY / PAUSE ---------- */
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
    <svg xmlns="http://www.w3.org/2000/svg" className="svgi-svg-icon" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );

  const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="svgi-svg-icon" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6zm8-14v14h4V5h-4z"/>
    </svg>
  );

  return (
    <div className="svgi-wrapper-slider">
      <div className="svgi-main-slider">
        <div className="svgi-slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`svgi-slide ${index === activeIndex ? 'svgi-slide-active' : ''}`}
            >
              <div className="svgi-item">
                {slide.type === 'video' ? (
                  <div className="svgi-video">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={index === activeIndex ? "auto" : "none"}
                    >
                      {index === activeIndex && <source src={slide.src} type="video/mp4" />}
                    </video>
                  </div>
                ) : (
                  <picture className="svgi-picture">
                    <img src={slide.src} alt="Slide" />
                  </picture>
                )}
                <div className="svgi-parent-text">
                  <div className={`svgi-info-text ${slide.align === 'left' ? 'svgi-align-left' : ''}`}>
                    <h2>{slide.title}</h2>
                    {slide.subtitle && <h2>{slide.subtitle}</h2>}
                    <p>{slide.description}</p>
                    <a href="#">{slide.button}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- PAGINATION ---------- */}
        <div className="svgi-pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`svgi-pagination-bullet ${index === activeIndex ? 'svgi-bullet-active' : ''}`}
              onClick={() => handlePagination(index)}   
            >
             {index === activeIndex ? (
                <div className="svgi-bullet-content">
                  <div
                    role="button"
                    tabIndex={0}
                    className="svgi-playpause-btn"
                    style={{ pointerEvents: 'auto', outline: 'none' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      togglePlayPause();
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && togglePlayPause()}
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </div>

                  <div
                    className="svgi-percentage svgi-show"
                    style={{ 
                      '--p': progress,
                      background: `conic-gradient(#1C69D4 0deg, #1C69D4 ${progress * 3.6}deg, #c9d6d7 ${progress * 3.6}deg, #c9d6d7 360deg)`
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="svgi-number">{index + 1}</div>
                  </div>
                </div>
              ) : (
                <span className="svgi-number">{index + 1}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;