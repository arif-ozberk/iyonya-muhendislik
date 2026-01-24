import { useState, useEffect } from "react";

// Styles
import styles from "../styles/page_styles/Proje.module.scss";

// Components
import SlickSlider from "../components/ProjeSayfaComponents/SlickSlider";
import VerticalSlider from "../components/ProjeSayfaComponents/VerticalSlider"
import BackButton from "../components/ProjeSayfaComponents/BackButton";

// Wrappers
import PageWrapper from "../wrappers/PageWrapper"


const Project = () => {
    const [viewportWidth, setViewportWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );

    useEffect(() => {
        const onResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const isMobile = viewportWidth <= 768;

    return (
        <PageWrapper>
            <div className={styles.projectMainContainer}>

                {isMobile ? <VerticalSlider /> : <SlickSlider />}
                <BackButton />

            </div>
        </PageWrapper>
    )
}

export default Project;