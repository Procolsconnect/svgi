import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pg.module.css';
import CommonHero from '../../../components/CommonHero';

const PostgraduateCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [courseData, setCourseData] = useState({
    image1: '', image2: '', image3: '', top_text: 'LINEN BLAZER', bottom_text: 'TOP 01'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes] = await Promise.all([
          axios.get(`${API_URL}/api/pgcourse`)
        ]);

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

  const topTextFull = (courseData.top_text || '').trim();
  const topTextParts = topTextFull.split(/\s+/);
  const topText1 = topTextParts[0] || 'LINEN';
  const topText2 = topTextParts.slice(1).join(" ") || 'BLAZER';

  const bottomTextFull = (courseData.bottom_text || '').trim();
  const bottomTextParts = bottomTextFull.split(/\s+/);
  const bottomText1 = bottomTextParts[0] || 'TOP';
  const bottomText2 = bottomTextParts.slice(1).join(" ") || '01';

  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <CommonHero
        apiEndpoint="/api/pghero"
        defaultTitle="Postgraduate Courses"
      />

      {/* MAIN GRID LAYOUT */}
      <div className={styles.mainContainer}>
        {/* Header */}
        <div className={styles.headerSection}>
          <i className="fa fa-arrow-left fa-2x"></i>
          <div className={styles.headerLogo}>
            <h5 className={styles.headerText}>PG COURSE</h5>
          </div>
        </div>

        {/* Images & Decorative Blocks */}
        <div className={styles.topImage} style={{ backgroundImage: `url(${courseData.image1})` }} />
        <div className={styles.divArea1}></div>

        {/* Right Top Text */}
        <div className={styles.rightTopSection}>
          <div className={styles.title2}>{topText1}</div>
          <div className={`${styles.title2} ${styles.trans90} ${styles.posRight}`}>{topText2}</div>
        </div>

        {/* Left Bottom Text */}
        <div className={styles.leftBottomSection}>
          <div className={`${styles.title2} ${styles.trans180} ${styles.fLeft}`}>{bottomText1}</div>
          <div className={`${styles.title2} ${styles.trans270} ${styles.posLeft}`}>{bottomText2}</div>
        </div>

        <div className={styles.div1}></div>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.title2}>POST GRADUATE</div>
          <h2 className={`${styles.italic} ${styles.trans90}`}>PG DETAILS</h2>
          <h2>Let  start to empower your skill From here  </h2>
          <p>
            A PG (Postgraduate) degree is valuable because it helps people gain more knowledge, improve their skills, and boost their academic and job profiles.
            It provides advanced training, chances for research, and practical skills that get graduates ready for leadership roles and better careers.
          </p>
          <p>
            A PG program improves thinking skills, decision-making, and creativity, leading to better job opportunities, teaching positions, and business growth.
            It is an important step that helps individuals become experts in their field.
          </p>
        </div>

        <div className={styles.bottomImg} style={{ backgroundImage: `url(${courseData.image3})` }} />
        <div className={styles.centerImg} style={{ backgroundImage: `url(${courseData.image2})` }} />
        <div className={styles.divArea2}></div>
        <div className={styles.div2}></div>
        <div className={styles.pattern1}></div>
      </div>

      {/* BIRD BUTTON SECTION */}
      <div className={styles.wrapperNo4}>
        <p>THE complete PG course are inside the button So</p>
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
