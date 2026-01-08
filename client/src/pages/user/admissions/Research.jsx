import BirdButton from '@/components/BirdButton';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './research.module.css';
import CommonHero from '@/components/CommonHero';

const ResearchCoursesPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [courseData, setCourseData] = useState({
    image1: '', image2: '', image3: '', top_text: 'RESEARCH', bottom_text: 'TOP 01'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes] = await Promise.all([
          axios.get(`${API_URL}/api/research`)
        ]);

        if (courseRes.data.success && courseRes.data.data.length > 0) {
          const data = courseRes.data.data[0];
          setCourseData({
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            top_text: data.top_text || 'RESEARCH',
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
    setIsActive(!isActive);
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
      <CommonHero
        defaultTitle="Research Courses"
        apiEndpoint="/api/researchhero"
      />

      <div className={styles.wrap}>
        {/* HEADER SECTION */}
        <div className={styles.header}>
          <span style={{ fontSize: '24px', cursor: 'pointer' }}>←</span>
          <div className={styles.headerBox}>RESEARCH</div>
        </div>

        {/* TOP SECTION */}
        <div className={styles.detailTop}>
          <div className={styles.topImg}>
            {courseData.image1 && <img src={courseData.image1} alt="Research view 1" />}
          </div>
          <div className={styles.divArea1}></div>

          {/* Right Top Title */}
          <div className={styles.rightTop}>
            <div className={styles.title2}>{topText1}</div>
            <div className={`${styles.title2} ${styles.trans90} ${styles.posRight}`}>{topText2}</div>
          </div>

          {/* Left Bottom Title */}
          <div className={styles.leftBottom}>
            <div className={`${styles.title2} ${styles.trans180} ${styles.fl}`}>{bottomText1}</div>
            <div className={`${styles.title2} ${styles.trans270} ${styles.posLeft}`}>{bottomText2}</div>
          </div>

          <div className={styles.div1}></div>
        </div>

        {/* CONTENT SECTION */}
        <div className={styles.detailContent}>
          <div className={styles.content}>
            <h2>RESEARCH COURSE</h2>
            <h2 className={`${styles.italic} ${styles.trans90}`}>RESEARCH DETAILS</h2>
            <h2>To accomplish your journey of study</h2>
            <p>
              Research papers are powerful because they help create new knowledge, solve real problems, and provide important insights in any area of study.
              Writing a research paper helps students improve their critical thinking, analysis skills, and understanding of a topic.
            </p>
            <p>
              It also builds trust, encourages new ideas, and leads to chances for further studies, publications, and recognition in academics.
              Research papers boost both a person's expertise and the growth of the academic community as a whole.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className={styles.detailBottom}>
          <div className={styles.bottomImg}>
            {courseData.image3 && <img src={courseData.image3} alt="Research view 3" />}
          </div>
          <div className={styles.centerImg}>
            {courseData.image2 && <img src={courseData.image2} alt="Research view 2" />}
          </div>
          <div className={styles.divArea2}></div>
          <div className={styles.div2}></div>

          {/* Pattern */}
          <div className={styles.pattern1}></div>
        </div>
      </div>

      {/* BUTTON SECTION */}
      <BirdButton
        isActive={isActive}
        onClick={handleButtonClick}
        description="THE complete Research courses are inside the button So"
      />
    </div>
  );
};

export default ResearchCoursesPage;
