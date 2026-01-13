import { useEffect, useRef } from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './milestone.module.css';

const MilestoneSection = () => {
    const itemsRef = useRef([]);

    const milestones = [
        
        {
            year: "2025",
            title: "Excellence in 2024",
            desc: (
                <div style={{ textAlign: 'left' }}>
                    <p style={{ marginBottom: '10px' }}><strong>MHRD NIRF Ranking 2024:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                        <li>19th Best Overall in India</li>
                        <li>10th Best University</li>
                        <li>11th Best in Engineering</li>
                        <li>13th Best in Research</li>
                    </ul>
                    <p style={{ marginBottom: '5px' }}><strong>Global Recognitions:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>QS World Ranking (2025): 791-800</li>
                        <li>QS Asia Ranking (2025): 150</li>
                        <li>FICCI Excellence Award</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2024",
            title: "Excellence in 2024",
            desc: (
                <div style={{ textAlign: 'left' }}>
                    <p style={{ marginBottom: '10px' }}><strong>MHRD NIRF Ranking 2024:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                        <li>19th Best Overall in India</li>
                        <li>10th Best University</li>
                        <li>11th Best in Engineering</li>
                        <li>13th Best in Research</li>
                    </ul>
                    <p style={{ marginBottom: '5px' }}><strong>Global Recognitions:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>QS World Ranking (2025): 791-800</li>
                        <li>QS Asia Ranking (2025): 150</li>
                        <li>FICCI Excellence Award</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2023",
            title: "Reaching New Heights",
            desc: (
                <div style={{ textAlign: 'left' }}>
                    <p style={{ marginBottom: '10px' }}><strong>MHRD NIRF Ranking 2025:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                        <li>21st Best Overall in India</li>
                        <li>14th Best University</li>
                        <li>16th Best in Engineering</li>
                        <li>14th Best in Research</li>
                    </ul>
                    <p style={{ marginBottom: '5px' }}><strong>QS Rankings by Subject:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Engineering & Technology: 142 (World)</li>
                        <li>Computer Science: 110 (World)</li>
                        <li>Data Science & AI: 51-100 (World)</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2022",
            title: "Reaching New Heights",
            desc: (
                <div style={{ textAlign: 'left' }}>
                    <p style={{ marginBottom: '10px' }}><strong>MHRD NIRF Ranking 2025:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                        <li>21st Best Overall in India</li>
                        <li>14th Best University</li>
                        <li>16th Best in Engineering</li>
                        <li>14th Best in Research</li>
                    </ul>
                    <p style={{ marginBottom: '5px' }}><strong>QS Rankings by Subject:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Engineering & Technology: 142 (World)</li>
                        <li>Computer Science: 110 (World)</li>
                        <li>Data Science & AI: 51-100 (World)</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            year: "2022",
            title: "Reaching New Heights",
            desc: (
                <div style={{ textAlign: 'left' }}>
                    <p style={{ marginBottom: '10px' }}><strong>MHRD NIRF Ranking 2025:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '10px' }}>
                        <li>21st Best Overall in India</li>
                        <li>14th Best University</li>
                        <li>16th Best in Engineering</li>
                        <li>14th Best in Research</li>
                    </ul>
                    <p style={{ marginBottom: '5px' }}><strong>QS Rankings by Subject:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Engineering & Technology: 142 (World)</li>
                        <li>Computer Science: 110 (World)</li>
                        <li>Data Science & AI: 51-100 (World)</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.active);
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemsRef.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.milestone__wrapper}>
            <CommonHero
                defaultTitle="Our Milestones"
                defaultImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <section className={styles.section}>
                <div className={styles.intro}>
                    <h2>A Legacy of Excellence</h2>
                    <p>From humble beginnings to a premier institution, walk through the defining moments of our history.</p>
                </div>

                <div className={styles.timeline}>
                    {/* Central Line */}
                    <div className={styles.line}></div>

                    {milestones.map((m, i) => (
                        <div
                            key={i}
                            ref={el => (itemsRef.current[i] = el)}
                            className={`${styles.row} ${i % 2 === 0 ? styles.left : styles.right}`}
                        >
                            <div className={styles.contentBox}>
                                <div className={styles.date}>{m.year}</div>
                                <div className={styles.card}>
                                    <div className={styles.imageBox}>
                                        <img src={m.image} alt={m.title} />
                                    </div>
                                    <div className={styles.textContent}>
                                        <h3>{m.title}</h3>
                                        <div className={styles.description}>
                                            {m.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.dot}></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MilestoneSection;
