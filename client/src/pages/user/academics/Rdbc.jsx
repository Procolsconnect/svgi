// HeroHighlight.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./rdbc.module.css";
import CommonHero from "../../../components/CommonHero";

gsap.registerPlugin(ScrollTrigger);

export default function HeroHighlight() {
    useEffect(() => {
        document.querySelectorAll(`.${styles.hhTextHighlight}`).forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: "-100px center",
                onEnter: () => el.classList.add(styles.hhTextHighlightActive),
            });
        });
    }, []);

    return (
        <div className={styles.hhBody}>
            {/* HERO SECTION */}
            <CommonHero
                defaultTitle="RDBC"
                defaultImage="/images/instu.jpg"
            />

            {/* SECTION 1: TOP HEADING */}
            <div className={styles.hhTitleGroup}>
                <div className={styles.hhRightHeading}>
                    <span>Regulations  &nbsp;</span><br />
                    <span>Discipline</span>
                </div>
            </div>

            {/* SECTION 2: TOP DECOR ROW (RED BLOCK) */}
            <section className={styles.hhTopRow}>
                <div className={styles.hhTopRowColumnTwo}></div>
            </section>

            {/* SECTION 3: BOTTOM DECOR ROW (BLUE BLOCK) */}
            <section className={styles.hhBottomRow}>
                <div className={styles.hhBottomRowColumnTwo}></div>
            </section>

            {/* SECTION 4: DESCRIPTION SECTION (NEXT SECTION) */}
            <section className={styles.hhDescriptionSection}>
                <div className={styles.hhLeftHeading}>
                    and <br /> Capacity<br /> Development
                </div>
                <div className={styles.hhBottomRowColumnOne}>
                    <p>
                        SVGI adheres to strict guidelines and discipline to
                        foster a safe, respectful, and focused campus
                        environment where students can learn without
                        distractions. In addition, the institution
                        prioritizes capacity development through regular
                        skill-building activities, workshops, and training
                        programs that assist students in enhancing their
                        academic, professional, and personal growth.
                    </p>
                </div>
            </section>

            {/* HIGHLIGHT SECTION */}
            <section className={styles.hhHighlightSection}>
                <h1>Regulations & Safety</h1>

                <p>
                    The possession or use of prohibited items, including drugs, tobacco, cigarettes, alcohol, or any other intoxicating substances, is strictly forbidden within the SVGI campus and hostels.
                    {" "}
                    <mark className={styles.hhTextHighlight}>
                        Students must refrain from any behaviour that may disturb the peace, safety, or well-being of others.
                    </mark>{" "} Visitors are allowed only with prior approval from the designated hostel authorities. All residents are expected to follow campus safety guidelines and cooperate fully with wardens and staff members. Any violation of these regulations will lead to immediate disciplinary action as per SVGI rules.
                </p>

                <p>
                    <h3>Campus Discipline</h3>
                    SVGI upholds a rigorously regulated campus to guarantee a secure learning atmosphere. Students are anticipated to adhere to all institutional policies without exception. {" "}
                    <mark className={styles.hhTextHighlight}>
                        Respectful conduct is obligatory
                    </mark>{" "}
                    in both academic and non-academic settings. Any instance of misconduct is regarded with utmost seriousness by the administration. The overarching objective is to foster a sense of responsibility and an emphasis on academic achievement.
                </p>

                <p>
                    <h3>Academic Integrity</h3>
                    Students are required to attend all classes, laboratories, and academic events punctually.
                    <mark className={styles.hhTextHighlight}>
                        Consistent attendance significantly impacts academic performance.
                    </mark>
                    Arriving late to classrooms is discouraged to prevent disruptions. Any absenteeism must be substantiated with appropriate documentation. Punctuality is indicative of discipline and a commitment to one’s studies.
                </p>

                <p>
                    <h3>Dress Code Compliance</h3>
                    A neat and professional dress code is to be observed within the campus. Students are expected to present themselves in attire that is appropriate for an academic setting.
                    <mark className={styles.hhTextHighlight}>
                        Where applicable, uniforms must be worn in accordance with the specified guidelines
                    </mark>
                    The wearing of improper clothing within academic buildings is prohibited. Compliance with the dress code is essential for maintaining the decorum of the institution.
                </p>

                <p>
                    <h3>Anti-Ragging Policy</h3>
                    SVGI enforces a zero-tolerance policy against ragging in any form.
                    All students must abide by anti-ragging regulations strictly.

                    <mark className={styles.hhTextHighlight}>
                        Any harassment—verbal, physical, or emotional—is punishable.
                    </mark>{" "}
                    Violators will face immediate actions under institutional rules.
                    The policy ensures every student feels safe and respected.

                </p>

                <p>
                    <h3>Behaviour & Conduct</h3>
                    Students must treat faculty, staff, and peers with courtesy.
                    Good communication and respectful behaviour are essential.

                    <mark className={styles.hhTextHighlight}>
                        Actions that disrupt harmony on campus are not permitted.
                    </mark>
                    Students should follow instructions given by staff members.
                    Healthy conduct builds a positive learning environment.

                </p>

                <p>
                    <h3>Campus Cleanliness</h3>
                    Maintaining cleanliness is the shared responsibility of all students.
                    Campuses, classrooms, and labs must be kept neat at all times.

                    <mark className={styles.hhTextHighlight}>
                        Students should use facilities responsibly without causing damage.
                    </mark>{" "}
                    Waste must be disposed of only in designated areas.
                    Clean surroundings support a healthy academic atmosphere.

                </p>

                <p>
                    <h3>Academic Participation</h3>
                    Workshops, seminars, and skill programs are mandatory for students.
                    These activities enhance academic and professional growth.

                    <mark className={styles.hhTextHighlight}>
                        Participation helps students gain real-world experience.
                    </mark>
                    Assignments and projects must be completed on time.
                    Active involvement improves overall learning outcomes.

                </p>

                <p>
                    <h3>Hostel Discipline</h3>
                    Hostel residents must follow all rules set by the hostel management.
                    Entry and exit timings must be strictly adhered to.

                    <mark className={styles.hhTextHighlight}>
                        Rooms should be kept clean and maintained regularly.
                    </mark>
                    Students must cooperate with wardens and hostel staff.
                    Hostel discipline ensures safety and comfort for everyone.

                </p>
            </section>
        </div>
    );
}