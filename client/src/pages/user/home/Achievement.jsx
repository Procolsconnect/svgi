// InstitutionsGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Achievement.module.css';

const InstitutionsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tappedIndex, setTappedIndex] = useState(null); // Tracks first tap
  const listRef = useRef(null);

  const institutions = [
    { title: "Engineering", desc: " Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.", link: "https://www.svhec.com/", img: "/images/enginner.jpg", logo: "/logos/Logo_new.png" },
    { title: "Arts and Science", desc: "   Shree Venkateshwara Arts and Science College is a co-educational institution located in Othakuthirai, near a serene atmosphere.", link: "https://svasc.org/", img: "/images/arts college.jpg", logo: "/logos/Logo_new.png" },
    { title: "POLYTECHNIC", desc: " Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.", link: "https://svhpc.in/", img: "/images/poly-college.jpg", logo: "/logos/Logo_new.png" },
    { title: "PARAMEDICAL", desc: " Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript..", link: "https://svcopharmacy.in/", img: "/images/peramedical.jpg", logo: "/logos/Logo_new.png" },
    { title: "PHYSIOTHERAPY", desc: " Grasp how to tame the pixel playground and when to do so. Whilstbuilding with Performance Driven Development", link: "https://svcps.in/physiotherapy/", img: "/images/physiotherapy.jpg", logo: "/logos/Logo_new.png" },
    { title: "Nursing", desc: "Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.", link: "https://www.svcn.in/", img: "/images/nursing.webp", logo: "/logos/Logo_new.png" },
    { title: "ALLIED HEALTH", desc: "It's not all just easings and compositions. Time plays a crucial  part in various UI patterns that might not seem obvious at first.", link: "https://svcps.in/alliedhealth/", img: "/images/allied health.jpg", logo: "/logos/Logo_new.png" }
  ];

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const updateGrid = () => {
      const isMobile = window.innerWidth <= 760;
      if (isMobile) {
        list.style.gridTemplateColumns = 'repeat(7, 1fr)';
      } else {
        const cols = institutions.map((_, i) => i === activeIndex ? '10fr' : '1fr').join(' ');
        list.style.gridTemplateColumns = cols;
      }
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);

    const handleMove = (e) => {
      if (window.innerWidth <= 760) return;
      const li = e.target.closest('li');
      if (!li) return;
      const i = Array.from(list.children).indexOf(li);
      setActiveIndex(i);
    };

    const handleLeave = () => {
      if (window.innerWidth > 760) setActiveIndex(0);
    };

    const handleClick = (e) => {
      const li = e.target.closest('li');
      if (!li) return;
      const index = Array.from(list.children).indexOf(li);
      const isMobile = window.innerWidth <= 760;

      if (isMobile) {
        e.preventDefault(); // Block navigation on first tap
        if (tappedIndex === index) {
          // Second tap → go to site
          window.open(li.querySelector('a').href,  '_self');
          setTappedIndex(null);
        } else {
          // First tap → expand
          setTappedIndex(index);
          setActiveIndex(index);
        }
      } else {
        setActiveIndex(index);
      }
    };

    list.addEventListener('pointermove', handleMove);
    list.addEventListener('pointerleave', handleLeave);
    list.addEventListener('click', handleClick);

    return () => {
      list.removeEventListener('pointermove', handleMove);
      list.removeEventListener('pointerleave', handleLeave);
      list.removeEventListener('click', handleClick);
      window.removeEventListener('resize', updateGrid);
    };
  }, [activeIndex, tappedIndex]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Group Of Institutions</h1>
      <p className={styles.desc}>
        <strong>"A Visionary Multi-Disciplinary Institution"</strong><br />
        Our college has now grown into a full-fledged institution...
      </p>

      <ul ref={listRef} className={styles.grid}>
        {institutions.map((inst, i) => (
          <li
            key={i}
            className={styles.item}
            data-active={i === activeIndex}
            data-expanded={window.innerWidth <= 760 && tappedIndex === i}
          >
            <a href={inst.link} className={styles.cardLink}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{inst.title}</h3>
                <p className={styles.cardDesc}>{inst.desc}</p>
                <img src={inst.logo} alt="" className={styles.icon} />
                <a href={inst.link} className={styles.link}>
                  <span>Watch now</span>
                </a>
                <img src={inst.img} alt="" className={styles.cardImg} />
              </article>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionsGrid;