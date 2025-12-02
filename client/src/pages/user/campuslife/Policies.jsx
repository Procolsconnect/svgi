import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const apiurl = import.meta.env.VITE_API_URL;
import './policies.css';

export default function CourseOutcome() {
  useEffect(() => {
    class ParallaxTiltEffect {
      constructor({ element, tiltEffect }) {
        this.element = element;
        this.container = this.element.querySelector(".co-container");
        this.size = [300, 360];
        [this.w, this.h] = this.size;
        this.tiltEffect = tiltEffect;
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.init();
      }
      handleMouseMove(event) {
        const { offsetX, offsetY } = event;
        let X, Y;
        if (this.tiltEffect === "reverse") {
          X = ((offsetX - (this.w / 2)) / 3) / 3;
          Y = (-(offsetY - (this.h / 2)) / 3) / 3;
        } else if (this.tiltEffect === "normal") {
          X = (-(offsetX - (this.w / 2)) / 3) / 3;
          Y = ((offsetY - (this.h / 2)) / 3) / 3;
        }
        this.setProperty('--rY', X.toFixed(2));
        this.setProperty('--rX', Y.toFixed(2));
        this.setProperty('--bY', (80 - (X / 4).toFixed(2)) + '%');
        this.setProperty('--bX', (50 - (Y / 4).toFixed(2)) + '%');
      }
      handleMouseEnter() { this.container.classList.add("co-container--active"); }
      handleMouseLeave() { this.defaultStates(); }
      defaultStates() {
        this.container.classList.remove("co-container--active");
        this.setProperty('--rY', 0);
        this.setProperty('--rX', 0);
        this.setProperty('--bY', '80%');
        this.setProperty('--bX', '50%');
      }
      setProperty(p, v) { this.container.style.setProperty(p, v); }
      init() {
        this.element.addEventListener('mousemove', this.handleMouseMove);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
      }
    }

    const $ = e => document.querySelector(e);
    new ParallaxTiltEffect({ element: $('.co-wrap--1'), tiltEffect: 'reverse' });
    new ParallaxTiltEffect({ element: $('.co-wrap--2'), tiltEffect: 'normal' });
    new ParallaxTiltEffect({ element: $('.co-wrap--3'), tiltEffect: 'reverse' });
  }, []);


  // get data
  const [hero, setHero] = useState();
  const [title, setTitle] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`${apiurl}/api/campus/policyhero`)
      .then(res => {
        setHero(res.data.data[0]);
      })
      .catch(err => console.error(err));

    axios.get(`${apiurl}/api/campus/policytitle`)
      .then(res => {
        setTitle(res.data.data[0]);
      })
      .catch(err => console.error(err));

    axios.get(`${apiurl}/api/campus/policycard`)
      .then(res => {
        const data = Array.isArray(res.data.data) ? res.data.data : res.data;
        if (Array.isArray(data)) setCards(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);




  return (
    <div className="co-root">
      {/* HERO */}
      <div className="co-hero" id="co-hero">
        <img src={hero?.image} alt="Hero Background" className="co-hero-img" />
        <h1>{hero?.title}</h1>
      </div>

      {/* SECTION HEADING */}
      <div className="co-section-heading-wrapper">
        <h1 className="co-section-title">{title?.title}</h1>
        <p className="co-section-subtitle">{title?.subTitle}</p>
      </div>

      {/* CARDS */}
      <section className="co-main">
        {/* {cards.map((card) => {
          <div className="co-wrap co-wrap--1" key={card._id}>
            <div className="co-container co-container--1" style={{ backgroundImage: `url(${card.image})` }}>
              <p>{card.title}</p>
            </div>
          </div>
        })} */}
        <div className="co-wrap co-wrap--1">
          <div className="co-container co-container--1">
            <p>1. Equity, Diversity and Inclusion Policy</p>
          </div>
        </div>
        <div className="co-wrap co-wrap--2">
          <div className="co-container co-container--2">
            <p>2. Anti Corruption and Anti Bribery Policy</p>
          </div>
        </div>
        <div className="co-wrap co-wrap--3">
          <div className="co-container co-container--3">
            <p>3. Establishing an Ethical Ambience in the Institution</p>
          </div>
        </div>
      </section>
    </div>
  );
}
