import React, { useEffect, useRef, useState } from "react";
import './vismis.css'
import axios from 'axios'
const apiurl = import.meta.env.VITE_API_URL;


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
                const target = item.attr("data-title"); // Academics, Research etc.

                // Update React state for active section
                setActive(target.toLowerCase()[0]);

                // Manage active circle item
                items.removeClass("cc-circle__item--active");
                item.addClass("cc-circle__item--active");

                // Manage visible right-side content
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

    const [heroBG, setHeroBG] = useState();
    const [card, setCard] = useState();
    const [mvv, setMvv] = useState(null);
    const [data, setData] = useState(null);
    const [active, setActive] = useState("common");


    useEffect(() => {
        axios.get(`${apiurl}/api/about/vismishero`)
            .then(res => setHeroBG(res.data.data))
            .catch(err => console.log(err))

        axios.get(`${apiurl}/api/about/vismiscard`)
            .then(res => setCard(res.data.data))
            .catch(err => console.log(err))

        axios.get(`${apiurl}/api/about/vismislist`)
            .then(res => setMvv(res.data.data))
            .catch(err => console.error(err));

        axios.get(`${apiurl}/api/about/vismiscircle`)
            .then(res => { setData(res.data.data[0]); })
            .catch(err => console.error("Fetch Error:", err));
    }, [])

    return (
        <div className="cc-wrapper">

            {/* HERO */}
            <div id="cc-hero">
                {/* Replace these with valid image paths in your project */}
                <img src={heroBG?.image} alt="Hero Background" />
                <h1>{heroBG?.title}</h1>
            </div>

            {/* CARDS */}
            <ol className="cc-cards__container" title="Blog entries">
                {card?.map((card) => (
                    <li className="cc-card" key={card.id}>
                        <div className="cc-card__thumb">
                            <img src={card.image} alt={`Card ${card.id}`} />
                        </div>
                        <div className="cc-card__content">
                            <h3 className="cc-card__title">{card.title}</h3>
                            <p className="cc-card__text">{card.desc}</p>
                            <a className="cc-card__btn" href={card.link} aria-label={`Read more about Card Title ${card.id}`}><i data-feather="arrow-right" /></a>
                        </div>
                    </li>
                ))}
            </ol>

            {/* SVG SECTION */}
            <div className="cc-svg-wrapper">
                {mvv?.length > 0 && (
                    <svg
                        id="svg4136"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 1000 670"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* MISSION */}
                        <g id="layer1">
                            <path
                                id="path4806"
                                d="m0.83398 57.5v315h261.4l-0.15234-0.11914 245.41-314.88h-506.66z"
                                fill="#cacaca"
                            />

                            <text x="15" y="110">{mvv[0].mission.title}</text>

                            {mvv[0].mission.sections.map((section, index) => (
                                <React.Fragment key={index}>
                                    <text x="15" y={140 + index * 70} className="sub-text">
                                        {section.subtitle}
                                    </text>

                                    {section.points.map((point, pIndex) => (
                                        <text
                                            key={`${index}-p-${pIndex}`}
                                            x="15"
                                            y={155 + index * 70 + pIndex * 15}
                                            className="sub-mission"
                                        >
                                            {point}
                                        </text>
                                    ))}
                                </React.Fragment>
                            ))}
                        </g>

                        {/* VISION */}
                        <g id="layer2">
                            <path
                                id="path4804"
                                d="m514.89 57.5-108.17 138.79 254.83 365.38h138.45v-504.17h-285.11z"
                                fill="#cacaca"
                            />

                            <text x="520" y="110">{mvv[0].vision.title}</text>

                            {mvv[0].vision.lines.map((line, index) => (
                                <text key={index} x="520" y={140 + index * 20} className="sub-text">
                                    {line}
                                </text>
                            ))}
                        </g>

                        {/* VALUES */}
                        <g id="layer3">
                            <path
                                id="rect4715"
                                d="m0.83398 378.33v183.33h653.61l-127.86-183.33h-525.74z"
                                fill="#cacaca"
                            />

                            <text x="15" y="430">{mvv[0].values.title}</text>

                            {mvv[0].values.list.map((value, index) => (
                                <text key={index} x="15" y={460 + index * 20} className="sub-text">
                                    {value}
                                </text>
                            ))}
                        </g>
                    </svg>
                )}
                <div className="cc-left-heading">Our Core Values</div>
            </div>


            {/* CIRCLE NAV */}
            <div className="cc-circle-heading">Our Core Values</div>

            <div className="cc-circle">
                <div className="cc-circle__items">
                    <div className="cc-circle__items-inner">

                        {/* LOGO */}
                        <div className="cc-circle__inner">
                            <img src={data?.logo} className="cc-circle__logo" alt="Logo" />
                        </div>

                        {/* Clickable Circle Items */}
                        <div
                            className={`cc-circle__item cc-circle__item--one`}
                            data-title={data?.academics?.title}
                            onActive={() => setActive("academics")}
                            onClick={() => setActive("academics")}
                        />

                        <div
                            className={`cc-circle__item cc-circle__item--two`}
                            data-title={data?.research?.title}
                            onClick={() => setActive("research")}
                        />

                        <div
                            className={`cc-circle__item cc-circle__item--three`}
                            data-title={data?.campus?.title}
                            onClick={() => setActive("campus")}
                        />

                        <div
                            className={`cc-circle__item cc-circle__item--four`}
                            data-title={data?.placements?.title}
                            onClick={() => setActive("placements")}
                        />
                    </div>
                </div>


                {/* RIGHT SIDE CONTENT */}
                <div className="cc-circle__content">

                    {/* DEFAULT VIEW */}
                    <div className={`cc-circle__content-inner ${active === "common" ? "cc-circle__content-inner--is-visible" : ""}`}>
                        {active === "common" && (
                            <p>Select a category to explore more information.</p>
                        )}
                    </div>

                    {/* ACADEMICS */}
                    <div className={`cc-circle__content-inner ${active === "academics" ? "cc-circle__content-inner--is-visible" : ""}`}>
                        {active === "academics" && (
                            <>
                                <div className="cc-circle__title">{data?.academics?.title}</div>
                                <ul className="cc-circle__link-list">
                                    {data?.academics?.items?.map(item => (
                                        <li key={item._id}>
                                            <a href="#">
                                                <h3>{item.heading}</h3>
                                                <p>{item.description}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* RESEARCH */}
                    <div className={`cc-circle__content-inner ${active === "research" ? "cc-circle__content-inner--is-visible" : ""}`}>
                        {active === "research" && (
                            <>
                                <div className="cc-circle__title">{data?.research?.title}</div>
                                <ul className="cc-circle__link-list">
                                    {data?.research?.items?.map(item => (
                                        <li key={item._id}>
                                            <a href="#">
                                                <h3>{item.heading}</h3>
                                                <p>{item.description}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* CAMPUS */}
                    <div className={`cc-circle__content-inner ${active === "campus" ? "cc-circle__content-inner--is-visible" : ""}`}>
                        {active === "campus" && (
                            <>
                                <div className="cc-circle__title">{data?.campus?.title}</div>
                                <ul className="cc-circle__link-list">
                                    {data?.campus?.items?.map(item => (
                                        <li key={item._id}>
                                            <a href="#">
                                                <h3>{item.heading}</h3>
                                                <p>{item.description}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* PLACEMENTS */}
                    <div className={`cc-circle__content-inner ${active === "placements" ? "cc-circle__content-inner--is-visible" : ""}`}>
                        {active === "placements" && (
                            <>
                                <div className="cc-circle__title">{data?.placements?.title}</div>
                                <ul className="cc-circle__link-list">
                                    {data?.placements?.items?.map(item => (
                                        <li key={item._id}>
                                            <a href="#">
                                                <h3>{item.heading}</h3>
                                                <p>{item.description}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                </div>
            </div>

        </div>
    );
}
