import React, { useEffect, useRef, useState } from 'react';
import styles from './sports.module.css';

const SportsPage = () => {
  const bouncerRef = useRef(null);
  const [isBouncerInitialized, setIsBouncerInitialized] = useState(false);

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
      <section id="sports__hero" className={styles.sports__hero}>
        <img src="hero img.jpg" alt="Hero Background" className={styles['sports__hero-img']} />
        <div className={styles['sports__hero-overlay']}></div>
        <h1 className={styles['sports__hero-title']}>Sports</h1>
      </section>

      {/* SVGI Section */}
      <section className={styles.sports__section}>
        <div className={styles['sports__left-content']}>
          <header className={styles['sports__video-header']}>
            <video autoPlay playsInline muted loop preload="auto" poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
              <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" type="video/webm" />
              <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" type="video/mp4" />
            </video>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
              <defs>
                <mask id="sports__mask" x="0" y="0" width="100%" height="100%">
                  <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
                  <text x="95" y="50" fill="#000">SVGI</text>
                </mask>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
            </svg>
          </header>
          <p className={styles.sports__description}>
            SVGI is dedicated to fostering a culture of excellence in sports and academics.
            Our students are encouraged to pursue their passion both on the field and in the classroom.
            We believe teamwork, perseverance, and leadership build champions for life.
          </p>
        </div>
        <div className={styles['sports__right-side']}>
          <img src="https://pngimg.com/uploads/football_player/football_player_PNG48.png" alt="Sportsman" />
        </div>
      </section>

      {/* Media Gallery */}
      <header id="sports__media-gallery" className={styles['sports__media-banner']}>
        <div className={styles.sports__container}>
          <p ref={bouncerRef} className={`${styles.sports__bouncer} ${styles['sports__header-logo']}`}>Sports facilities in SVGI</p>
        </div>
      </header>

      {/* Slat 1 */}
      <article className={`${styles.sports__slat} ${styles['sports__slat--reversed']}`}>
        <div className={styles['sports__slat-body']}>
          <dl><dt>Aperture</dt><dd>4.644</dd></dl>
          <dl><dt>Focal Length</dt><dd>24mm</dd></dl>
          <dl><dt>Shutter Speed</dt><dd>0.002s</dd></dl>
          <dl><dt>ISO</dt><dd>250</dd></dl>
        </div>
        <div className={styles['sports__slat-item']}>
          <img src="https://public-619e3.firebaseapp.com/Media-Slat/img-01_med.jpg" alt="Media Image 1" />
        </div>
      </article>

      {/* Slat 2 */}
      <article className={styles.sports__slat}>
        <div className={styles['sports__slat-body']}>
          <dl><dt>Aperture</dt><dd>4.644</dd></dl>
          <dl><dt>Focal Length</dt><dd>24mm</dd></dl>
          <dl><dt>Shutter Speed</dt><dd>0.002s</dd></dl>
          <dl><dt>ISO</dt><dd>250</dd></dl>
        </div>
        <div className={styles['sports__slat-item']}>
          <img src="https://public-619e3.firebaseapp.com/Media-Slat/img-02_med.jpg" alt="Media Image 2" />
        </div>
      </article>

      {/* Slat 3 */}
      <article className={`${styles.sports__slat} ${styles['sports__slat--reversed']}`}>
        <div className={styles['sports__slat-body']}>
          <dl><dt>Aperture</dt><dd>4.644</dd></dl>
          <dl><dt>Focal Length</dt><dd>24mm</dd></dl>
          <dl><dt>Shutter Speed</dt><dd>0.002s</dd></dl>
          <dl><dt>ISO</dt><dd>250</dd></dl>
        </div>
        <div className={styles['sports__slat-item']}>
          <img src="https://public-619e3.firebaseapp.com/Media-Slat/img-03_med.jpg" alt="Media Image 3" />
        </div>
      </article>

      {/* Podium Section */}
      <section id="sports__podium" className={styles['sports__podium-section']}>
        <div className={styles['sports__podium-left-content']}>
          <h1>Top 3 Winners</h1>
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
        <h2>Sports Video Gallery</h2>
        <div className={styles['sports__videos-container']}>
          <div className={styles['sports__video-item']}>
            <iframe src="https://www.youtube.com/embed/_XWIIwMdGyw" title="Club Brugge vs. Barcelona: Extended Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className={styles['sports__video-item']}>
            <iframe src="https://www.youtube.com/embed/VU4phbm2IiU" title="Liverpool vs. Real Madrid: Extended Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className={styles['sports__video-item']}>
            <iframe src="https://www.youtube.com/embed/J6vEuhViaFM" title="Man. City vs. Borussia Dortmund: Extended Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="sports__achievements" className={styles['sports__achievements-section']}>
        <h2>Sports Achievements</h2>

        <div className={styles['sports__content-wrapper']}>
          <div className={styles['sports__slider']}>
            <div className={styles['sports__slide-track']}>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_1.jpg" alt="Achievement 1" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_2.jpg" alt="Achievement 2" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_3.jpg" alt="Achievement 3" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_4.jpg" alt="Achievement 4" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_1.jpg" alt="Achievement 1" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_2.jpg" alt="Achievement 2" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_3.jpg" alt="Achievement 3" /></div>
              <div className={styles.sports__slide}><img src="https://vit.ac.in/sites/default/files/inline-images/Sports_achievements_4.jpg" alt="Achievement 4" /></div>
            </div>
          </div>

          <div className={styles['sports__right-box']}>
            <p>
              Extremely happy to announce that Ms. Ananya Chouhan, Mechanical Engineering student,
              won Bronze Medal in J80 Class World Boat Championship (mixed category) held in Spain.
              In addition to it, the VIT Sports Teams have brought laurels by Winning Medals in the
              SPANDAN 2019, a National level tournament organized by Jawaharlal Institute of
              Postgraduate Medical Education & Research (JIPMER), Puducherry and PEGASUS 2019,
              a National level tournament organized by Christian Medical College & Hospital, Vellore.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section id="sports__athletes" className={styles['sports__cards-section']}>
        <h2>Featured Athletes</h2>
        <div className={styles['sports__cards-container']}>
          <div className={styles.sports__card}>
            <div className={styles['sports__card-inner']}>
              <div className={styles.sports__box}>
                <div className={styles.sports__imgBox}>
                  <img src="https://picsum.photos/seed/picsum/500/600" alt="Athlete 1" />
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

          <div className={styles.sports__card}>
            <div className={styles['sports__card-inner']}>
              <div className={styles.sports__box}>
                <div className={styles.sports__imgBox}>
                  <img src="https://picsum.photos/id/230/500/600" alt="Athlete 2" />
                </div>
                <div className={styles.sports__icon}>
                  <a href="#" className={styles.sports__iconBox}>View</a>
                </div>
              </div>
            </div>
            <div className={styles['sports__card-content']}>
              <h3>Athlete Two</h3>
            </div>
          </div>

          <div className={styles.sports__card}>
            <div className={styles['sports__card-inner']}>
              <div className={styles.sports__box}>
                <div className={styles.sports__imgBox}>
                  <img src="https://picsum.photos/id/260/500/600" alt="Athlete 3" />
                </div>
                <div className={styles.sports__icon}>
                  <a href="#" className={styles.sports__iconBox}>View</a>
                </div>
              </div>
            </div>
            <div className={styles['sports__card-content']}>
              <h3>Athlete Three</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPage;