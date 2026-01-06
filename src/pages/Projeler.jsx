import React from 'react';

// Styles
import styles from "../styles/page_styles/Projeler.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const Projeler = () => {
    return (
        <PageWrapper>
            <div className={`${styles.Projeler}`}>
                <h1>Projeler</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default Projeler;