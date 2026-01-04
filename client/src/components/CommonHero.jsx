import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CommonHero.module.css';
import Arrow from './Arrow'; // Assuming Arrow is in the same directory or adjust path

/**
 * CommonHero Component
 * 
 * Fetches hero data from a given API endpoint or uses provided props.
 * 
 * Props:
 * - apiEndpoint: string (optional) - Endpoint to fetch hero data (e.g., "/api/academicshero")
 * - defaultTitle: string (optional) - Fallback title
 * - defaultImage: string (optional) - Fallback image URL
 * - sectionsSelector: string (optional) - Selector for the arrow scroll target
 */
const CommonHero = ({
    apiEndpoint,
    defaultTitle = "Welcome",
    defaultImage = "/images/default-hero.jpg",
    sectionsSelector = "section",
    showArrow = false
}) => {
    const [heroData, setHeroData] = useState(null);
    const [loading, setLoading] = useState(!!apiEndpoint);

    useEffect(() => {
        if (!apiEndpoint) return;

        const fetchHero = async () => {
            try {
                const fullVideoUrl = apiEndpoint.startsWith("http")
                    ? apiEndpoint
                    : `${import.meta.env.VITE_API_URL}${apiEndpoint}`;

                const res = await axios.get(fullVideoUrl);
                const data = Array.isArray(res.data.data) ? res.data.data[0] : res.data.data;
                setHeroData(data);
            } catch (err) {
                console.error(`Error fetching hero from ${apiEndpoint}:`, err);
            } finally {
                setLoading(false);
            }
        };

        fetchHero();
    }, [apiEndpoint]);

    const title = heroData?.title || defaultTitle;
    const image = heroData?.image || defaultImage;

    return (
        <div className={styles.hero}>
            <img src={image} alt="Hero Background" className={styles.heroImage} />
            <div className={styles.heroOverlay}></div>

            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{title}</h1>
            </div>

            {showArrow && (
                <div className={styles.arrowContainer}>
                    <Arrow sectionsSelector={sectionsSelector} />
                </div>
            )}
        </div>
    );
};

export default CommonHero;
