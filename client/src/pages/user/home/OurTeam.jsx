import React, { useState, useEffect } from "react";
import "./ourteam.css";

const teamMembers = [
  {
    name: "Emily Kim",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80",
  },
  {
    name: "Michael Steward",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80",
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900",
  },
  {
    name: "Julia Gimmel",
    role: "UX Designer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const total = teamMembers.length;
    setCurrentIndex((newIndex + total) % total);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleArrowClick = (dir) => {
    updateCarousel(currentIndex + dir);
  };

  const handleDotClick = (i) => {
    updateCarousel(i);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handleArrowClick(-1);
    if (e.key === "ArrowRight") handleArrowClick(1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => (touchStartX = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) updateCarousel(currentIndex + (diff > 0 ? 1 : -1));
  };

  return (
    <div
      className="carousel-wrapper"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ position: "relative" }}
    >
      <h1 className="about-title">OUR STUDENTS</h1>

      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => handleArrowClick(-1)}>
          ‹
        </button>

        <div className="carousel-track">
          {teamMembers.map((member, i) => {
            const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
            let className = "card";

            if (offset === 0) className += " center";
            else if (offset === 1) className += " right-1";
            else if (offset === 2) className += " right-2";
            else if (offset === teamMembers.length - 1) className += " left-1";
            else if (offset === teamMembers.length - 2) className += " left-2";
            else className += " hidden";

            return (
              <div
                key={i}
                className={className}
                onClick={() => updateCarousel(i)}
              >
                <img src={member.img} alt={member.name} />
              </div>
            );
          })}
        </div>

        <button className="nav-arrow right" onClick={() => handleArrowClick(1)}>
          ›
        </button>
      </div>

      <div className="member-info">
        <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
        <p className="member-role">{teamMembers[currentIndex].role}</p>
      </div>

      {/* <div className="dots">
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default TeamCarousel;
