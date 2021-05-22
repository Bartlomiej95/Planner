import { Dispatch } from 'react';
import * as api from '../../api/index';
import ActionsDepartments from './actionsCreator';
import DepartmentsConsts from './constants';

export const fetchAllDepartments = () => async (dispatch: Dispatch<ActionsDepartments>) => {
    try {
        const { data } = await api.fetchAllDepartments();

        dispatch({ type: DepartmentsConsts.FETCH_ALL_DEPARTMENTS, payload: data});

    } catch (error) {
        console.log(error);
    }
}

//active - oznacza, że dział został wybrany podczas tworzenia projektu do jego realizacji

export const addActiveDepartment = (name: string, status: boolean) => {
    try {
        return{
            type: DepartmentsConsts.ADD_ACTIVE,
            payload: {
                name,
                status
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const addActiveDepartmentFromEdit = (namesOfDepartments: Array<string>) => {
    try {
        const names = [...namesOfDepartments];
        return{
            type: DepartmentsConsts.ADD_ACTIVE_FROM_EDIT,
            payload: {
                names,
            }
        }

    } catch (error) {
        console.log(error);
    }
}