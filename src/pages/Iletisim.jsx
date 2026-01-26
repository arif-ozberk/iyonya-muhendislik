import React, { useEffect } from 'react';
import { motion } from "framer-motion";

// Styles
import styles from "../styles/page_styles/Iletisim.module.scss";

// Components
import Navbar from '../components/shared_components/Navbar';
import Footer from '../components/shared_components/Footer';

//Assets
import logo from "../assets/iyonya-muhendislik-logo-woText.svg";

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

    const contactImages = [
        { name: "YAŞAR MÜZESİ", url: "https://res.cloudinary.com/dabmjz0xr/image/upload/v1768914193/yasar-muzesi-1_zutiaj.jpg" },
        { name: "İznik Müzesi", url: "https://res.cloudinary.com/dabmjz0xr/image/upload/v1769168495/iznik_1_pufeoa.jpg" },
        { name: "Hierapolis Antik Kenti", url: "https://res.cloudinary.com/dabmjz0xr/image/upload/v1769210761/hierapolis_antik_kent_mafnqf.jpg" }
    ]

    const socialMedia = [
        { icon: <FaInstagram />, url: "https://www.instagram.com" },
        { icon: <FaFacebookF />, url: "https://www.facebook.com" },
        { icon: <FaXTwitter />, url: "https://www.x.com" },
        { icon: <FaLinkedin />, url: "https:/www.linkedin.com" },
        { icon: <FaWhatsapp />, url: "https://wa.me/905363554701" }
    ]

    const contactInfo = [
        { icon: <FaHouseChimney />, text: "Alsancak Mah. Kıbrıs Şehitleri Cad. Kazmirci İş Merkezi No: 20/502 │ Konak-35220 │ İzmir │ Türkiye │" },
        { icon: <FaPhoneAlt />, text: "0536 355 4701", onClick: () => window.location.href = `tel:+905363554701` },
        { icon: <IoIosMail />, text: "info@iyonyamuhendislik.com.tr" }
    ]


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className={styles.iletisim}>
            <Navbar />
            <div className={`${styles.iletisimPageContainer}`}>
                <img className={styles.logo} src={logo} />


                <ul className={styles.stripeImageContainer}>
                    {contactImages.map((image, id) => (
                        <li key={id} style={{ backgroundImage: `url(${image.url})` }}>
                            <p className={styles.projectNameContainer} >{image.name}</p>
                        </li>
                    ))}
                </ul>

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
                            <li key={index} onClick={contactItem.onClick && contactItem.onClick}>
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