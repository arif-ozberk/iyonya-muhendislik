import iyonyaDB from "../config/supabaseClient"


const fetchAllProjects = async (setProjects) => {
    const { data, error } = await iyonyaDB
        .from('projects_db')
        .select()

    if (error) {
        console.log(error);
        return;
    }

    if (data) {
        setProjects(data);
    }
}


const fetchCurrentProject = async (projectId, setSelectedProject, setIsLoading) => {
    const { data, error } = await iyonyaDB
        .from("projects_db")
        .select()
        .eq("id", projectId)
        .single()
    
        if (error) {
            console.log(error);
            return;
        }

        if (data) {
            setSelectedProject(data);
            setIsLoading(false);
        }
}


export default { fetchAllProjects, fetchCurrentProject };