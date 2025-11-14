// SVGIOverview.jsx
import React, { useEffect, useRef, useState } from 'react';
import './overview.css';

export default function SVGIOverview() {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [rotated, setRotated] = useState(false);
    const scrollRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        // ensure arrow-bounce exists on mount
        if (arrowRef.current) arrowRef.current.classList.add('svgio-arrow-bounce');
    }, []);

    const handleScrollClick = () => {
        const sections = Array.from(document.querySelectorAll('section'));
        const btn = scrollRef.current;


        // position the button fixed at a computed spot once clicked (mimics original animate)
        if (btn && !clicked) {
            btn.style.position = 'fixed';
            btn.style.top = 'auto';      // <-- THIS FIXES THE ISSUE
            btn.style.bottom = '50px';   // optional, forces bottom positioning
        }


        // trigger movement (css transition handles the rest)
        setClicked(true);

        // determine target
        if (count > (sections.length - 1)) {
            // go to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setRotated(false);
            setCount(0);
        } else {
            const target = sections[count];
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            if (count === (sections.length - 1)) setRotated(true);
            setCount(prev => prev + 1);
        }

        // remove arrow bounce after first click
        if (arrowRef.current) arrowRef.current.classList.remove('svgio-arrow-bounce');
    };

    return (
        <div className="svgio-root">
            {/* HERO */}
            <div className="svgio-hero" id="svgio-hero">
                <img className="svgio-hero__img" src="images/instu.jpg" alt="Hero Background" />
                <div className="svgio-wrapper">
                    <h1 className="svgio-hero__title">Overview</h1>
                </div>
            </div>

            {/* SCROLL ARROW */}
            <div
                ref={scrollRef}
                className={`svgio-scroll ${clicked ? 'svgio-scroll--clicked' : ''} ${rotated ? 'svgio-scroll--rotate' : ''}`}
                onClick={handleScrollClick}
                aria-label="Scroll"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleScrollClick(); }}
            >
                <span ref={arrowRef} className="svgio-arrow">&#8595;</span>
            </div>

            {/* GRADIENT MASK SECTION */}
            <section className="svgio-gradient-section">
                <img id="svgio-gradient-shape" className="svgio-gradient-shape" src="images/training.jpg" alt="" />
                <div className="svgio-gradient-text">
                    <h2>Align text to a gradient mask on image</h2>
                    <p>
                        Color is the visual perception produced by the activation of the different types of cone cells in the eye caused by light. Though color is not an inherent property of matter, color perception is related to an object's light absorption, emission, reflection and transmission. For most humans, visible wavelengths of light are the ones perceived in the visible light spectrum, with three types of cone cells.
                    </p>
                </div>
            </section>

            {/* SECTION BELOW HERO */}
            <section className="svgio-section" id="svgio-overview">
                <div className="svgio-wrap-grid">
                    <div className="svgio-col">
                        <div className="svgio-content6-headline">
                            <div className="svgio-tagline">My Life in pictures</div>
                            <h2>I'm active on Instagram</h2>
                            <p className="svgio-text-16">
                                I love to wander around the world with my ultimate camera and take pictures of everything
                                I see so I can pretend that I'm supercool guy even though I sit in front of my MacBook
                                18 hours a day. Whatever.
                            </p>
                        </div>
                        <div className="svgio-content6-pic svgio-content6-image1" />
                        <div className="svgio-content6-pic svgio-content6-image2" />
                    </div>
                    <div className="svgio-col">
                        <div className="svgio-content6-pic svgio-content6-image3" />
                        <div className="svgio-content6-pic svgio-content6-image4" />
                    </div>
                </div>
            </section>

            {/* NEW CONTACT SECTION */}
            <section className="svgio-contact-section">
                <h2 className='svgio-contact-section-h2'>📞 SVGI Contact Information</h2>
                <div className="svgio-cards">
                    <div className="svgio-card">
                        <h3>SVGI Engineering College</h3>
                        <div className="svgio-info"><span>👤</span> Dr. Ramesh Kumar, Director - UG Admissions</div>
                        <div className="svgio-info"><span>📍</span> SVGI Campus, Tiruvannamalai, Tamil Nadu - 606601</div>
                        <div className="svgio-info"><span>📞</span> +91-4175-220101</div>
                        <div className="svgio-info"><span>✉️</span> engg@svgicollege.edu.in</div>
                        <div className="svgio-info"><span>⏰</span> 9 am - 5 pm; Mon-Sat (Excluding holidays)</div>
                    </div>

                    <div className="svgio-card svgio-card--alt">
                        <h3>SVGI Arts & Science College</h3>
                        <div className="svgio-info"><span>👤</span> Dr. Priya Lakshmi, Director - PG Admissions</div>
                        <div className="svgio-info"><span>📍</span> SVGI Campus, Tiruvannamalai, Tamil Nadu - 606601</div>
                        <div className="svgio-info"><span>📞</span> +91-4175-220202</div>
                        <div className="svgio-info"><span>✉️</span> arts@svgicollege.edu.in</div>
                        <div className="svgio-info"><span>📠</span> +91-4175-220203</div>
                    </div>

                    <div className="svgio-card svgio-card--dark">
                        <h3>SVGI Paramedical & Nursing</h3>
                        <div className="svgio-info"><span>👤</span> Dr. Meena S, Director - Nursing & Paramedical</div>
                        <div className="svgio-info"><span>📍</span> SVGI Health Campus, Tiruvannamalai, Tamil Nadu - 606601</div>
                        <div className="svgio-info"><span>📞</span> +91-4175-220303</div>
                        <div className="svgio-info"><span>✉️</span> nursing@svgicollege.edu.in</div>
                        <div className="svgio-info"><span>🌐</span> <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer">View Location</a></div>
                    </div>
                </div>
            </section>

        </div>
    );
}


