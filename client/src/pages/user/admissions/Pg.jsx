import React, { useState } from 'react';
import styles from './pg.module.css';
import CommonHero from '@/components/CommonHero';

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
      <div className={styles.wrapperNo4}>
        <p className={styles.wrapperNo4Paragraph}>THE complete UP course are in side the button So</p>
        <h1 className={styles.wrapperNo4Title}>Click the Button</h1>
        <button
          className={`${styles.buttonBird} ${buttonActive ? styles.active : ''}`}
          onClick={() => setButtonActive(!buttonActive)}
        >
          <p className={styles.buttonBirdText}>{buttonActive ? 'DONE' : 'OPEN'}</p>
          <svg
            version="1.1"
            className={styles.feather}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 75 38"
            style={{ enableBackground: 'new 0 0 75 38' }}
          >
            <g>
              <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                    c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                    c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                    c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                    c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z" />
            </g>
          </svg>
          <span className={styles.bird}></span>
          <span className={styles.bird1}></span>
          <span className={styles.bird2}></span>
          <span className={styles.bird3}></span>
          <span className={styles.bird4}></span>
          <span className={styles.bird5}></span>
          <span className={styles.bird6}></span>
          <span className={styles.bird7}></span>
          <span className={styles.bird8}></span>
          <span className={styles.bird9}></span>
          <span className={styles.bird10}></span>
          <span className={styles.bird11}></span>
          <span className={styles.bird12}></span>
          <span className={styles.bird13}></span>
          <span className={styles.bird14}></span>
          <span className={styles.bird15}></span>
          <span className={styles.bird16}></span>
          <span className={styles.bird17}></span>
          <span className={styles.bird18}></span>
          <span className={styles.bird19}></span>
          <span className={styles.bird20}></span>
          <span className={styles.bird21}></span>
          <span className={styles.bird22}></span>
          <span className={styles.bird23}></span>
          <span className={styles.bird24}></span>
          <span className={styles.bird25}></span>
          <span className={styles.bird26}></span>
          <span className={styles.bird27}></span>
          <span className={styles.bird28}></span>
          <span className={styles.bird29}></span>
          <span className={styles.bird30}></span>
        </button>
      </div>
    </div>
  );
};

export default PostgraduateCourses;