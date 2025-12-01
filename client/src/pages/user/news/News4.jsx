import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './News4.css';

const VerticalParallaxSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/id/1011/1200/800',
      title: 'we help you make modern interior',
      description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.',
      link: '#'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/1026/1200/800',
      title: 'we help you make modern interior',
      description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.',
      link: '#'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/201/1200/800',
      title: 'we help you make modern interior',
      description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.',
      link: '#'
    },
    {
      id: 4,
      image: 'https://picsum.photos/id/167/1200/800',
      title: 'we help you make modern interior',
      description: 'we will help you to make an elegant and luxurious interior designed by professional interior designer.',
      link: '#'
    }
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay, Parallax],
        direction: 'vertical',
        loop: true,
        speed: 1200,
        parallax: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.vps-swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' vps-pagination-bullet--svg-animation">' +
              '<svg width="28" height="28" viewBox="0 0 28 28">' +
              '<circle class="vps-svg__circle" cx="14" cy="14" r="12" fill="none" stroke="#2b2d42" stroke-width="2"></circle>' +
              '<circle class="vps-svg__circle-inner" cx="14" cy="14" r="4" fill="none" stroke="#2b2d42" stroke-width="3"></circle>' +
              '</svg></span>';
          },
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <div className="vps-container">
      <div className="vps-slider-wrapper">
        <div className="swiper vps-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <div key={slide.id} className="vps-item swiper-slide">
                <div className="vps-image-wrap">
                  <img className="vps-img" src={slide.image} alt="Interior" />
                </div>
                <div className="vps-content-wrap">
                  <h3 className="vps-title">{slide.title}</h3>
                  <div className="vps-desc">{slide.description}</div>
                  <div className="vps-button">
                    <a className="vps-link vps-link--arrowed" href={slide.link}>
                      read more
                      <svg className="vps-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#2b2d42" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                          <circle className="vps-arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path className="vps-arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vps-nav-pag-wrap">
          <div className="vps-swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default VerticalParallaxSlider;