import React, { useState } from 'react';
import styles from './pg.module.css';
import CommonHero from '@/components/CommonHero';
import BirdButton from '@/components/BirdButton';

const PostgraduateCourses = () => {
  const [buttonActive, setButtonActive] = useState(false);

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
              <div className={`${styles.boxTitle} ${styles.boxTitleTop1}`}>POSTGRADUATE</div>
              <div className={`${styles.boxTitle} ${styles.boxTitleTop2}`}>COURSES</div>
            </div>
            <div className={styles.imgProduct}>
              <img src="/images/svgi4.jpg" alt="Product" />
            </div>
            <div className={styles.boxBottom}>
              <div className={`${styles.boxTitle} ${styles.boxTitleBottom1}`}>01</div>
              <div className={`${styles.boxTitle} ${styles.boxTitleBottom2}`}>TOP</div>
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
            <div className={styles.leftItemImg}> <img src="/images/svgi2.jpg" alt="Detail Left" /></div>
          </div>
          <div className={styles.rightItem}>
            <div className={styles.rightItemImg}> <img src="/images/svgi1.jpg" alt="Detail Right" /></div>
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