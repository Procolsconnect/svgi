import React, { useEffect, useState } from "react";
import axios from "axios";
import "./logo_section.css";

const apiurl = import.meta.env.VITE_API_URL;

const RandomLogoSlider = () => {
  const [logos, setLogos] = useState([]);

  // ✅ Fetch logos safely from backend
  useEffect(() => {
    axios
      .get(`${apiurl}/api/logosection1`)
      .then((res) => {
        // Handle both possible backend response formats
        const data = Array.isArray(res.data.data) ? res.data.data : res.data;
        if (Array.isArray(data)) setLogos(data);
        else console.error("Unexpected response format:", res.data);
      })
      .catch((err) => console.error("Error fetching logos:", err));
  }, []);

  // ✅ Handle animation safely
  useEffect(() => {
    if (logos.length < 5) return; // need at least 5 logos to rotate
    const positions = document.querySelectorAll(".random-logo-positions .random-logo-position");
    if (!positions.length) return;

    const timer = 1050;
    let oldX = 0;
    let counter = 4;

    const generateRandomPosition = (min, max, avoid) => {
      let val;
      do {
        val = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (val === avoid);
      return val;
    };

    const interval = setInterval(() => {
      const x = generateRandomPosition(0, 3, oldX);
      const y = counter;

      // ✅ Defensive checks to prevent undefined access
      if (!positions[x] || !logos[y]) return;

      positions[x].classList.remove("in");
      positions[x].classList.add("out");

      setTimeout(() => {
        // ✅ Safely inject HTML only if logo data exists
        if (logos[y]) {
          positions[x].innerHTML = `<img src="${logos[y].img}" alt="${logos[y].name || "logo"}" />`;
          positions[x].style.display = "none";
          void positions[x].offsetWidth; // force reflow
          positions[x].style.display = "block";
        }
      }, 350);

      setTimeout(() => {
        positions[x].classList.remove("out");
        positions[x].classList.add("in");
      }, 650);

      oldX = x;
      counter = counter === logos.length - 1 ? 0 : counter + 1;
    }, timer);

    return () => clearInterval(interval);
  }, [logos]);

  // ✅ Loading state
  if (logos.length === 0) return <p>Loading logos...</p>;

  // ✅ UI (unchanged)
  return (
    <div className="random-logo-slider">
      <div className="random-logo-container">
        <h1 className="random-logo-sub-header">Companies we represent</h1>

        <ol className="random-logo-positions">
          {logos.slice(0, 4).map((logo, i) => (
            <li className="random-logo-position in" key={i}>
              <img src={logo.img} alt={logo.name || "logo"} />
            </li>
          ))}
        </ol>

        <ul className="random-logo-network-list" style={{ display: "none" }}>
          {logos.map((logo, i) => (
            <li key={i}>
              <img src={logo.img} alt={logo.name || "logo"} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomLogoSlider;
