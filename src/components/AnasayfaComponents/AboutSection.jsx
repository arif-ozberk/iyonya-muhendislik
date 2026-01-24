import { useState } from "react";
import { motion } from "motion/react"

//Assets
import logoImage from "../../assets/iyonya-muhendislik-logo-woText.svg"

// React-Router
import { Link } from "react-router";

// Styles
import styles from "../../styles/page_styles/Anasayfa.module.scss";

// React-Icons
import { BiWorld } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";


const AboutSection = () => {

    const [selectedCategory, setSelectedCategory] = useState(0);

    const textCategories = [
        {
            categoryId: 0,
            buttonImage: <BiWorld />,
            title: "İYONYA MÜHENDİSLİK",
            textContent: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, vero totam ipsa illum tenetur recusandae veniam iste saepe cum doloremque, maiores ex nisi voluptatibus assumenda est quasi? Aspernatur, expedita?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, vero totam ipsa illum tenetur recusandae veniam iste saepe cum doloremque, maiores ex nisi voluptatibus assumenda est quasi? Aspernatur, expedita?"
            ]
        },
        {
            categoryId: 1,
            buttonImage: <FaNetworkWired />,
            title: "TITLE 2",
            textContent: [
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe alias voluptatibus vero, voluptatem tempore odit exercitationem cumque ipsum culpa sequi consectetur illo quod, adipisci ea? Repudiandae, soluta non explicabo deserunt ipsam recusandae quasi magni asperiores dolor illum.",
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores facilis adipisci maxime illo magnam?"
            ]
        },
        {
            categoryId: 2,
            buttonImage: <FaHelmetSafety />,
            title: "TITLE 3",
            textContent: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odit numquam omnis pariatur est laudantium delectus laborum deleniti repellendus aperiam itaque, quae nemo iure hic excepturi explicabo adipisci, sapiente molestias nostrum consequuntur cum rem repudiandae reiciendis? Delectus quaerat id incidunt."
            ]
        }
    ]


    return (
        <motion.div className={styles.aboutSectionContainer} initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={styles.logoContainer}>
                <img className={styles.aboutSectionLogo} src={logoImage} alt="iyonya-muhendislik-logo" />
                <div className={styles.categoryButtons}>
                    {textCategories.map((categoryItem) => (
                        <button
                            key={categoryItem.categoryId}
                            className={selectedCategory === categoryItem.categoryId ? styles.selectedCategoryButton : ""}
                            onClick={() => setSelectedCategory(categoryItem.categoryId)}
                        >
                            {categoryItem.buttonImage}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.aboutTextContainer}>
                <h1>{textCategories[selectedCategory].title}</h1>
                <div className={styles.aboutText}>
                    {textCategories[selectedCategory].textContent.map((textItem, index) => (
                        <p key={index}>{textItem}</p>
                    ))}
                </div>
                <Link className={styles.portfolioLinkButton} to={"/projeler"}>PROJELERİMİZE GÖZ ATIN</Link>
            </div>
        </motion.div>
    );
}

export default AboutSection;