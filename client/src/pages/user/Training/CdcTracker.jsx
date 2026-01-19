import React from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './CdcTracker.module.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CdcSlider from './CdcSlider';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

// Data based on VIT CDC Tracker research
const placementData = [
    { year: '2019', Total: 4381, SuperDream: 719, Dream: 1696 },
    { year: '2020', Total: 4914, SuperDream: 739, Dream: 1805 },
    { year: '2021', Total: 5609, SuperDream: 844, Dream: 2186 },
    { year: '2022', Total: 7683, SuperDream: 3419, Dream: 4660 },
    { year: '2023', Total: 8938, SuperDream: 4480, Dream: 3531 },
    { year: '2024', Total: 7586, SuperDream: 3369, Dream: 3429 },
    { year: '2025', Total: 11140, SuperDream: 3563, Dream: 3499 },
];

const recruiterCategories = [
    {
        name: "Automobile Companies",
        logos: [
            "https://via.placeholder.com/120x60?text=Ford",
            "https://via.placeholder.com/120x60?text=BMW",
            "https://via.placeholder.com/120x60?text=Tesla",
            "https://via.placeholder.com/120x60?text=Toyota",
            "https://via.placeholder.com/120x60?text=Hyundai",
            "https://via.placeholder.com/120x60?text=Honda"
        ]
    },
    {
        name: "IT & Software",
        logos: [
            "https://via.placeholder.com/120x60?text=Google",
            "https://via.placeholder.com/120x60?text=Microsoft",
            "https://via.placeholder.com/120x60?text=Amazon",
            "https://via.placeholder.com/120x60?text=Meta",
            "https://via.placeholder.com/120x60?text=Apple",
            "https://via.placeholder.com/120x60?text=Netflix"
        ]
    },
    {
        name: "Core & Engineering",
        logos: [
            "https://via.placeholder.com/120x60?text=GE",
            "https://via.placeholder.com/120x60?text=Siemens",
            "https://via.placeholder.com/120x60?text=L%26T",
            "https://via.placeholder.com/120x60?text=ABB",
            "https://via.placeholder.com/120x60?text=Bosch",
            "https://via.placeholder.com/120x60?text=Cummins"
        ]
    }
];

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
        { id: 1, src: "/images/company-visited1-2025.png", alt: "SBST Placements" },
        { id: 2, src: "/images/company-visited2-2025.png", alt: "Biotech Achievers" }
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
        { name: "Career Services", path: "#" },
        { name: "Contact Us", path: "/contact" }
    ];

    return (
        <div className={styles.wrapper}>
            <CommonHero
                defaultTitle="Placement Tracker"
                defaultImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.pageLayout}>
                <main className={styles.mainContent}>
                    <div className={styles.contentBox}>
                        <h2 className={styles.mainPageTitle}>VIT Placement Tracker</h2>
                        <p className={styles.pageSubtitle}>
                            VIT Placement Tracker - Internships & Placement for all 4 campuses: Vellore, Chennai, AP & Bhopal.
                            <br />
                            <small>Data as on 04.07.2025</small>
                        </p>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Placement Statistics (2019-2025)</h2>
                            <div className={styles.chartWrapper}>
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={placementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Total" fill="#021f4b" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="SuperDream" fill="#ff9933" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="Dream" fill="#28a745" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className={styles.chartNote}>
                                *Super Dream Offers: ₹10 LPA and above | *Dream Offers: ₹6 LPA to ₹10 LPA
                            </p>
                        </section>
                        <CdcSlider
  images={[
    "/images/arts.png",
    "/images/arts.png",
    "/images/life3.png",
  ]}
  interval={4000}
/>


                        <section className={styles.section}>
                            <div className={styles.splitLayout}>
                                <div className={styles.leftPanel}>
                                    <h2 className={styles.sectionTitle}>Life Sciences Placement Records</h2>
                                    <p className={styles.paragraph}>
                                        Vellore Institute of Technology (VIT) offers a variety of life sciences programs at the undergraduate and postgraduate levels.
                                        School of Bio Sciences and Technology (SBST) offer programs in various disciplines of Modern Biology.
                                    </p>
                                    <ul className={styles.programListCompact}>
                                        <li>B.Tech Biotechnology</li>
                                        <li>M.Tech Biotechnology</li>
                                        <li>M.Sc in Applied Microbiology</li>
                                        <li>M.Sc Biotechnology (5 Years Intg.)</li>
                                    </ul>
                                </div>
                                <div className={styles.rightPanel}>
                                    <PlacementSlider />
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Our Top Recruiters</h2>
                            {recruiterCategories.map((cat, idx) => (
                                <div key={idx} className={styles.recruiterGroup}>
                                    <h3 className={styles.recruiterCategoryTitle}>{cat.name}</h3>
                                    <div className={styles.recruiterGrid}>
                                        {cat.logos.map((logo, lIdx) => (
                                            <div key={lIdx} className={styles.logoCard}>
                                                <img src={logo} alt="Recruiter" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>MBA Placement Records</h2>
                            <div className={styles.mbaGrid}>
                                <div className={styles.mbaCard}>
                                    <span className={styles.mbaCardTitle}>Industry-Ready Curriculum</span>
                                    <p className={styles.paragraph}>
                                        The MBA program at VIT University covers various management subjects, including accounting, economics, marketing, and operations.
                                    </p>
                                </div>
                                <div className={styles.mbaCard}>
                                    <span className={styles.mbaCardTitle}>Corporate Mentorship</span>
                                    <p className={styles.paragraph}>
                                        The program offers ample opportunities to interact with industry professionals through guest lectures and internships.
                                    </p>
                                </div>
                            </div>
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
            </div>
        </div>
    );
};

export default CdcTracker;
