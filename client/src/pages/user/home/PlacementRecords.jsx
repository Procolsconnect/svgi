import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Mousewheel } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./PlacementRecords.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const SwiperCarousel = () => {
  const [swiperData, setSwiperData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const titleRef = useRef(null);

  // Resize listener for responsive Direction/Slides
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch Data
  useEffect(() => {
    const fetchSwiperData = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/placement-swiper`);
        let data = [];
        if (res.data && Array.isArray(res.data)) {
          data = res.data;
        } else if (res.data?.data) {
          data = res.data.data;
        }

        // If data is too small for a smooth loop with 5 slides view, duplicate it
        if (data.length > 0 && data.length < 10) {
          setSwiperData([...data, ...data]);
        } else {
          setSwiperData(data);
        }
      } catch (err) {
        console.error("Error fetching placement swiper:", err);
      }
    };
    fetchSwiperData();
  }, []);

  return (
    <div className={styles.swiperCarouselBody}>
      <div className={styles.swiperCarouselHeader}>
        <h1
          ref={titleRef}
          className={`${styles.swiperCarouselTitle} ${isVisible ? styles.swiperCarouselTitleAnimate : ""}`}
        >Placement Records</h1>
      </div>

      <div className={styles.swiperCarouselWrapper}>
        {swiperData.length > 0 && (
          <Swiper
            key={`${swiperData.length}-${isMobile}`}
            modules={[Navigation, Mousewheel]}
            direction={isMobile ? "vertical" : "horizontal"}
            slidesPerView={isMobile ? 3 : 5}
            spaceBetween={isMobile ? 30 : 0}
            centeredSlides={true}
            loop={swiperData.length >= 5}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            touchReleaseOnEdges={true}
            cssMode={isMobile}
            grabCursor={true}
            navigation={{
              nextEl: ".swiper-carousel-next",
              prevEl: ".swiper-carousel-prev",
            }}
            className="swiper"
            style={{ width: "100%", height: "100%" }}
          >
            {swiperData.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.image_url}
                  alt="Placement"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons with SVG Icons */}
            <div className="swiper-carousel-next">
              <ChevronRight color="white" size={24} />
            </div>
            <div className="swiper-carousel-prev">
              <ChevronLeft color="white" size={24} />
            </div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SwiperCarousel;
