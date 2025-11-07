// SwiperCarousel.jsx  ← YOUR FILE (only 3 lines fixed)
import React, { useEffect, useRef } from 'react';
import './Swiper.css';

const demoData = [
  { id: 1, src: "/images/placements 1.jpg", alt: "Placement 1" },
  { id: 2, src: "/images/placement 2.jpeg", alt: "Placement 2" },
  { id: 3, src: "/images/companys.jpg", alt: "Companies" },
  { id: 4, src: "/images/company2.webp", alt: "Company 2" },
  { id: 5, src: "/images/placements 1.jpg", alt: "Placement 1" },
  { id: 6, src: "/images/placement 2.jpeg", alt: "Placement 2" },
  { id: 7, src: "/images/companys.jpg", alt: "Companies" },
  { id: 8, src: "/images/company2.webp", alt: "Company 2" },
];

const SwiperCarousel = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.onload = () => {
      if (window.Swiper && swiperRef.current) {

        const wrapper = swiperRef.current.querySelector('.swiper-wrapper');
        wrapper.innerHTML = '';
        demoData.forEach(item => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          slide.innerHTML = `<img src="${item.src}" alt="${item.alt}" />`;
          wrapper.appendChild(slide);
        });

        const isMobile = window.innerWidth <= 768;

        swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
          slidesPerView: isMobile ? 1 : 5,
          spaceBetween: isMobile ? 1 : 0,
          centeredSlides: true,
          loop: true,
          simulateTouch: true,

          // ONLY THIS LINE FIXED
          direction: isMobile ? 'vertical' : 'horizontal',

          // ADD THIS LINE TO ENABLE UP/DOWN SWIPE ON MOBILE
          mousewheel: isMobile,

          navigation: {
            nextEl: ".swiper-carousel-next",
            prevEl: ".swiper-carousel-prev",
          },
        });

        calculateHeight();
      }
    };
    document.head.appendChild(script);

    const calculateHeight = () => {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(slide => {
        const width = slide.getBoundingClientRect().width;
        slide.style.height = `${width * 0.5625}px`; // 16:9
      });
    };
    window.addEventListener('resize', calculateHeight);
    calculateHeight();

    return () => {
      if (swiperInstanceRef.current) swiperInstanceRef.current.destroy();
      window.removeEventListener('resize', calculateHeight);
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="swiper-carousel-body">
      <div className="swiper-carousel-header">
        <h1 className="swiper-carousel-title">Placement Records</h1>
      </div>

      <div className="swiper-carousel-wrapper swiper" ref={swiperRef}>
        <div className="swiper-wrapper"></div>
        <div className="swiper-button swiper-carousel-next swiper-button-next"></div>
        <div className="swiper-button swiper-carousel-prev swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default SwiperCarousel;