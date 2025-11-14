import React, { useEffect } from "react";
import "./research.css";

export default function HeroPage() {
    useEffect(() => {
        const el = document.querySelector(".hp-button-bird");
        const text = document.querySelector(".hp-button-bird__text");

        const handler = () => {
            el.classList.toggle("active");
            text.innerHTML = el.classList.contains("active") ? "DONE" : "SEND";
        };

        el.addEventListener("click", handler);
        return () => el.removeEventListener("click", handler);
    }, []);

    return (
        <div className="hp-wrapper">
            {/* HERO */}
            <div id="hero" className="hp-hero">
                <img src="hero img.jpg" alt="Hero Background" />
                <h1>Research courses</h1>
            </div>

            {/* MAIN GRID */}
            <div className="hp-container">
                <div className="hp-header">
                    <i className="fa fa-arrow-left fa-2x"></i>
                    <div><h5>CCCLOTHES</h5></div>
                </div>

                <div className="hp-top-img"></div>
                <div className="hp-divArea-1"></div>

                <div className="hp-rightTop end">
                    <div className="hp-title2">LINEN</div>
                    <div className="hp-title2 hp-trans-90 hp-pos-right">BLAZER</div>
                </div>

                <div className="hp-leftBottom">
                    <div className="hp-title2 hp-trans-180 hp-f-l">TOP</div>
                    <div className="hp-title2 hp-trans-270 hp-pos-left">01</div>
                </div>

                <div className="hp-div1"></div>

                <div className="hp-content">
                    <div className="hp-title2">LINEN BLAZER</div>
                    <h2 className="hp-italic hp-trans-90">PRODUCT DETAILS</h2>
                    <h2>Kogi Cosby sweater ethical squid irony</h2>
                    <p>
                        In the tumultuous business of cutting-in and attending to a whale,
                        there is much running backwards and forwards among the crew...
                    </p>
                    <p>
                        We must now retrace our way a little. It was mentioned that upon
                        first breaking ground in the whale's back...
                    </p>
                </div>

                <div className="hp-bottom-img"></div>
                <div className="hp-center-img"></div>
                <div className="hp-divArea-2"></div>
                <div className="hp-div2"></div>
                <div className="hp-pattern1"></div>
            </div>

            {/* BUTTON SECTION */}
            <div className="hp-wrapper-no4">
                <p>THE complete UP course is inside the button</p>
                <h1>Click the Button</h1>

                <button className="hp-button-bird">
                    <p className="hp-button-bird__text">OPEN</p>
                    <svg version="1.1" className="hp-feather" viewBox="0 0 75 38">
                        <g>
                            <path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8..." />
                        </g>
                    </svg>

                    {[...Array(30)].map((_, i) => (
                        <span key={i} className={`hp-bird hp-bird--${i + 1}`}></span>
                    ))}
                </button>
            </div>
        </div>
    );
}
