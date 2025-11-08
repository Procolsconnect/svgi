// CollegeCampus.jsx
import React from 'react';
import './Campus.css';

const CollegeCampus = () => {
  return (
    <main className="cc-main">
      <div className="cc-heading">
        <h1 className="cc-title">
          College Campus <br />
          Infrastructure
        </h1>
        <aside className="cc-aside">
          <p className="cc-desc">
            Shree Vengadeshwara Institution offers a modern, tech-enabled campus
            with smart classrooms, advanced labs, digital library, high-speed
            internet, and a dedicated placement cell. Our well-maintained
            hostels, spacious seminar halls, sports facilities, and eco-friendly
            surroundings provide a perfect blend of learning and lifestyle. A
            truly inspiring space for academic and personal growth.
          </p>
          <p className="cc-since">Since 2011</p>
        </aside>
      </div>

      <div className="cc-container">
        {/* Image Card */}
        <div className="cc-card">
          <div className="cc-card-inner">
            <div className="cc-box">
              <div className="cc-imgBox">
                <img src="/images/enginner.jpg" alt="College infrastructure" />
              </div>
              <div className="cc-more">
                <ul>
                  <li>
                    <img src="/images/arts.jpeg" alt="Arts" />
                  </li>
                  <li>
                    <img src="/images/artss.jpg" alt="Arts" />
                  </li>
                  <li>
                    <img src="/images/paramedical.jpeg" alt="Paramedical" />
                  </li>
                  <li>
                    <img src="/images/arts college.jpg" alt="College" />
                    <span>50+</span>
                  </li>
                </ul>
              </div>
              <div className="cc-tag">
                <a href="#">#view all images</a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Card */}
        <div className="cc-card cc-video">
          <div className="cc-card-inner">
            <div className="cc-box">
              <div className="cc-videoBox">
                <video
                  id="cc-dronVideo"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.paused ? video.play() : video.pause();
                  }}
                >
                  <source src="/videos/College Dron.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="cc-tag">
                <a href="#">#view full screen</a>
              </div>
            </div>
          </div>
        </div>

        {/* 360 View Card */}
        <div className="cc-card">
          <p className="cc-more-link">
            <a href="#">More about tours</a>
          </p>
          <div className="cc-card-inner">
            <div className="cc-box">
              <div className="cc-imgBox">
                <img src="/images/instu.jpg" alt="360 view" />
              </div>
              <div className="cc-more">
                <a
                  href="https://maps.app.goo.gl/ngE5ywtRyomy69CJA"
                  className="cc-arrow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15M19.5 4.5H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="cc-tag">
                <a href="#">#360 view</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollegeCampus;