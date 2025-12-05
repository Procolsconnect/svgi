import React, { useEffect, useRef, useState } from "react";
import styles from "./vismis.module.css";

const cards = [
  {
    title: "Card Title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo.",
    img: "https://picsum.photos/id/1/800/800",
    aria: "Read more about Card Title 1",
  },
  {
    title: "Card Title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis.",
    img: "https://picsum.photos/id/2/800/800",
    aria: "Read more about Card Title 2",
  },
  {
    title: "Card Title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis unde minus.",
    img: "https://picsum.photos/id/3/800/800",
    aria: "Read more about Card Title 3",
  },
];

const circleItems = [
  { id: "Academics", title: "Academics" },
  { id: "Research", title: "Research" },
  { id: "Campus", title: "Campus" },
  { id: "Placements", title: "Placements" },
];

export default function CampusCanvas() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [itemsShown, setItemsShown] = useState(new Array(circleItems.length).fill(false));
  const rotateRef = useRef(null);

  // responsive flags
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // staggered reveal for circle segments
  useEffect(() => {
    const timeouts = [];
    circleItems.forEach((_, i) => {
      const t = setTimeout(() => {
        setItemsShown((prev) => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, 350 * i);
      timeouts.push(t);
    });
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  // auto-rotate
  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoRotate = () => {
    stopAutoRotate();
    rotateRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % circleItems.length);
    }, 3000);
  };

  const stopAutoRotate = () => {
    if (rotateRef.current) {
      clearInterval(rotateRef.current);
      rotateRef.current = null;
    }
  };

  const handleCircleClick = (index) => {
    setActiveIndex(index);
    // restart auto-rotate
    stopAutoRotate();
    rotateRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % circleItems.length);
    }, 3000);
  };

  // SVG responsive configuration
  const svgViewBox = isMobile ? "0 10 760 700" : "-100 60 1020 500";
  const missionTitleStyle = {
    fontSize: isMobile ? 24 : 24,
    fontWeight: 700,
    fill: isMobile ? "#111" : "#fff",
  };
  const subTextStyle = {
    fontSize: isMobile ? 16 : 14,
    fill: isMobile ? "#111" : "#fff",
    fontWeight: 600,
  };
  const subMissionStyle = {
    fontSize: isMobile ? 14 : 12,
    fill: isMobile ? "#111" : "#fff",
  };

  return (
    <div className={styles.root}>
      {/* HERO */}
      <div id="hero" className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" />
        <h1>Our Mission and Visions</h1>
      </div>

      {/* CARDS */}
      <ol className={styles.cards__container} title="Blog entries" aria-label="cards list">
        {cards.map((c, i) => (
          <li className={styles.card} key={i}>
            <div className={styles.card__thumb}>
              <img className="animate" src={c.img} alt={`Card image ${i + 1}`} />
            </div>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>{c.title}</h3>
              <p className={styles.card__text}>{c.text}</p>
              <a className={styles.card__btn} aria-label={c.aria} href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ol>

      {/* SVG SECTION */}
      <div className={styles["svg-wrapper"]} aria-hidden={false}>
        <svg
          id="svg4136"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox={svgViewBox}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Mission, Vision and Values illustration"
        >
          <g id="layer1">
            <path id="path4806" d="m0.83398 57.5v315h261.4l-0.15234-0.11914 245.41-314.88h-506.66z" fill="#cacaca" />
            <text x="15" y={isMobile ? 80 : 110} style={missionTitleStyle}>
              Mission
            </text>
            <text x="15" y={isMobile ? 110 : 140} style={subTextStyle}>
              We are reliable partners
            </text>
            <text x="15" y={isMobile ? 130 : 155} style={subMissionStyle}>
              Provide superior products and services
            </text>
            <text x="15" y={isMobile ? 150 : 170} style={subMissionStyle}>
              Deliver Swiss quality
            </text>
            <text x="15" y={isMobile ? 170 : 185} style={subMissionStyle}>
              Be cost competitive
            </text>
            <text x="15" y={isMobile ? 195 : 210} style={subTextStyle}>
              We are transparent &amp; strive for excellence
            </text>
            <text x="15" y={isMobile ? 215 : 225} style={subMissionStyle}>
              Use synergies &amp; effective bundle skills
            </text>
            <text x="15" y={isMobile ? 235 : 240} style={subMissionStyle}>
              Have efficient, resilient and transparent processes
            </text>
            <text x="15" y={isMobile ? 255 : 255} style={subMissionStyle}>
              Leverage competences and expertise
            </text>
            <text x="15" y={isMobile ? 275 : 270} style={subMissionStyle}>
              Monitor performance
            </text>
            <text x="15" y={isMobile ? 300 : 295} style={subTextStyle}>
              We develop our suppliers
            </text>
            <text x="15" y={isMobile ? 320 : 310} style={subMissionStyle}>
              Optimizing our level of vertical integration
            </text>
            <text x="15" y={isMobile ? 340 : 325} style={subMissionStyle}>
              Sustaining partnerships
            </text>
            <text x="15" y={isMobile ? 360 : 340} style={subMissionStyle}>
              Managing our supply base
            </text>
          </g>

          <g id="layer2">
            <path id="path4804" d="m514.89 57.5-108.17 138.79 254.83 365.38h138.45v-504.17h-285.11z" fill="#cacaca" />
            <text x={isMobile ? 520 : 520} y={isMobile ? 80 : 110} style={missionTitleStyle}>
              Vision
            </text>
            <text x={isMobile ? 490 : 520} y={isMobile ? 110 : 140} style={subTextStyle}>
              We add value and competitiveness
            </text>
            <text x={isMobile ? 490 : 520} y={isMobile ? 130 : 160} style={subTextStyle}>
              to Schindler Group through
            </text>
            <text x={isMobile ? 490 : 520} y={isMobile ? 150 : 180} style={subTextStyle}>
              excellence in Sourcing,
            </text>
            <text x={isMobile ? 490 : 520} y={isMobile ? 170 : 200} style={subTextStyle}>
              Manufacturing and Distribution
            </text>
          </g>

          <path id="path4802" fill="none" d="m402.97 201.1-133.59 171.4h253.13l-119.54-171.4z" />

          <g id="layer3">
            <path id="rect4715" d="m0.83398 378.33v183.33h653.61l-127.86-183.33h-525.74z" fill="#cacaca" />
            <text x="15" y={isMobile ? 420 : 430} style={missionTitleStyle}>
              Values
            </text>
            <text x="15" y={isMobile ? 450 : 460} style={subTextStyle}>
              Safety
            </text>
            <text x="15" y={isMobile ? 470 : 480} style={subTextStyle}>
              Create value for the customer
            </text>
            <text x="15" y={isMobile ? 490 : 500} style={subTextStyle}>
              Commitment to people development
            </text>
            <text x="15" y={isMobile ? 510 : 520} style={subTextStyle}>
              Integrity and Trust
            </text>
            <text x="15" y={isMobile ? 530 : 540} style={subTextStyle}>
              Quality
            </text>
          </g>
        </svg>

        <div className={styles["left-heading"]}>Our Core Values</div>
      </div>

      {/* CIRCLE NAV */}
      <div className={styles["circle-heading"]}>Our Core Values</div>
      <div className={styles.circle} role="region" aria-label="Core values circle navigation">
        <div className={styles["circle__items"]}>
          <div className={styles["circle__items-inner"]}>
            <div className={styles["circle__inner"]}>
              <img src="cour value.png" className={styles["circle__logo"]} alt="Logo" />
            </div>

            {circleItems.map((it, i) => {
              const itemClasses = [
                styles["circle__item"],
                itemsShown[i] ? "" : styles["circle__item--hidden"],
                i === activeIndex ? styles["circle__item--active"] : "",
                styles[`circle__item--${i === 0 ? "one" : i === 1 ? "two" : i === 2 ? "three" : "four"}`],
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={it.id}
                  className={itemClasses}
                  data-title={it.title}
                  onClick={() => handleCircleClick(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleCircleClick(i);
                  }}
                  aria-pressed={i === activeIndex}
                />
              );
            })}
          </div>
        </div>

        <div className={styles["circle__content"]} aria-live="polite">
          <div
            className={`${styles["circle__content-inner"]} ${activeIndex === -1 ? styles["circle__content-inner--is-visible"] : ""}`}
            style={{ display: activeIndex === -1 ? undefined : "none" }}
          >
            <p>Select a category to explore more information.</p>
          </div>

          <div
            className={`${styles["circle__content-inner"]} ${activeIndex === 0 ? styles["circle__content-inner--is-visible"] : ""}`}
            style={{ display: activeIndex === 0 ? undefined : "none" }}
          >
            <div className={styles["circle__title"]}>Academics</div>
            <ul className={styles["circle__link-list"]}>
              <li>
                <a href="#">
                  <h3>Undergraduate Programs</h3>
                  <p>Diverse courses designed to shape future leaders.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Postgraduate Programs</h3>
                  <p>Advanced studies fostering expertise.</p>
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`${styles["circle__content-inner"]} ${activeIndex === 1 ? styles["circle__content-inner--is-visible"] : ""}`}
            style={{ display: activeIndex === 1 ? undefined : "none" }}
          >
            <div className={styles["circle__title"]}>Research</div>
            <ul className={styles["circle__link-list"]}>
              <li>
                <a href="#">
                  <h3>Innovation Labs</h3>
                  <p>Advanced labs enabling interdisciplinary work.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Publications</h3>
                  <p>Impactful research with global presence.</p>
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`${styles["circle__content-inner"]} ${activeIndex === 2 ? styles["circle__content-inner--is-visible"] : ""}`}
            style={{ display: activeIndex === 2 ? undefined : "none" }}
          >
            <div className={styles["circle__title"]}>Campus Life</div>
            <ul className={styles["circle__link-list"]}>
              <li>
                <a href="#">
                  <h3>Clubs &amp; Societies</h3>
                  <p>A vibrant community fostering creativity.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Sports &amp; Culture</h3>
                  <p>Top-class facilities encouraging growth.</p>
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`${styles["circle__content-inner"]} ${activeIndex === 3 ? styles["circle__content-inner--is-visible"] : ""}`}
            style={{ display: activeIndex === 3 ? undefined : "none" }}
          >
            <div className={styles["circle__title"]}>Placements</div>
            <ul className={styles["circle__link-list"]}>
              <li>
                <a href="#">
                  <h3>Career Services</h3>
                  <p>Guiding students toward career excellence.</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Top Recruiters</h3>
                  <p>Leading companies offering global opportunities.</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}