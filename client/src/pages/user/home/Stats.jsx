import React, { useEffect, useRef } from "react";
import styles from "./Stats.module.css";
import { MoveRight } from "lucide-react";

const statsData = [
    {
        id: 1,
        number: "100+",
        label: "WEBSITES CREATED",
        link: "#"
    },
    {
        id: 2,
        number: "$1M+",
        label: "REVENUE GENERATED",
        link: "#"
    },
    {
        id: 3,
        number: "50+",
        label: "HAPPY CLIENTS",
        link: "#"
    },
    {
        id: 4,
        number: "10+",
        label: "YEARS EXPERIENCE",
        link: "#"
    }
];

const Stats = () => {
    return (
        <section className={styles.statsSection}>
            <div className={styles.statsContainer}>
                <div className={styles.header}>
                    <h2 className={styles.title}>A Glimpse into Our Work</h2>
                </div>

                <div className={styles.statsGrid}>
                    {statsData.map((stat) => (
                        <div key={stat.id} className={styles.statCard}>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>
                                <MoveRight className={styles.arrowIcon} size={16} />
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
