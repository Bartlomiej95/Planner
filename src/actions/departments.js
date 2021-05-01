import * as api from '../api';

export const fetchAllDepartments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllDepartments();

        dispatch({ type: 'FETCH_ALL_DEPARTMENTS', payload: data});

    } catch (error) {
        console.log(error);
    }
}

//active - oznacza, że dział został wybrany podczas tworzenia projektu do jego realizacji

export const addActiveDepartment = (name, status) => {
    try {
        return{
            type: 'ADD_ACTIVE',
            payload: {
                name,
                status
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const addActiveDepartmentFromEdit = (namesOfDepartments) => {
    try {
        const names = [...namesOfDepartments];
        return{
            type: 'ADD_ACTIVE_FROM_EDIT',
            payload: {
                names,
            }
        }

    } catch (error) {
        console.log(error);
    }
}