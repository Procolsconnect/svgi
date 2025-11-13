import React, { useEffect, useState } from "react";
import axios from "axios";
import "./logo_section1.css";

const apiurl = import.meta.env.VITE_API_URL;

const InfiniteLogoSlider = () => {
  const [logos, setLogos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/logosection2`);
        const data = res?.data?.data || res?.data || [];

        if (Array.isArray(data)) {
          // Extract URL field from each logo object
          const urls = data.map((item) => item.url || item.img || item.image || item);
          setLogos(urls.filter(Boolean)); // remove empty/null URLs
        } else {
          throw new Error("Invalid data format from API");
        }
      } catch (err) {
        console.error("Error fetching logos:", err);
        setError("Failed to load logos. Please try again later.");
      }
    };

    fetchLogos();
  }, []);

  // ✅ Show error message
  if (error) {
    return (
      <div className="infinite-logo-slider-container">
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  // ✅ Loading fallback
  if (logos.length === 0) {
    return (
      <div className="infinite-logo-slider-container">
        <p>Loading logos...</p>
      </div>
    );
  }

  // ✅ Split for two-row animation (mobile)
  const half = Math.ceil(logos.length / 2);
  const topRowLogos = logos.slice(0, half);
  const bottomRowLogos = logos.slice(half);

  // ✅ Render same design safely
  return (
    <div className="infinite-logo-slider-container">
      {/* Desktop / Tablet: Single Track */}
      <div className="infinite-logo-slider-track desktop-track">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="infinite-logo-slide">
            <img src={logo} alt={`logo-${index}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Mobile: Two Opposite Rows */}
      <div className="infinite-logo-mobile">
        <div className="infinite-logo-slider-row top-row">
          {topRowLogos.concat(topRowLogos).map((logo, index) => (
            <div key={`top-${index}`} className="infinite-logo-slide">
              <img src={logo} alt={`top-logo-${index}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="infinite-logo-slider-row bottom-row">
          {bottomRowLogos.concat(bottomRowLogos).map((logo, index) => (
            <div key={`bottom-${index}`} className="infinite-logo-slide">
              <img src={logo} alt={`bottom-logo-${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
