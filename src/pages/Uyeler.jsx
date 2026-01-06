import React from 'react';

// Styles
import styles from "../styles/page_styles/Uyeler.module.scss";

// Wrappers
import PageWrapper from '../wrappers/PageWrapper';


const Uyeler = () => {
    return (
        <PageWrapper>
            <div className={`${styles.Uyeler}`}>
                <h1>Uyeler</h1>
                <h3>footer en aşağıda</h3>
                <h5>anasayfa bilerek 200vh uzunluğunda. scroll denemek için yaptım. anasayfayı doldurmaya başlarken sil 200vh'i</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, vel?</p>
            </div>
        </PageWrapper>
    );
}

export default Uyeler;