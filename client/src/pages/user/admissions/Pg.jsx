import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pg.module.css';
import CommonHero from '@/components/CommonHero';
import BirdButton from '@/components/BirdButton';

const PostgraduateCourses = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [courseData, setCourseData] = useState({
    image1: '', image2: '', image3: '',
    top_text: 'POSTGRADUATE COURSES',
    bottom_text: 'PG 01'
  });
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/pgcourse`);
        if (res.data.success && res.data.data.length > 0) {
          const data = res.data.data[0];
          setCourseData({
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            top_text: data.top_text || 'POSTGRADUATE COURSES',
            bottom_text: data.bottom_text || 'TOP 01'
          });
        }
      } catch (err) {
        console.error("Error fetching PG data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  // Helper to split text for styling
  const splitText = (text, defaultFirst, defaultSecond) => {
    const parts = (text || '').trim().split(/\s+/);
    const first = parts[0] || defaultFirst;
    const second = parts.slice(1).join(" ") || defaultSecond;
    return { first, second };
  };

  const topText = splitText(courseData.top_text, 'POSTGRADUATE', 'COURSES');
  const bottomText = splitText(courseData.bottom_text, 'TOP', '01');

  return (
    <div className={styles.pageContainer}>
      <CommonHero
        defaultTitle="Postgraduate Courses"
        apiEndpoint="/api/pghero"
      />

      <div className={styles.wrap}>
        {/* HEADER */}
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>
            <span className={styles.headerTitleSpan}>
              <a href="#/" target="_blank" rel="noopener noreferrer">
                PG
              </a>
            </span>
          </h3>
        </div>

        <div className={styles.introSection}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* TOP SECTION */}
        <div className={styles.detailTop}>
          <div className={styles.productImg}>
            <div className={styles.boxTop}>
              <div className={`${styles.boxTitle} ${styles.boxTitleTop1}`}>{topText.first}</div>
              <div className={`${styles.boxTitle} ${styles.boxTitleTop2}`}>{topText.second}</div>
            </div>
            <div className={styles.imgProduct}>
              {courseData.image1 && <img src={courseData.image1} alt="Product" />}
            </div>
            <div className={styles.boxBottom}>
              <div className={`${styles.boxTitle} ${styles.boxTitleBottom1}`}>{bottomText.second}</div> {/* 01 usually bottom right? check css logic. default was 01 then TOP. */}
              {/* Wait, mocking original: 
                  <div className={`${styles.boxTitle} ${styles.boxTitleBottom1}`}>01</div>
                  <div className={`${styles.boxTitle} ${styles.boxTitleBottom2}`}>TOP</div>
                  Split logic: Bottom text default "TOP 01". First=TOP, Second=01.
                  So if original was 01 then TOP...
                  Maybe bottom_text in DB is "01 TOP"? 
                  Let's check Research.jsx logic: 'TOP 01' -> bottomText1='TOP', bottomText2='01'.
                  HTML: bottomText1 (trans180) -> TOP. bottomText2 (trans270) -> 01.
                  Here in PG: boxTitleBottom1 (01) and boxTitleBottom2 (TOP).
                  If DB sends "TOP 01", then First=TOP, Second=01.
                  So BoxTitleBottom1 should get Second (01)?
                  And BoxTitleBottom2 should get First (TOP)?
                  Yes. */}
              <div className={`${styles.boxTitle} ${styles.boxTitleBottom2}`}>{bottomText.first}</div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className={styles.detailContent}>
          <h1 className={styles.detailContentTitle}>PG COURSES</h1>
          <h3 className={styles.detailContentSubtitle}>PG DETAILS</h3>
          <div className={styles.subtitle}>Let  start to empower your skill From here</div>
          <p className={styles.detailContentParagraph}>
            A PG (Postgraduate) degree is valuable because it helps people gain more knowledge, improve their skills, and boost their academic and job profiles. It provides advanced training, chances for research, and practical skills that get graduates ready for leadership roles and better careers.
          </p>
          <p className={styles.detailContentParagraph}>
            A PG program improves thinking skills, decision-making, and creativity, leading to better job opportunities, teaching positions, and business growth. It is an important step that helps individuals become experts in their field.
          </p>
        </div>

        {/* BOTTOM SECTION */}
        <div className={styles.detailBottom}>
          <div className={styles.leftItem}>
            <div className={styles.leftItemImg}>
              {courseData.image2 && <img src={courseData.image2} alt="Detail Left" />}
            </div>
          </div>
          <div className={styles.rightItem}>
            <div className={styles.rightItemImg}>
              {courseData.image3 && <img src={courseData.image3} alt="Detail Right" />}
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <BirdButton
        isActive={buttonActive}
        onClick={() => setButtonActive(!buttonActive)}
        description="THE complete PG course are inside the button So"
      />
    </div>
  );
};

export default PostgraduateCourses;