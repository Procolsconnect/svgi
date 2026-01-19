import React, { useState, useEffect, useRef } from "react";
import styles from "./EventStack.module.css";

/**
 * EventStack Component
 * 
 * @param {Array} events - Array of event objects: { title, description, image, angle }
 * @param {string} title - Optional section title
 */
const EventStack = ({ events = [], title = "Latest Events" }) => {
    const stackRef = useRef(null);
    const [stackK, setStackK] = useState(0);
    const stackN = events.length;

    useEffect(() => {
        if (stackRef.current) {
            stackRef.current.style.setProperty("--k", String(stackK));
            stackRef.current.style.setProperty("--n", String(stackN));
        }
    }, [stackK, stackN]);

    const handleStackInc = (inc) => {
        setStackK((prev) => {
            const next = (prev + inc + stackN) % stackN;
            return next;
        });
    };

    if (stackN === 0) return null;

    return (
        <section className={styles.latestEventsSection}>
            <div className={styles.eventsContainer}>
                {title && <h2>{title}</h2>}
                <section
                    className={styles.stackSlider}
                    ref={stackRef}
                    style={{ position: "relative" }}
                >
                    {events.map((event, index) => (
                        <article
                            key={index}
                            className={index === stackK ? styles.activeArticle : ""}
                            style={{
                                "--i": index,
                                "--a": event.angle || "0deg"
                            }}
                        >
                            <h2>{event.title}</h2>
                            <em dangerouslySetInnerHTML={{ __html: event.description }}></em>
                            <img src={event.image} alt={event.title} />
                            <div className={styles.navButtons}>
                                <button
                                    aria-label="previous"
                                    data-inc="-1"
                                    onClick={() => handleStackInc(-1)}
                                />
                                <button
                                    aria-label="next"
                                    data-inc="1"
                                    onClick={() => handleStackInc(1)}
                                />
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </section>
    );
};

export default EventStack;
