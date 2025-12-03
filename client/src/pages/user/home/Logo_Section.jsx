import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./logo_section.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const RandomLogoSlider = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiurl}/api/logosection1`)
      .then((res) => {
        const data = Array.isArray(res.data.data) ? res.data.data : res.data;
        if (Array.isArray(data)) setLogos(data);
        else console.error("Unexpected response format:", res.data);
      })
      .catch((err) => console.error("Error fetching logos:", err));
  }, []);

  useEffect(() => {
    if (logos.length < 5) return;
    const positions = document.querySelectorAll(`.${styles.randomLogoPositions} .${styles.randomLogoPosition}`);
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

      if (!positions[x] || !logos[y]) return;

      positions[x].classList.remove("in");
      positions[x].classList.add(styles.out);

      setTimeout(() => {
        if (logos[y]) {
          positions[x].innerHTML = `<img src="${logos[y].img}" alt="${logos[y].name || "logo"}" />`;
          positions[x].style.display = "none";
          void positions[x].offsetWidth;
          positions[x].style.display = "block";
        }
      }, 350);

      setTimeout(() => {
        positions[x].classList.remove(styles.out);
        positions[x].classList.add("in");
      }, 650);

      oldX = x;
      counter = counter === logos.length - 1 ? 0 : counter + 1;
    }, timer);

    return () => clearInterval(interval);
  }, [logos]);

  if (logos.length === 0) return <p>Loading logos...</p>;

  return (
    <div className={styles.randomLogoSlider}>
      <div className={styles.randomLogoContainer}>
        <h1 className={styles.randomLogoSubHeader}>Companies We Represent</h1>

        <ol className={styles.randomLogoPositions}>
          {logos.slice(0, 4).map((logo, i) => (
            <li className={`${styles.randomLogoPosition} in`} key={i}>
              <img src={logo.img} alt={logo.name || "logo"} />
            </li>
          ))}
        </ol>

        <ul className={styles.randomLogoNetworkList} style={{ display: "none" }}>
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