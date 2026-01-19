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

    if (!overview) return <div className="min-h-screen">Loading…</div>;

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
                <h2  className={styles.contactSectionH1}>SVGI Contact Information</h2 >
                <div className={styles.contactSectionContainer}>
                    <div className={styles.expandContainer} style={{ alignItems: 'flex-start' }}>
                        {cards.map(card => {
                            const descLink = getClickableLink(card.description);
                            const icon = detectIcon(card.description);

                            return (
                                <div className={styles.contactCard} key={card._id}>
                                    <div className={styles.profilWrapper}>
                                        <img src={card.image} alt={card.title} className={styles.profilImage} />
                                    </div>

                                    <h2 className={styles.h2Name}>{card.title}</h2>
                                    {/* <h4 className={styles.h4Role}>Staff</h4> */}

                                    <div className={styles.iconContainer}>
                                        {card.email && (
                                            <a href={`mailto:${card.email}`} className={styles.iconLink} title={card.email}>
                                                <AiOutlineMail />
                                            </a>
                                        )}
                                        {card.phone && (
                                            <a href={`tel:${card.phone}`} className={styles.iconLink} title={card.phone}>
                                                <AiOutlinePhone />
                                            </a>
                                        )}
                                        {descLink && (
                                            <a href={descLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                                {icon}
                                            </a>
                                        )}
                                    </div>

                                    <div className={styles.contactList}>
                                        {card.email && (
                                            <a href={`mailto:${card.email}`}>{card.email}</a>
                                        )}
                                        {card.phone && (
                                            <a href={`tel:${card.phone}`}>{card.phone}</a>
                                        )}
                                    </div>

                                    {!descLink && card.description && (
                                        <p className={styles.profilInfo}>
                                            {card.description}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}