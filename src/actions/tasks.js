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

export const startTheTask = (id) => {
    try {
        return {
            type: 'START_TASK',
            payload: { id }
        }
    } catch (error) {
        console.log(error)
    }
}

export const stopTheTask = (id, time) => {
    try {
        console.log(time)
        return {
            type: 'STOP_TASK',
            payload: {
                id,
                time: Number(time),
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllTask = () => async(dispatch) => {
    try {
        const { data } = await api.fetchData();
        const tasks = data.tasks;
        return {
            type: 'FETCH_ALL_TASKS',
            payload: {
                tasks,
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const closeTask = (idTask, isFinish) => {
    try {
        return {
            type: 'CLOSE_TASK',
            payload: { id: idTask, isFinish}
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = (idTask, isFinish, taskTime, addedTime = 0) => async(dispatch) => {
    try {
        // taskTime - dotychczasowy czas
        // addedTime - czas który chcemy dodac
        const { data } = await api.updateTask(idTask, isFinish, taskTime, addedTime);
 
        dispatch({
            type: 'UPDATE_TASK',
            payload: { id: idTask, isFinish, taskTime, addedTime }
        })

    } catch (error) {
        console.log(error);
    }
}