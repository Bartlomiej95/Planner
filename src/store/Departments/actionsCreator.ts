import Departments from '../../interfaces/Departments/Departments';
import DepartmentsConsts from './constants';

interface ActionFetchAllDepartments {
    type: DepartmentsConsts.FETCH_ALL_DEPARTMENTS,
    payload: Array<Departments>,
}

interface ActionAddActive {
    type: DepartmentsConsts.ADD_ACTIVE,
    payload: {
        name: string,
        status: boolean,
    }
}

interface ActionAddActiveFromEdit {
    type: DepartmentsConsts.ADD_ACTIVE_FROM_EDIT,
    payload: {
        names: Array<string>,
    }
}

type ActionsDepartments = ActionFetchAllDepartments | ActionAddActive
| ActionAddActiveFromEdit;

export default ActionsDepartments;