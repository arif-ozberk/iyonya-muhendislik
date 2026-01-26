import React, { useState, useRef, useEffect } from 'react'

// Styles
import styles from "../../styles/sharedComponents_styles/Navbar.module.scss";

// React-Router
import { Link } from 'react-router';
import { routes } from '../../routes/routes';

// Components
import Logo from './Logo';

// React-Icons
import { FaChevronDown } from "react-icons/fa6";

// Assets
import logoImage from "../../assets/iyonya-muhendislik-logo-woText.svg";


const Navbar = () => {

    const [isNavlinksOpen, setIsNavlinksOpen] = useState(false);

    const navbarRef = useRef(null);


    useEffect(() => {  // Function that closes the dropdown when user clicks somewhere else
        const handleClickOutsideNavlinks = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsNavlinksOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideNavlinks);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideNavlinks);
        };
    }, [setIsNavlinksOpen]);


    return (
        <nav className={styles.Navbar} ref={navbarRef}>
            <section className={styles.navLeft}>
                <Link to="/" className={styles.logoImage}>
                    <img src={logoImage} alt="iyonya-muhendislik-logo" />
                </Link>

                <ul
                    className={styles.navLinks}
                    style={{
                        transform: isNavlinksOpen ? "translateY(4rem)" : "",
                        opacity: isNavlinksOpen ? "1" : ""
                    }}
                >
                    {routes.map((routeItem, index) => (
                        <Link
                            key={routeItem.routePath}
                            to={routeItem.routePath}
                            // style={{ animationDelay: isNavlinksOpen ? `${(index * 0.1) + 0.1}s` : "" }}
                            // className={isNavlinksOpen ? styles.navLinksActive : ""}
                        >
                            {routeItem.pageName}
                        </Link>
                    ))}
                </ul>
            </section>

            <section className={styles.navRight}>
                <FaChevronDown
                    className={styles.dropdownButton}
                    onClick={() => setIsNavlinksOpen(prev => !prev)}
                    style={{ transform: isNavlinksOpen ? "rotateX(180deg)" : "rotateX(0deg)" }}
                />
            </section>
        </nav>
    )
};

export default Navbar;