import React, { useState } from 'react'

// Styles
import styles from "../../styles/sharedComponents_styles/Navbar.module.scss";

// React-Router
import { Link } from 'react-router';
import { routes } from '../../routes/routes';

// Components
import Logo from './Logo';


const Navbar = () => {


    return (
        <nav className={styles.Navbar}>
            <section className={styles.navLeft}>
                <Logo logoHeight={"3rem"} />

                <ul className={styles.navLinks}>
                    {routes.map((routeItem) => (
                        <Link to={routeItem.routePath}>{routeItem.pageName}</Link>
                    ))}
                </ul>
            </section>

            <section className={styles.navRight}>

            </section>
        </nav>
    )
};

export default Navbar;