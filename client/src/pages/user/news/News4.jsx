import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './News4.module.css';

const VerticalParallaxSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    { id: 1, image: 'https://picsum.photos/id/1011/1200/800', title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.', link: '#' },
    { id: 2, image: 'https://picsum.photos/id/1026/1200/800', title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.', link: '#' },
    { id: 3, image: 'https://picsum.photos/id/201/1200/800', title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.', link: '#' },
    { id: 4, image: 'https://picsum.photos/id/167/1200/800', title: 'we help you make modern interior', description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.', link: '#' },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Pagination, Autoplay, Parallax],
      direction: 'vertical',
      loop: true,
      speed: 1200,
      parallax: true,
      autoplay: { delay: 4000, disableOnInteraction: false },

      pagination: {
        el: `.${styles.paginationContainer}`,
        clickable: true,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bulletActive,
        renderBullet: (index, className) => `
          <span class="${className} ${styles.bulletSvg}">
            <svg width="28" height="28" viewBox="0 0 28 28">
              <circle class="${styles.circleOuter}" cx="14" cy="14" r="12" fill="none" stroke="#2b2d42" stroke-width="2"></circle>
              <circle class="${styles.circleInner}" cx="14" cy="14" r="4" fill="none" stroke="#2b2d42" stroke-width="3"></circle>
            </svg>
          </span>`,
      },

      on: {
        slideChangeTransitionStart: function () {
          // Remove active class from all slides
          swiperRef.current.querySelectorAll(`.${styles.item}`).forEach(el => {
            el.classList.remove(styles.active);
          });
          // Add active class to current slide
          this.slides[this.activeIndex].classList.add(styles.active);
        },
        init: function () {
          // Set first slide as active on init
          this.slides[this.activeIndex].classList.add(styles.active);
        },
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`swiper ${styles.swiper}`} ref={swiperRef}>
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <div key={slide.id} className={`swiper-slide ${styles.item}`}>
                <div className={styles.imageWrap}>
                  <img className={styles.img} src={slide.image} alt="Interior" />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{slide.title}</h3>
                  <p className={styles.desc}>{slide.description}</p>
                  <div className={styles.button}>
                    <a className={styles.linkArrowed} href={slide.link}>
                      read more
                      <svg className={styles.arrowIcon} width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#2b2d42" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                          <circle className={styles.arrowCircle} cx="16" cy="16" r="15.12"></circle>
                          <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navWrap}>
          <div className={styles.paginationContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default VerticalParallaxSlider;