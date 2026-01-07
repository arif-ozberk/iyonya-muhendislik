import React, { useState, useRef, useEffect } from 'react'

// Styles
import styles from "../../styles/sharedComponents_styles/Navbar.module.scss";

// React-Router
import { Link } from 'react-router';

// Components
import Logo from './Logo';

// React-Icons
import { FaChevronDown } from "react-icons/fa6";


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
                <Logo logoHeight={"3rem"} />

                <ul
                    className={styles.navLinks}
                    style={{
                        transform: isNavlinksOpen ? "translateY(4rem)" : "",
                        opacity: isNavlinksOpen ? "1" : ""
                    }}
                >
                    <li><Link to="/" >Anasayfa</Link></li>
                    <li><Link to="/projeler" >Projeler</Link></li>
                    <li><Link to="/referanslar" >Referanslar</Link></li>
                    <li><Link to="/iletisim" >İletişim</Link></li>
                    <li><Link to="/uyeler" >Üyeler</Link></li>
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