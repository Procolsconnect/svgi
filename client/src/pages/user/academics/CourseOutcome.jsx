import React, { useEffect, useRef } from "react";
import styles from "./courseOutcome.module.css";

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
                clearInterval(loop);
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
        <div className={styles.body}>
            {/* HERO SECTION */}
            <div className={styles.hero}>
                <img src="/images/instu.jpg" alt="Hero Background" />
                <h1>Course Outcome</h1>
            </div>

            {/* MAIN SECTION */}
            <div className={styles.mainSection}>
                {/* LEFT UNRAVEL SECTION */}
                <div className={styles.unravelSection}>
                    <h1 ref={headlineRef} contentEditable={true}>
                        Upcoming courses
                    </h1>
                    <code>Our student growth plan in my college</code>
                </div>

                {/* RIGHT GALLERY */}
                <div className={styles.gallery}>
                    <img src="https://picsum.photos/id/1015/500/350" alt="Gallery 1" />
                    <img src="https://picsum.photos/id/1016/500/350" alt="Gallery 2" />
                    <img src="https://picsum.photos/id/1024/500/350" alt="Gallery 3" />
                </div>
            </div>

            {/* LEFT HEADING */}
            <div className={styles.leftHeading}>Our Student Career Foundation</div>

            {/* HOVER CARDS */}
            <div className={styles.hoverGallery}>
                {[
                    { img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg", title: "City Streets", desc: "Lorem ipsum dolor" },
                    { img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample59.jpg", title: "Record Store", desc: "At vero eos et accusamus" },
                    { img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample54.jpg", title: "Hello World", desc: "Sed ut perspiciatis" },
                    { img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample54.jpg", title: "New Course", desc: "Doloremque laudantium" }
                ].map((item, idx) => (
                    <figure key={idx} className={styles.snip1116}>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            <h2>
                                {item.title.split(" ")[0]}{" "}
                                <span>{item.title.split(" ")[1] || ""}</span>
                            </h2>
                            <div className={styles.caption}>
                                <p>{item.desc}</p>
                            </div>
                        </figcaption>
                        <a href="#" aria-label={item.title}></a>
                    </figure>
                ))}
            </div>
        </div>
    );
}