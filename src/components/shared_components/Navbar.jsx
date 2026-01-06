import React, { useState } from 'react'

// Styles
import styles from "../../styles/sharedComponents_styles/Navbar.module.scss";

// React-Router
import { Link } from 'react-router';

// Components
import Logo from './Logo';


const Navbar = () => {

    const [isDropdownActive, setIsDropdownActive] = useState(false);


    return (
        <nav className={styles.Navbar}>
            <section className={styles.navLeft}>
                <Logo logoHeight={"3rem"}/>

                <ul className={styles.navLinks}>
                    <li><Link to="/" >Anasayfa</Link></li>
                    <li className={styles.kurumsalLink} onMouseOver={() => setIsDropdownActive(true)} onMouseOut={() => setIsDropdownActive(false)}>
                        <Link to="/kurumsal" >Kurumsal</Link>
                        {isDropdownActive && <div className={styles.kurumsalDropdown}>
                            <Link to="/kurumsal" >Kurumsal</Link>
                            <Link to="/kvkk" >KVKK</Link>
                            <Link to="/cerez-politikasi" >Çerez Politikası</Link>
                        </div>}
                    </li>
                    <li><Link to="/projeler" >Projeler</Link></li>
                    <li><Link to="/referanslar" >Referanslar</Link></li>
                    <li><Link to="/ticari-bilgiler" >Ticari Bilgiler</Link></li>
                    <li><Link to="/iletisim" >İletişim</Link></li>
                </ul>
            </section>

            <section className={styles.navRight}>

            </section>
        </nav>
    )
};

export default Navbar;