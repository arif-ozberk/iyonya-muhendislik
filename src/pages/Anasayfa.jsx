import React, { useContext, useEffect } from 'react';

// Styles
import styles from "../styles/page_styles/Anasayfa.module.scss";

// Page Components
import Navbar from '../components/shared_components/Navbar';
import AboutSection from "../components/AnasayfaComponents/AboutSection"
import MapChartSection from '../components/AnasayfaComponents/MapChartSection';
import StatSection from '../components/AnasayfaComponents/StatSection';
import ReferanslarSection from '../components/AnasayfaComponents/ReferanslarSection';
import ScrollToTopButton from '../components/shared_components/ScrollToTopButton';
import Footer from '../components/shared_components/Footer';

// Assets
import landingVideo from "../assets/logoAnimation.webm"

// Functions
import { findCurrentPage } from '../functions/FindCurrentPage';
import projectsDb from '../config/projectsDb';
import { ProjectContext } from '../context/ProjectContext';


const Anasayfa = () => {

    const { setAllCities } = useContext(ProjectContext)

    useEffect(() => {
        findCurrentPage();
        projectsDb.fetchAllCities(setAllCities);

        window.scrollTo(0, 0);
    }, [])


    return (
        <div className={`${styles.Anasayfa}`}>
            <Navbar />
            <video src={landingVideo} autoPlay loop muted></video>
            <div className={styles.anasayfaContext}>
                <AboutSection />
                <MapChartSection />
                <StatSection />
                <ScrollToTopButton />
                <ReferanslarSection />
            </div>
            <Footer />
        </div>
    );
}

export default Anasayfa;