import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalGallery.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalGallery = () => {
    const galleryRefs = useRef([]);

    useEffect(() => {
        galleryRefs.current.forEach((sec) => {
            const strip = sec.querySelector(".hg-strip");

            function getVals() {
                return {
                    width: strip.scrollWidth,
                    scrollX: strip.scrollWidth - window.innerWidth,
                };
            }

            gsap.to(strip, {
                x: () => -getVals().scrollX,
                ease: "none",
                scrollTrigger: {
                    trigger: sec,
                    scrub: true,
                    pin: sec,
                    start: "top top",
                    end: () => "+=" + getVals().width,
                    invalidateOnRefresh: true,
                },
            });
        });
    }, []);

    return (
        <>
            {/* TOP LEFT-ALIGNED CONTENT */}
            <section className="hg-panel">
                <h3 className="hg-heading">Campus Events</h3>
                <p className="hg-text">
                    Campus events are activities like sports days, cultural festivals, seminars, and social gatherings
                    that enrich the student experience beyond academics. They foster community and connection,
                    helping students develop important life skills like communication, teamwork, and leadership
                    through participation and organization. Engaging in these events can also enhance student
                    satisfaction, retention, and help uncover future career interests.
                </p>
            </section>

            {/* HORIZONTAL GALLERY */}
            <section className="hg-portfolio">
                <div className="hg-container">
                    <div
                        className="hg-wrapper"
                        ref={(el) => el && galleryRefs.current.push(el)}
                    >
                        <div className="hg-strip">
                            <div className="hg-project"><img src="https://assets.codepen.io/16327/portrait-image-1.jpg" alt="Project 1" /></div>
                            <div className="hg-project"><img src="https://assets.codepen.io/16327/portrait-image-2.jpg" alt="Project 2" /></div>
                            <div className="hg-project"><img src="https://assets.codepen.io/16327/portrait-image-3.jpg" alt="Project 3" /></div>
                            <div className="hg-project"><img src="https://assets.codepen.io/16327/portrait-image-4.jpg" alt="Project 4" /></div>
                            <div className="hg-project"><img src="https://assets.codepen.io/16327/portrait-image-5.jpg" alt="Project 5" /></div>
                            <div className="hg-project"><img src="https://assets.codepen.io/16327/portrait-image-6.jpg" alt="Project 6" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HorizontalGallery;
