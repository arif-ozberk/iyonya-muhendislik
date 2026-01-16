// DEPENDENCIES
import { useEffect, useContext, useRef, useState } from 'react'

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
                    <div className={styles.slide}>
                        <h1>{selectedProject?.projectDetails.projectDetails.projectName}</h1>

                        <p>MÜŞTERİ</p>
                        <p className={styles.slideText}>{selectedProject?.projectDetails.projectDetails.client}</p>

                        <p>KONUM</p>
                        <p className={styles.slideText}>{selectedProject?.projectDetails.projectDetails.city}</p>

                        <p>YIL</p>
                        <p className={styles.slideText}>{selectedProject?.projectDetails.projectDetails.year}</p>
                    </div>

                    {selectedProject?.projectDetails.projectDetails.projectPictureUrl && selectedProject?.projectDetails.projectDetails.projectPictureUrl.map((picture, id) => (
                        <div className={styles.slide} key={id}>
                            <img
                                src={picture}
                                onDragStart={e => e.preventDefault()}
                                alt=""
                            />
                        </div>
                    ))}

                </Slider>
            </div>}

        </>
    )
}

export default SlickSlider