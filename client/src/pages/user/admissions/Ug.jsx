import React, { useState } from "react";
import "./ug.css"; // your provided CSS

const HeroUI = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="heroUI-body">
      {/* HERO SECTION */}
      <div className="heroUI-hero">
        <img src="hero img.jpg" alt="Hero Background" className="heroUI-hero-img" />
        <h1 className="heroUI-hero-title">Undergraduate courses</h1>
      </div>

      <div className="heroUI-container">
        {/* HEADER */}
        <div className="heroUI-header">
          <i className="fa fa-arrow-left fa-2x"></i>
          <div><h5>CCCLOTHES</h5></div>
        </div>

        {/* IMAGES */}
        <div className="heroUI-top-img"></div>
        <div className="heroUI-divArea-1"></div>
        <div className="heroUI-rightTop">
          <div className="heroUI-title2">LINEN</div>
          <div className="heroUI-title2 heroUI-trans-90 heroUI-pos-right">BLAZER</div>
        </div>

        <div className="heroUI-leftBottom">
          <div className="heroUI-title2 heroUI-trans-180 heroUI-f-l">TOP</div>
          <div className="heroUI-title2 heroUI-trans-270 heroUI-pos-left">01</div>
        </div>

        <div className="heroUI-div1"></div>

        <div className="heroUI-content">
          <div className="heroUI-title2">LINEN BLAZER</div>
          <h2 className="heroUI-italic heroUI-trans-90">PRODUCT DETAILS</h2>
          <h2>Kogi Cosby sweater ethical squid irony</h2>
          <p>
            In the tumultuous business of cutting-in and attending to a whale, there is much
            running backwards and forwards among the crew. Now hands are wanted here, and then
            again hands are wanted there. There is no staying in any one place; for at one and
            the same time everything has to be done everywhere. It is much the same with him
            who endeavors the description of the scene.
          </p>
          <p>
            We must now retrace our way a little. It was mentioned that upon first breaking
            ground in the whale's back, the blubber-hook was inserted into the original hole
            there cut by the spades of the mates. But how did so clumsy and weighty a mass as
            that same hook get fixed in that hole? It was inserted there by my particular friend
            Queequeg, whose duty it was, as harpooneer.
          </p>
        </div>

        <div className="heroUI-bottom-img"></div>
        <div className="heroUI-center-img"></div>
        <div className="heroUI-divArea-2"></div>
        <div className="heroUI-div2"></div>
        <div className="heroUI-pattern1"></div>
      </div>

      {/* BUTTON SECTION */}
      <div className="heroUI-wrapper-no4">
        <p>THE complete UP course are inside the button</p>
        <h1>Click the Button</h1>
        <button
          className={`heroUI-button-bird ${active ? "active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <p className="heroUI-button-bird__text">{active ? "DONE" : "OPEN"}</p>
          <svg
            version="1.1"
            className="heroUI-feather"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75 38"
          >
            <g>
              <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
              c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
              c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
              c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
              c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"/>
            </g>
          </svg>

          {/* 30 birds */}
          {[...Array(30)].map((_, i) => (
            <span key={i} className={`heroUI-bird--${i + 1}`}></span>
          ))}
        </button>
      </div>
    </div>
  );
};

export default HeroUI;
