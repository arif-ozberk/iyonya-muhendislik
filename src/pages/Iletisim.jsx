import React from 'react';

// Styles
import styles from "../styles/page_styles/Iletisim.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const Iletisim = () => {
    return (
        <PageWrapper>
            <div className={`${styles.Iletisim}`}>
                <h1>İletişim</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default Iletisim;