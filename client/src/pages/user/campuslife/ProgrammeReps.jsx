import React from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './programmereps.module.css';

const ProgrammeReps = () => {
    return (
        <div className={styles.wrapper}>
            <CommonHero
                defaultTitle='Programme Representatives'
                defaultImage='/images/svgi2.jpg'
            />

            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.leftSection}>
                            <h2 className={styles.mainTitle}>Programme Representatives</h2>
                            <div className={styles.divider}></div>

                            <h2 className={styles.contactHeading}>For Contact:</h2>
                            <div className={styles.contactInfo}>
                                <p>Office of Students' Welfare</p>
                                <p>#204, 2nd Floor,</p>
                                <p>Vellore Institute of Technology,</p>
                                <p>Vellore – 632 014</p>
                                <p>Phone: +91-416-2202200/2202202</p>
                                <p>Email: <a href="mailto:events.sw@vit.ac.in">events.sw@vit.ac.in</a></p>
                            </div>

                            <div className={styles.divider}></div>

                            <a href="/programme-representatives-2024-25" className={styles.ctaButton}>
                                Programme Representatives 2024-25
                            </a>
                        </div>

                        <div className={styles.rightSection}>
                            <div className={styles.imageCircle}>
                                <img
                                    src="/images/svgi2.jpg"
                                    alt="Students collaborating"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammeReps;
