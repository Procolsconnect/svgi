import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './sports.module.css';
import Mask from './Mask';
import CommonHero from '../../../components/CommonHero';

const API_BASE = import.meta.env.VITE_API_URL + "/api/campus";

const SportsPage = () => {
  const bouncerRef = useRef(null);
  const [isBouncerInitialized, setIsBouncerInitialized] = useState(false);

  const [hero, setHero] = useState(null);
  const [cards, setCards] = useState([]);
  const [videos, setVideos] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        const [heroRes, cardsRes, videosRes, achievementsRes, athletesRes] = await Promise.all([
          axios.get(`${API_BASE}/sportshero`),
          axios.get(`${API_BASE}/sportscard`),
          axios.get(`${API_BASE}/sportsvideo`),
          axios.get(`${API_BASE}/sportsacheivement`),
          axios.get(`${API_BASE}/sportsathelets`)
        ]);

        if (heroRes.data.success) setHero(heroRes.data.data?.[0]);
        if (cardsRes.data.success) setCards(cardsRes.data.data || []);
        if (videosRes.data.success) setVideos(videosRes.data.data || []);
        if (achievementsRes.data.success) setAchievements(achievementsRes.data.data || []);
        if (athletesRes.data.success) setAthletes(athletesRes.data.data || []);
      } catch (error) {
        console.error("Error fetching sports data:", error);
      }
    };
    fetchSportsData();
  }, []);

  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  useEffect(() => {
    // Bouncer animation logic
    if (bouncerRef.current && !isBouncerInitialized) {
      const bounceSpeed = 7;
      const elem = bouncerRef.current;
      const elemText = elem.textContent;

      // Check if cloned element already exists
      const existingCloned = elem.parentNode.querySelector(`.${styles.sports__cloned}`);
      if (existingCloned) {
        existingCloned.remove();
      }

      const cloned = document.createElement('div');
      cloned.className = `${styles.sports__bouncer} ${styles.sports__cloned}`;
      cloned.style.position = 'relative';
      cloned.style.display = 'inline-block';

      const ball = document.createElement('div');
      ball.className = styles.sports__ball;

      elem.parentNode.insertBefore(cloned, elem.nextSibling);
      cloned.appendChild(ball);
      elem.style.display = 'none';

      const contentArray = elemText.split(' ');
      const timers = [];
      let incrementingDelay = 0;

      contentArray.forEach((word, j) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = styles.sports__word;
        wordSpan.textContent = word;
        cloned.appendChild(wordSpan);

        const wordLength = wordSpan.offsetWidth;

        if (j + 1 < contentArray.length) {
          const space = document.createElement('span');
          space.innerHTML = '&nbsp;';
          cloned.appendChild(space);
        }

        const ballLeft = wordSpan.offsetLeft + wordLength / 2;
        const ballTop = wordSpan.offsetTop;

        const timer = setTimeout(() => {
          const leftDuration = wordLength * bounceSpeed + 'ms';
          const topDuration = (wordLength * bounceSpeed / 2) + 'ms';
          ball.style.transitionDuration = leftDuration + ', ' + topDuration;

          const ballOffsetLeft = ball.offsetLeft;
          const delta = ballLeft - ballOffsetLeft;
          const ballHalfWay = ballOffsetLeft + delta;
          ball.style.left = ballHalfWay + 'px';
          ball.style.top = '-50px';

          setTimeout(() => {
            ball.style.left = ballLeft + 'px';
            ball.style.top = '0px';

            setTimeout(() => {
              wordSpan.classList.add(styles.sports__lit);
            }, wordLength * bounceSpeed / 2);
          }, wordLength * bounceSpeed / 2);
        }, incrementingDelay);

        timers.push(timer);
        incrementingDelay += wordLength * bounceSpeed;
      });

      const fadeTimer = setTimeout(() => {
        ball.style.opacity = '0';
      }, incrementingDelay);
      timers.push(fadeTimer);

      setIsBouncerInitialized(true);
    }
  }, [isBouncerInitialized]);

  return (
    <div className={styles.sports__wrapper}>
      {/* Hero Section */}
    <CommonHero
        apiEndpoint="/api/sportshero"
        defaultTitle="Our Library"
        defaultImage="/images/instu.jpg"
      />

      {/* SVGI Section */}
      <section className={styles.sports__section}>
        <div className={styles['sports__left-content']}>
          <header id="sports__media-gallery" className={styles['sports__media-banner']}>
            <div className={styles.sports__container}>
              <p ref={bouncerRef} className={`${styles.sports__bouncer} ${styles['sports__header-logo']}`}>Sports facilities in SVGI</p>
            </div>
          </header>
          <p className={styles.sports__description}>
            SVGI is dedicated to fostering a culture of excellence in sports and academics through a blend of academic excellence and athletic prowess.
          </p>
        </div>

        <div className={styles['sports__right-side']}>
          <img src="https://pngimg.com/uploads/football_player/football_player_PNG48.png" alt="Sportsman" />
        </div>
      </section>
      <Mask />

      {/* CardSection */}
      {cards.map((card, index) => (
        <article key={card._id || index} className={`${styles.sports__slat} ${index % 2 === 0 ? styles['sports__slat--reversed'] : ''}`}>
          <div className={styles['sports__slat-body']}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          <div className={styles['sports__slat-item']}>
            <img src={card.image} alt={card.title} />
          </div>
        </article>
      ))}

      {/* Fallback if no cards */}
      {cards.length === 0 && (
        <article className={`${styles.sports__slat} ${styles['sports__slat--reversed']}`}>
          <div className={styles['sports__slat-body']}>
            <h3>Premium Facilities</h3>
            <p>Our sports infrastructure provides students with modern courts and tracks to help them reach their peak performance.</p>
          </div>
          <div className={styles['sports__slat-item']}>
            <img src="https://public-619e3.firebaseapp.com/Media-Slat/img-01_med.jpg" alt="Media Image 1" />
          </div>
        </article>
      )}

      {/* Podium Section */}
      <section id="sports__podium" className={styles['sports__podium-section']}>
        <div className={styles['sports__podium-title']}>
          <h1>Top 3 Winners</h1>
        </div>
        <div className={styles['sports__podium-description']}>
          <p>
            These are our top performers! Each number represents excellence, consistency,
            and skill. Congratulations to everyone for their hard work and success.
          </p>
        </div>

        <div className={styles['sports__right-podium']}>
          <div className={styles['sports__podium-container']}>
            <div className={styles.sports__podium}>
              <div className={`${styles['sports__podium-front']} ${styles['sports__podium-left']}`}>2</div>
              <div className={`${styles['sports__podium-front']} ${styles['sports__podium-center']}`}>1</div>
              <div className={`${styles['sports__podium-front']} ${styles['sports__podium-right']}`}>3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="sports__video-gallery" className={styles['sports__video-gallery-section']}>
        <h1>Sports Video Gallery</h1>
        <div className={styles['sports__videos-container']}>
          {videos.length > 0 ? videos.map((vid, idx) => (
            <div key={vid._id || idx} className={styles['sports__video-item']}>
              <iframe
                src={getEmbedUrl(vid.video_url)}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )) : (
            <>
              <div className={styles['sports__video-item']}>
                <iframe src="https://www.youtube.com/embed/_XWIIwMdGyw" title="Demo Video 1" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className={styles['sports__video-item']}>
                <iframe src="https://www.youtube.com/embed/VU4phbm2IiU" title="Demo Video 2" frameBorder="0" allowFullScreen></iframe>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="sports__achievements" className={styles['sports__achievements-section']}>
        <h1>Sports Achievements</h1>

        <div className={styles['sports__content-wrapper']}>
          <div className={styles['sports__slider']}>
            <div className={styles['sports__slide-track']}>
              {(achievements.length > 0 ? achievements.concat(achievements) : []).map((item, idx) => (
                <div key={idx} className={styles.sports__slide}>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
              {achievements.length === 0 && (
                <>
                  <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_1.jpg" alt="Achievement 1" /></div>
                  <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_2.jpg" alt="Achievement 2" /></div>
                </>
              )}
            </div>
          </div>

          <div className={styles['sports__right-box']}>
            {achievements.length > 0 ? (
              <p>
                <strong>{achievements[0].title}:</strong> {achievements[0].description}
              </p>
            ) : (
              <p>
                Our students consistently win top honors in national and international tournaments.
                Ms. Ananya Chouhan won Bronze at the J80 Class World Boat Championship, and our teams
                frequently bring laurels from national level events like SPANDAN.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section id="sports__athletes" className={styles['sports__cards-section']}>
        <h1>Featured Athletes</h1>
        <div className={styles['sports__cards-container']}>
          {athletes.length > 0 ? athletes.map((athlete, idx) => (
            <div key={athlete._id || idx} className={styles.sports__card}>
              <div className={styles['sports__card-inner']}>
                <div className={styles.sports__box}>
                  <div className={styles.sports__imgBox}>
                    <img src={athlete.image} alt={athlete.name} />
                  </div>
                  <div className={styles.sports__icon}>
                    <div className={styles.sports__iconBox} style={{ fontSize: '10px', color: '#fff', textAlign: 'center' }}>{athlete.achievement}</div>
                  </div>
                </div>
              </div>
              <div className={styles['sports__card-content']}>
                <h3>{athlete.name}</h3>
              </div>
            </div>
          )) : (
            <div className={styles.sports__card}>
              <div className={styles['sports__card-inner']}>
                <div className={styles.sports__box}>
                  <div className={styles.sports__imgBox}>
                    <img src="https://picsum.photos/seed/picsum/500/600" alt="Athlete Placeholder" />
                  </div>
                  <div className={styles.sports__icon}>
                    <a href="#" className={styles.sports__iconBox}>View</a>
                  </div>
                </div>
              </div>
              <div className={styles['sports__card-content']}>
                <h3>Athlete One</h3>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SportsPage;