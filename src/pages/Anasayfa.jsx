import React, { useEffect } from 'react';

// Styles
import styles from "../styles/page_styles/Anasayfa.module.scss";

// Page Components
import Navbar from '../components/shared_components/Navbar';
import AboutSection from "../components/AnasayfaComponents/AboutSection"
import MapChartSection from '../components/AnasayfaComponents/MapChartSection';
import StatSection from '../components/AnasayfaComponents/StatSection';
import Footer from '../components/shared_components/Footer';

// Assets
import landingVideo from "../assets/logoAnimation.webm"

// Functions
import { findCurrentPage } from '../functions/FindCurrentPage';


const Anasayfa = () => {

    useEffect(() => {
        findCurrentPage();
    }, [])

    
    return (
        <div className={`${styles.Anasayfa}`}>
            <Navbar />
            <video src={landingVideo} autoPlay loop muted></video>
            <div className={styles.anasayfaContext}>
                <AboutSection />
                <MapChartSection />
                <StatSection />
            </div>
            <Footer />
        </div>
    );
}

export default Anasayfa;