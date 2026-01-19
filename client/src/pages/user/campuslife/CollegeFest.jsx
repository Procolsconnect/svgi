import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CollegeFest.module.css";
import EventStack from "./EventStack";
import CommonHero from "../../../components/CommonHero";

const API_BASE = import.meta.env.VITE_API_URL + "/api/campus";

const MergedPage = () => {
  const [carouselCards, setCarouselCards] = useState([]);
  const [activeId, setActiveId] = useState(0); // Track active card manually
  const [stackEvents, setStackEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardRes, eventRes] = await Promise.all([
          axios.get(`${API_BASE}/festivalcard`),
          axios.get(`${API_BASE}/festivalevent`)
        ]);


        if (cardRes.data.data && cardRes.data.data.length > 0) {
          setCarouselCards(cardRes.data.data);
          // Set first card as active by default using its ID
          setActiveId(cardRes.data.data[0]._id);
        } else {
          setCarouselCards([]);
        }

        // Add random angles for stack effect if not present in DB
        const angles = ["-7deg", "8deg", "-3deg", "6deg", "-11deg", "9deg", "-4deg"];
        const processedEvents = (eventRes.data.data || []).map((ev, i) => ({
          ...ev,
          description: ev.description || ev.desc || "", // Ensure description is mapped correctly
          angle: angles[i % angles.length]
        }));
        setStackEvents(processedEvents);

      } catch (err) {
        console.error("Error fetching fest data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 3D Tilt Effect Handlers
  const handleTiltMove = (e) => {
    const figure = e.currentTarget;
    const image = figure.querySelector("img");
    if (!image) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const centerX = figure.offsetWidth / 2;
    const centerY = figure.offsetHeight / 2;

    const angleX = (centerY - y) / -25;
    const angleY = (centerX - x) / 25;

    image.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleTiltLeave = (e) => {
    const figure = e.currentTarget;
    const image = figure.querySelector("img");
    if (image) {
      image.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  // Carousel settings matching Owl Carousel HTML behavior
  const carouselSettings = {
    variableWidth: true,      // Matches Owl's autoWidth
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,      // Matches Owl's autoplayTimeout
    speed: 800,               // Matches Owl's smartSpeed
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,       // Matches Owl's touchDrag
    draggable: true,          // Matches Owl's mouseDrag
    arrows: false,
    dots: true,
    centerMode: false,
    focusOnSelect: false,     // Prevent Slick auto-centering
    pauseOnHover: true,       // Matches Owl's autoplayHoverPause
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HERO */}
      <CommonHero apiEndpoint="/api/campus/festivalhero" />

      {/* Hover Animation Section */}
      <div className={styles.container}>
        <h2  className={styles.introTitle}>
          AppHarvest
          <span
            className={styles.introFigure}
            onMouseMove={handleTiltMove}
            onMouseOut={handleTiltLeave}
          >
            <img
              src="https://www.appharvest.com/wp-content/uploads/2021/02/image-1.png"
              width="235"
              height="95"
              alt=""
              className={`${styles.introImage} ${styles.introImage1}`}
              loading="lazy"
            />
          </span>
          is on a mission
          <span
            className={styles.introFigure}
            onMouseMove={handleTiltMove}
            onMouseOut={handleTiltLeave}
          >
            <img
              src="https://www.appharvest.com/wp-content/uploads/2021/02/image-2.png"
              className={`${styles.introImage} ${styles.introImage2}`}
              loading="lazy"
            />
          </span>
          to feed the future, from the heart of
          <span
            className={`${styles.introFigure} ${styles.introFigure3}`}
            onMouseMove={handleTiltMove}
            onMouseOut={handleTiltLeave}
          >
            <img
              src="https://www.appharvest.com/wp-content/uploads/2021/02/image-3.png"
              width="149"
              height="95"
              alt=""
              className={styles.introImage}
              loading="lazy"
            />
          </span>
          Appalachia.
        </h2 >
      </div>

      {/* Carousel Section (react-slick replacing OwlCarousel) */}
      <section className={styles.gameSection}>
        <h2 className={styles.lineTitle}>College Fest Highlights</h2>
        {(carouselCards.length > 0 || !loading) && (
          <Slider {...carouselSettings} key={carouselCards.length}>
            {carouselCards.length > 0 ? (
              carouselCards.map((card) => {
                // Remove \r\n from description if present
                const cleanDesc = card.description?.replace(/[\r\n]+/g, ' ');
                const isActive = activeId === card._id;
                return (
                  <div
                    key={card._id}
                    className={`${styles.item} ${isActive ? styles.active : ""}`}
                    onClick={() => setActiveId(card._id)}
                  >
                    <img src={card.image} alt={card.title} className={styles.itemBgImg} />
                    <div className={styles.itemDesc}>
                      <h3>{card.title}</h3>
                      <p>{cleanDesc}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Fallback Carousel Items */
              ["Cultural Fest", "Tech Symposium", "Sports Meet", "Annual Day", "Music Night", "Drama Theater"].map((title, i) => {
                const isActive = activeId === i;
                return (
                  <div
                    key={i}
                    className={`${styles.item} ${isActive ? styles.active : ""}`}
                    style={{
                      backgroundImage: "url(https://picsum.photos/800/400?random=" + i + ")",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    onClick={() => setActiveId(i)}
                  >
                    <div className={styles.itemDesc}>
                      <h3>{title}</h3>
                      <p>Discover the vibrant energy of SVGI campus life.</p>
                    </div>
                  </div>
                );
              })
            )}
          </Slider>
        )}
      </section>
      <EventStack events={stackEvents} />
      <section className={styles.slantedSection}>
        <div className={`${styles.rr} ${styles.rrLeft}`}>
          <div>
            <h2>Campus Spirit</h2>
            <p>Fostering creativity and talent through annual departmental celebrations.</p>
          </div>
        </div>
        <div className={`${styles.rr} ${styles.rrRight}`}>
          <div>
            <h2>Community Growth</h2>
            <p>Bringing students together to create lasting memories and strong bonds.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergedPage;