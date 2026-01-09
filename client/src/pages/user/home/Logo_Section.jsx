import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './Logo_Section.module.css';

const Logo_Section = () => {
  const [allCompanies, setAllCompanies] = useState([]);
  const [displayedLogos, setDisplayedLogos] = useState([]);
  const [animatingSlot, setAnimatingSlot] = useState(null);
  const nextLogoIndexRef = useRef(4);
  const apiurl = import.meta.env.VITE_API_URL;

  // 1. Fetch Data
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${apiurl}/api/logosection1`);
        // Check if response is successful and has data
        if (response.data.success && Array.isArray(response.data.data) && response.data.data.length > 0) {
          const companies = response.data.data;
          setAllCompanies(companies);

          // Initialize first 4 (or fewer if api has less)
          // Create a safe slice, ensuring we don't error if < 4
          setDisplayedLogos(companies.slice(0, 4));

          // Set ref to 4, or 0 if fewer than 4 (though loop logic handles modulo)
          nextLogoIndexRef.current = companies.length > 4 ? 4 : 0;
        }
      } catch (error) {
        console.error("Error fetching companies for Logo Slider:", error);
      }
    };
    fetchCompanies();
  }, []);

  // 2. Animation Loop
  useEffect(() => {
    // Need at least 5 logos to have something to swap in
    if (allCompanies.length <= 4) return;

    const timer = 1000; // Animation interval
    let oldSlot = 0 ;

    const intervalId = setInterval(() => {
      // Pick random slot (0-3) to change
      let randomSlot;
      do {
        randomSlot = Math.floor(Math.random() * 4);
        // Safety check if displayedLogos has fewer than 4 items (shouldn't happen if allCompanies > 4)
        if (randomSlot >= displayedLogos.length) randomSlot = 0;
      } while (randomSlot === oldSlot);

      oldSlot = randomSlot;

      // Trigger "Out" animation
      setAnimatingSlot(randomSlot);

      // Swap and Trigger "In" after delay
      setTimeout(() => {
        setDisplayedLogos(prev => {
          const newLogos = [...prev];
          const nextIndex = nextLogoIndexRef.current;

          if (allCompanies[nextIndex]) {
            newLogos[randomSlot] = allCompanies[nextIndex];
          }

          // Increment loop index
          nextLogoIndexRef.current = (nextIndex + 1) % allCompanies.length;

          return newLogos;
        });

        // Clear animating slot to remove "out" class (and thus apply "in" or default state)
        setAnimatingSlot(null);
      }, 500); // Wait for CSS transition (0.5s)

    }, timer);

    return () => clearInterval(intervalId);
  }, [allCompanies, displayedLogos.length]);

  // Don't render anything if no data
  if (allCompanies.length === 0) return null;

  return (
    <div className={styles.randomSlider}>
      <div className={styles.container}>
        <h1 className={styles.subHeader}>Companies we represent</h1>
        <ol className={styles.positions}>
          {displayedLogos.map((company, index) => (
            company ? (
              <li
                // Use ID in key if available, else index, to ensure stability but allow CSS class change
                key={`${index}-${company._id || company.id || index}`}
                className={`${styles.position} ${animatingSlot === index ? styles.out : styles.in}`}
              >
                {/* Support both 'logo' (from previous static list) and 'image' (likely from API) keys */}
                <img src={company.logo || company.img} alt={company.name || "Partner Logo"} />
              </li>
            ) : null
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Logo_Section;