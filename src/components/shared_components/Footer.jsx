
// Styles
import styles from "../../styles/sharedComponents_styles/Footer.module.scss";

//Logo
import Logo from './Logo';

// React-Router
import { Link } from 'react-router';
import { routes } from '../../routes/routes';

//ReactIcons
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const socialMedia = [
        { icon: <FaInstagram />, url: "https://www.instagram.com" },
        { icon: <FaFacebookF />, url: "https://www.facebook.com" },
        { icon: <FaXTwitter />, url: "https://www.x.com" },
        { icon: <TiSocialLinkedin />, url: "https:/www.linkedin.com" },
        { icon: <FaWhatsapp />, url: "https://wa.me/905363554701" }
    ]

    return (
        <div className={styles.Footer}>
            <Logo />
            <ul className={styles.navLinks}>
                {routes.map((routeItem) => (
                    <Link key={routeItem.routePath} to={routeItem.routePath}>{routeItem.pageName}</Link>
                ))}
            </ul>
            <ul className={styles.socialMediaLinks}>
                {socialMedia.map((media, id) => (
                    <a key={id} href={media.url}>{media.icon}</a>
                ))}
            </ul>
        </div>
    );
}

export default Footer;