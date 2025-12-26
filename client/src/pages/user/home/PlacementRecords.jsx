import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./PlacementRecords.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const SwiperCarousel = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [swiperData, setSwiperData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchSwiperData = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/placement-swiper`);
        if (res.data && Array.isArray(res.data)) {
          setSwiperData(res.data);
        } else if (res.data?.data) {
          setSwiperData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching placement swiper:", err);
      }
    };

    fetchSwiperData();
  }, []);

  useEffect(() => {
    if (!swiperData.length) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

    script.onload = () => {
      if (!window.Swiper || !swiperRef.current) return;

      const wrapper = swiperRef.current.querySelector(".swiper-wrapper");
      wrapper.innerHTML = "";

      swiperData.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${item.image_url}" alt="Placement" />`;
        wrapper.appendChild(slide);
      });

      const isMobile = window.innerWidth <= 768;

      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }

      swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
        slidesPerView: isMobile ? 3 : 5,
        spaceBetween: isMobile ? 1 : 0,
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        simulateTouch: true,
        direction: isMobile ? "vertical" : "horizontal",
        mousewheel: isMobile,
        navigation: {
          nextEl: ".swiper-carousel-next",
          prevEl: ".swiper-carousel-prev",
        },
        on: {
          init: (swiper) => {
            swiper.slideToLoop(0, 0);
          },
        },
      });

      // Run immediately and then again after a short delay to ensure layout is settled
      updateSlideHeights();
      setTimeout(updateSlideHeights, 100);
      setTimeout(updateSlideHeights, 500);
    };

    document.head.appendChild(script);

    const updateSlideHeights = () => {
      const swiperElem = swiperRef.current;
      if (!swiperElem) return;

      const slides = swiperElem.querySelectorAll(".swiper-slide") || [];
      const containerWidth = swiperElem.offsetWidth;
      const isMobile = window.innerWidth <= 768;
      const expectedSlidesPerView = isMobile ? 3 : 5;

      slides.forEach((slide) => {
        let width = slide.getBoundingClientRect().width;

        // If width is uninitialized, too small, or too huge (e.g. 100% of container),
        // we use a safe fallback based on the container width.
        if (containerWidth > 0 && (width <= 10 || width > containerWidth / 2)) {
          width = containerWidth / expectedSlidesPerView;
        }

        if (width > 0) {
          // Calculate 16:9 height (width * 0.5625)
          const targetHeight = width * 0.5625;
          slide.style.height = `${targetHeight}px`;
        }
      });
    };

    window.addEventListener("resize", updateSlideHeights);

    return () => {
      swiperInstanceRef.current?.destroy(true, true);
      window.removeEventListener("resize", updateSlideHeights);
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, [swiperData]);

  return (
    <div className={styles.swiperCarouselBody}>
      <div className={styles.swiperCarouselHeader}>
        <h1
          ref={titleRef}
          className={`${styles.swiperCarouselTitle} ${isVisible ? styles.swiperCarouselTitleAnimate : ''}`}
        >
          Placement Records
        </h1>
      </div>

      <div className={`swiper ${styles.swiperCarouselWrapper}`} ref={swiperRef}>
        <div className="swiper-wrapper"></div>
        <div
          className={`swiper-button-next swiper-carousel-next`}
        ></div>
        <div
          className={`swiper-button-prev swiper-carousel-prev`}
        ></div>
      </div>
    </div>
  );
};

export default SwiperCarousel;
