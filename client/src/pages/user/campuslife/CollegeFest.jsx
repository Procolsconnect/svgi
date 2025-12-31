import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CollegeFest.module.css";
import EventStack from "./EventStack";

const API_BASE = import.meta.env.VITE_API_URL + "/api/campus";

const MergedPage = () => {
  const [hero, setHero] = useState(null);
  const [carouselCards, setCarouselCards] = useState([]);
  const [stackEvents, setStackEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, cardRes, eventRes] = await Promise.all([
          axios.get(`${API_BASE}/festivalhero`),
          axios.get(`${API_BASE}/festivalcard`),
          axios.get(`${API_BASE}/festivalevent`)
        ]);

        if (heroRes.data.success && heroRes.data.data.length > 0) {
          setHero(heroRes.data.data[0]);
        }

        setCarouselCards(cardRes.data.data || []);

        // Add random angles for stack effect if not present in DB
        const angles = ["-7deg", "8deg", "-3deg", "6deg", "-11deg", "9deg", "-4deg"];
        const processedEvents = (eventRes.data.data || []).map((ev, i) => ({
          ...ev,
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

  // Carousel (react-slick) settings mirroring OwlCarousel behavior
  const carouselSettings = {
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: true,
    dots: true,
    centerMode: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    focusOnSelect: true,
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HERO */}
      <div className={styles.hero}>
        <img src={hero?.image || "hero img.jpg"} alt={hero?.title || "Fests"} />
        <h1>{hero?.title || "Fests"}</h1>
      </div>

      {/* Hover Animation Section */}
      <div className={styles.container}>
        <h1 className={styles.introTitle}>
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
        </h1>
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
                return (
                  <div
                    key={card._id}
                    className={styles.item}
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
              ["Cultural Fest", "Tech Symposium", "Sports Meet"].map((title, i) => (
                <div
                  key={i}
                  className={styles.item}
                  style={{
                    backgroundImage: "url(https://picsum.photos/800/400?random=" + i + ")",
                  }}
                >
                  <div className={styles.itemDesc}>
                    <h3>{title}</h3>
                    <p>Discover the vibrant energy of SVGI campus life.</p>
                  </div>
                </div>
              ))
            )}
          </Slider>
        )}
      </section>

      {/* Latest Events Stack */}
      <EventStack events={stackEvents} title="Festival Events " />

      {/* Slanted Sections */}
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