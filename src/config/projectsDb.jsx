import iyonyaDB from "../config/supabaseClient"


const fetchAllProjects = async (setProjects) => {
    const { data, error } = await iyonyaDB
        .from('projects_db')
        .select()
        .single()
    if (error) {
        console.log(error)
        return
    }
    if (data) {
        console.log(data)
        setProjects(data)
    }

}

export default fetchAllProjects