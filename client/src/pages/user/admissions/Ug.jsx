import BirdButton from '@/components/BirdButton';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ug.module.css';
import CommonHero from '@/components/CommonHero';

const ProductGallery = () => {
  const [isActive, setIsActive] = useState(false);
  const [courseData, setCourseData] = useState({
    image1: '', image2: '', image3: '', top_text: 'UNDER GRADUATE', bottom_text: 'TOP 01'
  });
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/ugcourse`);
        if (res.data.success && res.data.data.length > 0) {
          const data = res.data.data[0];
          setCourseData({
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            top_text: data.top_text || 'UNDER GRADUATE',
            bottom_text: data.bottom_text || 'TOP 01'
          });
        }
      } catch (err) {
        console.error("Error fetching UG data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  // Helper to split text for styling
  const splitText = (text, defaultFirst, defaultSecond) => {
    const parts = (text || '').trim().split(/\s+/);
    const first = parts[0] || defaultFirst;
    const second = parts.slice(1).join(" ") || defaultSecond;
    return { first, second };
  };

  const topText = splitText(courseData.top_text, 'UNDER', 'GRADUATE');
  const bottomText = splitText(courseData.bottom_text, 'TOP', '01');

  return (
    <div className={styles.pageWrapper}>
      <CommonHero
        apiEndpoint="/api/ughero"
        defaultTitle="Admissions"
      />

      <div className={styles.wrap}>
        {/* HEADER SECTION */}
        <div className={styles.header}>
          <span style={{ fontSize: '24px', cursor: 'pointer' }}>←</span>
          <div className={styles.headerBox}>UG COURSES</div>
        </div>

        {/* TOP SECTION */}
        <div className={styles.detailTop}>
          <div className={styles.topImg}>
            {courseData.image1 && <img src={courseData.image1} alt="Admission view" />}
          </div>
          <div className={styles.divArea1}></div>

          {/* Right Top Title */}
          <div className={styles.rightTop}>
            <div className={styles.title2}>{topText.first} </div>
            <div className={`${styles.title2} ${styles.trans90} ${styles.posRight}`}>{topText.second}</div>
          </div>

          {/* Left Bottom Title */}
          <div className={styles.leftBottom}>
            <div className={`${styles.title2} ${styles.trans180} ${styles.fl}`}>{bottomText.first}</div>
            <div className={`${styles.title2} ${styles.trans270} ${styles.posLeft}`}>{bottomText.second}</div>
          </div>

          <div className={styles.div1}></div>
        </div>

        {/* CONTENT SECTION */}
        <div className={styles.detailContent}>
          <div className={styles.content}>
            <h2>UG COURSES</h2>
            <h2 className={`${styles.italic} ${styles.trans90}`}>UG DETAILS</h2>
            <h2>Lets craft your career journey from here</h2>
            <p>
              The value of an undergraduate (UG) degree is that it creates a solid base for a student's future in school and work. It helps students learn important knowledge, build key skills, and find out what they are good at through hands-on experiences and specialization.
            </p>
            <p>
              A UG program leads to more education, better job opportunities, and career advancement while boosting confidence, communication, and personal growth. It is the first big step that readies students to face the real world with understanding and ability.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className={styles.detailBottom}>
          <div className={styles.bottomImg}>
            {courseData.image2 && <img src={courseData.image2} alt="Campus view" />}
          </div>
          <div className={styles.centerImg}>
            {courseData.image3 && <img src={courseData.image3} alt="Student view" />}
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
        description="THE complete UG course are inside the button So"
      />
    </div>
  );
};

export default ProductGallery;
