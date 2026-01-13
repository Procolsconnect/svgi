import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CollegeCampus.module.css";

const CollegeCampus = () => {
  const [campusData, setCampusData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCampusData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/campus`);
        setCampusData(res.data.data);
      } catch (err) {
        console.error("Error fetching campus data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampusData();
  }, [API_URL]);

  if (loading) return <p className={styles.cdLoading}>Loading campus details...</p>;
  if (!campusData) return <p className={styles.cdError}>No campus data found.</p>;

  const { title, description, since, imagesCard, videosCard, toursCard } = campusData;

  return (
    <main className={styles.cdMain}>
      <div className={styles.cdMainInner}>
        <div className={styles.cdHeading}>
          <h2 className={styles.cdTitle}>
            {title || "College Campus Infrastructure"}
          </h2>
          <aside className={styles.cdAside}>
            <p className={styles.cdDesc}>
              {description || `Shree Vengadeshwara Institution offers a modern, tech-enabled campus
              with smart classrooms, advanced labs, digital library, high-speed
              internet, and a dedicated placement cell. Our well-maintained
              hostels, spacious seminar halls, sports facilities, and eco-friendly
              surroundings provide a perfect blend of learning and lifestyle. A
              truly inspiring space for academic and personal growth.`}
            </p>
            <p className={styles.cdSince}>Since {since || "2011"}</p>
          </aside>
        </div>

        <div className={styles.cdContainer}>
          {/* Image Card */}
          <div className={styles.cdCard}>
            <div className={styles.cdCardInner}>
              <div className={styles.cdBox}>
                <div className={styles.cdImgBox}>
                  <img
                    src={imagesCard?.[0]?.image || "/images/default.jpg"}
                    alt="College infrastructure"
                  />
                </div>
                <div className={styles.cdMore}>
                  <ul>
                    {imagesCard?.slice(1, 4)?.map((img, index) => (
                      <li key={index}>
                        <img src={img.image} alt={`Campus ${index + 1}`} />
                      </li>
                    ))}
                    {imagesCard?.length > 4 && (
                      <li>
                        <img
                          src={imagesCard[4].image}
                          alt="More"
                        />
                        <span>{imagesCard.length - 4}+</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className={styles.cdTag}>
                  <a href="#">#view all images</a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Card */}
          {videosCard?.length > 0 && (
            <div className={`${styles.cdCard} ${styles.cdVideo}`}>
              <div className={styles.cdCardInner}>
                <div className={styles.cdBox}>
                  <div className={styles.cdVideoBox}>
                    <video
                      id="cd-dronVideo"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onClick={(e) => {
                        const video = e.currentTarget;
                        video.paused ? video.play() : video.pause();
                      }}
                    >
                      <source
                        src={videosCard[0].image}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className={styles.cdTag}>
                    <a href={videosCard[0].image} target="_blank" rel="noopener noreferrer">
                      #view full screen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 360 View Card */}
          {toursCard?.length > 0 && (
            <div className={styles.cdCard}>
              <p className={styles.cdMoreLink}>
                <a href="#">More about tours</a>
              </p>
              <div className={styles.cdCardInner}>
                <div className={styles.cdBox}>
                  <div className={styles.cdImgBox}>
                    <img
                      src={toursCard[0].image}
                      alt="360 view"
                    />
                  </div>
                  <div className={styles.cdMore}>
                    <a
                      href="https://maps.app.goo.gl/ngE5ywtRyomy69CJA"
                      className={styles.cdArrow}
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
                  <div className={styles.cdTag}>
                    <a href="#">#360 view</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CollegeCampus;
