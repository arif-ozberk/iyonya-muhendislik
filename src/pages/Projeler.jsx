import { useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// Styles
import styles from "../styles/page_styles/Projeler.module.scss";

// Components
import PageWrapper from "../wrappers/PageWrapper"
import Filter from "../components/ProjelerComponents/Filter";

// Iyonya DB
import projectsDb from "../config/projectsDb";

// Context
import { ProjectContext } from "../context/ProjectContext";

// React-Router
import { Link } from 'react-router'

const MotionLink = motion.create(Link);


const Portfolio = () => {
    const { selectedProjectType, setSelectedProject, selectedCity, projects, setProjects, loadCount, setLoadCount, loadIncrement } = useContext(ProjectContext);
    const [filteredByProjectType, setFilteredByProjectType] = useState([])
    const [searchText, setSearchText] = useState("");
    const [isLoadVisible, setIsLoadVisible] = useState(true);
    const [delayCounter, setDelayCounter] = useState(1);


    useEffect(() => {
        projectsDb.fetchAllProjects(setProjects, selectedProjectType);

    }, [selectedProjectType])


    function handleProjectClick(clickedProjectId) {
        const clickedProject = projects.find(project => project.id === clickedProjectId);
        setSelectedProject(clickedProject);
    }


    // Filter by tags (case-insensitive). All entered terms must match at least one tag each.
    const filteredProjects = useMemo(() => {
        const list = Array.isArray(filteredByProjectType) ? projects : [];
        const q = (searchText || "").toLowerCase().trim();
        if (!q) return list;
        const terms = q.split(/\s+/);
        return list.filter(p => {
            const tags = (p.tags || []).map(t => String(t).toLowerCase());
            if (tags.length === 0) return false;
            return terms.every(term => tags.some(tag => tag.includes(term)));
        });
    }, [projects, searchText]);


    useEffect(() => {
        selectedCity == "Tüm Şehirler" ? setFilteredByProjectType(filteredProjects.filter(item => item.isFinished === selectedProjectType)) : setFilteredByProjectType(filteredProjects.filter(item => item.isFinished === selectedProjectType && item.city == selectedCity));
    }, [selectedProjectType, filteredProjects, selectedCity])

    const handleAnimationLoadTime = () => {
        setLoadCount(prev => prev + loadIncrement);
        setDelayCounter(filteredByProjectType.length);
    }


    return (
        <PageWrapper>

            <div className={styles.projeler}>

                <Filter
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <ul className={styles.projectsMainContainer}>
                    {filteredByProjectType.length === 0 ? (
                        <li className={styles.noProjects}>
                            <p> "Hiç proje bulunamadı..."</p>
                        </li>
                    ) : (
                        filteredByProjectType.slice(0, loadCount).map((item, index) => (
                            <MotionLink
                                to={`/proje/${item.id}`}
                                className={styles.projectContainer}
                                key={item.id}
                                onClick={() => handleProjectClick(item.id)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: (index % loadIncrement) * 0.2,
                                    ease: "ease"
                                }}
                            >
                                <img
                                    className={styles.projectImage}
                                    style={{ transform: `translateY(${item.imageYPosition}%)` }}
                                    src={item.projectPictureUrl[0]}
                                    alt=""
                                />
                                <div className={styles.projectDescriptionContainer}>
                                    <h3>{item.projectName.toLocaleUpperCase("tr-TR")}</h3>
                                    {item.isFinished && <p> "detayları görüntüle"</p>}
                                </div>
                            </MotionLink>
                        ))
                    )}
                </ul>

                {loadCount < filteredByProjectType.length && <h2 className={styles.loadButton} onClick={() => handleAnimationLoadTime()}>DAHA FAZLA PROJE YÜKLE</h2>}

            </div>

        </PageWrapper >
    );
};

export default Portfolio;