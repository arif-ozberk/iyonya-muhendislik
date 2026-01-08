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
        <div>
            <Navbar />
            <div className={`context-wrapper`}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;