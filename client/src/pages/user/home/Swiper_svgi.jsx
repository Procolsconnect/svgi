import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Swiper.css";

const apiurl = import.meta.env.VITE_API_URL;

const SwiperCarousel = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [swiperData, setSwiperData] = useState([]);

  // ✅ Fetch API data once
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

  // ✅ Initialize Swiper after data load
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

      // 🧹 Clear old slides
      const wrapper = swiperRef.current.querySelector(".swiper-wrapper");
      wrapper.innerHTML = "";

      // 🖼️ Inject slides dynamically
      swiperData.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${apiurl}${item.image_url}" alt="Placement" />`;
        wrapper.appendChild(slide);
      });

      const isMobile = window.innerWidth <= 768;

      // 🧨 Destroy old instance if exists
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }

      // 🚀 Initialize Swiper correctly
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
            swiper.slideToLoop(0, 0); // ✅ start from first slide
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
        slide.style.height = `${width * 0.5625}px`; // maintain 16:9 aspect ratio
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
