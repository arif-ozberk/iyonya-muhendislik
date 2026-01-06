import React from 'react';

// Styles
import styles from "../styles/page_styles/Referanslar.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const Referanslar = () => {
    return (
        <PageWrapper>
            <div className={`${styles.Referanslar}`}>
                <h1>Referanslar</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default Referanslar;