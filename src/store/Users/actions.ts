import { Dispatch } from 'react';
import { Users, RegisterUserData } from '../../interfaces/Users/Users';
import * as api from '../../api';
import ActionsErr from '../Errors/actionsCreator';
import ErrorsConst from '../Errors/constants';
import ActionsUsers from './actionCreator';
import UsersConst from './constants';

interface History {
    push: (path: string) => void,
}

interface LoginData {
    email: string | '',
    user_id: number | null,
    password: string | ''
}

export const fetchAllUsers = () => async (dispatch: Dispatch<ActionsUsers>) => {
    try {
        const { data } = await api.fetchAllUsers();

        dispatch({ type: UsersConst.FETCH_ALL_USERS, payload: data}) 
    } catch (error) {
        console.log(error)
    }
}

export const createUser = (user: RegisterUserData, history: History) => async (dispatch: Dispatch<ActionsUsers | ActionsErr>) => {
    try {
        const { data } = await api.createUser(user);
        
        dispatch({ type: UsersConst.CREATE_USER, payload: data});
        history.push('/homepage/user');
    }
    catch (error){
        dispatch({ type: ErrorsConst.ERROR_REGISTER_USER, payload: error.response.data })
    }
}

export const logoutUser = () => async (dispatch: Dispatch<ActionsUsers>) => {
    try {
        const { data } = await api.logoutUser();

        dispatch({ type: UsersConst.LOGOUT_USER, payload: data})
    } catch (error) {
        
    }
}

export const loginUser = (userData: LoginData, history: History) => async (dispatch: Dispatch<ActionsUsers | ActionsErr>) => {
    try {
        const { data } = await api.loginUser(userData);
        console.log(data);
        dispatch({ type: UsersConst.LOGIN_USER, payload: data});

        history.push('/homepage/user');
    } catch (error) { 
        console.log(error.response.data);

        dispatch({ type:ErrorsConst.ERROR_LOGIN_USER, payload: error.response.data})
    }
}

// export const fetchLoggedInUser = () => async (dispatch) => {
//     try {
//         const { data } = await api.fetchLoggedInUser();
//         const user = data.user
        
//         dispatch({ type: 'FETCH_LOGGEDIN_USER', payload: user})
//     } catch (error) {
//         console.log(error)
//     }
// }


