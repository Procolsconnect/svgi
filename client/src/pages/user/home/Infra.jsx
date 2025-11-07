import React, { useRef } from 'react';
import './Campus.css';

export default function CampusInfrastructure() {
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <main className="campus-main">
      <div className="heading">
        <h1>College Campus <br />Infrastructure</h1>
        <aside>
          <p>
            Shree Vengadeshwara Institution offers a modern, tech-enabled campus with smart classrooms,
            advanced labs, digital library, high-speed internet, and a dedicated placement cell. Our
            well-maintained hostels, spacious seminar halls, sports facilities, and eco-friendly surroundings
            provide a perfect blend of learning and lifestyle. A truly inspiring space for academic and
            personal growth.
          </p>
          <p>Since 2011</p>
        </aside>
      </div>

      <div className="container">
        {/* Image Card */}
        <div className="card">
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <img src="enginner.jpg" alt="Awesome views" />
              </div>
              <div className="more">
                <ul>
                  <li><img src="arts.jpeg" alt="" /></li>
                  <li><img src="artss.jpg" alt="" /></li>
                  <li><img src="paramedical.jpeg" alt="" /></li>
                  <li><img src="arts college.jpg" alt="" /><span>50+</span></li>
                </ul>
              </div>
              <div className="tag">
                <a href="#">#view all images</a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Card */}
        <div className="card video">
          <div className="card-inner">
            <div className="box">
              <div className="videoBox">
                <video ref={videoRef} autoPlay loop muted playsInline onClick={toggleVideo}>
                  <source src="./College Dron 1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="tag">
                <a href="#">#view full screen</a>
              </div>
            </div>
          </div>
        </div>

        {/* Hiking Card */}
        <div className="card">
          <p><a href="#">More about tours</a></p>
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <img src="/images/instu.jpg" alt="Hiking" />
              </div>
              <div className="more">
                <a href="https://maps.app.goo.gl/ngE5ywtRyomy69CJA" className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15M19.5 4.5H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
              <div className="tag">
                <a href="#">#360 view</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
