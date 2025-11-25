import { useEffect, useRef, useState } from "react";
import BalticSlider from "./BalticSlider";
import "./aboutOverview.css";

export default function SVGIOverview() {
    const sectionsRef = useRef([]);
    const [index, setIndex] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        // Collect all sections
        sectionsRef.current = Array.from(document.querySelectorAll(".svgio-section"));
    }, []);

    const handleScrollClick = (e) => {
        const total = sectionsRef.current.length;

        // Trigger click animation
        setClicked(true);
        setTimeout(() => setClicked(false), 600);

        // If last → scroll to top
        if (index >= total) {
            setRotate(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIndex(0);
            return;
        }

        // Scroll to next section
        const target = sectionsRef.current[index];
        if (target) {
            const topVal = target.offsetTop - 60;
            window.scrollTo({ top: topVal, behavior: "smooth" });
        }

        const nextIndex = index + 1;
        setIndex(nextIndex);

        // Last section reached → rotate arrow
        if (nextIndex === total) {
            setRotate(true);
        }
    };

    return (
        <>
            <div className="svgio-root">
                <div className="svgio-hero">
                    <img src="/images/instu.jpg" alt="Hero Background" />
                    <h1 className="svgio-hero-title">Overview</h1>
                </div>

                {/* SCROLL ARROW */}
                <div
                    id="svgio-scroll"
                    onClick={handleScrollClick}
                    className={`${clicked ? "svgio-clicked" : ""} ${rotate ? "svgio-rotate" : ""}`}
                >
                    <span className="svgio-arrow-bounce">
                        {rotate ? "↑" : "↓"}
                    </span>
                </div>

                <section className="svgio-section svgio-bigger">
                    <div className="svgio-grid-tilt">
                        <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=500&q=60" />
                        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60" />
                        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60" />
                        <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60" />
                    </div>

                    <div className="svgio-text svgio-text-bigger">
                        <p className="svgio-text-short-bigger">Lorem ipsum dolor sit amet</p>
                        <h1 className="svgio-text-title-bigger">Lorem ipsum dolor sit amet</h1>
                        <p className="svgio-text-description-bigger">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                            maiores velit laudantium similique impedit aliquid.
                        </p>
                    </div>
                </section>

                <section className="svgio-section gird-layout">
                    <div className="svgio-hero-section">
                        <div className="svgio-text">
                            <p className="svgio-text-short">Lorem ipsum dolor sit amet</p>
                            <h1 className="svgio-text-title">Lorem ipsum dolor sit amet</h1>
                            <p className="svgio-text-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                                necessitatibus reiciendis. Voluptatem, eaque fugiat?
                            </p>
                        </div>

                        <div className="svgio-grid-container">
                            <div className="svgio-grid-item svgio-one"></div>
                            <div className="svgio-grid-item svgio-two"></div>
                            <div className="svgio-grid-item svgio-three"></div>
                            <div className="svgio-grid-item svgio-four"></div>
                            <div className="svgio-grid-item svgio-five"></div>
                            <div className="svgio-grid-item svgio-six"></div>
                            <div className="svgio-grid-item svgio-seven"></div>
                            <div className="svgio-grid-item svgio-eight"></div>
                            <div className="svgio-grid-item svgio-nine"></div>
                            <div className="svgio-grid-item svgio-ten"></div>
                            <div className="svgio-grid-item svgio-eleven"></div>
                            <div className="svgio-grid-item svgio-twelve"></div>
                        </div>
                    </div>
                </section>

                <BalticSlider />
            </div>
        </>
    );
}
