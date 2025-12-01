import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SW_Section1.css";

gsap.registerPlugin(ScrollTrigger);

const HeroBouncerCards = () => {
    const imageRef = useRef(null);
    const ballRef = useRef(null);
    const bouncerContainerRef = useRef(null);

    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords("While some see them as the crazy ones, we see genius.".split(" "));
    }, []);

    useEffect(() => {
        // Hero scroll zoom
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hb-wrapper",
                start: "top top",
                end: "bottom+=100% top", // limit scroll distance
                pin: true,
                scrub: true,
            },
        });

        tl.to(imageRef.current, {
            scale: 2,
            ease: "power1.inOut",
        }).to(
            ".hb-section-hero",
            {
                scale: 1.1,
                ease: "power1.inOut",
            },
            "<"
        );


        // Animate bouncer with GSAP timeline for smooth scroll
        const ball = ballRef.current;
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hb-section-second",
                start: "top bottom",
                once: true,
            },
        });

        words.forEach((_, idx) => {
            timeline.call(() => {
                const wordElems = bouncerContainerRef.current.querySelectorAll(".hb-word");
                const wordElem = wordElems[idx];
                if (!wordElem) return;

                const wordRect = wordElem.getBoundingClientRect();
                const containerRect = bouncerContainerRef.current.getBoundingClientRect();
                const left = wordRect.left - containerRect.left + wordRect.width / 2;

                ball.style.left = `${left}px`;
                ball.style.top = "-50px";
                ball.style.display = "block";

                gsap.to(ball, { top: 0, duration: 0.3, ease: "bounce.out" });
                wordElem.classList.add("hb-lit");
            }, null, idx * 0.2); // stagger words
        });

        timeline.to(ball, { autoAlpha: 0, delay: 0.5 });
    }, [words]);

    return (
        <><div className="section1-body">

            {/* HERO */}
            <div className="hb-wrapper">
                <div className="hb-content">
                    <section className="hb-section hb-section-hero"></section>
                </div>
                <div className="hb-image-container">
                    <img
                        ref={imageRef}
                        src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
                        alt="Hero overlay"
                    />
                </div>
            </div>

            {/* SECOND SECTION */}
            <section className="hb-section hb-section-second">
                <div className="hb-container hb-bouncer-container" ref={bouncerContainerRef}>
                    <div ref={ballRef} className="hb-ball"></div>
                    {words.map((word, i) => (
                        <span key={i} className="hb-word">
                            {word}{" "}
                        </span>
                    ))}
                </div>
            </section>

            {/* FANCY TEXT */}
            <div className="hb-fancy-text" aria-labelledby="news-heading">
                <h1 id="news-heading">Meghan And Harry's Baby</h1>
                <div className="hb-fancy-text__body">
                    <p>
                        Buckingham Palace announced that Meghan had gone into labour during the early hours of May 6. Harry was by her side, and an announcement would be made soon, read the broadcast. Shortly after,{" "}
                        <a href="https://www.instagram.com/sussexroyal/">@sussexroyal</a>, the official Instagram of the couple, shared the news that a baby boy had been born.
                    </p>
                    <p>
                        Upon greeting media outside Frogmore Cottage during the afternoon of May 6, Harry said: “I'm so incredibly proud of my wife... How any woman does what they do is beyond comprehension.”
                    </p>
                </div>
            </div>

            <div className="hb-spacer" aria-hidden="true"></div>

            {/* 3D CARDS */}
            <section className="hb-cards-section" aria-labelledby="clubs-heading">
                <h2 id="clubs-heading" className="hb-page-title">
                    Student Clubs
                </h2>

                <div className="hb-l-container">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="hb-game-card">
                            <div
                                className="hb-game-card__cover"
                                style={{
                                    backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_${i}.jpg')`,
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        </>
    );
};

export default HeroBouncerCards;
