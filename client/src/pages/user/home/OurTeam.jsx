import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ourteam.css";

const apiurl = import.meta.env.VITE_API_URL;

const TeamCarousel = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 🧠 Fetch data using Axios
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${apiurl}/api/ourteam`);
        setTeamMembers(response.data.data || []);
      } catch (error) {
        console.error("❌ Error fetching team:", error);
      }
    };

    fetchTeam();
  }, []);

  // ⛔ Avoid rendering before data arrives
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
    <div className="carousel-wrapper">
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
              <div key={i} className={className} onClick={() => updateCarousel(i)}>
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
    </div>
  );
};

export default TeamCarousel;
