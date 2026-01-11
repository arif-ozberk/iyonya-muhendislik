// DEPENDENCIES
import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from 'react-router'
import { ProjectContext } from "../context/ProjectContext";
import Projects from "../data/Projects.json"
import styles from "../styles/page_styles/Projeler.module.scss";


// PAGE COMPONENTS
import PageWrapper from "../wrappers/PageWrapper"
import Filter from "../components/ProjelerComponents/Filter";


const Portfolio = () => {
    const { selectedNavItem, selectedProjectType, setSelectedProject } = useContext(ProjectContext)
    const [projects, setProjects] = useState(Projects.allProjects);
    const [searchText, setSearchText] = useState("");


    // HANDLE PAGE SCROLL WHEN CLICKED ON NAVBAR
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

    }, [selectedNavItem])

    function handleProjectClick(clickedProjectId) {
        const clickedProject = projects.find(project => project.id === clickedProjectId);
        setSelectedProject(clickedProject);
    }

    // Filter by tags (case-insensitive). All entered terms must match at least one tag each.
    const filteredProjects = useMemo(() => {
        const list = Array.isArray(projects) ? projects : [];
        const q = (searchText || "").toLowerCase().trim();
        if (!q) return list;
        const terms = q.split(/\s+/);
        return list.filter(p => {
            const tags = (p.projectDetails.tags || []).map(t => String(t).toLowerCase());
            if (tags.length === 0) return false;
            return terms.every(term => tags.some(tag => tag.includes(term)));
        });
    }, [projects, searchText]);

    return (
        <PageWrapper>

            <div className={styles.projeler}>

                <Filter
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <ul className={styles.projectsMainContainer}>
                    {filteredProjects.length === 0 ? (
                        <li className={styles.noProjects}>
                            <p> "Hiç proje bulunamadı..."</p>
                        </li>
                    ) : (
                        filteredProjects.map((item) => (
                            <Link to={`/project/${item.id}`} className={styles.projectContainer} key={item.id} onClick={() => handleProjectClick(item.id)}>
                                <img
                                    className={styles.projectImage}
                                    // style={{ transform: `translateY(${item.projectDetails.imageYPosition}%)` }}
                                    src={item.projectDetails.projectPictureUrl}
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
