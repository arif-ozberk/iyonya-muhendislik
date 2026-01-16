import { createContext, useState } from "react";

export const ProjectContext = createContext({})

export const ProjectContextProvider = ({ children }) => {

    const [selectedProjectType, setSelectedProjectType] = useState(true);
    const [selectedCity, setSelectedCity] = useState("Tüm Şehirler");
    const [selectedProject, setSelectedProject] = useState({});
    const [projects, setProjects] = useState([]);
    const [loadCount, setLoadCount] = useState(5);


    return (
        <ProjectContext.Provider
            value={{
                selectedProjectType, setSelectedProjectType,
                selectedProject, setSelectedProject,
                selectedCity, setSelectedCity,
                projects, setProjects,
                loadCount, setLoadCount
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}