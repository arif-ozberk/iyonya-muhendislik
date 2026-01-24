import { createContext, useState } from "react";

export const ProjectContext = createContext({})

export const ProjectContextProvider = ({ children }) => {

    const [selectedProjectType, setSelectedProjectType] = useState(true);
    const [allCities, setAllCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("Tüm Şehirler");
    const [selectedProject, setSelectedProject] = useState({});
    const [projects, setProjects] = useState([]);
    const [loadCount, setLoadCount] = useState(6);
    const [loadIncrement, setLoadIncrement] = useState(6);


    return (
        <ProjectContext.Provider
            value={{
                selectedProjectType, setSelectedProjectType,
                selectedProject, setSelectedProject,
                allCities, setAllCities,
                selectedCity, setSelectedCity,
                projects, setProjects,
                loadCount, setLoadCount,
                loadIncrement, setLoadIncrement
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}