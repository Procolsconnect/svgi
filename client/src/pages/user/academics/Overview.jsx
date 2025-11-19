import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./overview.css";

export default function OverviewPage() {
  const [hero, setHero] = useState(null);
  const [cards, setCards] = useState([]);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);
  const arrowRef = useRef(null);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [rotated, setRotated] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  // ADD BOUNCE ON FIRST LOAD
 useEffect(() => {
  if (!loading) {
    arrowRef.current?.classList.add("op-arrow-bounce");
  }
}, [loading]);


  // FETCH DATA
  useEffect(() => {
    async function fetchData() {
      try {
        const [heroRes, cardRes, contentRes] = await Promise.all([
          axios.get(`${API}/api/academicshero`),
          axios.get(`${API}/api/academicscard`),
          axios.get(`${API}/api/academicscontent`)
        ]);

        setHero(heroRes.data.data[0] || null);
        setCards(cardRes.data.data || []);
        setContents(contentRes.data.data || []);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [API]);


  // SCROLL LOGIC (UNCHANGED)
  const handleScrollClick = () => {
    const sections = [...document.querySelectorAll("section")];

    if (!clicked && scrollRef.current) {
      Object.assign(scrollRef.current.style, {
        position: "fixed",
        bottom: "50px",
        top: "auto",
      });
    }

    setClicked(true);

    if (count >= sections.length) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCount(0);
      setRotated(false);
    } else {
      sections[count]?.scrollIntoView({ behavior: "smooth" });

      if (count === sections.length - 1) setRotated(true);
      setCount((p) => p + 1);
    }

    arrowRef.current?.classList.remove("op-arrow-bounce");
  };


  /* STATIC GRID */
  const gridImages = [
    { class: "one", src: 11 },
    { class: "three", src: 13 },
    { class: "two", src: 12 },
    { class: "four" },
    { class: "five", src: 14 },
    { class: "six" },
    { class: "seven", src: 15 },
    { class: "eight" },
    { class: "nine" },
    { class: "ten", src: 16 },
    { class: "eleven", src: 17 },
    { class: "twelve", src: 18 },
  ];

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="op-container">

      {/* ❗ SECTION 1 — HERO */}
      <section id="op-hero">
        <img src={hero?.image} alt="Hero" />
        <div className="op-hero-wrapper"><h1>{hero?.title}</h1></div>
      </section>

      {/* SCROLL BUTTON */}
      <div
        ref={scrollRef}
        className={`op-scroll ${clicked ? "op-scroll--clicked" : ""} ${rotated ? "op-scroll--rotate" : ""}`}
        onClick={handleScrollClick}
      >
        <span ref={arrowRef} className="op-arrow">&#8595;</span>
      </div>

      {/* ❗ SECTION 2 — GRID + TEXT */}
      <section className="op-hero-section">
        <div className="op-text">
          <p className="op-text-short">Lorem ipsum dolor sit amet</p>
          <h1 className="op-text-title">Lorem ipsum dolor sit amet</h1>
          <p className="op-text-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam sequi magni doloremque fugit temporibus, voluptate possimus.
          </p>
          <a className="op-text-button" href="#">Learn more</a>
        </div>

        <div className="op-grid">
          {gridImages.map((g, i) => (
            <div key={i} className={`op-grid-item ${g.class}`}>
              {g.src && <img src={`https://picsum.photos/500/500?random=${g.src}`} alt="" />}
            </div>
          ))}
        </div>
      </section>

      {/* ❗ SECTION 3 — CARDS */}
      <section className="projcard-container">
        {cards.map((c) => (
          <div key={c._id} className="projcard projcard-blue">
            <img className="projcard-img" src={c.image} alt="" />
            <div className="projcard-textbox">
              <div className="projcard-title">{c.title}</div>
              <div className="projcard-subtitle">{c.subtitle}</div>
              <div className="projcard-bar"></div>
              <p>{c.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ❗ SECTION 4 — CONTENTS */}
      <section className="contents-page">
        <main className="contents-main">
          <h1>Contents</h1>

          {contents.map((c, index) => (
            <div key={c._id} className="item">
              <div className="item__number">{index + 1}</div>

              <div className="item__topic">
                <div className="item__topic__title">{c.content}</div>
                <div className="item__topic__author">{c.name}</div>
              </div>
            </div>
          ))}
        </main>
      </section>

    </div>
  );
}
