// DEPENDENCIES
import { useState, useEffect } from "react";
import styles from "../styles/page_styles/Proje.module.scss";

// PAGE COMPONENTS
import PageWrapper from "../wrappers/PageWrapper"
import SlickSlider from "../components/ProjeSayfaComponents/SlickSlider"
import BackButton from "../components/ProjeSayfaComponents/BackButton";



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

                <SlickSlider />
                <BackButton />

            </div>
        </PageWrapper>
    )
}

export default Project;