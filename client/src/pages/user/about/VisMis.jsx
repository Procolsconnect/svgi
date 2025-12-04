import React, { useEffect, useRef, useState } from "react";
import styles from "./vismis.module.css";
import axios from "axios";

const apiurl = import.meta.env.VITE_API_URL;

export default function CampusCanvas() {
  const autoRotateRef = useRef(null);
  const itemsRef = useRef(null);
  const [active, setActive] = useState("common");
  const [heroBG, setHeroBG] = useState(null);
  const [card, setCard] = useState([]);
  const [mvv, setMvv] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const addScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = Array.from(document.scripts).find((s) => s.src.includes(src));
        if (existing) return resolve(existing);

        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(s);
        s.onerror = reject;
        document.head.appendChild(s);
      });

    const init = async () => {
      try {
        await addScript("https://unpkg.com/feather-icons");
        if (window.feather?.replace) window.feather.replace();
      } catch {}

      if (!window.jQuery) {
        try {
          await addScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js");
        } catch (e) {
          console.warn("jQuery failed to load", e);
          return;
        }
      }

      const $ = window.jQuery;
      if (!$) return;

      const items = $(`.${styles.circleItem}`);
      itemsRef.current = items;
      let index = 0;

      items.each(function (i) {
        setTimeout(() => $(this).removeClass(styles.hidden), 350 * i);
      });

      function showContent(i) {
        const item = items.eq(i);
        const target = item.attr("data-title")?.toLowerCase() || "common";
        setActive(target);

        items.removeClass(styles.active);
        item.addClass(styles.active);

        $(`.${styles.contentInner}`).removeClass(styles.visible);
        $(`#${target}`).addClass(styles.visible);
      }

      function startAutoRotate() {
        if (autoRotateRef.current) clearInterval(autoRotateRef.current);
        autoRotateRef.current = setInterval(() => {
          index = (index + 1) % items.length;
          showContent(index);
        }, 3000);
      }

      function stopAutoRotate() {
        if (autoRotateRef.current) clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }

      const onClick = function () {
        stopAutoRotate();
        index = items.index(this);
        showContent(index);
        startAutoRotate();
      };

      items.on("click", onClick);
      startAutoRotate();

      return () => {
        stopAutoRotate();
        items.off("click", onClick);
      };
    };

    init();

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [styles]);

  useEffect(() => {
    axios.get(`${apiurl}/api/about/vismishero`).then(res => setHeroBG(res.data.data)).catch(console.log);
    axios.get(`${apiurl}/api/about/vismiscard`).then(res => setCard(res.data.data)).catch(console.log);
    axios.get(`${apiurl}/api/about/vismislist`).then(res => setMvv(res.data.data)).catch(console.error);
    axios.get(`${apiurl}/api/about/vismiscircle`).then(res => setData(res.data.data[0])).catch(console.error);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <div id="cc-hero" className={styles.hero}>
        <img src={heroBG?.image} alt="Hero Background" />
        <h1>{heroBG?.title}</h1>
      </div>

      {/* CARDS */}
      <ol className={styles.cardsContainer}>
        {card?.map((c) => (
          <li key={c.id} className={styles.card}>
            <div className={styles.thumb}>
              <img src={c.image} alt={c.title} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.text}>{c.desc}</p>
              <a href={c.link} className={styles.btn} aria-label="Read more">
                <i data-feather="arrow-right"></i>
              </a>
            </div>
          </li>
        ))}
      </ol>

      {/* SVG SECTION */}
      <div className={styles.svgWrapper}>
        {mvv?.length > 0 && (
          <svg viewBox="0 0 1000 670" preserveAspectRatio="xMidYMid meet">
            {/* MISSION */}
            <g>
              <path d="m0.83398 57.5v315h261.4l-0.15234-0.11914 245.41-314.88h-506.66z" fill="#cacaca" />
              <text x="15" y="110">{mvv[0].mission.title}</text>
              {mvv[0].mission.sections.map((sec, i) => (
                <React.Fragment key={i}>
                  <text x="15" y={140 + i * 70} className={styles.subText}>{sec.subtitle}</text>
                  {sec.points.map((p, pi) => (
                    <text key={pi} x="15" y={155 + i * 70 + pi * 15} className={styles.subMission}>{p}</text>
                  ))}
                </React.Fragment>
              ))}
            </g>

            {/* VISION */}
            <g>
              <path d="m514.89 57.5-108.17 138.79 254.83 365.38h138.45v-504.17h-285.11z" fill="#cacaca" />
              <text x="520" y="110">{mvv[0].vision.title}</text>
              {mvv[0].vision.lines.map((line, i) => (
                <text key={i} x="520" y={140 + i * 20} className={styles.subText}>{line}</text>
              ))}
            </g>

            {/* VALUES */}
            <g>
              <path d="m0.83398 378.33v183.33h653.61l-127.86-183.33h-525.74z" fill="#cacaca" />
              <text x="15" y="430">{mvv[0].values.title}</text>
              {mvv[0].values.list.map((val, i) => (
                <text key={i} x="15" y={460 + i * 20} className={styles.subText}>{val}</text>
              ))}
            </g>
          </svg>
        )}
        <div className={styles.leftHeading}>Our Core Values</div>
      </div>

      {/* CIRCLE NAV */}
      <h2 className={styles.circleHeading}>Our Core Values</h2>

      <div className={styles.circle}>
        <div className={styles.circleItems}>
          <div className={styles.circleItemsInner}>
            <div className={styles.circleInner}>
              <img src={data?.logo} alt="Logo" className={styles.circleLogo} />
            </div>

            <div
              className={`${styles.circleItem} ${styles.itemOne} ${styles.hidden}`}
              data-title={data?.academics?.title}
              onClick={() => setActive("academics")}
            />
            <div
              className={`${styles.circleItem} ${styles.itemTwo} ${styles.hidden}`}
              data-title={data?.research?.title}
              onClick={() => setActive("research")}
            />
            <div
              className={`${styles.circleItem} ${styles.itemThree} ${styles.hidden}`}
              data-title={data?.campus?.title}
              onClick={() => setActive("campus")}
            />
            <div
              className={`${styles.circleItem} ${styles.itemFour} ${styles.hidden}`}
              data-title={data?.placements?.title}
              onClick={() => setActive("placements")}
            />
          </div>
        </div>

        <div className={styles.circleContent}>
          <div className={`${styles.contentInner} ${active === "common" ? styles.visible : ""}`}>
            <p>Select a category to explore more information.</p>
          </div>

          {["academics", "research", "campus", "placements"].map((key) => (
            <div
              key={key}
              id={key}
              className={`${styles.contentInner} ${active === key ? styles.visible : ""}`}
            >
              {active === key && data?.[key] && (
                <>
                  <div className={styles.circleTitle}>{data[key].title}</div>
                  <ul className={styles.linkList}>
                    {data[key].items?.map((item) => (
                      <li key={item._id}>
                        <a href="#">
                          <h3>{item.heading}</h3>
                          <p>{item.description}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}