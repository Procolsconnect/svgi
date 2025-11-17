import React, { useEffect, useRef, useState } from "react";
import "./overview.css";

export default function OverviewPage() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [rotated, setRotated] = useState(false);

  const scrollRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    arrowRef.current?.classList.add("op-arrow-bounce");
  }, []);

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

  /* --------- DATA FOR CLEANER JSX ---------- */

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

  const cards = [
    {
      color: "blue",
      title: "Card Title",
      sub: "This explains the card in more detail",
      img: 1041,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      color: "red",
      title: "That's Another Card",
      sub: "I don't need to explain anything here",
      img: 1080,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      color: "green",
      title: "And a Third Card",
      sub: "You know what this is by now",
      img: 1039,
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  const contents = [
    { num: 6, title: "Editor's Note", author: "Rachel Andrew" },
    { num: 8, title: "Towards Ethics By Default, One Step At A Time", author: "Vitaly Friedman" },
    { num: 17, title: "Designing For Addiction", author: "Trine Falbe" },
    { num: 28, title: "It's Not About You", author: "Heather Burns & Morten Rand-Hendriksen" },
    { num: 35, title: "This One Weird Trick Tells Us Everything About You", author: "Laura Kalbag" },
    { num: 46, title: "Quieting Disquiet", author: "Stuart Langridge" },
    { num: 53, title: "Advertising Is Not The Problem", author: "Cennydd Bowles" },
  ];

  return (
    <div className="op-container">

      {/* HERO */}
      <div id="op-hero">
        <img src="https://picsum.photos/1600/600?blur=2" alt="Hero" />
        <div className="op-hero-wrapper"><h1>Overview</h1></div>
      </div>

      {/* SCROLL BUTTON */}
      <div
        ref={scrollRef}
        className={`op-scroll ${clicked ? "op-scroll--clicked" : ""} ${rotated ? "op-scroll--rotate" : ""}`}
        onClick={handleScrollClick}
      >
        <span ref={arrowRef} className="op-arrow">&#8595;</span>
      </div>

      {/* TEXT + GRID */}
      <div className="op-hero-section">
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
      </div>

      {/* CARDS */}
      <div className="projcard-container">
        {cards.map((c, i) => (
          <div key={i} className={`projcard projcard-${c.color}`}>
            <img className="projcard-img" src={`https://picsum.photos/800/600?image=${c.img}`} alt="" />
            <div className="projcard-textbox">
              <div className="projcard-title">{c.title}</div>
              <div className="projcard-subtitle">{c.sub}</div>
              <div className="projcard-bar"></div>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONTENTS */}
      <div className="contents-page">
        <main className="contents-main">
          <h1>Contents</h1>

          {contents.map((c, i) => (
            <div key={i} className="item">
              <div className="item__number">{c.num}</div>
              <div className="item__topic">
                <div className="item__topic__title">{c.title}</div>
                <div className="item__topic__author">by {c.author}</div>
              </div>
            </div>
          ))}
        </main>
      </div>

    </div>
  );
}
