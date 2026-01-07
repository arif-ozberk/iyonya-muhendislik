//Assets
import { Link } from "react-router";
import randomImage from "../../assets/iyonya-muhendislik-logo-woText.svg"

// Styles
import styles from "../../styles/page_styles/Anasayfa.module.scss";

const AboutSection = () => {
    return (
        <section className={styles.aboutSectionContainer}>
            <img className={styles.aboutSectionLogo} src={randomImage} alt="" />
            <div className={styles.aboutTextContainer}>
                <h1>İYONYA MÜHENDİSLİK</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, vero totam ipsa illum tenetur recusandae veniam iste saepe cum doloremque, maiores ex nisi voluptatibus assumenda est quasi? Aspernatur, expedita? <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, vero totam ipsa illum tenetur recusandae veniam iste saepe cum doloremque, maiores ex nisi voluptatibus assumenda est quasi? Aspernatur, expedita?
                </p>
                <Link className={styles.portfolioLinkButton} to={"/projeler"}>PROJELERİMİZE GÖZ ATIN</Link>
            </div>
        </section>
    )
}

export default AboutSection