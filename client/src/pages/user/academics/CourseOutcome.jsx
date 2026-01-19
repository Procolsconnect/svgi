import React, { useEffect, useRef } from "react";
import styles from "./courseOutcome.module.css";
import CommonHero from "../../../components/CommonHero";
export default function CourseOutcome() {
    const headlineRef = useRef(null);

    // UNRAVEL EFFECT
    const unravel = (el, t = 18) => {
        let chars = el.innerText.split("");
        const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP. ".split("");
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
            <CommonHero
                apiEndpoint="/api/outcomehero"
                defaultTitle="Course Outcome"
                sectionsSelector="section"
            />
            {/* MAIN SECTION */}
            <div className={styles.mainSection}>
                {/* LEFT UNRAVEL SECTION */}
                <div className={styles.unravelSection}>
                    <h2  ref={headlineRef} contentEditable={false}>
                        Upcoming courses
                    </h2 >
                    <p>Our student growth plan focuses on developing practical skills alongside academic knowledge to prepare students for real-world challenges. We encourage critical thinking, teamwork, and problem-solving through projects, workshops, and industry exposure. Continuous mentoring and skill-based training help students identify their strengths and career goals early..</p>
                </div>

                {/* RIGHT GALLERY */}
                <div className={styles.gallery}>
                    <img src="https://picsum.photos/id/1015/500/350" alt="Gallery 1" />
                    <img src="https://picsum.photos/id/1016/500/350" alt="Gallery 2" />
                    <img src="https://picsum.photos/id/1024/500/350" alt="Gallery 3" />
                </div>
            </div>

            {/* LEFT HEADING */}
            <h2  className={styles.leftHeading}>Our Student Career Foundation</h2 >

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