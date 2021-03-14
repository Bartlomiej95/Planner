import * as api from '../api';

export const createProject = (projectData) => async(dispatch) => {
    try {

        const { data } = await api.createProject(projectData)
        
        dispatch({ type: 'CREATE_PROJECT', payload: data})
    } catch(error){
        console.log(error);
    }
}

export const fetchAllProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllProjects();

        const projects = data.projects;

        dispatch({ type: "FETCH_ALL_PROJECTS", payload: projects}); 
    } catch (error) {
        console.log(error);
    }
}