import React, { useEffect, useRef } from "react";
import "./library.css";

export default function LibraryPage() {
    // Carousel refs & state
    const carouselRef = useRef(null);
    const speedRef = useRef(0.5);
    const positionRef = useRef(0);

    // Video refs
    const videoRef = useRef(null);
    const thumbRef = useRef(null);
    const playBtnRef = useRef(null);

    /* ---------------------------------
       CAROUSEL ANIMATION (React Version)
    ----------------------------------- */
    useEffect(() => {
        const carousel = carouselRef.current;
        let frame;

        const moveCarousel = () => {
            positionRef.current -= speedRef.current;

            if (positionRef.current < -320) {
                positionRef.current = 0;
                if (carousel.firstElementChild) {
                    carousel.appendChild(carousel.firstElementChild);
                }
            }

            carousel.style.transform =
                `rotate(-5deg) translateX(${positionRef.current}px)`;

            frame = requestAnimationFrame(moveCarousel);
        };

        moveCarousel();

        const pause = () => (speedRef.current = 0);
        const resume = () => (speedRef.current = 0.5);

        carousel.addEventListener("mouseenter", pause);
        carousel.addEventListener("mouseleave", resume);

        return () => {
            cancelAnimationFrame(frame);
            carousel.removeEventListener("mouseenter", pause);
            carousel.removeEventListener("mouseleave", resume);
        };
    }, []);

    /* ---------------------------------
       PLAY VIDEO (React Version)
    ----------------------------------- */
    const playVideo = () => {
        if (thumbRef.current) thumbRef.current.style.display = "none";
        if (playBtnRef.current) playBtnRef.current.style.display = "none";

        if (videoRef.current) {
            videoRef.current.style.display = "block";
            videoRef.current.src += "?autoplay=1";
        }
    };

    return (
        <div className="lp-body">
            {/* HERO SECTION */}
            <div id="lp-hero" className="lp-hero">
                <img src="/images/instu.jpg" alt="Hero Background" />
                <div className="lp-wrapper">
                    <h1>Our Library</h1>
                </div>
            </div>

            {/* MAIN / CAROUSEL */}
            <main className="lp-main">
                <div className="lp-main-header">
                    <span className="lp-badge">Join over 100,000 happy creators</span>
                    <h1 className="lp-title">Engage Audiences<br />with Stunning Videos</h1>
                    <p className="lp-subtitle">
                        Boost Your Brand with High-Impact Short Videos from our expert content creators.
                        Our team is ready to propel your business forward.
                    </p>
                </div>

                <div className="lp-carousel-wrapper">
                    <div className="lp-carousel-container">
                        <div className="lp-carousel-track" ref={carouselRef}>
                            <div className="lp-carousel-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Business" /></div>
                            <div className="lp-carousel-card"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="Creative" /></div>
                            <div className="lp-carousel-card"><img src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&q=80" alt="Outdoor" /></div>
                            <div className="lp-carousel-card"><img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80" alt="Wellness" /></div>
                            <div className="lp-carousel-card"><img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80" alt="Technology" /></div>
                            <div className="lp-carousel-card"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" alt="Lifestyle" /></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* VIDEO + ABOUT SECTION */}
            <div className="lp-content-wrapper">
                <div id="lp-thumbnail-container">
                    <iframe
                        ref={videoRef}
                        id="lp-video"
                        src="https://www.youtube.com/embed/mmtisRvZ0-4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ display: "none" }}
                    />

                    <img
                        ref={thumbRef}
                        className="lp-thumbnail"
                        src="https://img.youtube.com/vi/mmtisRvZ0-4/maxresdefault.jpg"
                        alt="Video Thumbnail"
                    />

                    <div
                        ref={playBtnRef}
                        className="lp-start-video"
                        onClick={playVideo}
                    >
                        <img src="https://i.imgur.com/v2zNG32.png" alt="Play Button" />
                    </div>
                </div>

                <div className="lp-video-description">
                    <h2>About This Video</h2>
                    <p>
                        This video highlights the innovative ways we empower educators and students with
                        meaningful insights. By leveraging technology, we streamline engagement and simplify learning.
                    </p>
                    <p className="lp-mt3">
                        Our mission is to create a path to student success, ensuring every learner gets
                        the support they need.
                    </p>
                </div>
            </div>

            {/* TABLE SECTION */}
            <h2 className="lp-section-heading">Learning Resources (as on 21.03.2025)</h2>

            <table className="lp-video-table">
                <thead>
                    <tr><th>Library Resources</th><th>Vellore-Campus</th></tr>
                </thead>
                <tbody>
                    <tr><td>Total Number of Books</td><td>2,50,886</td></tr>
                    <tr><td>Total Number of Back Volumes</td><td>18,350</td></tr>
                    <tr><td>Print Journals / Magazines</td><td>412</td></tr>
                    <tr><td>National</td><td>330</td></tr>
                    <tr><td>International</td><td>82</td></tr>
                    <tr>
                        <td>
                            Online databases / E-Journals<br /><small>(On and Off Campus access facility)</small>
                        </td>
                        <td>16,829</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="lp-justify">
                            ABI Inform Complete, ACM-DL, ACS Publications, ASCE-DL, ASME-DL,
                            ASTM Journals, EBSCO, ScienceDirect, Wiley, Springer, Scopus, Web of Science, and more.
                        </td>
                    </tr>
                    <tr>
                        <td>E-Books<br /><small>(On and Off Campus access)</small></td>
                        <td>3,64,708</td>
                    </tr>
                </tbody>
            </table>

            {/* MORE VIDEOS */}
            <h2 className="lp-section-heading">More Videos</h2>

            <table className="lp-video-table">
                <tbody>
                    <tr>
                        <td>
                            <b className="lp-video-title"><a href="#">Features</a></b>
                            <p className="lp-video-p">
                                Integrated library system, RFID check-in/out,
                                touchscreen kiosks, virtual machines, CCTV surveillance, and more.
                            </p>
                        </td>
                        <td>
                            <div className="lp-image">
                                <img src="\images\training.jpg" alt="Welcome" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <hr className="lp-video-hr" />

            <table className="lp-video-table">
                <tbody>
                    <tr>
                        <td>
                            <div className="lp-image">
                                <img src="\images\training 1.jpg" alt="Assets" />
                            </div>
                        </td>
                        <td>
                            <b className="lp-video-title"><a href="#">Special Features</a></b>
                            <p className="lp-video-p">
                                High-quality librarians, updated textbooks, e-resources,
                                scanning facilities, and more.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <hr className="lp-video-hr" />

            <table className="lp-video-table">
                <tbody>
                    <tr>
                        <td>
                            <b className="lp-video-title"><a href="#">225 Years of Service</a></b>
                            <p className="lp-video-p">
                                A historical look at the US Coast Guard’s legacy in rescue,
                                disaster response, and national security.
                            </p>
                        </td>
                        <td>
                            <div className="lp-image">
                                <img src="\images\tech .jpg" alt="History" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <hr className="lp-video-hr" />
        </div>
    );
}
