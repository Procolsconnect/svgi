import React, { useEffect, useRef } from "react";
import './vismis.css'


export default function CampusCanvas() {
    const autoRotateRef = useRef(null);
    const itemsRef = useRef(null);


    useEffect(() => {
        const addScript = (src) =>
            new Promise((resolve, reject) => {
                const existing = Array.from(document.scripts).find((s) => s.src === src);
                if (existing) {
                    existing.addEventListener("load", () => resolve(existing));
                    if (existing.readyState === "complete") resolve(existing);
                    return;
                }
                const s = document.createElement("script");
                s.src = src;
                s.async = true;
                s.onload = () => resolve(s);
                s.onerror = reject;
                document.head.appendChild(s);
            });


        const init = async () => {
            try {
                await addScript("https://unpkg.com/feather-icons");
                if (window.feather?.replace) window.feather.replace();
            } catch { }


            if (!window.jQuery) {
                try {
                    await addScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js");
                } catch (e) {
                    console.warn("jQuery failed to load", e);
                    return;
                }
            }


            const $ = window.jQuery;
            if (!$) return;


            const items = $(".cc-circle__item");
            itemsRef.current = items;
            let index = 0;


            items.each(function (i) {
                setTimeout(() => $(this).removeClass("cc-circle__item--hidden"), 350 * i);
            });


            function showContent(i) {
                const item = items.eq(i);
                const target = item.attr("data-title");


                items.removeClass("cc-circle__item--active");
                item.addClass("cc-circle__item--active");


                $(".cc-circle__content-inner").removeClass("cc-circle__content-inner--is-visible");
                $("#" + target).addClass("cc-circle__content-inner--is-visible");
            }


            function startAutoRotate() {
                stopAutoRotate();
                autoRotateRef.current = setInterval(() => {
                    index = (index + 1) % items.length;
                    showContent(index);
                }, 3000);
            }


            function stopAutoRotate() {
                if (autoRotateRef.current) clearInterval(autoRotateRef.current);
                autoRotateRef.current = null;
            }


            const onClick = function () {
                stopAutoRotate();
                index = items.index(this);
                showContent(index);
                startAutoRotate();
            };


            items.on("click", onClick);
            startAutoRotate();


            return () => {
                stopAutoRotate();
                items.off("click", onClick);
            };
        };


        init();


        return () => {
            if (autoRotateRef.current) clearInterval(autoRotateRef.current);
            if (itemsRef.current?.off) itemsRef.current.off();
        };
    }, []);

    return (
        <div className="cc-wrapper">

            {/* HERO */}
            <div id="cc-hero">
                {/* Replace these with valid image paths in your project */}
                <img src="/images/instu.jpg" alt="Hero Background" />
                <h1>Our Mission and Visions</h1>
            </div>

            {/* CARDS */}
            <ol className="cc-cards__container" title="Blog entries">
                {[1, 2, 3].map((id) => (
                    <li className="cc-card" key={id}>
                        <div className="cc-card__thumb">
                            <img src={`https://picsum.photos/id/${id}/800/800`} alt={`Card ${id}`} />
                        </div>
                        <div className="cc-card__content">
                            <h3 className="cc-card__title">Card Title {id}</h3>
                            <p className="cc-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a className="cc-card__btn" href="#" aria-label={`Read more about Card Title ${id}`}><i data-feather="arrow-right" /></a>
                        </div>
                    </li>
                ))}
            </ol>

            {/* SVG SECTION */}
            <div className="cc-svg-wrapper">
                <svg id="svg4136" xmlns="http://www.w3.org/2000/svg" version="1.1"
                    viewBox="0 0 1000 670" preserveAspectRatio="xMidYMid meet">
                    <g id="layer1">
                        <path id="path4806"
                            d="m0.83398 57.5v315h261.4l-0.15234-0.11914 245.41-314.88h-506.66z"
                            fill="#cacaca" />

                        <text x="15" y="110">Mission</text>

                        <text x="15" y="140" className="sub-text">We are reliable partners</text>
                        <text x="15" y="155" className="sub-mission">Provide superior products and services</text>
                        <text x="15" y="170" className="sub-mission">Deliver Swiss quality</text>
                        <text x="15" y="185" className="sub-mission">Be cost competitive</text>

                        <text x="15" y="210" className="sub-text">We are transparent &amp; strive for excellence</text>
                        <text x="15" y="225" className="sub-mission">Use synergies &amp; effectively bundle skills</text>
                        <text x="15" y="240" className="sub-mission">Have efficient, resilient &amp; transparent processes</text>
                        <text x="15" y="255" className="sub-mission">Leverage competences and expertise</text>
                        <text x="15" y="270" className="sub-mission">Monitor performance</text>

                        <text x="15" y="295" className="sub-text">We develop our suppliers</text>
                        <text x="15" y="310" className="sub-mission">Optimizing our level of vertical integration</text>
                        <text x="15" y="325" className="sub-mission">Sustaining partnerships</text>
                        <text x="15" y="340" className="sub-mission">Managing our supply base</text>
                    </g>

                    <g id="layer2">
                        <path id="path4804"
                            d="m514.89 57.5-108.17 138.79 254.83 365.38h138.45v-504.17h-285.11z"
                            fill="#cacaca" />

                        <text x="520" y="110">Vision</text>

                        <text x="520" y="140" className="sub-text">We add value and competitiveness</text>
                        <text x="520" y="160" className="sub-text">to Schindler Group through</text>
                        <text x="520" y="180" className="sub-text">excellence in Sourcing,</text>
                        <text x="520" y="200" className="sub-text">Manufacturing and Distribution</text>
                    </g>

                    <path id="path4802" fill="none"
                        d="m402.97 201.1-133.59 171.4h253.13l-119.54-171.4z" />

                    <g id="layer3">
                        <path id="rect4715"
                            d="m0.83398 378.33v183.33h653.61l-127.86-183.33h-525.74z"
                            fill="#cacaca" />

                        <text x="15" y="430">Values</text>

                        <text x="15" y="460" className="sub-text">Safety</text>
                        <text x="15" y="480" className="sub-text">Create value for the customer</text>
                        <text x="15" y="500" className="sub-text">Commitment to people development</text>
                        <text x="15" y="520" className="sub-text">Integrity and Trust</text>
                        <text x="15" y="540" className="sub-text">Quality</text>
                    </g>
                </svg>

                <div className="cc-left-heading">Our Core Values</div>
            </div>


            {/* CIRCLE NAV */}
            <div className="cc-circle-heading">Our Core Values</div>

            <div className="cc-circle">
                <div className="cc-circle__items">
                    <div className="cc-circle__items-inner">
                        <div className="cc-circle__inner">
                            <img src="cour value.png" className="cc-circle__logo" alt="Logo" />
                        </div>

                        <div className="cc-circle__item cc-circle__item--hidden cc-circle__item--one" data-title="Academics" />
                        <div className="cc-circle__item cc-circle__item--hidden cc-circle__item--two" data-title="Research" />
                        <div className="cc-circle__item cc-circle__item--hidden cc-circle__item--three" data-title="Campus" />
                        <div className="cc-circle__item cc-circle__item--hidden cc-circle__item--four" data-title="Placements" />
                    </div>
                </div>

                <div className="cc-circle__content">
                    <div className="cc-circle__content-inner" id="common">
                        <p>Select a category to explore more information.</p>
                    </div>

                    <div className="cc-circle__content-inner" id="Academics">
                        <div className="cc-circle__title">Academics</div>
                        <ul className="cc-circle__link-list">
                            <li>
                                <a href="#"><h3>Undergraduate Programs</h3><p>Diverse courses for future leaders.</p></a>
                            </li>
                            <li>
                                <a href="#"><h3>Postgraduate Programs</h3><p>Advanced studies fostering expertise.</p></a>
                            </li>
                        </ul>
                    </div>

                    <div className="cc-circle__content-inner" id="Research">
                        <div className="cc-circle__title">Research</div>
                        <ul className="cc-circle__link-list">
                            <li><a href="#"><h3>Innovation Labs</h3><p>Advanced labs enabling interdisciplinary work.</p></a></li>
                            <li><a href="#"><h3>Publications</h3><p>Impactful research globally.</p></a></li>
                        </ul>
                    </div>

                    <div className="cc-circle__content-inner" id="Campus">
                        <div className="cc-circle__title">Campus Life</div>
                        <ul className="cc-circle__link-list">
                            <li><a href="#"><h3>Clubs & Societies</h3><p>A vibrant community fostering creativity.</p></a></li>
                            <li><a href="#"><h3>Sports & Culture</h3><p>Facilities encouraging growth.</p></a></li>
                        </ul>
                    </div>

                    <div className="cc-circle__content-inner" id="Placements">
                        <div className="cc-circle__title">Placements</div>
                        <ul className="cc-circle__link-list">
                            <li><a href="#"><h3>Career Services</h3><p>Guiding students toward success.</p></a></li>
                            <li><a href="#"><h3>Top Recruiters</h3><p>Global opportunities from top companies.</p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
