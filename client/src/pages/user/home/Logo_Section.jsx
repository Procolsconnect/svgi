import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from "./logo_section.module.css";

const apiurl = import.meta.env.VITE_API_URL;

const RandomLogoSlider = () => {
  const [logos, setLogos] = useState([]);
  const logoRefs = useRef([]); // Stores refs to the 4 LI elements
  const logosRef = useRef([]); // Access latest logos in interval

  useEffect(() => {
    axios
      .get(`${apiurl}/api/logosection1`)
      .then((res) => {
        const data = Array.isArray(res.data.data) ? res.data.data : res.data;
        if (Array.isArray(data)) {
          setLogos(data);
          logosRef.current = data;
        } else {
          console.error("Unexpected response format:", res.data);
        }
      })
      .catch((err) => console.error("Error fetching logos:", err));
  }, []);

  useEffect(() => {
    // Wait until we have enough logos (more than 4 to make animations meaningful) 
    // and the refs are populated
    if (logos.length <= 4) return;

    // Ensure refs are valid
    if (logoRefs.current.length < 4) return;

    const timer = 1050; // 1050ms interval from original script
    let oldX = 0;
    let counter = 4; // Start picking from the 5th logo (index 4)

    const generateRandomPosition = (min, max, avoid) => {
      let val;
      do {
        val = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (val === avoid);
      return val;
    };

    const intervalId = setInterval(() => {
      // Logic copied from original script
      const x = generateRandomPosition(0, 3, oldX);
      const y = counter;

      const currentLi = logoRefs.current[x];
      // Use logosRef to get the fresh list of logos (though logos list likely static after load)
      const nextLogo = logosRef.current[y];

      if (!currentLi || !nextLogo) return;

      // 1. Start Fade Out (Add 'out' class)
      currentLi.classList.remove("in"); // Remove 'in' just in case (optional in CSS modules unless defined)
      currentLi.classList.add(styles.out);

      // 2. Timeout for Swap (350ms)
      setTimeout(() => {
        if (!currentLi) return;

        // Swap Image Data directly in DOM
        const img = currentLi.querySelector("img");
        if (img) {
          img.src = nextLogo.img;
          img.alt = nextLogo.name || "logo";
        }

        // Force Reflow / Reset Transition
        // This is the CRITICAL part from the original script to prevent glitches
        currentLi.style.display = "none";
        // Void operator forces access to offsetWidth, triggering reflow
        void currentLi.offsetWidth;
        currentLi.style.display = "block";

      }, 350);

      // 3. Timeout for Fade In (650ms)
      setTimeout(() => {
        if (!currentLi) return;
        currentLi.classList.remove(styles.out);
        currentLi.classList.add("in");
      }, 650);

      oldX = x;
      // Cycle through full list
      counter = counter === logosRef.current.length - 1 ? 0 : counter + 1;

    }, timer);

    return () => clearInterval(intervalId);
  }, [logos]); // Re-run if logos loaded

  if (logos.length === 0) return <p>Loading logos...</p>;

  // Initial render of first 4 logos
  return (
    <div className={styles.randomLogoSlider}>
      <div className={styles.randomLogoContainer}>
        <h1 className={styles.randomLogoSubHeader}>Companies We Represent</h1>

        <ol className={styles.randomLogoPositions}>
          {logos.slice(0, 4).map((logo, i) => (
            <li
              key={i}
              className={styles.randomLogoPosition}
              ref={(el) => (logoRefs.current[i] = el)}
            >
              <img src={logo.img} alt={logo.name || "logo"} />
            </li>
          ))}
        </ol>

        {/* Hidden Preload List for all logos to ensure browser caches imagery */}
        <div style={{ display: 'none' }}>
          {logos.map((logo, i) => (
            <img key={i} src={logo.img} alt="preload" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomLogoSlider;