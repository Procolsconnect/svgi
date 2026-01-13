import React from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './ffcs.module.css';

const FFCS = () => {
    return (
        <div className={styles.wrapper}>
            <CommonHero
                defaultTitle="Fully Flexible Credit System"
                defaultImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Fully Flexible Credit System</h2>
                    <div className={styles.content}>
                        <p>
                            In the continuous pursuit of academic excellence and creating a student-friendly learning environment,
                            VIT introduced the Fully Flexible Credit System (Shortly referred to as FFCS). FFCS is a way in which
                            students have complete freedom in tailoring their course and in a way they wish. It accommodates the
                            wants and needs of the entire student community. With this system, a student can prepare his/her own
                            timetable with the specific courses he/she intends to do in that semester along with the timings of
                            classes and choice of professors. Learning has never been this fun.
                        </p>
                        <p>
                            Students have the flexibility to pursue their other interests in sports or club activities and scheduling
                            of classes will take it along the way. It is a beneficial system that is tailor-made to suit all the
                            kinds of students with all learning needs, whether someone wishes to complete subjects early or pursue
                            subjects of the other branches for acquiring a Minor/Honours degree. In addition, this system ensures
                            offerings of subjects from all disciplines, encouraging students to pursue multiple interests and develop holistically.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Salient Features</h2>
                    <ul className={styles.featureList}>
                        <li>Choice in the order of selection of courses for each semester.</li>
                        <li>Choice in the timings / time slots in the selection of courses.</li>
                        <li>Choice in the selection of number of courses per semester.</li>
                        <li>Choice of preparing his / her own Timetable and Academic Plan.</li>
                        <li>Balanced curriculum with engineering, science, humanities and management courses.</li>
                        <li>Ample opportunities to do inter-disciplinary courses.</li>
                        <li>Soft on slow learners by offering important / common courses in all semesters.</li>
                        <li>Optional Summer / Intersession semester to do courses.</li>
                        <li>Opportunity of under graduate research experience.</li>
                        <li>Value addition with double Major / Minor / Honours option.</li>
                        <li>Branch change option in B.Tech. at the end of first year.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default FFCS;
