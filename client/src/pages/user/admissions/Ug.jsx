import BirdButton from '@/components/BirdButton';
import React, { useState } from 'react';
import styles from './ug.module.css';

const ProductGallery = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1554895917-f74c630b5b3a?w=1200&h=350&fit=crop"
          alt="Hero Background"
        />
        <h1>Undergraduate Courses</h1>
      </div>

      <div className={styles.wrap}>
        {/* HEADER SECTION */}
        <div className={styles.header}>
          <span style={{ fontSize: '24px', cursor: 'pointer' }}>←</span>
          <div className={styles.headerBox}>UG COURSES</div>
        </div>

        {/* TOP SECTION */}
        <div className={styles.detailTop}>
          <div className={styles.topImg}>
            <img src="https://images.unsplash.com/photo-1513827379601-9dba5099a3f9" alt="Admission view" />
          </div>
          <div className={styles.divArea1}></div>

          {/* Right Top Title */}
          <div className={styles.rightTop}>
            <div className={styles.title2}>UNDER </div>
            <div className={`${styles.title2} ${styles.trans90} ${styles.posRight}`}>GRADUATE</div>
          </div>

          {/* Left Bottom Title */}
          <div className={styles.leftBottom}>
            <div className={`${styles.title2} ${styles.trans180} ${styles.fl}`}>TOP</div>
            <div className={`${styles.title2} ${styles.trans270} ${styles.posLeft}`}>01</div>
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
            <img src="https://images.unsplash.com/photo-1513827379601-9dba5099a3f9" alt="Campus view" />
          </div>
          <div className={styles.centerImg}>
            <img src="https://images.unsplash.com/photo-1513827379601-9dba5099a3f9" alt="Student view" />
          </div>
          <div className={styles.divArea2}></div>
          <div className={styles.div2}></div>

          {/* Pattern */}
          <div className={styles.pattern1}></div>
        </div>
      </div>

      {/* BUTTON SECTION */}
      <BirdButton isActive={isActive} onClick={handleButtonClick} />
    </div>
  );
};

export default ProductGallery;
