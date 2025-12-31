import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './CampusEventGallery.module.css';

const apiurl = import.meta.env.VITE_API_URL;
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollGallery = () => {
  const stripRef = useRef(null);
  const wrapperRef = useRef(null);
  const [projectImages, setProjectImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiurl}/api/campus/eventgallery`)
      .then(res => {
        setProjectImages(res.data.data);
      })
      .catch(err => console.error('Error loading event images:', err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Only run GSAP if we have images and refs, and importantly, strictly for desktop via matchMedia inside GSAP
    if (!stripRef.current || !wrapperRef.current || projectImages.length === 0) return;

    const mm = gsap.matchMedia();

    // Desktop Animation (Only runs if width > 900px)
    mm.add("(min-width: 901px)", () => {
      const strip = stripRef.current;
      const wrapper = wrapperRef.current;

      const getScrollAmount = () => {
        const stripWidth = strip.scrollWidth;
        const viewWidth = window.innerWidth;
        return -(stripWidth - viewWidth + 100);
      };

      gsap.to(strip, {
        x: () => getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Recalculate if dimensions change (e.g. images load)
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(strip);

      return () => resizeObserver.disconnect();
    });

    return () => {
      mm.revert();
    };
  }, [projectImages]);

  return (
    <div className={styles.root}>
      {/* Top Text Section */}
      <section className={styles.panel}>
        <h3 className={styles.mainHeading}>Campus Events</h3>
        <p className={styles.mainText}>
          Campus events are activities like sports days, cultural festivals, seminars, and social gatherings
          that enrich the student experience beyond academics. They foster community and connection,
          helping students develop important life skills like communication, teamwork, and leadership
          through participation and organization. Engaging in these events can also enhance student
          satisfaction, retention, and help uncover future career interests.
        </p>
      </section>

      {/* Desktop Gallery (GSAP) */}
      <section className={`${styles.portfolio} ${styles.desktopOnly}`} ref={wrapperRef}>
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryStrip} ref={stripRef}>
            {projectImages.length > 0 ? (
              projectImages.map((item, index) => (
                <div key={index} className={styles.projectWrap}>
                  <img
                    src={item.image}
                    alt={item.title || `Campus event ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))
            ) : !loading && (
              <p className={styles.noData}>No event images found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Gallery (Swiper) */}
      <section className={styles.mobileOnly}>
        {projectImages.length > 0 ? (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={styles.swiperContainer}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {projectImages.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <img src={item.image} alt={item.title || `Mobile event ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : !loading && (
          <p className={styles.noData}>No event images found.</p>
        )}
      </section>
    </div>
  );
};

export default HorizontalScrollGallery;