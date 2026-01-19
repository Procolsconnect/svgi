import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ourteam.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const TeamCarousel = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  // Swipe Detection Logic
  const handleDragStart = (e) => {
    setStartX(e.pageX || e.touches[0].pageX);
    setIsDragging(true);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    const endX = e.pageX || e.changedTouches[0].pageX;
    const diff = startX - endX;

    // Threshold of 50px for swipe detection
    if (Math.abs(diff) > 50) {
      handleArrowClick(diff > 0 ? 1 : -1);
    }

    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    // Prevent default scroll behavior when dragging horizontally
    if (e.touches) {
      // Optional: logic to allow vertical scroll if horizontal diff is small
    }
  };

  return (
    <div
      className={styles.carouselWrapper}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
    >
      <h2 className={styles.aboutTitle}>OUR ALUMINIS</h2>

      <div className={styles.carouselContainer}>
        <button className={`${styles.navArrow} ${styles.left}`} onClick={(e) => { e.stopPropagation(); handleArrowClick(-1); }}>
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
              <div
                key={i}
                className={className}
                onClick={(e) => { e.stopPropagation(); updateCarousel(i); }}
                onDragStart={(e) => e.preventDefault()}
              >
                <img src={member.img} alt={member.name} draggable="false" />
              </div>
            );
          })}
        </div>

        <button className={`${styles.navArrow} ${styles.right}`} onClick={(e) => { e.stopPropagation(); handleArrowClick(1); }}>
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