import React, { useState } from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './schools.module.css';
import { ArrowRight } from 'lucide-react';

const Schools = () => {
    const defaultImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

    const schools = [
        {
            acronym: "SAS",
            name: "School of Advanced Sciences",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SBST",
            name: "School of Bio Sciences & Technology",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SCE",
            name: "School of Civil Engineering",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89afbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SCHEME",
            name: "School of Chemical Engineering",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SCOPE",
            name: "School of Computer Science and Engineering",
            image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SCORE",
            name: "School of Computer Science Engineering and Information Systems",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SELECT",
            name: "School of Electrical Engineering",
            image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SENSE",
            name: "School of Electronics Engineering",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SHINE",
            name: "School of Healthcare Science and Engineering",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SMEC",
            name: "School of Mechanical Engineering",
            image: "https://images.unsplash.com/photo-1537462713505-a1d7c678a022?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "SSL",
            name: "School of Social Sciences and Languages",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "HOT",
            name: "School of Hotel & Tourism Management",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "VAIAL",
            name: "VIT School of Agricultural Innovations And Advanced Learning",
            image: "https://images.unsplash.com/photo-1625246333195-bf4048c593c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "VIT BS",
            name: "VIT Business School",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "V-SIGN",
            name: "VIT School of Design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "V-SMART",
            name: "VIT School of Media, Arts and Technology",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        },
        {
            acronym: "V-SPARC",
            name: "School of Architecture",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    const [activeSchool, setActiveSchool] = useState(schools[0]);

    return (
        <div className={styles.wrapper}>
            <CommonHero
                defaultTitle="Our Schools"
                defaultImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.intro}>
                <h1 className={styles.mainTitle}>Diverse Disciplines</h1>
                <p className={styles.subText}>
                    Explore our wide range of schools at our university, each dedicated to excellence in its field. Hover to view details.
                </p>
            </div>

            <div className={styles.splitLayout}>
                {/* Left Side: Scrollable List */}
                <div className={styles.listSide}>
                    <ul className={styles.schoolList}>
                        {schools.map((school, index) => (
                            <li
                                key={index}
                                className={`${styles.listItem} ${activeSchool.acronym === school.acronym ? styles.active : ''}`}
                                onMouseEnter={() => setActiveSchool(school)}
                            >
                                <div className={styles.itemContent}>
                                    <span className={styles.acronym}>{school.acronym}</span>
                                    <span className={styles.fullName}>{school.name}</span>
                                </div>
                                <ArrowRight className={styles.arrowIcon} size={16} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Sticky Image */}
                <div className={styles.imageSide}>
                    <div className={styles.stickyContainer}>
                        <div className={styles.imageWrapper}>
                            <img
                                key={activeSchool.acronym}
                                src={activeSchool.image || defaultImage}
                                alt={activeSchool.name}
                                className={styles.bigImage}
                            />
                            <div className={styles.imageOverlay}>
                                <h2 className={styles.overlayTitle}>{activeSchool.name}</h2>
                                <span className={styles.overlayAcronym}>{activeSchool.acronym}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schools;