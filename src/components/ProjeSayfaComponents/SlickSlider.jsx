// DEPENDENCIES
import { useEffect, useContext, useRef, useState } from 'react'
import { motion } from "framer-motion";

// Styles
import styles from "../../styles/page_styles/Proje.module.scss";

// Context
import { ProjectContext } from "../../context/ProjectContext";

// Iyonya Db
import projectsDb from '../../config/projectsDb';

// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlickSlider = () => {

    const { selectedProject, setSelectedProject } = useContext(ProjectContext);
    const [isLoading, setIsLoading] = useState(true);

    const sliderRef = useRef(null);
    const [viewportWidth, setViewportWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );

    const projectId = location.pathname.split("/")[2];


    useEffect(() => {
        projectsDb.fetchCurrentProject(projectId, setSelectedProject, setIsLoading);
    }, [projectId])


    useEffect(() => {
        const onResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);


    const isMobile = viewportWidth <= 768;
    // console.log(isMobile);

    const settings = {
        className: "slider",
        dots: false,
        infinite: false,
        centerMode: false,
        variableWidth: !isMobile,
        slidesToShow: isMobile ? 3 : 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: isMobile,
        verticalSwiping: false,
        swipeToSlide: true,
        speed: 300
    };


    return (
        <>
            {!isLoading && <div className={styles.mainSlider} ref={sliderRef}>
                <Slider key={isMobile ? "vertical" : "horizontal"} {...settings}>
                    <motion.div
                        className={styles.slide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "ease"
                        }}
                    >
                        <h1>{selectedProject?.projectName}</h1>

                        <p>KONUM</p>
                        <p className={styles.slideText}>{selectedProject?.city}</p>

                        <p>YIL</p>
                        <p className={styles.slideText}>{selectedProject?.year}</p>
                    </motion.div>

                    {selectedProject?.projectPictureUrl && selectedProject?.projectPictureUrl.map((picture, id) => (
                        <div className={styles.slide} key={id}>
                            <motion.img
                                src={picture}
                                onDragStart={e => e.preventDefault()}
                                alt=""
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "ease",
                                    delay: (id * 0.2) + 0.1
                                }}
                            />
                        </div>
                    ))}

                </Slider>
            </div>}

        </>
    )
}

export default SlickSlider