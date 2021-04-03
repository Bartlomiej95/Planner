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
            payload: []
            
        } 
    } catch (error){
        console.log(error);
    }
}

export const createNewTask = (taskData, history) => async (dispatch) => {
    try {
        const { data } = await api.createNewTask(taskData);
        history.push('/homepage/user');
        dispatch({ type: 'CREATE_NEW_TASK', payload: data})
        
    } catch (error) {
        dispatch({ type: 'ERROR_CREATE_NEW_TASK', payload: error.response.data})
    }
}