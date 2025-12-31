import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Newshero.module.css';

const API_URL = import.meta.env.VITE_API_URL + "/api";

const SVGINews = () => {
  const [heroData, setHeroData] = useState(null);
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, reportRes] = await Promise.all([
          axios.get(`${API_URL}/newshero`),
          axios.get(`${API_URL}/newsreport`)
        ]);

        if (heroRes.data.success && heroRes.data.data.length > 0) {
          setHeroData(heroRes.data.data[0]);
        }
        if (reportRes.data.success && reportRes.data.data.length > 0) {
          setReportData(reportRes.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching news hero data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.newshero}>
      {/* HERO */}
      <section className={styles['newshero-hero']}>
        <div className={styles['newshero-hero-content']}>
          <h1 className={styles['newshero-title']}>{heroData?.title || "SVGI News"}</h1>
          <p className={styles['newshero-description']}>
            {heroData?.description || "Breaking stories. Unfiltered truth. Delivered with clarity, courage, and style."}
          </p>
        </div>

        <div className={styles['newshero-hero-image']}>
          <img
            src={heroData?.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"}
            alt={heroData?.title || "Journalism in action"}
          />
        </div>
      </section>

      {/* VIDEO LEFT + TEXT RIGHT */}
      <section className={styles['newshero-feature']}>
        <div className={styles['newshero-video-wrapper']}>
          <iframe
            className={styles['newshero-video']}
            src={reportData?.video_url ? reportData.video_url.replace("watch?v=", "embed/") : "https://www.youtube.com/embed/MeW8hfmJaTg?controls=0"}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className={styles['newshero-text-content']}>
          <h2 className={styles['newshero-feature-title']}>
            {reportData?.title ? (
              <>
                {reportData.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className={styles['newshero-highlight']}>{reportData.title.split(' ').slice(-1)}</span>
              </>
            ) : (
              <>Featured <span className={styles['newshero-highlight']}>Report</span></>
            )}
          </h2>
          <p className={styles['newshero-feature-text']}>
            {reportData?.description || "Exclusive on-the-ground coverage from conflict zones, hidden truths, and stories the mainstream won't touch. This is journalism without compromise."}
          </p>
          <a
            href={reportData?.video_url || "https://www.youtube.com"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['newshero-link']}
          >
            Watch Full Report
          </a>
        </div>
      </section>
    </div>
  );
};

export default SVGINews;