//Assets
import { Link } from "react-router";
import randomImage from "../../assets/iyonya-muhendislik-logo.png"

// Styles
import styles from "../../styles/page_styles/Anasayfa.module.scss";

const AboutSection = () => {
    return (
        <section className={styles.aboutSectionContainer}>
            <img src={randomImage} alt="" />
            <div className={styles.AboutTextContainer}>
                <h1>İYONYA MÜHENDİSLİK</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, vero totam ipsa illum tenetur recusandae veniam iste saepe cum doloremque, maiores ex nisi voluptatibus assumenda est quasi? Aspernatur, expedita?</p>
                <Link to={"/projeler"}>PROJELERİMİZE GÖZ ATIN</Link>
            </div>
        </section>
    )
}

export default AboutSection