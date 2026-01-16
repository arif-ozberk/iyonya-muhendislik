// DEPENDENCIES
import { useEffect, useContext, useState } from "react";

// Styles
import styles from "../../styles/page_styles/Proje.module.scss";

// Context
import { ProjectContext } from "../../context/ProjectContext";

// Iyonya DB
import projectsDb from "../../config/projectsDb";


const VerticalSlider = () => {
    const { selectedProject, setSelectedProject, selectedLanguage } = useContext(ProjectContext);
    const [isLoading, setIsLoading] = useState(true);

    const projectId = location.pathname.split("/")[2];

    const [viewportWidth, setViewportWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );


    useEffect(() => {
        projectsDb.fetchCurrentProject(projectId, setSelectedProject, setIsLoading);
    }, [projectId])


    useEffect(() => {
        const onResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const isMobile = viewportWidth <= 768;

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .vs-container {
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            scroll-snap-type: y mandatory;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
            touch-action: pan-y;
          }
          .vs-slide {
            scroll-snap-align: start;
            scroll-snap-stop: always;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .vs-slide img {
            width: 100%;
            object-fit: cover;
          }
        }
      `}</style>

            <div className={`${styles.mainSlider} vs-container`} aria-label="Vertical carousel">
                {isLoading && <div className={styles.slide}>Loading...</div>}

                {!isLoading && selectedProject && (
                    <>
                        <section className={`${styles.slide} vs-slide`} aria-roledescription="slide" aria-label="Project details">
                            <h1>{selectedProject?.projectDetails.projectDetails.projectName}</h1>

                            <p>MÜŞTERİ</p>
                            <p className={styles.slideText}>{selectedProject?.projectDetails.projectDetails.client}</p>

                            <p>KONUM</p>
                            <p className={styles.slideText}>{selectedProject?.projectDetails.projectDetails.city}</p>

                            <p>YIL</p>
                            <p className={styles.slideText}>{selectedProject?.projectDetails.projectDetails.year}</p>
                        </section>

                        {selectedProject?.projectDetails.projectDetails.projectPictureUrl &&
                            selectedProject?.projectDetails.projectDetails.projectPictureUrl.map((picture, id) => (
                                <section
                                    className={`${styles.slide} vs-slide`}
                                    key={id}
                                    aria-roledescription="slide"
                                    aria-label={`Image ${id + 1}`}
                                >
                                    <img
                                        src={picture}
                                        alt={`Project image ${id + 1}`}
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                </section>
                            ))}
                    </>
                )}
            </div>
        </>
    );
};

export default VerticalSlider;