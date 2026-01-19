import React, { useState, useEffect, useRef } from 'react';
import styles from './RankingSection.module.css';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const Counter = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const RankingSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nirfData = [
        { label: 'University', rank: 14 },
        { label: 'Engineering', rank: 16 },
        { label: 'Research', rank: 14 },
        { label: 'Overall', rank: 21 },
    ];

    const sliderImages = [
        '/images/arts.jpeg',
        '/images/artss.jpg',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % sliderImages.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side: NIRF Rankings */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.rankingDetails}
                >
                    <h2 className={styles.title}>Rankings 2025</h2>
                    <div className={styles.logosContainer}>
                        <img
                            src="/logos/svgilogo.png"
                            alt="SVGI Logo"
                            className={styles.svgiLogo}
                        />
                        <div className={styles.divider}></div>
                        <img
                            src="/logos/nirf-ranking-qunr1a1el7owf5dx0isqrz5h1t5j23lpzr2qlomg04.png"
                            alt="NIRF Logo"
                            className={styles.nirfLogo}
                        />
                    </div>
                    <div className={styles.statsGrid}>
                        {nirfData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.statItem}
                            >
                                <span className={styles.rankNumber}>
                                    <Counter value={item.rank} />
                                </span>
                                <span className={styles.rankLabel}>{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

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
