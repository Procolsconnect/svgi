import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./Instutions.module.css";

const InstitutionsGrid = () => {
  const [institutions, setInstitutions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tappedIndex, setTappedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
  const listRef = useRef(null);
  const apiurl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/institution`);
        if (res.data.success && Array.isArray(res.data.data)) {
          setInstitutions(res.data.data);
        } else {
          console.error("Invalid response format:", res.data);
        }
      } catch (err) {
        console.error("Failed to fetch institutions:", err.message);
      }
    };

    fetchInstitutions();
  }, []);

  // ✅ Dynamic grid behavior (same as your original logic)
  useEffect(() => {
    const list = listRef.current;
    if (!list || institutions.length === 0) return;

    const updateGrid = () => {
      const mobile = window.innerWidth <= 760;
      setIsMobile(mobile);
      if (mobile) {
        list.style.gridTemplateColumns = `repeat(${institutions.length}, 1fr)`;
      } else {
        const cols = institutions
          .map((_, i) => (i === activeIndex ? "10fr" : "1fr"))
          .join(" ");
        list.style.gridTemplateColumns = cols;
      }
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    const handleMove = (e) => {
      if (window.innerWidth <= 760) return;
      const li = e.target.closest("li");
      if (!li) return;
      const i = Array.from(list.children).indexOf(li);
      setActiveIndex(i);
    };

    const handleLeave = () => {
      if (window.innerWidth > 760) setActiveIndex(0);
    };

    const handleClick = (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      const index = Array.from(list.children).indexOf(li);
      const mobile = window.innerWidth <= 760;

      if (mobile) {
        e.preventDefault();
        if (tappedIndex === index) {
          window.open(li.querySelector("a").href, "_self");
          setTappedIndex(null);
        } else {
          setTappedIndex(index);
          setActiveIndex(index);
        }
      } else {
        setActiveIndex(index);
      }
    };

    list.addEventListener("pointermove", handleMove);
    list.addEventListener("pointerleave", handleLeave);
    list.addEventListener("click", handleClick);

    return () => {
      list.removeEventListener("pointermove", handleMove);
      list.removeEventListener("pointerleave", handleLeave);
      list.removeEventListener("click", handleClick);
      window.removeEventListener("resize", updateGrid);
    };
  }, [institutions, activeIndex, tappedIndex]);

  // ✅ Render
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Group Of Institutions</h1>
      <p className={styles.desc}>
        <strong>"A Visionary Multi-Disciplinary Institution"</strong>
        <br />
        Our college has now grown into a full-fledged institution...
      </p>

      <ul ref={listRef} className={styles.grid}>
        {institutions.map((inst, i) => (
          <li
            key={i}
            className={styles.item}
            data-active={i === activeIndex}
            data-expanded={isMobile && tappedIndex === i}
          >
            <a href={inst.link} className={styles.cardLink}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{inst.title}</h3>
                <p className={styles.cardDesc}>{inst.description}</p>

                {/* ✅ Correct image and logo URLs */}
                <img
                  src={`${inst.logo_url}`}
                  alt="Logo"
                  className={styles.icon}
                />
                <div className={styles.link}>
                  <span>Watch now</span>
                </div>
                <img
                  src={`${inst.image_url}`}
                  alt={inst.title}
                  className={styles.cardImg}
                />
              </article>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionsGrid;
