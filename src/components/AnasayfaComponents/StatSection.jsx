import React from 'react';

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
    ]



    return (
        <section className={styles.statSectionContainer}>
            {stats.map((statItem, index) => (
                <div key={index} className={styles.stat}>
                    {statItem.statImage}
                    <p><span>{statItem.statNumber}</span> {statItem.statTitle}</p>
                </div>
            ))}
        </section>
    );
}

export default StatSection;