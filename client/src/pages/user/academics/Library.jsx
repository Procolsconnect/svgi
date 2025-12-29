import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./library.module.css";

const API_BASE = import.meta.env.VITE_API_URL + "/api";

export default function LibraryPage() {
  const [libraryData, setLibraryData] = useState({
    hero: null,
    images: [],
    video: null,
    videoCards: [],
    resources: []
  });
  const [loading, setLoading] = useState(true);

  const carouselRef = useRef(null);
  const speedRef = useRef(0.5);
  const positionRef = useRef(0);

  const videoRef = useRef(null);
  const thumbRef = useRef(null);
  const playBtnRef = useRef(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [heroRes, imagesRes, videoRes, cardRes, resRes] = await Promise.all([
          axios.get(`${API_BASE}/libraryhero`),
          axios.get(`${API_BASE}/libraryimage`),
          axios.get(`${API_BASE}/libraryvideo`),
          axios.get(`${API_BASE}/libraryvideocard`),
          axios.get(`${API_BASE}/library/resources`)
        ]);

        setLibraryData({
          hero: heroRes.data.data?.[0] || null,
          images: imagesRes.data.data || [],
          video: videoRes.data.data?.[0] || null,
          videoCards: cardRes.data.data || [],
          resources: resRes.data.data || []
        });
      } catch (error) {
        console.error("Error fetching library data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (libraryData.images.length === 0) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    let frame;
    const moveCarousel = () => {
      positionRef.current -= speedRef.current;

      if (positionRef.current < -320) {
        positionRef.current = 0;
        if (carousel.firstElementChild) {
          carousel.appendChild(carousel.firstElementChild);
        }
      }

      carousel.style.transform = `rotate(-5deg) translateX(${positionRef.current}px)`;
      frame = requestAnimationFrame(moveCarousel);
    };

    moveCarousel();

    const pause = () => (speedRef.current = 0);
    const resume = () => (speedRef.current = 0.5);

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(frame);
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
    };
  }, [libraryData.images]);

  const playVideo = () => {
    if (thumbRef.current) thumbRef.current.style.display = "none";
    if (playBtnRef.current) playBtnRef.current.style.display = "none";
    if (videoRef.current) {
      videoRef.current.style.display = "block";
      // If it's a youtube link, add autoplay. If it's a direct file, it might need different handling.
      if (videoRef.current.src.includes('youtube.com')) {
        videoRef.current.src += "?autoplay=1";
      } else {
        videoRef.current.play();
      }
    }
  };

  const { hero, images, video, videoCards, resources } = libraryData;

  if (loading) {
    return <div className={styles.loading}>Loading Library Content...</div>;
  }

  return (
    <div className={styles.body}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        <img src={hero?.image || "/images/instu.jpg"} alt="Hero Background" />
        <div>
          <h1>{hero?.title || "Our Library"}</h1>
        </div>
      </div>

      {/* MAIN / CAROUSEL */}
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <span className={styles.badge}></span>
          <h1 className={styles.title}> Discover Wisdom<br />One Page at a Time</h1>
          <p className={styles.subtitle}>
            A library provides access to books, digital resources, and learning materials that support students’ academic growth.
          </p>
        </div>

        {images.length > 0 && (
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
              <div className={styles.carouselTrack} ref={carouselRef}>
                {images.map((img, idx) => (
                  <div key={img._id || idx} className={styles.carouselCard}>
                    <img src={img.image} alt={`Gallery item ${idx}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* VIDEO + ABOUT SECTION */}
      <div className={styles.contentWrapper}>
        <div className={styles.thumbnailContainer}>
          {video?.video ? (
            <>
              <video
                ref={videoRef}
                className={styles.video}
                src={video.video}
                controls
                style={{ display: "none" }}
              />
              <div ref={thumbRef} className={styles.thumbnail} style={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa fa-play-circle" style={{ fontSize: '5rem', color: '#fff' }}></i>
              </div>
            </>
          ) : (
            <>
              <iframe
                ref={videoRef}
                className={styles.video}
                src="https://www.youtube.com/embed/mmtisRvZ0-4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <img ref={thumbRef} className={styles.thumbnail} src="https://img.youtube.com/vi/mmtisRvZ0-4/maxresdefault.jpg" alt="Video Thumbnail" />
            </>
          )}

          <div ref={playBtnRef} className={styles.startVideo} onClick={playVideo}>
            <img src="https://i.imgur.com/v2zNG32.png" alt="Play Button" />
          </div>
        </div>

        <div className={styles.videoDescription}>
          <h2>{video?.title || "About Libraries"}</h2>
          <p>
            {video?.description || `SVGI features eight well-organized libraries, each focused on a specific field such as Engineering, Arts & Science, Nursing, Paramedical, and more. Each library houses over 700 books, journals, and reference materials, in addition to five digital libraries that provide e-resources to enhance advanced learning.`}
          </p>
          {!video?.description && (
            <p className={styles.mt3}>
              These libraries create a quiet, resource-rich environment where students can study, conduct research, and access up-to-date academic content, fostering strong academic development across all departments
            </p>
          )}
        </div>
      </div>

      {/* TABLE SECTION */}
      {resources.length > 0 && (
        <>
          <h2 className={styles.sectionHeading}>Learning Resources (as on 21.03.2025)</h2>
          {resources.map((res, idx) => (
            <div key={res._id || idx} style={{ marginBottom: '2rem' }}>
              <table className={styles.videoTable}>
                <thead>
                  <tr><th>Library Resources</th><th>{res.campus || "Vellore-Campus"}</th></tr>
                </thead>
                <tbody>
                  <tr><td>Total Number of Books</td><td>{res.totalBooks}</td></tr>
                  <tr><td>Total Number of Back Volumes</td><td>{res.totalBackVolumes}</td></tr>
                  <tr><td>Print Journals / Magazines</td><td>{res.printJournalsMagazines}</td></tr>
                  <tr><td>National</td><td>{res.national}</td></tr>
                  <tr><td>International</td><td>{res.international}</td></tr>
                  <tr>
                    <td>Online databases / E-Journals<br /><small>(On and Off Campus access facility)</small></td>
                    <td>{res.onlineDatabases}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      {res.databaseList}
                    </td>
                  </tr>
                  <tr>
                    <td>E-Books<br /><small>(On and Off Campus access)</small></td>
                    <td>{res.ebooks}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}

      {/* MORE VIDEOS */}
      {videoCards.length > 0 && (
        <>
          <h2 className={styles.sectionHeading}>More Videos</h2>
          {videoCards.map((card, idx) => (
            <React.Fragment key={card._id || idx}>
              <table className={styles.videoTable}>
                <tbody>
                  <tr>
                    {idx % 2 === 0 ? (
                      <>
                        <td>
                          <b className={styles.videoTitle}><a href="#">{card.title}</a></b>
                          <p className={styles.videoP}>{card.description}</p>
                        </td>
                        <td>
                          <div className={styles.image}>
                            {card.video.endsWith('.mp4') || card.video.includes('video/upload') ? (
                              <video src={card.video} controls style={{ width: '100%', borderRadius: '10px' }} />
                            ) : (
                              <img src={card.video} alt={card.title} />
                            )}
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>
                          <div className={styles.image}>
                            {card.video.endsWith('.mp4') || card.video.includes('video/upload') ? (
                              <video src={card.video} controls style={{ width: '100%', borderRadius: '10px' }} />
                            ) : (
                              <img src={card.video} alt={card.title} />
                            )}
                          </div>
                        </td>
                        <td>
                          <b className={styles.videoTitle}><a href="#">{card.title}</a></b>
                          <p className={styles.videoP}>{card.description}</p>
                        </td>
                      </>
                    )}
                  </tr>
                </tbody>
              </table>
              <hr className={styles.videoHr} />
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
}
