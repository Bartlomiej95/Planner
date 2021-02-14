import * as api from '../api';

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers();

        dispatch({ type: "FETCH_ALL_USERS", payload: data}) 
    } catch (error) {
        console.log(error)
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        
        dispatch({ type: 'CREATE_USER', payload: data})
    }
    catch (error){
        dispatch({ type: "ERROR_REGISTER_USER", payload: error.response.data })
    }
}
