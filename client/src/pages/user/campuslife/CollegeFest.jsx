import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CollegeFest.module.css";
import EventStack from "./EventStack";

const MergedPage = () => {
  const eventData = [
    {
      title: "Magizh 2025",
      description: "This is the first time such a grand function has <br /> been held in our college.",
      image: "/images/magizh.jpg",
      angle: "-7deg"
    },
    {
      title: "National Service awareness",
      description: "A discussion was held for students on National Service Awareness.",
      image: "/images/national.jpg",
      angle: "8deg"
    },
    {
      title: "1st year inauguration ceremony",
      description: "Department of BE / B.tech",
      image: "/images/inagration.jpg",
      angle: "-3deg"
    },
    {
      title: "Tech Trend Path of success",
      description: "The future of technology is bright and full of possibilities.",
      image: "/images/tech.jpg",
      angle: "6deg"
    },
    {
      title: "Freshers Day 2025",
      description: "Department of Computer Application",
      image: "/images/Freshers.jpg",
      angle: "-11deg"
    },
    {
      title: "Farewell Day 2025",
      description: "Grand celebration of the physiotherapy class.",
      image: "/images/farawell.jpg",
      angle: "9deg"
    },
    {
      title: "Cougar",
      description: "Puma concolor",
      image: "/images/farawell.jpg",
      angle: "-4deg"
    }
  ];

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
      <EventStack events={eventData} />

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