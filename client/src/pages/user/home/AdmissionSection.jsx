import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdmissionSection.module.css';

const AdmissionSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.bgWrapper}>
                <div className={styles.container}>
                    {/* Common Top Section */}
                    <div className={styles.sectionHeader}>
                        <h1 className={styles.tagline}>Shree Vengadeshwara Institution</h1>
                        <h2 className={styles.mainTitle}>
                          Admissions
                        </h2>
                        <p className={styles.description}>
                         SVGI Group of Institutions offer 71 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research programmes and 2 M.Tech Industrial Programmes. In addition, full-time Ph.D. in Engineering and Management disciplines, Ph.D. in Science and Languages and Direct Ph.D. programmes in engineering disciplines are offered.
                        </p>
                        <p className={styles.description}>
                         SVGI Group of Institutions offer 71 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research programmes and 2 M.Tech Industrial Programmes. In addition, full-time Ph.D. in Engineering and Management disciplines, Ph.D. in Science and Languages and Direct Ph.D. programmes in engineering disciplines are offered.
                        </p>
                    </div>

                    {/* Split Section: Button left, Images right */}
                    <div className={styles.splitSection}>
                        <div className={styles.actionContent}>
                            <ul className={styles.admissionList}>
                                <li>
                                    <Link to="/admissions/ug" className={styles.admissionLink}>Undergraduate</Link>
                                </li>
                                <li>
                                    <Link to="/admissions/pg" className={styles.admissionLink}>Postgraduate</Link>
                                </li>
                                <li>
                                    <Link to="/admissions/research" className={styles.admissionLink}>Research</Link>
                                </li>
                            </ul>
                            <a href="#" className={styles.exploreBtn}>
                                Explore More
                            </a>
                        </div>

                        {/* Image Content */}
                        <div className={styles.imageContent}>
                            <div className={styles.imageGrid}>
                                <div className={styles.imageWrapper1}>
                                    <img
                                        className={styles.image1}
                                        src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                                        alt="TechFest 1"
                                    />
                                </div>
                                <div className={styles.imageWrapper2}>
                                    <img
                                        className={styles.image2}
                                        src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                                        alt="TechFest 2"
                                    />
                                </div>
                                <div className={styles.imageWrapper3}>
                                    <img
                                        className={styles.image3}
                                        src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                                        alt="TechFest 3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionSection;
