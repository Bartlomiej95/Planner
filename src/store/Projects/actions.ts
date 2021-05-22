import { Dispatch } from 'react';  
import Projects from '../../interfaces/Projects/Projects';
import * as api from '../../api/index';
import ActionsProjects from './actionsCreator'
import ProjectsConst from './constans';
import { InitialTaskData, Task } from '../../interfaces/Tasks/Tasks';
import ErrorsConst from '../Errors/constants';
import ActionsErr from '../Errors/actionsCreator';

interface History {
    push: (path: string) => void,
}

export const createProject = (projectData: Projects, history: History) => async (dispatch: Dispatch<ActionsProjects | ActionsErr>) => {
    try {

        const { data } = await api.createProject(projectData)
        
        dispatch({ type: ProjectsConst.CREATE_PROJECT, payload: data})
        history.push('/homepage/user');
    } catch(error){
        dispatch({ type: ErrorsConst.ERROR_CREATE_NEW_PROJECT, payload: error.response.data})
    }
}

export const fetchAllProjects = () => async (dispatch :Dispatch<ActionsProjects>) => {
    try {
        const { data } = await api.fetchAllProjects();
        const projects = data.projects;

        dispatch({ type: ProjectsConst.FETCH_ALL_PROJECTS, payload: projects}); 
    } catch (error) {
        console.log(error);
    }
}

export const fetchData = () => async (dispatch: Dispatch<ActionsProjects>) => {
    try {
        const { data } = await api.fetchData();
        const selectedProjects = data.projectsForLoggedUser;
        const tasks = data.tasks;

        dispatch({ type: ProjectsConst.FETCH_DATA, payload: { selectedProjects, tasks}})
    } catch (error) {
        console.log(error);
    }
}

export const getDetailsProject = (name: string) => async (dispatch: Dispatch<ActionsProjects>) => {
    try {
        const { data } = await api.getDetailsProject(name)
        const { project } = data;
        console.log(project);
        dispatch({ type: ProjectsConst.GET_DETAILS_PROJECT, payload: project})

    } catch (error) {
        console.log(error);
    }
}

export const editProject = (data: Projects, name: string, id: string, history: History) => async (dispatch: Dispatch<ActionsProjects | ActionsErr>) => {
    try { 
        await api.editProject(name, data, id);
        dispatch({ type: ProjectsConst.EDIT_PROJECT, payload: { data, id} });
        history.push('/homepage/user');
    } catch (error) {
        dispatch({ type: ErrorsConst.ERROR_EDIT_PROJECT, payload: error.response.data});
    }
}


export const addTaskToProject = (idProject: string, task: InitialTaskData) => async (dispatch: Dispatch<ActionsProjects>) => {
    try {
        await api.addTaskToProject(idProject, task);

        dispatch({
            type: ProjectsConst.ADD_TASK_TO_PROJECT,
            payload: { idProject, task }
        })
    } catch (error) {
        console.log(error);
    }
}
