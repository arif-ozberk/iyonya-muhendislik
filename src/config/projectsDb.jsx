import iyonyaDB from "../config/supabaseClient"


const fetchAllProjects = async (setProjects, selectedProjectType, loadCount) => {
    const { data, error } = await iyonyaDB
        .from('projects_sql')
        .select()
        .eq("isFinished", selectedProjectType)
        .order('id', { ascending: true });

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
        .from("projects_sql")
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

const fetchAllCities = async (setAllCities) => {
    const { data, error } = await iyonyaDB
        .from("projects_sql")
        .select("city")

    if (error) {
        console.log(error);
        return
    }

    if (data) {

        const uniqueCities = [...new Set(data.map(item => item.city))];
        setAllCities(uniqueCities);
    }
}


export default { fetchAllProjects, fetchCurrentProject, fetchAllCities };