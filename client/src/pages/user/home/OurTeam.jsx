import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ourteam.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const TeamCarousel = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${apiurl}/api/ourteam`);
        setTeamMembers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };
    fetchTeam();
  }, []);

  if (teamMembers.length === 0) {
    return <p>Loading team members...</p>;
  }

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const total = teamMembers.length;
    setCurrentIndex((newIndex + total) % total);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleArrowClick = (dir) => updateCarousel(currentIndex + dir);

  return (
    <div className={styles.carouselWrapper}>
      <h1 className={styles.aboutTitle}>OUR STUDENTS</h1>

      <div className={styles.carouselContainer}>
        <button className={`${styles.navArrow} ${styles.left}`} onClick={() => handleArrowClick(-1)}>
          ‹
        </button>

        <div className={styles.carouselTrack}>
          {teamMembers.map((member, i) => {
            const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
            let className = styles.card;

            if (offset === 0) className += ` ${styles.center}`;
            else if (offset === 1) className += ` ${styles.right1}`;
            else if (offset === 2) className += ` ${styles.right2}`;
            else if (offset === teamMembers.length - 1) className += ` ${styles.left1}`;
            else if (offset === teamMembers.length - 2) className += ` ${styles.left2}`;
            else className += ` ${styles.hidden}`;

            return (
              <div key={i} className={className} onClick={() => updateCarousel(i)}>
                <img src={member.img} alt={member.name} />
              </div>
            );
          })}
        </div>

        <button className={`${styles.navArrow} ${styles.right}`} onClick={() => handleArrowClick(1)}>
          ›
        </button>
      </div>

      <div className={styles.memberInfo}>
        <h2 className={styles.memberName}>{teamMembers[currentIndex].name}</h2>
        <p className={styles.memberRole}>{teamMembers[currentIndex].role}</p>
      </div>
    </div>
  );
};

export default TeamCarousel;