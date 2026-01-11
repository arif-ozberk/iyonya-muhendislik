import { createContext, useState } from "react";

export const ProjectContext = createContext({})

export const ProjectContextProvider = ({ children }) => {

    const [selectedProjectType, setSelectedProjectType] = useState("finishedProjects");
    const [selectedProject, setSelectedProject] = useState({});


    return (
        <ProjectContext.Provider value={{ selectedProjectType, setSelectedProjectType, selectedProject, setSelectedProject }}>
            {children}
        </ProjectContext.Provider>
    )
}