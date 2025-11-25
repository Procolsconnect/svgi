import React, { useState } from "react";
import './leadership.css';
export default function LeadershipPage() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardToggle = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    const materialCards = [
        {
            name: "Christopher Walken",
            movie: "The Deer Hunter",
            img: "https://material-cards.s3-eu-west-1.amazonaws.com/thumb-christopher-walken.jpg",
            color: "Red",
            desc:
                "He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall...",
        },
        {
            name: "Sean Penn",
            movie: "Mystic River",
            img: "https://material-cards.s3-eu-west-1.amazonaws.com/thumb-sean-penn.jpg",
            color: "Pink",
            desc:
                "He has won two Academy Awards, for his roles in Mystic River (2003) and Milk (2008)...",
        },
        {
            name: "Clint Eastwood",
            movie: "Million Dollar Baby",
            img: "https://material-cards.s3-eu-west-1.amazonaws.com/thumb-clint-eastwood.jpg",
            color: "Purple",
            desc:
                "He rose to international fame with his role as the Man with No Name in Sergio Leone's Dollars trilogy...",
        },
    ];

    const quoteCards = [
        {
            title: "Mountain View",
            text: "Check out all of these gorgeous mountain trips...",
        },
        {
            title: "To The Beach",
            text: "Plan your next beach trip with these fabulous destinations",
        },
        {
            title: "Desert Destinations",
            text: "It's the desert you've always dreamed of",
        },
        {
            title: "Explore The Galaxy",
            text: "Seriously, straight up, just blast off into outer space today",
        },
    ];

    return (
        <div className="lp-body">
            {/* HERO */}
            <div id="lp-hero">
                <img src="/images/instu.jpg" alt="Hero Background" />
                <div className="lp-wrapper">
                    <h1>Leadership</h1>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="lp-left-heading">Leadership That Inspires</div>

            {/* Card Row 1 */}
            <div className="lp-whole_card">
                <div className="lp-card">
                    <div className="lp-overflow">
                        <div className="lp-model">
                            <img
                                src="/images/WhatsApp_Image_2025-08-01_at_16.31.09_43d29991-removebg-preview.png"
                                alt="Chairman"
                                className="lp-image-model"
                            />
                        </div>
                    </div>
                    <div className="lp-glass"></div>
                    <div className="lp-content">
                        <h2>Thiru. P. VENKATACHALAM</h2>
                        <p>Chairman</p>
                    </div>
                </div>
                <p>
                    Shree Venkateshwara group of institutions set to take the mission of
                    implementation of the newest educational methodologies which enables
                    the innovative thinking of students and initiative performance. It
                    also encourages independent thinking and decision making of students,
                    thus enabling them to develop wholesome personalities.
                </p>
            </div>

            {/* Card Row 2 */}
            <div className="lp-whole_cards">
                <div className="lp-card">
                    <div className="lp-overflow">
                        <div className="lp-model">
                            <img
                                src="/images/WhatsApp_Image_2025-08-01_at_16.15.06_95e75b66-removebg-preview.png"
                                alt="Secretary"
                                className="lp-image-model"
                            />
                        </div>
                    </div>
                    <div className="lp-glass"></div>
                    <div className="lp-content">
                        <h2>Mr.K.C.Karupanan</h2>
                        <p>Secretary</p>
                    </div>
                </div>
                <p>
                    Shree Venkateshwara Group of Institutions takes keen interest in
                    updating its infrastructures to meet the technological revolution and
                    new challenges of the modern era. SVASC has a reputation as an
                    innovative and dynamic educational institution that maintains the
                    highest standards of norms and provides complete student support
                    systems using latest developments in instructional technology with
                    utmost care.
                </p>
            </div>

            {/* MATERIAL CARDS */}
            <div className="material-cards-section">
                <div className="material-container">
                    <div className="material-page-header">
                        <h1>
                            Material Cards Demo
                            <br />
                            <small>
                                See full features on
                                <a
                                    href="https://github.com/marlenesco/material-cards"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </small>
                        </h1>
                    </div>

                    <div className="material-row">
                        {materialCards.map((card, index) => (
                            <div key={index} className="material-col-md-4">
                                <article
                                    className={`material-card ${card.color} ${activeCard === index ? "mc-active" : ""}`}
                                >
                                    <div className="mc-content">
                                        <div className="img-container">
                                            <img src={card.img} alt={card.name} />
                                        </div>
                                        <h2 className="card-header">
                                            <span>{card.name}</span>
                                            <strong>
                                                <i className="fa fa-fw fa-star"></i> {card.movie}
                                            </strong>
                                        </h2>
                                        <div className="mc-description">{card.desc}</div>
                                    </div>

                                    {/* Toggle Button */}
                                    <button
                                        className="mc-btn-action"
                                        onClick={() => handleCardToggle(index)}
                                    >
                                        <i
                                            className={
                                                activeCard === index ? "fa fa-times" : "fa fa-bars"
                                            }
                                        ></i>
                                    </button>

                                    <div className="mc-footer">
                                        <h4>Social</h4>
                                        <div className="social-links">
                                            <a href="#" className="social-link">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            <a href="#" className="social-link">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="social-link">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a href="#" className="social-link">
                                                <i className="fab fa-google-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* QUOTE SECTION */}
            <section id="lp-quote-section">
                <main className="lp-quote-section-quote">
                    <blockquote>I have never said any of those.</blockquote>
                    <small>~ Multiple sources.</small>
                </main>

                <main className="lp-page-content">
                    {quoteCards.map((c, i) => (
                        <div key={i} className="lp-card">
                            <div className="lp-content">
                                <h2 className="lp-title">{c.title}</h2>
                                <p className="lp-copy">{c.text}</p>
                                <button className="lp-btn">View Trips</button>
                            </div>
                        </div>
                    ))}
                </main>
            </section>
        </div>
    );
}