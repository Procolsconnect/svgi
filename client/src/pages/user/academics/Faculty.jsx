import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonHero from '../../../components/CommonHero';
import styles from './faculty.module.css';

const schoolsData = [
    {
        id: 1,
        name: "School of Advanced Sciences (SAS)",
        departments: ["Chemistry", "Physics", "Mathematics"]
    },
    {
        id: 2,
        name: "School of Bio Sciences & Technology (SBST)",
        departments: ["Biotechnology", "Biomedical Engineering", "Microbiology"]
    },
    {
        id: 3,
        name: "School of Civil Engineering (SCE)",
        departments: ["Structural Engineering", "Geotechnical Engineering", "Transportation Engineering"]
    },
    {
        id: 4,
        name: "School of Chemical Engineering (SCHEME)",
        departments: ["Chemical Process Engineering", "Polymer Technology", "Petroleum Engineering"]
    },
    {
        id: 5,
        name: "School of Computer Science and Engineering (SCOPE)",
        departments: ["Computer Science", "Information Technology", "Software Engineering", "Artificial Intelligence"]
    },
    {
        id: 6,
        name: "School of Computer Science Engineering and Information Systems (SCORE)",
        departments: ["Information Systems", "Data Science", "Computer Applications"]
    },
    {
        id: 7,
        name: "School of Electrical Engineering (SELECT)",
        departments: ["Power Systems", "Control Systems", "Power Electronics"]
    },
    {
        id: 8,
        name: "School of Electronics Engineering (SENSE)",
        departments: ["VLSI Design", "Embedded Systems", "Communication Engineering"]
    },
    {
        id: 9,
        name: "School of Healthcare Science and Engineering (SHINE)",
        departments: ["Healthcare technology", "Medical Electronics"]
    }
];

const Faculty = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faculty__wrapper}>
            <CommonHero
                defaultTitle="Schools & Faculty"
                defaultImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.faculty__container}>
                <h2 className={styles.faculty__title}>Our Schools</h2>

                <div className={styles.faculty__accordion}>
                    {schoolsData.map((school, index) => (
                        <div
                            key={school.id}
                            className={`${styles.faculty__item} ${activeIndex === index ? styles.active : ''}`}
                        >
                            <div
                                className={styles.faculty__header}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={styles.faculty__schoolName}>{school.name}</span>
                                <span className={styles.faculty__icon}>
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className={styles.faculty__content}>
                                <ul className={styles.faculty__subList}>
                                    {school.departments.map((dept, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={`/academics/faculty/list?school=${encodeURIComponent(school.name)}&dept=${encodeURIComponent(dept)}`}
                                                className={styles.faculty__subItemLink}
                                            >
                                                {dept}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculty;
