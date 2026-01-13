import React from 'react';
import CommonHero from '../components/CommonHero';
import styles from './CdcTracker.module.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Simple Slider Component
const PlacementSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const slides = [
        // Using placeholder or similar suitable images
        { id: 1, src: "https://vit.ac.in/sites/default/files/styles/media_768_x_465/public/2024-03/sbst-placement-2023_0.jpg?h=f4236a6e&itok=9S1j6r5-", alt: "SBST Placements" },
        { id: 2, src: "https://vit.ac.in/sites/default/files/styles/media_768_x_465/public/2023-05/sbst-banner-2023.jpg?itok=_VkXZtJz", alt: "Biotech Achievers" }
    ];

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {slides.map(slide => (
                    <div key={slide.id} className={styles.slide}>
                        <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const CdcTracker = () => {

    const sidebarLinks = [
        { name: "Placement Tracker", path: "/cdc-tracker", active: true },
        { name: "Announcements", path: "#" },
        { name: "Recruiting Companies", path: "#" },
        { name: "International Admission", path: "#" },
        { name: "Research Organisation", path: "#" },
        { name: "Students Welfare", path: "/campuslife/studentswelfare" }, // Linked to likely valid path
        { name: "Contact Us", path: "/contact" }
    ];

    const lifeSciencesPrograms = [
        "B.Tech Biotechnology",
        "M.Tech Biotechnology",
        "M.Sc in Applied Microbiology",
        "M.Sc in Biotechnology",
        "M.Sc Biomedical Genetics",
        "M.Sc Biotechnology (5 Years Intg.)",
        "M.Sc Food Science and Technology (5 Years Intg.)"
    ];

    const researchDepartments = [
        "Department of Biotechnology",
        "Department of Integrative Biology",
        "Department of Biomedical Sciences",
        "Department of Biosciences"
    ];

    const ugPrograms = [
        "B.Sc Computer Science",
        "BCA",
        "B.Com",
        "BBA",
        "B.Sc. Multimedia and Animation",
        "B.Sc. Visual Communication",
        "B.Sc. in Hospitality and Hotel Administration"
    ];

    return (
        <div className={styles.wrapper}>
            <CommonHero
                defaultTitle="Placement Statistics"
                defaultImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.pageLayout}>
                {/* Left Sidebar on Mobile, Right on Desktop? Standard is Sidebar Left or Right. Let's do Right like many portals or Left. Sticking to Flex order. */}
                {/* Actually, academic sites often have sidebar on Left. Let's put it first in code for accessibility or flow? 
                    In code, if I want it on Right, I can swap order or use flex-direction.
                    Let's put Sidebar SECOND (Right) for "Main Content" focus. 
                    Wait, VIT usually has Left sidebar?
                    Let's go with Main Content LEFT, Sidebar RIGHT for "Related Links".
                */}

                <main className={styles.mainContent}>
                    <div className={styles.contentBox}>
                        <h1 className={styles.mainPageTitle}>VIT Placement Tracker</h1>
                        <p className={styles.pageSubtitle}>Internships & Placement for all 4 campuses: Vellore, Chennai, AP & Bhopal. Last Updated: June 2025.</p>

                        <section className={styles.section}>
                            {/* Split Layout for Life Sciences */}
                            <div className={styles.splitLayout}>
                                <div className={styles.leftPanel}>
                                    <h2 className={styles.sectionTitle} style={{ borderBottom: '1px solid #cceeff', paddingBottom: '0.5rem' }}>Life Sciences Placement Records</h2>
                                    <p className={styles.paragraph}>
                                        Vellore Institute of Technology (VIT) offers a variety of life sciences programs at the undergraduate and postgraduate levels.
                                        School of Bio Sciences and Technology (SBST) offer programs in various disciplines of Modern Biology.
                                    </p>

                                    <h3 className={styles.subHeader}>Academic Programs</h3>
                                    <ul className={styles.programListCompact}>
                                        {lifeSciencesPrograms.map((prog, idx) => (
                                            <li key={idx}> {prog}</li>
                                        ))}
                                    </ul>

                                    <h3 className={styles.subHeader}>Research Programs</h3>
                                    <p className={styles.paragraph} style={{ marginBottom: '0.5rem' }}>Ph.D and Integrated Ph.D under:</p>
                                    <ul className={styles.programListCompact}>
                                        {researchDepartments.map((dept, idx) => (
                                            <li key={idx}>{dept}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.rightPanel}>
                                    <PlacementSlider />
                                </div>
                            </div>
                        </section>

                        <hr style={{ margin: '3rem 0', padding: 0, border: 0, borderTop: '1px solid #eee' }} />

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>MBA Placement Records</h2>
                            <div className={styles.mbaGrid}>
                                <div className={styles.mbaCard}>
                                    <span className={styles.mbaCardTitle}>Curriculum</span>
                                    <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                                        The MBA program at VIT University covers various management subjects, including accounting, economics, marketing, operations, and human resources.
                                        The curriculum is designed to develop students' analytical, critical thinking, and decision-making skills.
                                    </p>
                                </div>
                                <div className={styles.mbaCard}>
                                    <span className={styles.mbaCardTitle}>Faculty</span>
                                    <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                                        The MBA program has a team of experienced faculty members who have extensive industry and academic experience.
                                        They guide students and provide insights into real-world business scenarios.
                                    </p>
                                </div>
                                <div className={styles.mbaCard}>
                                    <span className={styles.mbaCardTitle}>Industry Exposure</span>
                                    <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                                        VIT University's MBA program provides ample opportunities to interact with industry professionals through guest lectures, industry visits, and internships.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr style={{ margin: '3rem 0', padding: 0, border: 0, borderTop: '1px solid #eee' }} />

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>3 Year UG Programme Placements</h2>
                            <p className={styles.paragraph}>
                                Besides World Class Engineering programmes, VIT offers cutting-edge programmes in Science, Commerce, and Humanities & Management.
                                These programmes focus on research, innovation, and developing future-proof skillsets.
                            </p>
                            <ul className={styles.programList}>
                                {ugPrograms.map((prog, index) => (
                                    <li key={index} className={styles.programItem}>
                                        {prog}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </main>

                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Related Links</h3>
                    <ul className={styles.sidebarList}>
                        {sidebarLinks.map((link, idx) => (
                            <li key={idx} className={styles.sidebarItem}>
                                <Link
                                    to={link.path}
                                    className={`${styles.sidebarLink} ${link.active ? styles.active : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

            </div >
        </div >
    );
};

export default CdcTracker;
