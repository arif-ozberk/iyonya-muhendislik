import React from 'react';

// Styles
import styles from "../styles/page_styles/Kurumsal.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const Kurumsal = () => {
    return (
        <PageWrapper>
            <div className={`${styles.Kurumsal}`}>
                <h1>Kurumsal</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default Kurumsal;