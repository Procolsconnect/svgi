import React, { useState } from 'react';
import './pg.css';

const PostgraduateCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div className="pg-page-wrapper">
      {/* HERO SECTION */}
      <div className="pg-hero">
        <img src="hero img.jpg" alt="Hero Background" className="pg-hero-image" />
        <h1 className="pg-hero-title">Postgraduate Courses</h1>
      </div>

      <div className="pg-wrap">
        <div className="pg-header">
          <h3>
            <span>
              <a href="https://codepen.io/gatesakagi/full/WyKrRB/" target="_blank" rel="noopener noreferrer">
                CCCLOTHES
              </a>
            </span>
          </h3>
        </div>

        <div className="pg-detailtop">
          <div className="pg-productimg">
            <img 
              src="https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&auto=format&fit=crop&w=934&q=80" 
              alt="" 
              className="pg-cover-img" 
              style={{ objectPosition: 'center -330px' }} 
            />
            <div className="pg-boxtop">
              <div className="pg-boxtitle pg-boxtitletop1">VINTAGE</div>
              <div className="pg-boxtitle pg-boxtitletop2">DENIM</div>
            </div>
            <div className="pg-imgproduct"></div>
            <div className="pg-boxbottom">
              <div className="pg-boxtitle pg-boxtitlebottom1">06</div>
              <div className="pg-boxtitle pg-boxtitlebottom2">TOP</div>
            </div>
          </div>
        </div>

        <div className="pg-detailcontent">
          <h1>VINTAGE DENIM</h1>
          <h3>PRODUCT DETAILS</h3>
          <div className="pg-subtitle">Kogi Cosby sweater ethical squid irony</div>
          <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew...</p>
          <p>We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back...</p>
        </div>

        <div className="pg-detailbottom">
          <div className="pg-leftitem">
            <div className="pg-itemimg">
              <img 
                src="https://images.unsplash.com/photo-1519406686401-e9ef2420c15b?ixlib=rb-0.3.5&auto=format&fit=crop&w=1950&q=80" 
                alt="" 
                className="pg-cover-img" 
              />
            </div>
          </div>
          <div className="pg-rightitem">
            <div className="pg-itemimg">
              <img 
                src="https://images.unsplash.com/photo-1519406728390-b536d7be138f?ixlib=rb-0.3.5&auto=format&fit=crop&w=934&q=80" 
                alt="" 
                className="pg-cover-img" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pg-wrapper-no4">
        <p>THE complete PG cource are in side the button So</p>
        <h1>Click the Button</h1>
        <button 
          className={`pg-button-bird ${isButtonActive ? 'active' : ''}`}
          onClick={handleButtonClick}
        >
          <p className="pg-button-bird__text">
            {isButtonActive ? 'DONE' : 'OPEN'}
          </p>
          <svg version="1.1" className="pg-feather" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 75 38" style={{enableBackground: 'new 0 0 75 38'}} xmlSpace="preserve">
            <g>
              <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                  c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                  c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                  c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                  c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"/>
            </g>
          </svg>
          <span className="pg-bird"></span>
          <span className="pg-bird--1"></span>
          <span className="pg-bird--2"></span>
          <span className="pg-bird--3"></span>
          <span className="pg-bird--4"></span>
          <span className="pg-bird--5"></span>
          <span className="pg-bird--6"></span>
          <span className="pg-bird--7"></span>
          <span className="pg-bird--8"></span>
          <span className="pg-bird--9"></span>
          <span className="pg-bird--10"></span>
          <span className="pg-bird--11"></span>
          <span className="pg-bird--12"></span>
          <span className="pg-bird--13"></span>
          <span className="pg-bird--14"></span>
          <span className="pg-bird--15"></span>
          <span className="pg-bird--16"></span>
          <span className="pg-bird--17"></span>
          <span className="pg-bird--18"></span>
          <span className="pg-bird--19"></span>
          <span className="pg-bird--20"></span>
          <span className="pg-bird--21"></span>
          <span className="pg-bird--22"></span>
          <span className="pg-bird--23"></span>
          <span className="pg-bird--24"></span>
          <span className="pg-bird--25"></span>
          <span className="pg-bird--26"></span>
          <span className="pg-bird--27"></span>
          <span className="pg-bird--28"></span>
          <span className="pg-bird--29"></span>
          <span className="pg-bird--30"></span>
        </button>
      </div>
    </div>
  );
};

export default PostgraduateCoursesPage;