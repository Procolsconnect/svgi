import React from "react";
import "./CourseOutcomeCards.css";

const cardData = [
    {
        img: "https://assets.codepen.io/2585/Roboto.svg",
        text: "Short and tiny content here.",
        link: "Cool art",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Entertainment.svg",
        text: "The words here are tolerable but a bit long.",
        link: "By Pablo Stanley",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Mechanical+Love.svg",
        text: "I'm brief comparatively.",
        link: "Find more",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Waiting.svg",
        text: "Sometimes the message is just right.",
        link: "Share good art",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Roboto.svg",
        text: "Short and tiny content here.",
        link: "Cool art",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Entertainment.svg",
        text: "The words here are tolerable but a bit long.",
        link: "By Pablo Stanley",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Mechanical+Love.svg",
        text: "I'm brief comparatively.",
        link: "Find more",
        href: "#",
    },
    {
        img: "https://assets.codepen.io/2585/Waiting.svg",
        text: "Sometimes the message is just right.",
        link: "Share good art",
        href: "#",
    },
];

const CourseOutcomeCards = () => {
    return (
        <>
            {/* HERO SECTION */}
            <div className="coc-hero">
                <img
                    src="hero img.jpg"
                    alt="Hero Background"
                    className="coc-hero-image"
                />
                <h1 className="coc-hero-title">Our Diamonds</h1>
            </div>

            {/* CARDS GRID */}
            <main className="coc-main">
                {cardData.map((card, index) => (
                    <div className="coc-card-layer" key={index}>
                        <article className="coc-card">
                            <img src={card.img} alt="Art" />
                            <p>{card.text}</p>
                            <a href={card.href}>{card.link}</a>
                        </article>
                    </div>
                ))}
            </main>
        </>
    );
};

export default CourseOutcomeCards;
