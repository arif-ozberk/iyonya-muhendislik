import React, { useEffect } from 'react'

// Styles
import "../styles/globals.scss";

// Components
import Navbar from '../components/shared_components/Navbar';
import Footer from '../components/shared_components/Footer';

// Functions
import { findCurrentPage } from '../functions/FindCurrentPage';


const PageWrapper = ({ children }) => {

    useEffect(() => {
        findCurrentPage();
    }, []);


    return (
        <div className={`context-wrapper`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default PageWrapper;