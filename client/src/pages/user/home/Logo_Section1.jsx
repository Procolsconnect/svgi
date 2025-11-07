import React from "react";
import "./logo_section1.css";

const InfiniteLogoSlider = () => {
  const logos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  ];

  // Split logos for two-row animation on mobile
  const half = Math.ceil(logos.length / 2);
  const topRowLogos = logos.slice(0, half);
  const bottomRowLogos = logos.slice(half);

  return (
    <div className="infinite-logo-slider-container">
      {/* Desktop / Tablet: Single Track */}
      <div className="infinite-logo-slider-track desktop-track">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="infinite-logo-slide">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>

      {/* Mobile: Two Opposite Rows */}
      <div className="infinite-logo-mobile">
        <div className="infinite-logo-slider-row top-row">
          {topRowLogos.concat(topRowLogos).map((logo, index) => (
            <div key={`top-${index}`} className="infinite-logo-slide">
              <img src={logo} alt={`top-logo-${index}`} />
            </div>
          ))}
        </div>

        <div className="infinite-logo-slider-row bottom-row">
          {bottomRowLogos.concat(bottomRowLogos).map((logo, index) => (
            <div key={`bottom-${index}`} className="infinite-logo-slide">
              <img src={logo} alt={`bottom-logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
