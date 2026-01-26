import React, { useEffect } from 'react';
import { motion } from "framer-motion";

// Styles
import styles from "../styles/page_styles/Iletisim.module.scss";

// Components
import Navbar from '../components/shared_components/Navbar';
import Footer from '../components/shared_components/Footer';

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';

// Assets
import iletisimImage from "../assets/iletisim-page-image.jpg"

// React-Icons
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Iletisim = () => {

    const socialMedia = [
        { icon: <FaInstagram />, url: "https://www.instagram.com" },
        { icon: <FaFacebookF />, url: "https://www.facebook.com" },
        { icon: <FaXTwitter />, url: "https://www.x.com" },
        { icon: <FaLinkedin />, url: "https:/www.linkedin.com" },
        { icon: <FaWhatsapp />, url: "https://wa.me/905363554701" }
    ]

    const contactInfo = [
        { icon: <FaHouseChimney />, text: "Alsancak Mah. Kıbrıs Şehitleri Cad. Kazmirci İş Merkezi No: 20/502 │ Konak-35220 │ İzmir │ Türkiye │" },
        { icon: <FaPhoneAlt />, text: "0536 355 4701" },
        { icon: <IoIosMail />, text: "info@iyonyamuhendislik.com.tr" }
    ]

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className={styles.iletisim}>
            <Navbar />
            <div className={`${styles.iletisimPageContainer}`}>
                <img src={iletisimImage} alt="iletisim-page-image" />
                <motion.div
                    className={styles.contactDetails}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "ease",
                    }}
                >
                    <h1>İLETİŞİME GEÇ</h1>
                    <ul className={styles.contactInfo}>
                        {contactInfo.map((contactItem, index) => (
                            <li key={index}>
                                {contactItem.icon}
                                <p>{contactItem.text}</p>
                            </li>
                        ))}

                    </ul>
                    
                    <ul className={styles.socialMedia}>
                        {socialMedia.map((media, index) => (
                            <motion.a
                                key={index}
                                href={media.url}
                                target='_blank'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "ease",
                                    delay: (index * 0.1) + 0.3
                                }}
                            >
                                {media.icon}
                            </motion.a>
                        ))}
                    </ul>
                </motion.div>
            </div>
            <Footer />
        </div>
        
    );
}

export default Iletisim;