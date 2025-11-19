import { useEffect } from "react";
import "./balticSlider.css";

export default function BalticSlider() {
    useEffect(() => {
        class BeerSlider {
            constructor(e, { start = "50" } = {}) {
                this.start = parseInt(e.dataset.start || start) || 50;
                this.start = Math.min(100, Math.max(0, this.start));
                this.element = e;
                this.revealContainer = e.children[1];
                this.revealElement = this.revealContainer.children[0];
                this.range = this.addElement("input", {
                    type: "range",
                    class: "bsio-beer-range",
                    value: this.start,
                    "aria-valuenow": this.start
                });
                this.handle = this.addElement("span", { class: "bsio-beer-handle" });
                this.onImagesLoad();
            }
            init() {
                this.element.classList.add("bsio-beer-ready");
                this.move();
                this.addListeners();
            }
            loadingImg(src) {
                return new Promise((s, f) => {
                    if (!src) s();
                    const i = new Image();
                    i.onload = s;
                    i.onerror = f;
                    i.src = src;
                });
            }
            loadedBoth() {
                const a = this.element.querySelector(".bsio-winter image").getAttribute("xlink:href");
                const b = this.revealElement.querySelector("image").getAttribute("xlink:href");
                return Promise.all([this.loadingImg(a), this.loadingImg(b)]);
            }
            onImagesLoad() {
                this.loadedBoth().then(() => this.init());
            }
            addElement(t, a) {
                const e = document.createElement(t);
                Object.keys(a).forEach(k => e.setAttribute(k, a[k]));
                this.element.appendChild(e);
                return e;
            }
            addListeners() {
                ["input", "change"].forEach(ev =>
                    this.range.addEventListener(ev, () => this.move())
                );
            }
            move() {
                this.revealContainer.style.setProperty("--width", `${this.range.value}%`);
                this.handle.style.left = `${this.range.value}%`;
                this.range.setAttribute("aria-valuenow", this.range.value);
                this.element.classList.toggle("bsio-more", this.range.value > 55);
                this.element.classList.toggle("bsio-less", this.range.value < 45);
            }
        }

        new BeerSlider(document.getElementById("bsio-slider"));
    }, []);

    return (
        <>
            {/* Slider Component */}
            <div id="bsio-slider" className="bsio-beer-slider" data-start="75">
                <div className="bsio-ctnr bsio-winter">
                    <svg width="100%" height="100%" viewBox="0 0 600 361" preserveAspectRatio="xMidYMid slice">
                        <image
                            xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/winter.jpg"
                            width="100%" height="100%"
                        />
                    </svg>

                    <section className="bsio-box bsio-box2">
                        <h2>Baltic sea during Winter time</h2>
                        <p>
                            At -10.6 °C | 12.9 °F on average, January is the coldest month of
                            the year. It is also the driest month. There is only 12 mm | 0.5
                            inch of precipitation in January.
                        </p>
                    </section>
                </div>

                <div className="bsio-beer-reveal">
                    <div className="bsio-ctnr bsio-summer">
                        <svg width="100%" height="100%" viewBox="0 0 600 361" preserveAspectRatio="xMidYMid slice">
                            <image
                                xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/warmsphere-baltic.jpg"
                                width="100%" height="100%"
                            />
                        </svg>

                        <section className="bsio-box bsio-box1">
                            <h2>Baltic sea during Summer time</h2>
                            <p>
                                With an average of 22.8 °C | 73.0 °F, July is the warmest month.
                                In June, precipitation peaks at 98 mm | 3.9 inches.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* WHITE CONTENT SECTION */}
            <section className="bsio-content-section">
                <h1>Welcome to the Baltic seaside</h1>
                <p>
                    The Baltic Sea is a mediterranean sea of the Atlantic Ocean, enclosed
                    by Denmark, Estonia, Finland, Latvia, Lithuania, Sweden, Germany,
                    Poland, Russia and others. Stretching from 53°N to 66°N latitude, it is
                    one of the most unique marine environments in Europe.
                </p>
            </section>

            {/* Clip-path */}
            <svg width="0" height="0">
                <defs>
                    <clipPath id="bsio-svgPath" clipPathUnits="objectBoundingBox" transform="scale(0.00083 0.0075)">
                        <path
                            d="M1397,490H204c263,0,160-32,371-33,191.52-.91,150.49-135.14,225-92C990,475,1144,490,1397,490Z"
                            transform="translate(-178 -350.46)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
}
