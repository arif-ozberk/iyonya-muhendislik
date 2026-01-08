import React from 'react';

// Styles
import styles from "../styles/page_styles/Uyeler.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';

// Assets
import randomImage from "../assets/uyeler-random-img.jpg";

// React-Icons
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Uyeler = () => {

    const uyeData = [
        {
            name: "TUNAY EKİN TUNÇER",
            title: "DÜŞÜN EMEKÇİSİ",
            image: randomImage,
            social: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://x.com",
                instagram: "https://www.instagram.com"
            }
        },
        {
            name: "ARİF ÖZBERK AZMAK",
            title: "SAHA UZMANI",
            image: randomImage,
            social: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://x.com",
                instagram: "https://www.instagram.com"
            }
        }, {
            name: "ANDERSON TALİSCA",
            title: "TASARIM UZMANI",
            image: randomImage,
            social: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://x.com",
                instagram: "https://www.instagram.com"
            }
        }
    ]


    return (
        <PageWrapper>
            <div className={`${styles.Uyeler}`}>
                <h1 className={styles.pageTitle}>Üyelerimiz</h1>
                <div className={styles.uyelerContainer}>
                    {uyeData.map((uyeItem, index) => (
                        <div key={index} className={styles.uyeCard}>
                            <img src={uyeItem.image} alt="uye-image" />
                            <h2>{uyeItem.name}</h2>
                            <h3>{uyeItem.title}</h3>
                            <ul>
                                <a href={uyeItem.social.linkedin} target='_blank'><FaLinkedin /></a>
                                <a href={uyeItem.social.twitter} target='_blank'><FaXTwitter /></a>
                                <a href={uyeItem.social.instagram} target='_blank'><FaInstagram /></a>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}

export default Uyeler;