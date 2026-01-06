import React from 'react';

// Styles
import styles from "../styles/page_styles/TicariBilgiler.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const TicariBilgiler = () => {
    return (
        <PageWrapper>
            <div className={`${styles.TicariBilgiler}`}>
                <h1>TicariBilgiler</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default TicariBilgiler;