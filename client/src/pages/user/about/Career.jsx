import React from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './careee.module.css';

const Careee = () => {

    const openings = [
        {
            id: 1,
            role: "Professor in Computer Science",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
         
        },
        {
            id: 2,
            role: "Lab Assistant - Chemistry",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        
        },
        {
            id: 3,
            role: "Administrative Officer",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            
        }
    ];

    return (
        <div className={styles.careee__wrapper}>
            <CommonHero
                defaultTitle="Career"
                defaultImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            {/* Intro Section */}
            <section className={styles.careee__intro}>
                <p className={styles.careee__introText}>
                    VIT was established with the aim of providing quality higher education on par with international standards.
                    It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.
                    The campus has a cosmopolitan atmosphere with students from all corners of the globe.
                    Experienced and learned teachers are strongly encouraged to nurture the students.
                </p>
            </section>

            {/* Current Openings */}
            <section className={styles.careee__openings}>
                <h2 className={styles.careee__title}>Current Openings</h2>
                <div className={styles.careee__grid}>
                    {openings.map((job) => (
                        <div key={job.id} className={styles.careee__card}>
                            <div className={styles.careee__image}>
                                <img src={job.image} alt={job.role} />
                            </div>
                            <div className={styles.careee__content}>
                                <h3 className={styles.careee__role}>{job.role}</h3>
                                <p className={styles.careee__desc}>{job.description}</p>
                                <a href="#apply" className={styles.careee__applyBtn}>Apply Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Us Section - Matching Image Layout */}
            <section className={styles.careee__footer}>
                <h2 className={styles.careee__contactTitle}>Contact Us</h2>
                <div className={styles.careee__footerGrid}>
                    <div className={styles.careee__map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939529949!2d79.1537483148216!3d12.92376299088716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad389d5cc398bb%3A0x69f471f46f34e320!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>

                    <div className={styles.careee__address}>
                        <div className={styles.careee__addressRow}>
                            <span className={styles.careee__label}>Address:</span>
                            <span className={styles.careee__value}>
                                Vellore Institute of Technology,<br />
                                Vellore Campus, Tiruvalam Rd, Katpadi,<br />
                                Vellore, Tamil Nadu 632014.
                            </span>
                        </div>

                        <div className={styles.careee__addressRow}>
                            <span className={styles.careee__label}>Telephone No :</span>
                            <span className={styles.careee__value}>91-416-2243091 / 93</span>
                        </div>

                        <div className={styles.careee__addressRow}>
                            <span className={styles.careee__label}>Mail:</span>
                            <span className={styles.careee__value}>careers@vit.ac.in</span>
                        </div>

                        <div className={styles.careee__addressRow}>
                            <span className={styles.careee__label}>Fax:</span>
                            <span className={styles.careee__value}>
                                91-416-2243092<br />
                                91-416-2240411
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careee;
