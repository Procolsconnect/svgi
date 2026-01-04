import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonHero from '../../../components/CommonHero';
import axios from 'axios';
import {
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineGlobal,
    AiOutlineClockCircle,
    AiOutlineEnvironment,
    AiOutlineInfoCircle
} from "react-icons/ai";

import styles from './overview.module.css';

export default function SVGIOverview() {
    const [overview, setOverview] = useState(null);
    const [cards, setCards] = useState([]);

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [rotated, setRotated] = useState(false);

    const scrollRef = useRef(null);
    const arrowRef = useRef(null);

    const getClickableLink = (text) => {
        if (!text) return null;
        const lower = text.toLowerCase();

        // MAP URL
        const mapRegex = /^(https?:\/\/)?(maps\.app\.goo\.gl|maps\.google\.[a-z.]+|www\.google\.[a-z.]+\/maps)\/.+/i;
        if (mapRegex.test(text)) return text;

        // EMAIL
        if (lower.includes("@")) return `mailto:${text}`;

        // PHONE
        if (/[0-9]{5,}/.test(text) && !lower.includes("@")) return `tel:${text}`;

        // WEBSITE
        if (lower.startsWith("http") || lower.includes("www")) return text;

        return null;
    };

    // Fetch overview, hero, cards
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;

                const overviewRes = await axios.get(`${API_URL}/api/overview`);
                const cardsRes = await axios.get(`${API_URL}/api/contact-card`);

                setOverview(overviewRes.data.data[0]);
                setCards(cardsRes.data.data);
            } catch (error) {
                console.error("Fetch failed:", error);
            }
        };

        fetchData();
    }, []);

    const detectIcon = (text) => {
        if (!text) return <AiOutlineInfoCircle />;
        const lower = text.toLowerCase();

        const gmapRegex = /^(https?:\/\/)?(maps\.app\.goo\.gl|maps\.google\.[a-z.]+|www\.google\.[a-z.]+\/maps)\/.+/i;
        if (gmapRegex.test(text)) return <AiOutlineEnvironment />;
        if (lower.includes("maps.app.goo.gl") || lower.includes("google.com/maps")) return <AiOutlineEnvironment />;

        if (/[0-9]{3,}/.test(text) && !lower.includes("@")) return <AiOutlinePhone />;
        if (lower.includes("@")) return <AiOutlineMail />;
        if (lower.startsWith("http") || lower.includes("www") || lower.includes(".edu") || lower.includes(".ac")) return <AiOutlineGlobal />;
        if (lower.includes("am") || lower.includes("pm") || lower.includes("mon")) return <AiOutlineClockCircle />;

        return <AiOutlineInfoCircle />;
    };

    if (!overview) return <div min-h-screen>Loading…</div>;

    return (
        <div className={styles.root}>
            {/* HERO */}
            <CommonHero
                apiEndpoint="/api/overviewhero"
                defaultTitle="Admissions"
                sectionsSelector="section"
                showArrow={true}
            />

            {/* SECTION 1 */}
            <div className={styles.gradientSection}>
                <img className={styles.gradientShape} src={overview.image1} alt="" />
                <div className={styles.gradientText}>
                    <h2>{overview.title1}</h2>
                    <p>{overview.para1}</p>
                </div>
            </div>

            {/* SECTION 2 */}
            <section className={styles.section} id="svgio-overview">
                <div className={styles.wrapGrid}>
                    <div className={styles.col}>
                        <div className={styles.content6Headline}>
                            <h2>{overview.title2}</h2>
                            <p className={styles.text16}>{overview.para2}</p>
                        </div>
                        <Link to={'/admissions/ug'}>
                            <div className={styles.content6Pic} style={{ backgroundImage: `url(${overview.ug})` }} />
                        </Link>
                        <Link to={'/admissions/pg'}>
                            <div className={styles.content6Pic} style={{ backgroundImage: `url(${overview.pg})` }} />
                        </Link>
                    </div>

                    <div className={styles.col}>
                        <Link to={'/admissions/procedure'}>
                            <div className={styles.content6Pic} style={{ backgroundImage: `url(${overview.research})` }} />
                        </Link>
                        <Link to={'/admissions/procedure'}>
                            <div className={styles.content6Pic} style={{ backgroundImage: `url(${overview.procedure})` }} />
                        </Link>
                        <div className={styles.content6Headline}>
                            <p className={styles.text17}>{overview.para3}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className={styles.contactSection}>
                <h1 className={styles.contactSectionH1}>SVGI Contact Information</h1>
                <div className={styles.contactSectionContainer}>
                    <div className={styles.expandContainer}>
                        {cards.map(card => (
                            <div className={styles.eCard} key={card._id}>
                                <div className={styles.expandCard}>
                                    <div className={styles.expandImage}>
                                        <img src={card.image} alt={card.title} />
                                    </div>
                                    <div className={styles.expandContent}>
                                        <h3>{card.title}</h3>
                                        <div className={styles.info}><AiOutlinePhone /> {card.phone}</div>
                                        <div className={styles.info}><AiOutlineMail /> {card.email}</div>
                                        <div className={styles.info}>
                                            {getClickableLink(card.description) ? (
                                                <a
                                                    href={getClickableLink(card.description)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "inherit" }}
                                                >
                                                    {detectIcon(card.description)}
                                                    <span>{card.description}</span>
                                                </a>
                                            ) : (
                                                <>
                                                    {detectIcon(card.description)}
                                                    <span>{card.description}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}