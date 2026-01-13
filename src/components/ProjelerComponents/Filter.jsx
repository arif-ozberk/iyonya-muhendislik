import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import styles from "../../styles/page_styles/Projeler.module.scss";
import Projects from "../../data/Projects.json";

const Filter = ({ searchText, setSearchText }) => {
    const { selectedProjectType, setSelectedProjectType, selectedCity, setSelectedCity } = useContext(ProjectContext);

    const filterButtons = [
        { name: "BİTEN PROJELER", isFinished: true },
        { name: "DEVAM EDEN PROJELER", isFinished: false }
    ];

    const handleSelectedProjectType = (projectType) => {
        setSelectedProjectType(projectType);
    };

    const uniqueCities = [...new Set(Projects.allProjects.map(item => item.projectDetails.city))];

    return (
        <div className={styles.filterMainContainer}>
            {filterButtons.map((item, id) => (
                <button
                    key={id}
                    className={`${styles.filterButton} ${selectedProjectType === item.isFinished ? styles.selectedButton : ""}`}
                    onClick={() => handleSelectedProjectType(item.isFinished)}
                >
                    {item.name}
                </button>
            ))}
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    className={styles.filterInput}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={"Etiketlere göre ara (ör. İstanbul 2025)"}
                />
                {searchText.length > 0 && (
                    <p className={styles.deleteButton} onClick={() => setSearchText("")}>x</p>
                )}
            </div>
            <select className={styles.cityOptionsContainer} value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="Tüm Şehirler">Tüm Şehirler</option>
                {uniqueCities.map((city, id) => (
                    <option key={id} value={city} className={styles.cityOption} >{city}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
