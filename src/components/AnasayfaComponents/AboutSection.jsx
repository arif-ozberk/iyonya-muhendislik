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
import { RiLightbulbFlashFill } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";


const AboutSection = () => {

    const [selectedCategory, setSelectedCategory] = useState(0);

    const textCategories = [
        {
            categoryId: 0,
            buttonImage: <BiWorld />,
            title: "İYONYA MÜHENDİSLİK",
            textContent: [
                "İyonya Mühendislik, restorasyon projeleri odaklı çalışan bir mühendislik firmasıdır. Tarihi ve kültürel yapıların özgün kimliğini koruyarak, elektrik tesisatı, aydınlatma tasarımı, kamera (CCTV) ve yangın algılama sistemleri alanlarında bütüncül çözümler sunar.",
                "Koruma ilkelerini mühendislik disiplini ve çağdaş teknolojilerle birleştiren firmamız; proje, uygulama ve danışmanlık süreçlerini titizlikle yürütür. Amacımız, geçmişin değerlerini güvenli, işlevsel ve sürdürülebilir sistemlerle geleceğe taşımaktır."
            ]
        },
        {
            categoryId: 1,
            buttonImage: <RiLightbulbFlashFill />,
            title: "AYDINLATMA TASARIMI",
            textContent: [
                "Aydınlatma, restorasyon projelerinde yalnızca bir teknik gereklilik değil, yapının mimari ve tarihi kimliğini ortaya çıkaran temel bir tasarım unsurudur. Doğru kurgulanmış aydınlatma çözümleri, mekânın özgün karakterini korurken algısını güçlendirir.",
                "Iyonya Mühendislik, tarihi ve kültürel yapılarda aydınlatma tasarımını; koruma ilkeleri, görsel konfor ve enerji verimliliği doğrultusunda ele alır. Yapının malzemesine, ölçeğine ve kullanım amacına uygun armatür ve ışık senaryoları geliştirerek, estetik ve işlevsel çözümler sunar.",
                "Projelerimizde çağdaş aydınlatma teknolojilerini, yapının ruhuna saygılı bir yaklaşımla bütünleştirir; mekânın gece ve gündüz algısını dengeli, güvenli ve sürdürülebilir şekilde tasarlarız."
            ]
        },
        {
            categoryId: 2,
            buttonImage: <MdEngineering />,
            title: "MÜHENDİSLİK HİZMETLERİMİZ",
            textContent: [
                "İyonya Mühendislik, restorasyon ve yapı projelerinde mühendislik disiplinini estetik ve fonksiyonellikle birleştiren bir firmadır. Projelerimizde bilimsel analiz, planlama ve uygulama süreçlerini titizlikle yürütür, her adımda kalite ve güvenliği ön planda tutarız.",
                "Elektrik tesisatından aydınlatma tasarımına, kamera sistemlerinden yangın algılama çözümlerine kadar kapsamlı mühendislik hizmetleri sunarak, yapının güvenli, işlevsel ve sürdürülebilir olmasını sağlarız. Hedefimiz, tarihi ve çağdaş yapılarda yenilikçi, verimli ve uzun ömürlü çözümler üretmektir."
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