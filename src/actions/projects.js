import * as api from '../api';

export const createProject = (projectData, history) => async(dispatch) => {
    try {

        const { data } = await api.createProject(projectData)
        
        dispatch({ type: 'CREATE_PROJECT', payload: data})
        history.push('homepage/user');
    } catch(error){
        dispatch({ type: 'ERROR_CREATE_NEW_PROJECT', payload: error.response.data})
    }
}

export const fetchAllProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllProjects();
        console.log(data);
        const projects = data.projects;
        console.log(projects);

        dispatch({ type: "FETCH_ALL_PROJECTS", payload: projects}); 
    } catch (error) {
        console.log(error);
    }
}

export const fetchProjectsForLoggedUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjectsForLoggedUser();
        const selectedProjects = data.projectsForLoggedUser;
 
        dispatch({ type: "FETCH_PROJECTS_FOR_LOGGEDIN_USER", payload: selectedProjects })
    } catch (error) {
        console.log(error);
    }
}

export const getDetailsProject = (name) => async (dispatch) => {
    try {
        const { data } = await api.getDetailsProject(name)
        const { project } = data;
        dispatch({ type: 'GET_DETAILS_PROJECT', payload: project})

    } catch (error) {
        console.log(error);
    }
}