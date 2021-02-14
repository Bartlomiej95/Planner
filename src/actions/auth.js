import * as api from '../api';

export const loginUser = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(userData);
        console.log(data);
        dispatch({ type: 'LOGIN_USER', payload: data});

        history.push('/homepage/user');
    } catch (error) {
        console.log(error);
    }
}


export const fetchLoggedInUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLoggedInUser();
        const user = data.user
        
        dispatch({ type: 'FETCH_LOGGEDIN_USER', payload: user})
    } catch (error) {
        console.log(error)
    }
}