import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ug.module.css';

const UndergraduateCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [heroData, setHeroData] = useState({ title: 'Undergraduate courses', image: 'hero img.jpg' });
  const [courseData, setCourseData] = useState({
    image1: '', image2: '', image3: '', top_text: 'LINEN BLAZER', bottom_text: 'TOP 01'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, courseRes] = await Promise.all([
          axios.get(`${API_URL}/api/ughero`),
          axios.get(`${API_URL}/api/ugcourse`)
        ]);

        if (heroRes.data.success && heroRes.data.data.length > 0) {
          const { title, image } = heroRes.data.data[0];
          setHeroData({ title, image });
        }

        if (courseRes.data.success && courseRes.data.data.length > 0) {
          const data = courseRes.data.data[0];
          setCourseData({
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            top_text: data.top_text || 'LINEN BLAZER',
            bottom_text: data.bottom_text || 'TOP 01'
          });
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data", err);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  const topTextFull = (courseData.top_text).trim();
  const topTextParts = topTextFull.split(/\s+/);
  const topText1 = topTextParts[0] || 'LINEN';
  const topText2 = topTextParts.slice(1).join(" ") || 'BLAZER';

  const bottomTextFull = (courseData.bottom_text).trim();
  const bottomTextParts = bottomTextFull.split(/\s+/);
  const bottomText1 = bottomTextParts[0] || 'TOP';
  const bottomText2 = bottomTextParts.slice(1).join(" ") || '01';

  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <div className={styles.hero} id="hero">
        {loading ? (
          <div style={{ background: '#ccc', height: '100%', width: '100%', position: 'absolute' }}></div>
        ) : (
          <img src={heroData.image} alt="Hero Background" />
        )}
        <h1>{heroData.title}</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <i className="fa fa-arrow-left fa-2x"></i>
          <div><h5>CCCLOTHES</h5></div>
        </div>

        <div className={`${styles['top-img']}`} style={{ backgroundImage: `url(${courseData.image1})` }}></div>
        <div className={styles['divArea-1']}></div>

        <div className={`${styles.rightTop} ${styles.end}`}>
          <div className={styles.title2}>{topText1}</div>
          <div className={`${styles.title2} ${styles['trans-90']} ${styles['pos-right']}`}>{topText2}</div>
        </div>

        <div className={styles.leftBottom}>
          <div className={`${styles.title2} ${styles['trans-180']} ${styles['f-l']}`}>{bottomText1}</div>
          <div className={`${styles.title2} ${styles['trans-270']} ${styles['pos-left']}`}>{bottomText2}</div>
        </div>

        <div className={styles.div1}></div>

        <div className={styles.content}>
          <div className={styles.title2}>LINEN BLAZER</div>
          <h2 className={`${styles.italic} ${styles['trans-90']}`}>PRODUCT DETAILS</h2>
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

        <div className={`${styles['bottom-img']}`} style={{ backgroundImage: `url(${courseData.image3})` }}></div>
        <div className={`${styles['center-img']}`} style={{ backgroundImage: `url(${courseData.image2})` }}></div>
        <div className={styles['divArea-2']}></div>
        <div className={styles.div2}></div>
        <div className={styles.pattern1}></div>
      </div>



      <div className={styles['wrapper-no4']}>
        <p>THE complete UG cource are in side the button So </p><br />
        <h1> Click the Button </h1>
        <button
          className={`${styles['button-bird']} ${isButtonActive ? styles.active : ''}`}
          onClick={handleButtonClick}
        >
          <p className={styles['button-bird__text']}>
            {isButtonActive ? 'DONE' : 'OPEN'}
          </p>
          <svg version="1.1" className={styles.feather} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 75 38" style={{ enableBackground: "new 0 0 75 38" }} xmlSpace="preserve">
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
            <span key={i} className={`${styles.bird} ${styles[`bird--${i + 1}`]}`}></span>
          ))}
        </button>
      </div>
    </div>
  );
};

export default UndergraduateCoursesPage;
