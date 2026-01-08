import React, { useState, useEffect, useRef } from 'react';

// Styles
import styles from "../../styles/page_styles/Anasayfa.module.scss";

// React-Icons
import { FaProjectDiagram } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";


const StatSection = () => {

    const stats = [
        {
            statTitle: "TAMAMLANMIŞ PROJE",
            statImage: <FaProjectDiagram />,
            statNumber: 113
        },
        {
            statTitle: "GLOBAL ÖDÜL",
            statImage: <FaMedal />,
            statNumber: 12
        },
        {
            statTitle: "AKTİF ÇALIŞAN",
            statImage: <HiUserGroup />,
            statNumber: 25
        }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    const statRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'));
                        const endNumber = stats[index].statNumber;
                        const duration = 2000;
                        let startTimestamp = null;

                        const step = (timestamp) => {
                            if (!startTimestamp) startTimestamp = timestamp;
                            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                            setCounts((prevCounts) => {
                                const newCounts = [...prevCounts];
                                newCounts[index] = Math.floor(progress * endNumber);
                                return newCounts;
                            });

                            if (progress < 1) {
                                window.requestAnimationFrame(step);
                            }
                        };

                        window.requestAnimationFrame(step);

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        statRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={styles.statSectionContainer}>
            {stats.map((statItem, index) => (
                <div
                    key={index}
                    className={styles.stat}
                    data-index={index}
                    ref={(el) => (statRefs.current[index] = el)}
                >
                    {statItem.statImage}
                    <h2>{counts[index]}</h2>
                    <p>{statItem.statTitle}</p>
                </div>
            ))}
        </section>
    );
}

export default StatSection;