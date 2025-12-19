import React, { useState } from 'react';
import styles from './pg.module.css';

const PostgraduateCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div className={styles.root}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" className={styles.heroImage} />
        <div className={styles.wrapper}>
          <h1 className={styles.heroTitle}>Postgraduate Courses</h1>
        </div>
      </div>

      <div className={styles.wrap}>
        <div className={styles.header}>
          <h3>
            <span>
              <a href="https://codepen.io/gatesakagi/full/WyKrRB/" target="_blank" rel="noopener noreferrer">
                CCCLOTHES
              </a>
            </span>
          </h3>
        </div>

        <div className={styles.detailtop}>
          <div className={styles.productimg}>
            <img
              src="https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&auto=format&fit=crop&w=934&q=80"
              alt=""
              className={styles.coverImg}
              
            />
            <div className={styles.boxtop}>
              <div className={`${styles.boxtitle} ${styles.boxtitletop1}`}>VINTAGE</div>
              <div className={`${styles.boxtitle} ${styles.boxtitletop2}`}>DENIM</div>
            </div>
            <div className={styles.boxbottom}>
              <div className={`${styles.boxtitle} ${styles.boxtitlebottom1}`}>06</div>
              <div className={`${styles.boxtitle} ${styles.boxtitlebottom2}`}>TOP</div>
            </div>
          </div>
        </div>

        <div className={styles.detailcontent}>
          <h1>VINTAGE DENIM</h1>
          <h3>PRODUCT DETAILS</h3>
          <div className={styles.subtitle}>Kogi Cosby sweater ethical squid irony</div>
          <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew...</p>
          <p>We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back...</p>
        </div>

        <div className={styles.detailbottom}>
          <div className={styles.leftitem}>
            <div className={styles.itemimg}>
              <img
                src="https://images.unsplash.com/photo-1519406686401-e9ef2420c15b?ixlib=rb-0.3.5&auto=format&fit=crop&w=1950&q=80"
                alt=""
                className={styles.coverImg}
              />
            </div>
          </div>
          <div className={styles.rightitem}>
            <div className={styles.itemimg}>
              <img
                src="https://images.unsplash.com/photo-1519406728390-b536d7be138f?ixlib=rb-0.3.5&auto=format&fit=crop&w=934&q=80"
                alt=""
                className={styles.coverImg}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapperNo4}>
        <p>THE complete PG cource are in side the button So</p>
        <h1>Click the Button</h1>
        <button
          className={`${styles.buttonBird} ${isButtonActive ? styles.active : ''}`}
          onClick={handleButtonClick}
        >
          <p className={styles.buttonBirdText}>
            {isButtonActive ? 'DONE' : 'OPEN'}
          </p>
          <svg version="1.1" className={styles.feather} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 75 38" style={{ enableBackground: 'new 0 0 75 38' }} xmlSpace="preserve">
            <g>
              <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                  c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                  c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                  c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                  c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"/>
            </g>
          </svg>
          <span className={styles.bird}></span>
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className={`${styles.birdItem} ${styles[`bird${i + 1}`]}`}></span>
          ))}
        </button>
      </div>
    </div>
  );
};

export default PostgraduateCoursesPage;