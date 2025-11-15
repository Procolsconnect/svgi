import React, { useEffect, useRef } from "react";
import "./courseOutcome.css";

export default function CourseOutcome() {
    const headlineRef = useRef(null);

    // UNRAVEL EFFECT
    const unravel = (el, t = 18) => {
        let chars = el.innerText.split("");
        const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789. ".split("");
        let string = "";

        const loop = setInterval(() => {
            let l = chars.length;
            if (l < 1) {
                clearTimeout(loop);
                return;
            }

            let _string = string;
            for (let i = 0; i < l; i++) {
                let c = allowedChars[Math.floor(Math.random() * allowedChars.length)];

                if (c === chars[i]) {
                    string += chars.shift();
                }

                _string += c;
            }
            el.innerText = _string;
        }, t);
    };

    useEffect(() => {
        if (headlineRef.current) {
            unravel(headlineRef.current);
        }
    }, []);

    return (
        <div className="crs-body">

            {/* HERO SECTION */}
            <div id="crs-hero">
                <img src="\images\instu.jpg" alt="Hero Background" />
                <h1>Course Outcome</h1>
            </div>

            {/* MAIN SECTION */}
            <div className="crs-main-section">

                {/* LEFT UNRAVEL SECTION */}
                <div className="crs-unravel-section">
                    <h1 ref={headlineRef} contentEditable={true}>Upcoming courses</h1>
                    <code>Our student growth plan in my college</code>
                </div>

                {/* RIGHT GALLERY */}
                <div className="crs-gallery">
                    <img src="https://picsum.photos/id/1015/500/350" alt="Gallery 1" />
                    <img src="https://picsum.photos/id/1016/500/350" alt="Gallery 2" />
                    <img src="https://picsum.photos/id/1024/500/350" alt="Gallery 3" />
                </div>
            </div>

            {/* LEFT HEADING FIXED UNDER SECTION */}
            <div className="crs-left-heading">Our Student Career Foundation</div>

            {/* HOVER CARDS */}
            <div className="crs-hover-gallery">
                {[
                    {
                        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg",
                        title: "City Streets",
                        desc: "Lorem ipsum dolor"
                    },
                    {
                        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample59.jpg",
                        title: "Record Store",
                        desc: "At vero eos et accusamus"
                    },
                    {
                        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample54.jpg",
                        title: "Hello World",
                        desc: "Sed ut perspiciatis"
                    },
                    {
                        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample54.jpg",
                        title: "New Course",
                        desc: "Doloremque laudantium"
                    }
                ].map((item, idx) => (
                    <figure key={idx} className="crs-snip1116">
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <h2>
                                {item.title.split(" ")[0]} <span>{item.title.split(" ")[1]}</span>
                            </h2>
                            <div className="caption">
                                <p>{item.desc}</p>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>

        </div>
    );
}
