import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './News3.module.css';

const API_URL = import.meta.env.VITE_API_URL + "/api";

const LuxuryTriplePane = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/NewsSvgi`);
        if (response.data.success && response.data.data.length > 0) {
          setData(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching SVGI news data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles['ltp-wrapper']}>
      <section className={styles['ltp-triple-pane']}>

        <div className={`${styles['ltp-pane']} ${styles['ltp-pane-left']}`}>
          <img
            src={data?.image1 || "https://i.pinimg.com/564x/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg"}
            alt="SVGI News"
          />
        </div>

        <div className={`${styles['ltp-pane']} ${styles['ltp-pane-mid']}`}>
          <div className={styles['ltp-pane-content']}>
            <div className={styles['ltp-pane-title']}>
              {data?.title || "It isn't luxury if you have to think about it."}
            </div>

            <div className={styles['ltp-pane-text']}>
              {data?.description ? (
                data.description.split('\n').filter(p => p.trim() !== "").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Besides the fact that not every chauffeur service operates legally, it's hard to differentiate which of the similar-looking vehicle offerings found on different car service websites are the best.
                  </p>
                  <p>
                    Limo rental companies often focus on volume — and rather than rely on good service to drive sales, they advertise based on the vehicles they have in their fleet.
                  </p>
                </>
              )}
            </div>

            <button className={styles['ltp-pane-btn']}>
              What Makes Us Different
            </button>
          </div>
        </div>

        <div className={`${styles['ltp-pane']} ${styles['ltp-pane-right']}`}>
          <img
            src={data?.image2 || "https://i.pinimg.com/564x/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg"}
            alt="SVGI News"
          />
        </div>

      </section>
    </div>
  );
};

export default LuxuryTriplePane;