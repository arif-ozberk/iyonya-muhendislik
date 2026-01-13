import { createContext, useState } from "react";

export const ProjectContext = createContext({})

export const ProjectContextProvider = ({ children }) => {

    const [selectedProjectType, setSelectedProjectType] = useState(true);
    const [selectedCity, setSelectedCity] = useState("Tüm Şehirler");
    const [selectedProject, setSelectedProject] = useState({});


    return (
        <ProjectContext.Provider value={{ selectedProjectType, setSelectedProjectType, selectedProject, setSelectedProject, selectedCity, setSelectedCity }}>
            {children}
        </ProjectContext.Provider>
    )
}