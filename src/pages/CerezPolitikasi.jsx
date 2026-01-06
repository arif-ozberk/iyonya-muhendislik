import React from 'react';

// Styles
import styles from "../styles/page_styles/CerezPolitikasi.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const CerezPolitikasi = () => {
    return (
        <PageWrapper>
            <div className={`${styles.CerezPolitikasi}`}>
                <h1>Çerez Politikası</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default CerezPolitikasi;