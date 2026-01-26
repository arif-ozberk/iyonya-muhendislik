import React from 'react';
import { motion } from "framer-motion";

// React-Router
import { Link } from 'react-router';

// Styles
import styles from "../styles/page_styles/Referanslar.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';

//Assets
import referenceLogo1 from "../assets/referanslar/reference-logo-1.png";
import referenceLogo2 from "../assets/referanslar/reference-logo-2.png";
import referenceLogo3 from "../assets/referanslar/reference-logo-3.png";
import referenceLogo4 from "../assets/referanslar/reference-logo-4.png";
import referenceLogo5 from "../assets/referanslar/reference-logo-5.png";
import referenceLogo6 from "../assets/referanslar/reference-logo-6.png";
import referenceLogo7 from "../assets/referanslar/reference-logo-7.png";
import referenceLogo8 from "../assets/referanslar/reference-logo-8.png";
import referenceLogo9 from "../assets/referanslar/reference-logo-9.png";
import referenceLogo10 from "../assets/referanslar/reference-logo-10.png";



const Referanslar = () => {

    const references = [
        referenceLogo1, referenceLogo2, referenceLogo3, referenceLogo4, referenceLogo5, referenceLogo6, referenceLogo7, referenceLogo8, referenceLogo9, referenceLogo10
    ]

    return (
        <PageWrapper>
            <div className={`${styles.referanslar}`}>
                {references.map((url, id) => (
                    <motion.li
                        key={id}
                        className={styles.referenceItem}
                        style={{ backgroundImage: `url(${url})` }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "ease",
                            delay: (id * 0.1) + 0.1
                        }}
                    ></motion.li>
                ))}
            </div>
        </PageWrapper>
    );
}

export default Referanslar;