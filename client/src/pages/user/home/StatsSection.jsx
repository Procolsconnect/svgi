import React, { useState, useEffect, useRef } from 'react';
import styles from './StatsSection.module.css';

const data = [
    {
        id: 1,
        displayValue: "A++",
        label: "GRADE BY NAAC, MHRD",
        isCountable: false
    },
    {
        id: 2,
        end: 190,
        suffix: "+",
        label: "Foreign Adjunct Professors",
        isCountable: true
    },
    {
        id: 3,
        end: 500,
        suffix: "+",
        label: "International Partners",
        isCountable: true
    },
    {
        id: 4,
        end: 372,
        suffix: "acre",
        label: "Eco-friendly campus with over 62 lakhs sq. feet built-up space",
        isCountable: true
    },
    {
        id: 5,
        end: 142,
        label: "Rank in the world in Engineering & Technology by QS Subject Rankings",
        isCountable: true
    },
];

const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;

            if (progress < duration) {
                const nextCount = Math.min(Math.floor((progress / duration) * end), end);
                setCount(nextCount);
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={elementRef}>{count}{suffix}</span>;
};

const StatsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {data.map((item) => (
                    <div key={item.id} className={styles.statItem}>
                        <div className={styles.numberWrapper}>
                            {item.isCountable ? (
                                <Counter end={item.end} suffix={item.suffix || ""} />
                            ) : (
                                <span>{item.displayValue}</span>
                            )}
                        </div>
                        <p className={styles.label}>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
