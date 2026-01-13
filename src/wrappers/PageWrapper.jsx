import React, { useEffect } from 'react'

// Styles
import "../styles/globals.scss";

// Components
import Navbar from '../components/shared_components/Navbar';
import ScrollToTopButton from '../components/shared_components/ScrollToTopButton';
import Footer from '../components/shared_components/Footer';

// Functions
import { findCurrentPage } from '../functions/FindCurrentPage';


const PageWrapper = ({ children }) => {

    useEffect(() => {
        findCurrentPage();

        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Navbar />
            <div className={`context-wrapper`}>
                {children}
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    );
}

export default PageWrapper;