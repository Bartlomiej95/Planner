import { Dispatch } from 'react';
import { Task } from '../../interfaces/Tasks/Tasks';
import * as api from '../../api/index';
import ActionsTasks from './actionsCreator';
import TasksConst from './constants';
import ErrorsConst from '../Errors/constants';
import ActionsErr from '../Errors/actionsCreator';

interface History {
    push: (path: string) => void,
}

export const selectTypeOfTask = (name: string) => {
    try {
        return {
            type: TasksConst.SELECT_TYPE_OF_TASK,
            payload: name,
        }
    } catch (error) {
        console.log(error);
    }
}

export const getEmpty = () => {
    try {
        return {
            type: TasksConst.GET_EMPTY,
            payload: []
            
        } 
    } catch (error){
        console.log(error);
    }
}

export const createNewTask = (taskData: Task, history: History) => async (dispatch: Dispatch<ActionsTasks | ActionsErr>) => {
    try {
        const { data } = await api.createNewTask(taskData);
        history.push('/homepage/user');
        dispatch({ type: TasksConst.CREATE_NEW_TASK, payload: data})
        
    } catch (error) {
        dispatch({ type: ErrorsConst.ERROR_CREATE_NEW_TASK, payload: error.response.data})
    }
}

export const startTask = (id: string) => {
    try {
        return {
            type: TasksConst.START_TASK,
            payload: { id }
        }
    } catch (error) {
        console.log(error)
    }
}

export const stopTask = (id: string, time: number) => {
    try {
        console.log(time)
        return {
            type: TasksConst.STOP_TASK,
            payload: {
                id,
                time: Number(time),
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllTasks = () => async (dispatch: Dispatch<ActionsTasks>) => {
    try {
        const { data } = await api.fetchData();
        const tasks = data.tasks;
        return {
            type: TasksConst.FETCH_ALL_TASKS,
            payload: {
                tasks,
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const closeTask = (idTask: string, isFinish: boolean) => {
    try {
        return {
            type: TasksConst.CLOSE_TASK,
            payload: { id: idTask, isFinish}
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = (idTask: string, isFinish: boolean, taskTime: number, addedTime: number = 0) => async(dispatch: Dispatch<ActionsTasks>) => {
    try {
        // taskTime - dotychczasowy czas
        // addedTime - czas który chcemy dodac
        const { data } = await api.updateTask(idTask, isFinish, taskTime, addedTime);
 
        dispatch({
            type: TasksConst.UPDATE_TASK,
            payload: { id: idTask, isFinish, taskTime, addedTime }
        })

    } catch (error) {
        console.log(error);
    }
}