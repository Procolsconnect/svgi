import React, { useState } from 'react';
import './ug.css';

const UndergraduateCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div className="uc-page-wrapper">
      {/* HERO SECTION */}
      <div className="uc-hero-section">
        <img src="hero img.jpg" alt="Hero Background" className="uc-hero-image" />
        <h1 className="uc-hero-title">Research cources</h1>
      </div>

      <div className="uc-main-container">
        <div className="uc-header-section">
          <i className="fa fa-arrow-left fa-2x"></i>
          <div className="uc-header-logo">
            <h5 className="uc-header-text">CCCLOTHES</h5>
          </div>
        </div>

        <div className="uc-top-image"></div>
        <div className="uc-div-area-1"></div>

        <div className="uc-right-top-section uc-end">
          <div className="uc-title-2">LINEN</div>
          <div className="uc-title-2 uc-trans-90 uc-pos-right">BLAZER</div>
        </div>

        <div className="uc-left-bottom-section">
          <div className="uc-title-2 uc-trans-180 uc-f-l">TOP</div>
          <div className="uc-title-2 uc-trans-270 uc-pos-left">01</div>
        </div>

        <div className="uc-div1"></div>

        <div className="uc-content">
          <div className="uc-title-2">LINEN BLAZER</div>
          <h2 className="uc-italic uc-trans-90">PRODUCT DETAILS</h2>
          <h2>Kogi Cosby sweater ethical squid irony</h2>
          <p>
            In the tumultuous business of cutting-in and attending to a whale, there is much running backwards 
            and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. 
            There is no staying in any one place; for at one and the same time everything has to be done everywhere. 
            It is much the same with him who endeavors the description of the scene. 
          </p>
          <p>
            We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, 
            the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so 
            clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular 
            friend Queequeg, whose duty it was, as harpooneer.
          </p>
        </div>

        <div className="uc-bottom-img"></div>
        <div className="uc-center-img"></div>
        <div className="uc-divArea-2"></div>
        <div className="uc-div2"></div>
        <div className="uc-pattern1"></div>
      </div>

      <div className="uc-wrapper-no4">
        <p>THE complete UP cource are in side the button So </p>
        <h1> Click the Button </h1>
        <button 
          className={`uc-button-bird ${isButtonActive ? 'active' : ''}`}
          onClick={handleButtonClick}
        >
          <p className="uc-button-bird__text">
            {isButtonActive ? 'DONE' : 'OPEN'}
          </p>
          <svg version="1.1" className="uc-feather" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 75 38" style={{enableBackground: 'new 0 0 75 38'}} xmlSpace="preserve">
            <g>
              <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                  c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                  c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                  c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                  c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"/>
            </g>
          </svg>
          <span className="uc-bird"></span>
          <span className="uc-bird--1"></span>
          <span className="uc-bird--2"></span>
          <span className="uc-bird--3"></span>
          <span className="uc-bird--4"></span>
          <span className="uc-bird--5"></span>
          <span className="uc-bird--6"></span>
          <span className="uc-bird--7"></span>
          <span className="uc-bird--8"></span>
          <span className="uc-bird--9"></span>
          <span className="uc-bird--10"></span>
          <span className="uc-bird--11"></span>
          <span className="uc-bird--12"></span>
          <span className="uc-bird--13"></span>
          <span className="uc-bird--14"></span>
          <span className="uc-bird--15"></span>
          <span className="uc-bird--16"></span>
          <span className="uc-bird--17"></span>
          <span className="uc-bird--18"></span>
          <span className="uc-bird--19"></span>
          <span className="uc-bird--20"></span>
          <span className="uc-bird--21"></span>
          <span className="uc-bird--22"></span>
          <span className="uc-bird--23"></span>
          <span className="uc-bird--24"></span>
          <span className="uc-bird--25"></span>
          <span className="uc-bird--26"></span>
          <span className="uc-bird--27"></span>
          <span className="uc-bird--28"></span>
          <span className="uc-bird--29"></span>
          <span className="uc-bird--30"></span>
        </button>
      </div>
    </div>
  );
};

export default UndergraduateCoursesPage;