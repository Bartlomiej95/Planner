import * as api from '../api';

export const fetchAllDepartments = () => async (dispatch) => {
    try {
        const { data } = await api.createProject();
        dispatch({ type: 'FETCH_ALL_DEPARTMENTS', payload: data});

    } catch (error) {
        console.log(error);
    }
}