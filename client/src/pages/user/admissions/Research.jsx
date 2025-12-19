import React, { useState } from 'react';
import styles from './research.module.css';

const UndergraduateCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <div className={styles.heroSection}>
        <img
          src="hero img.jpg"
          alt="Hero Background"
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>Research Courses</h1>
      </div>

      {/* MAIN GRID LAYOUT */}
      <div className={styles.mainContainer}>
        {/* Header */}
        <div className={styles.headerSection}>
          <i className="fa fa-arrow-left fa-2x"></i>
          <div className={styles.headerLogo}>
            <h5 className={styles.headerText}>CCCLOTHES</h5>
          </div>
        </div>

        {/* Images & Decorative Blocks */}
        <div className={styles.topImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513827379601-9dba5099a3f9)' }} />
        <div className={styles.divArea1}></div>

        {/* Right Top Text */}
        <div className={styles.rightTopSection}>
          <div className={styles.title2}>LINEN</div>
          <div className={`${styles.title2} ${styles.trans90} ${styles.posRight}`}>BLAZER</div>
        </div>

        {/* Left Bottom Text */}
        <div className={styles.leftBottomSection}>
          <div className={`${styles.title2} ${styles.trans180} ${styles.fLeft}`}>TOP</div>
          <div className={`${styles.title2} ${styles.trans270} ${styles.posLeft}`}>01</div>
        </div>

        <div className={styles.div1}></div>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.title2}>LINEN BLAZER</div>
          <h2 className={`${styles.italic} ${styles.trans90}`}>PRODUCT DETAILS</h2>
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

        <div className={styles.bottomImg} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513827379601-9dba5099a3f9)' }} />
        <div className={styles.centerImg} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513827379601-9dba5099a3f9)' }} />
        <div className={styles.divArea2}></div>
        <div className={styles.div2}></div>
        <div className={styles.pattern1}></div>
      </div>

      {/* BIRD BUTTON SECTION */}
      <div className={styles.wrapperNo4}>
        <p>THE complete UG course are inside the button So</p>
        <h1>Click the Button</h1>

        <button
          className={`${styles.buttonBird} ${isButtonActive ? styles.active : ''}`}
          onClick={handleButtonClick}
        >
          <p className={styles.buttonBirdText}>
            {isButtonActive ? 'DONE' : 'OPEN'}
          </p>

          <svg
            version="1.1"
            className={styles.feather}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 75 38"
            style={{ enableBackground: 'new 0 0 75 38' }}
            xmlSpace="preserve"
          >
            <g>
              <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                  c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                  c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                  c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                  c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z" />
            </g>
          </svg>

          {/* All 30 flying birds */}
          {/* All 30 flying birds */}
          <span className={styles.bird}></span>
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className={`${styles.birdItem} ${styles[`bird${i + 1}`]}`}></span>
          ))}
        </button>
      </div>
    </div>
  );
};

export default UndergraduateCoursesPage;