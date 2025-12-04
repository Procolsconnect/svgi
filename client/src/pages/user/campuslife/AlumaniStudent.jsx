import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AlumniStudent.module.css';

const apiurl = import.meta.env.VITE_API_URL;

const AlumniStudentsAnimation = () => {
  const [resetKey, setResetKey] = useState(0);
  const [bgImg, setBgImg] = useState('');

  const handleReplay = () => {
    setResetKey(prev => prev + 1);
  };

  useEffect(() => {
    axios.get(`${apiurl}/api/campus/alumanistudent`)
      .then(res => {
        const images = res.data.data;
        setBgImg(images[0]?.image || ''); // Use first image or fallback
      })
      .catch(err => console.error('Failed to load alumni image:', err));
  }, []);

  return (
    <div className={styles.root}>
      <div
        className={styles.app}
        onClick={handleReplay}
        key={resetKey} // Forces re-render + animation restart
      >
        {/* Title Section */}
        <div className={styles.title}>
          <div className={styles.titleInner}>
            <div className={styles.cafe}>
              <div className={styles.cafeInner}>Alumni</div>
            </div>
            <div className={styles.mozart}>
              <div className={styles.mozartInner}>Students</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.image}>
          <img
            src={bgImg || "https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"}
            alt="Alumni Students"
          />
        </div>
      </div>
    </div>
  );
};

export default AlumniStudentsAnimation;