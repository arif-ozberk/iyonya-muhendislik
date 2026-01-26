import React from 'react';

// Styles
import styles from "../../styles/page_styles/Anasayfa.module.scss";

// Assets
import referenceLogo1 from "../../assets/referanslar/reference-logo-1.png";
import referenceLogo2 from "../../assets/referanslar/reference-logo-2.png";
import referenceLogo3 from "../../assets/referanslar/reference-logo-3.png";
import referenceLogo4 from "../../assets/referanslar/reference-logo-4.png";
import referenceLogo5 from "../../assets/referanslar/reference-logo-5.png";
import referenceLogo6 from "../../assets/referanslar/reference-logo-6.png";
import referenceLogo7 from "../../assets/referanslar/reference-logo-7.png";
import referenceLogo8 from "../../assets/referanslar/reference-logo-8.png";
import referenceLogo9 from "../../assets/referanslar/reference-logo-9.png";
import referenceLogo10 from "../../assets/referanslar/reference-logo-10.png";

// React Router
import { Link } from 'react-router';


const ReferanslarSection = () => {

    const references = [
        {
            referenceName: "null",
            referenceImage: referenceLogo1
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo2
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo3
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo4
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo5
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo6
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo7
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo8
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo9
        },
        {
            referenceName: "null",
            referenceImage: referenceLogo10
        },
    ]

    const duplicatedLogos = [...references, ...references, ...references, ...references];


    return (
        <section className={styles.referanslarSectionContainer}>
            <h1>Referanslarımız</h1>

            <Link to="/referanslar">
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderTrack}>
                        {duplicatedLogos.map((logo, index) => (
                            <div key={index} className={styles.slide}>
                                <img src={logo.referenceImage} alt={`Logo ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </section>
    );
}

export default ReferanslarSection;