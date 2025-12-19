import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CollegeFest.module.css";

/* Note:
 - Ensure images like "hero img.jpg", "magizh.jpg", etc. are available in your public folder
   or import them and replace the src strings accordingly.
*/
const MergedPage = () => {
  const stackRef = useRef(null);
  const [stackK, setStackK] = useState(0);
  const stackN = 7; // matches --n:7 in original markup

  // 3D Tilt Effect Handlers
  const handleTiltMove = (e) => {
    const figure = e.currentTarget;
    const image = figure.querySelector("img");
    if (!image) return;

    // Use offsetX/Y for stable local coordinates regardless of scroll/scale
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // Center is simply half of offset dimensions
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

  useEffect(() => {
    // Sync CSS variable --k on stack slider
    if (stackRef.current) {
      stackRef.current.style.setProperty("--k", String(stackK));
    }
  }, [stackK]);

  // Carousel (react-slick) settings mirroring OwlCarousel behavior
  const carouselSettings = {
    variableWidth: true, // similar to autoWidth
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

  const handleStackInc = (inc) => {
    setStackK((prev) => {
      const next = (prev + inc + stackN) % stackN;
      return next;
    });
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HERO */}
      <div className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" />
        <h1>Fests</h1>
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
              // srcSet="https://www.appharvest.com/wp-content/uploads/2021/02/image-1@2x.png 2x"
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
        <h2 className={styles.lineTitle}>College Fest Events</h2>
        <Slider {...carouselSettings}>
          <div
            className={styles.item}
            style={{
              backgroundImage:
                "url(https://www.mc3.edu/news/assets/2019/03/international-festival/international-festival-740x416.jpg)",
            }}
          >
            <div className={styles.itemDesc}>
              <h3>Cultural Fest</h3>
              <p>
                A vibrant event featuring dance, music, and cultural performances
                from around the world.
              </p>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage:
                "url(https://www.cloudfest.com/blog/wp-content/uploads/hackathon-contest-programmers.jpg)",
            }}
          >
            <div className={styles.itemDesc}>
              <h3>Tech Symposium</h3>
              <p>An exciting hackathon and coding competition for tech enthusiasts.</p>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage:
                "url(https://towsontigers.com/images/2025/5/15/051525_CAA_OUTDOOR_TRACK_CHAMPIONSHIPS_TOWSON_02.jpg)",
            }}
          >
            <div className={styles.itemDesc}>
              <h3>Sports Meet</h3>
              <p>Athletic competitions and games to promote fitness and teamwork.</p>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage:
                "url(https://media.licdn.com/dms/image/v2/D5612AQFcbTkg-Xy48A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712336327303?e=2147483647&v=beta&t=X2mvMoTPHLmK2t3ojU-8pSR_tnEVo0WRn09VXNLjuhE)",
            }}
          >
            <div className={styles.itemDesc}>
              <h3>Annual Day</h3>
              <p>Celebration of the year's achievements with awards and performances.</p>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage:
                "url(https://cdn.collegeraptor.com/wp/wp-content/uploads/2015/08/3456361414_ab1dbdc451_o.jpg)",
            }}
          >
            <div className={styles.itemDesc}>
              <h3>Music Night</h3>
              <p>Live concerts and musical performances by students and guests.</p>
            </div>
          </div>
          <div
            className={styles.item}
            style={{
              backgroundImage:
                "url(https://nwsa.mdc.edu/img/theater/theater-play-2.jpg)",
            }}
          >
            <div className={styles.itemDesc}>
              <h3>Drama Theater</h3>
              <p>Theatrical plays and drama acts showcasing acting talents.</p>
            </div>
          </div>
        </Slider>
      </section>

      {/* Latest Events Stack */}
      <section className={styles.latestEventsSection}>
        <div className={styles.eventsContainer}>
          <h1>Latest Events</h1>
          <section
            className={styles.stackSlider}
            ref={stackRef}
            style={{ "--n": stackN, "--k": stackK, position: "relative" }}
          >
            <article style={{ "--i": 0, "--a": "-7deg" }}>
              <h2>Magizh 2025</h2>
              <em>This is the first time such a grand function has <br /> been held in our college.</em>
              <img src="/images/magizh.jpg" alt="Magizh 2025 event" />
            </article>
            <article style={{ "--i": 1, "--a": "8deg" }}>
              <h2>National Service awareness</h2>
              <em>A discussion was held for students on National Service Awareness.</em>
              <img src="/images/national.jpg" alt="National Service awareness event" />
            </article>
            <article style={{ "--i": 2, "--a": "-3deg" }}>
              <h2>1st year inauguration ceremony</h2>
              <em>Department of BE / B.tech</em>
              <img src="/images/inauguration.jpg" alt="1st year inauguration ceremony" />
            </article>
            <article style={{ "--i": 3, "--a": "6deg" }}>
              <h2>Tech Trend Path of success</h2>
              <em>The future of technology is bright and full of possibilities.</em>
              <img src="/imaes/tech.jpg" alt="Tech Trend Path of success event" />
            </article>
            <article style={{ "--i": 4, "--a": "-11deg" }}>
              <h2>Freshers Day 2025</h2>
              <em>Department of Computer Application</em>
              <img src="/images/Freshers.jpg" alt="Freshers Day 2025 event" />
            </article>
            <article style={{ "--i": 5, "--a": "9deg" }}>
              <h2>Farewell Day 2025</h2>
              <em>Grand celebration of the physiotherapy class.</em>
              <img src="/images/farewell.jpg" alt="Farewell Day 2025 event" />
            </article>
            <article style={{ "--i": 6, "--a": "-4deg" }}>
              <h2>Cougar</h2>
              <em>Puma concolor</em>
              <img src="images/cougar.jpg" alt="Cougar" />
            </article>
            <div>
              <button aria-label="previous" data-inc="-1" onClick={() => handleStackInc(-1)} />
              <button aria-label="next" data-inc="1" onClick={() => handleStackInc(1)} />
            </div>
          </section>
        </div>
      </section>

      {/* Slanted Sections */}
      <section className={styles.slantedSection}>
        <div className={`${styles.rr} ${styles.rrLeft}`}>
          <div>
            <h2>Left Section</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
        <div className={`${styles.rr} ${styles.rrRight}`}>
          <div>
            <h2>Right Section</h2>
            <p>Lorem ipsum dolor sit amet, dolore eu feugiat facilisis.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergedPage;