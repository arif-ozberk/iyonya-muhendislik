import { useContext, useEffect, useMemo, useState } from "react";

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

// React-Icons
import { FaChevronDown } from "react-icons/fa6";


const Portfolio = () => {
    const { selectedProjectType, setSelectedProject, selectedCity, projects, setProjects, loadCount, setLoadCount } = useContext(ProjectContext);
    const [filteredByProjectType, setFilteredByProjectType] = useState([])
    const [searchText, setSearchText] = useState("");
    const [isLoadVisible, setIsLoadVisible] = useState(true);


    useEffect(() => {
        projectsDb.fetchAllProjects(setProjects, selectedProjectType, loadCount);

    }, [selectedProjectType, loadCount])


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
        // projectsDb.fetchAllProjects(setProjects, selectedProjectType);
        selectedCity == "Tüm Şehirler" ? setFilteredByProjectType(filteredProjects.filter(item => item.isFinished === selectedProjectType)) : setFilteredByProjectType(filteredProjects.filter(item => item.isFinished === selectedProjectType && item.city == selectedCity));

        // if (projects.length == loadCount) { take a look at it
        //     setIsLoadVisible(false);
        // }
    }, [selectedProjectType, filteredProjects, selectedCity])


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
                        filteredByProjectType.map((item) => (
                            <Link to={`/proje/${item.id}`} className={styles.projectContainer} key={item.id} onClick={() => handleProjectClick(item.id)}>
                                <img
                                    className={styles.projectImage}
                                    // style={{ transform: `translateY(${item.projectDetails.imageYPosition}%)` }}
                                    src={item.projectPictureUrl[0]}
                                    alt=""
                                />
                                <div className={styles.projectDescriptionContainer}>
                                    <h3>{item.projectName}</h3>
                                    <p> "detayları görüntüle"</p>
                                </div>
                            </Link>
                        ))
                    )}
                </ul>

                {isLoadVisible && <h2 className={styles.loadButton} onClick={() => setLoadCount(prev => prev + 6)}>DAHA FAZLA PROJE YÜKLE</ h2>}

            </div>

        </PageWrapper>
    );
};

export default Portfolio;
