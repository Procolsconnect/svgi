import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./PlacementRecords.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const SwiperCarousel = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [swiperData, setSwiperData] = useState([]);

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

      updateSlideHeights();
    };

    document.head.appendChild(script);

    const updateSlideHeights = () => {
      const slides = swiperRef.current?.querySelectorAll(".swiper-slide") || [];
      slides.forEach((slide) => {
        const width = slide.getBoundingClientRect().width;
        slide.style.height = `${width * 0.5625}px`;
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
        <h1 className={styles.swiperCarouselTitle}>Placement Records</h1>
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
