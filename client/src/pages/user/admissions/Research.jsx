import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './research.module.css';

const ResearchCoursesPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [heroData, setHeroData] = useState({ title: 'Research Courses', image: 'hero img.jpg' });
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
          axios.get(`${API_URL}/api/researchhero`),
          axios.get(`${API_URL}/api/research`)
        ]);

        if (heroRes.data.success && heroRes.data.data.length > 0) {
          const { title, image } = heroRes.data.data[0];
          setHeroData({ title: title || 'Research Courses', image });
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

  const topTextFull = (courseData.top_text || '').trim();
  const topTextParts = topTextFull.split(/\s+/);
  const topText1 = topTextParts[0] || 'RESEARCH';
  const topText2 = topTextParts.slice(1).join(" ") || 'COURSES';

  const bottomTextFull = (courseData.bottom_text || '').trim();
  const bottomTextParts = bottomTextFull.split(/\s+/);
  const bottomText1 = bottomTextParts[0] || 'TOP';
  const bottomText2 = bottomTextParts.slice(1).join(" ") || '01';

  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <div className={styles.heroSection}>
        {loading ? (
          <div style={{ background: '#ccc', height: '100%', width: '100%', position: 'absolute' }}></div>
        ) : (
          <img
            src={heroData.image}
            alt="Hero Background"
            className={styles.heroImage}
          />
        )}
        <h1 className={styles.heroTitle}>{heroData.title}</h1>
      </div>

      {/* MAIN GRID LAYOUT */}
      <div className={styles.mainContainer}>
        {/* Header */}
        <div className={styles.headerSection}>
          <i className="fa fa-arrow-left fa-2x"></i>
          <div className={styles.headerLogo}>
            <h5 className={styles.headerText}>RESEARCH</h5>
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
          <div className={styles.title2}>RESEARCH COURSE</div>
          <h2 className={`${styles.italic} ${styles.trans90}`}>RESEARCH DETAILS</h2>
          <h2>To accomplish your journey of study </h2>
          <p>
         Research papers are powerful because they help create new knowledge, solve real problems, and provide important insights in any area of study. 
         Writing a research paper helps students improve their critical thinking, analysis skills, and understanding of a topic. 
          </p>
          <p>
          It also builds trust, encourages new ideas, and leads to chances for further studies, publications, and recognition in academics.
           Research papers boost both a person's expertise and the growth of the academic community as a whole. 
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
        <p>THE complete Research course are inside the button So</p>
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

export default ResearchCoursesPage;
