import { useContext, useRef, useState, useEffect } from "react";

// Context
import { ProjectContext } from "../../context/ProjectContext";

// Styles
import styles from "../../styles/page_styles/Projeler.module.scss";

// React-Icons
import { FaChevronDown } from "react-icons/fa6";


const Filter = ({ searchText, setSearchText }) => {

    const {
        selectedProjectType, setSelectedProjectType,
        selectedCity, setSelectedCity,
        projects, setProjects,
        loadCount, setLoadCount
    } = useContext(ProjectContext);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef();


    useEffect(() => {  // Function that closes the dropdown when user clicks somewhere else
        const handleClickOutsideNavlinks = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideNavlinks);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideNavlinks);
        };
    }, [setIsDropdownOpen]);


    const filterButtons = [
        { name: "BİTEN PROJELER", isFinished: true },
        { name: "DEVAM EDEN PROJELER", isFinished: false }
    ];


    const handleSelectedProjectType = (projectType) => {
        setSelectedProjectType(projectType);
        setLoadCount(5);
    };


    const uniqueCities = [...new Set(projects?.map(item => item.city))];


    return (
        <div className={styles.filterMainContainer}>
            <div className={styles.filterLeft}>
                {filterButtons.map((item, id) => (
                    <button
                        key={id}
                        className={`${styles.filterButton} ${selectedProjectType === item.isFinished ? styles.selectedButton : ""}`}
                        onClick={() => handleSelectedProjectType(item.isFinished)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className={styles.filterRight}>
                <div className={styles.cityDropdownContainer} ref={dropdownRef}>
                    <div className={styles.selectMenu} onClick={() => setIsDropdownOpen(prev => !prev)}>
                        <p>{selectedCity}</p>
                        <FaChevronDown />
                    </div>

                    {isDropdownOpen && <div className={styles.dropdownContainer}>
                        <ul className={styles.dropdownMenu}>
                            <li onClick={() => { setSelectedCity("Tüm Şehirler"); setIsDropdownOpen(false) }}>Tüm Şehirler</li>
                            {uniqueCities.map((city, index) => (
                                <li key={index} onClick={() => { setSelectedCity(city); setIsDropdownOpen(false) }}>{city}</li>
                            ))}
                        </ul>
                    </div>}
                </div>

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
            </div>
        </div>
    );
};

export default Filter;
