import React, { useState, useEffect } from 'react';
import styles from './RankingSection.module.css';

const RankingSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nirfData = [
        { label: 'University', rank: 14 },
        { label: 'Engineering', rank: 16 },
        { label: 'Research', rank: 14 },
        { label: 'Overall', rank: 21 },
    ];

    const sliderImages = [
        '/images/arts.jpeg', // Placeholder or actual slider image if available
        '/images/artss.jpg',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side: NIRF Rankings */}
                <div className={styles.rankingDetails}>
                    <h2 className={styles.title}>RANKINGS 2025</h2>
                    <div className={styles.nirfLogoContainer}>
                        <img
                            src="/logos/Logo_new.png"
                            alt="NIRF Logo"
                            className={styles.nirfLogo}
                        />
                    </div>
                    <div className={styles.statsGrid}>
                        {nirfData.map((item, index) => (
                            <div key={index} className={styles.statItem}>
                                <span className={styles.rankNumber}>{item.rank}</span>
                                <span className={styles.rankLabel}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center: Unique Divider */}
                <div className={styles.dividerContainer}>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.centerElement}>
                        <div className={styles.diamond}></div>
                        <div className={styles.pulse}></div>
                    </div>
                    <div className={styles.verticalLine}></div>
                </div>

                {/* Right Side: Image Slider */}
                <div className={styles.imageSlider}>
                    <div className={styles.sliderWrapper}>
                        {sliderImages.map((img, index) => (
                            <div
                                key={index}
                                className={`${styles.slide} ${index === activeSlide ? styles.activeSlide : ''}`}
                            >
                                <img src={img} alt={`Ranking Certificate ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.sliderDots}>
                        {sliderImages.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
                                onClick={() => setActiveSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RankingSection;
