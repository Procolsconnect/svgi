import { useEffect } from "react";
import BalticSlider from "./BalticSlider";

export default function SVGIOverview() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.onload = () => {
            const smoothScroll = (target, time = 1000) => {
                if (target === "toTop") {
                    window.$("html,body").animate({ scrollTop: 0 }, time);
                } else {
                    window.$("html,body").animate({ scrollTop: target.offset().top }, time);
                }
            };

            window.$(document).ready(function () {
                let count = 0;
                const sections = window.$(".svgio-section");
                window.$("#svgio-scroll").on("click", function () {
                    const $this = window.$(this);
                    const top = $this.offset().top - window.$(window).scrollTop() + 55;
                    $this
                        .css({ position: "fixed", top })
                        .animate({ right: "5%", top: "90%" }, 600)
                        .addClass("svgio-clicked");

                    let target;
                    if (count > sections.length - 1) {
                        count = -1;
                        smoothScroll("toTop");
                        $this.removeClass("svgio-rotate");
                    } else {
                        target = window.$(sections[count]);
                        if (count === sections.length - 1) $this.addClass("svgio-rotate");
                        smoothScroll(target);
                    }
                    count++;

                    window.$(this).find(".svgio-arrow-bounce").removeClass("svgio-arrow-bounce");
                });
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <style>{`
        .svgio-root {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          color: #333;
        }

        .svgio-hero {
          min-height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          color: white;
        }
        .svgio-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }
        .svgio-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }
        .svgio-hero-title {
          position: relative;
          font-size: 52px;
          font-weight: 800;
          color : white;
        }
        .svgio-hero-title::after {
          content: "";
          display: block;
          width: 120px;
          height: 5px;
          margin: 14px auto 0;
          background: linear-gradient(90deg, #ff512f, #dd2476);
          border-radius: 3px;
          animation: svgio-underline-pulse 2s infinite;
        }
        @keyframes svgio-underline-pulse {
          0%, 100% { transform: scaleX(1); opacity: 0.8; }
          50% { transform: scaleX(1.4); opacity: 1; }
        }

        /* Scroll button */
        #svgio-scroll {
          text-align: center;
          width: 50px;
          height: 50px;
          background: black;
          border-radius: 50%;
          margin: 0 auto;
          margin-top: -25px;
          margin-right: -25px;
          color: white;
          font-size: 26px;
          line-height: 26px;
          cursor: pointer;
          position: absolute;
          right: 50%;
          transition: transform 0.6s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        #svgio-scroll.svgio-clicked { transform: rotate(360deg); }
        #svgio-scroll.svgio-rotate { transform: rotate(180deg); }
        .svgio-arrow-bounce {
          animation: svgio-arrow 1s infinite cubic-bezier(0.4, 0, 0.6, 1);
          position: relative;
        }
        @keyframes svgio-arrow {
          0% { bottom: -13px; }
          50% { bottom: -8px; }
          100% { bottom: -13px; }
        }

        /* Layout */
        .svgio-hero-section {
          display: flex;
          max-width: 1440px;
          gap: 2em;
          justify-content: space-between;
          margin: 3em 2em;
        }
        .svgio-text {
          width: 40%;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .svgio-text-short { text-transform: uppercase; font-size: 0.75rem; color: #479A7E; }
        .svgio-text-title { line-height: 1.1; margin: 0; font-weight: 800; }
        .svgio-text-description { line-height: 145%; font-size: 1em; font-weight: 300; padding-bottom: 1em; }

        .svgio-grid-container {
          min-width: 60%;
          display: grid;
          grid-gap: .5em;
          grid-template-columns: repeat(8, 1fr);
        }
        .svgio-grid-item {
          background-color: grey;
          border-radius: 0.5em;
          background-size: cover;
          background-position: center;
        }

        /* Specific grid items */
        .svgio-one { grid-column: 1 / 2; grid-row: 2 / 3; background-image: url(//unsplash.it/400/400); }
        .svgio-two { grid-column: 2 / 5; grid-row: 1 / 4; background-image: url(//unsplash.it/900/900); }
        .svgio-three { grid-column: 5 / 6; grid-row: 1 / 2; background-image: url(//unsplash.it/500/400); }
        .svgio-four { grid-column: 6 / 7; grid-row: 1 / 2; background-color: #FDF5DD; border-radius: 0 0 100px 0; }
        .svgio-five { grid-column: 5 / 7; grid-row: 2 / 4; background-image: url(//unsplash.it/400/500); }
        .svgio-six { grid-column: 7 / 8; grid-row: 2 / 3; background-color: #D3F0EE; border-radius: 0 100px 0 0; }
        .svgio-seven { grid-column: 7 / 8; grid-row: 3 / 4; background-image: url(//unsplash.it/500/500); }
        .svgio-eight { grid-column: 8 / 9; grid-row: 3 / 4; border-radius: 50%; background-color: #CED7ED; }
        .svgio-nine { grid-column: 1 / 2; grid-row: 4 / 5; background-color: #FADEE0; border-radius: 100px 0 0 0; }
        .svgio-ten { grid-column: 2 / 3; grid-row: 4 / 5; background-image: url(//unsplash.it/300/300); }
        .svgio-eleven { grid-column: 3 / 5; grid-row: 4 / 6; background-image: url(//unsplash.it/700/700); }
        .svgio-twelve { grid-column: 5 / 6; grid-row: 4 / 5; background-image: url(//unsplash.it/300/500); }

        .svgio-bigger { display: flex; padding: 3em 4em; gap: 6em; align-items: center; margin: 0; }
        .svgio-grid-tilt { display: grid; grid-template-columns: repeat(4, 120px); gap: 18px; transform: rotate(-10deg); }
        .svgio-grid-tilt img {
          width: 100%; height: 100%; object-fit: cover;
          border-radius: 16px; box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          transition: 0.3s;
        }
        .svgio-grid-tilt img:hover { transform: scale(1.07); }
        .svgio-text-bigger { max-width: 520px; }
        .svgio-text-short-bigger { font-size: 1rem; color: #333; }
        .svgio-text-title-bigger { font-size: 3.2rem; font-weight: bold; }
        .svgio-text-description-bigger { font-size: 1.2rem; line-height: 1.8; color: #555; }
      `}</style>

            <div className="svgio-root">
                <div className="svgio-hero">
                    <img src="/images/instu.jpg" alt="Hero Background" />
                    <h1 className="svgio-hero-title">Overview</h1>
                </div>

                <div id="svgio-scroll">
                    <span className="svgio-arrow-bounce">↓</span>
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

                <section className="svgio-section">
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