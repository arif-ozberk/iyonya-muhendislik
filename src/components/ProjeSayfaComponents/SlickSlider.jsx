// DEPENDENCIES
import { useEffect, useContext, useRef, useState } from 'react'
import styles from "../../styles/page_styles/Proje.module.scss";
import { ProjectContext } from "../../context/ProjectContext";
import ProjectData from "../../data/Projects.json"
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
    const [project, setProject] = useState(null);

    const content = {

        clientLabel: "MÜŞTERİ",
        locationLabel: "KONUM",
        yearLabel: "YIL"

    };

    useEffect(() => {
        const currentProject = ProjectData.allProjects.find((item) => item.id == projectId);
        if (currentProject) {
            setSelectedProject([currentProject]);
            setProject(currentProject); // Set local state directly
            setIsLoading(false);
        }
    }, [projectId]);

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
                        <h1>{project?.projectDetails.projectName}</h1>

                        <p>{content.clientLabel}</p>
                        <p className={styles.slideText}>{project?.projectDetails.client}</p>

                        <p>{content.locationLabel}</p>
                        <p className={styles.slideText}>{project?.projectDetails.location}</p>

                        <p>{content.yearLabel}</p>
                        <p className={styles.slideText}>{project?.projectDetails.year}</p>
                    </div>

                    {project?.projectDetails?.projectPictureUrl && project.projectDetails.projectPictureUrl.map((picture, id) => (
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