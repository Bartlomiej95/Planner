import * as api from '../api';

export const selectTypeOfTask = (name) => {
    try {
        return {
            type: 'SELECT_TYPE_OF_TASK',
            payload: name,
        }
    } catch (error) {
        console.log(error);
    }
}

export const getEmpty = () => {
    try {
        return {
            type: 'GET_EMPTY',
            payload: {
                tasks: [],
                categoryTask: [],
            }
        } 
    } catch (error){
        console.log(error);
    }
}

export const createNewTask = (taskData) => async (dispatch) => {
    try {
        const { data } = await api.createNewTask(taskData);
        console.log(taskData)
        dispatch({ type: 'CREATE_NEW_TASK', payload: data})
        
    } catch (error) {
        console.log(error);
    }
}