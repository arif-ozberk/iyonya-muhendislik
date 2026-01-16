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


const Portfolio = () => {
    const { selectedProjectType, setSelectedProject, selectedCity, projects, setProjects } = useContext(ProjectContext);
    const [filteredByProjectType, setFilteredByProjectType] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        projectsDb.fetchAllProjects(setProjects);
    }, [])


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
            const tags = (p.projectDetails.projectDetails.tags || []).map(t => String(t).toLowerCase());
            if (tags.length === 0) return false;
            return terms.every(term => tags.some(tag => tag.includes(term)));
        });
    }, [projects, searchText]);


    useEffect(() => {
        selectedCity == "Tüm Şehirler" ? setFilteredByProjectType(filteredProjects.filter(item => item.isFinished === selectedProjectType)) : setFilteredByProjectType(filteredProjects.filter(item => item.isFinished === selectedProjectType && item.projectDetails.projectDetails.city == selectedCity));
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
                                    // style={{ transform: `translateY(${item.projectDetails.projectDetails.imageYPosition}%)` }}
                                    src={item.projectDetails.projectDetails.projectPictureUrl[0]}
                                    alt=""
                                />
                                <div className={styles.projectDescriptionContainer}>
                                    <h3>{item.projectDetails.projectName}</h3>
                                    <p> "detayları görüntüle"</p>
                                </div>
                            </Link>
                        ))
                    )}
                </ul>

            </div>

        </PageWrapper>
    );
};

export default Portfolio;
