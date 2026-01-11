import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import styles from "../../styles/page_styles/Projeler.module.scss";

const Filter = ({ searchText, setSearchText }) => {
    const { selectedProjectType, setSelectedProjectType } = useContext(ProjectContext);

    const filterButtons = [
        { nameTr: "BİTEN PROJELER", id: "finishedProjects" },
        { nameTr: "DEVAM EDEN PROJELER", id: "unfinishedProjects" }
    ];

    const handleSelectedProjectType = (projectType) => {
        setSelectedProjectType(projectType);
    };


    return (
        <div className={styles.filterMainContainer}>
            {filterButtons.map((item) => (
                <button
                    key={item.id}
                    className={`${styles.filterButton} ${selectedProjectType === item.id ? styles.selectedButton : ""}`}
                    onClick={() => handleSelectedProjectType(item.id)}
                >
                    {item.nameTr}
                </button>
            ))}
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    className={styles.filterInput}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={"Etiketlere göre ara (ör. istanbul 2025)"}
                />
                {searchText.length > 0 && (
                    <p className={styles.deleteButton} onClick={() => setSearchText("")}>x</p>
                )}
            </div>
        </div>
    );
};

export default Filter;
