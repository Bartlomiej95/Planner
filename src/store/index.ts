import { combineReducers } from 'redux';

import users from './Users/reducer';
import auth from './Users/authReducer';
import projects from './Projects/reducer';
import errors from './Errors/reducer';
import departments from './Departments/reducer';
import tasks from './Tasks/reducer';
import rates from './Rates/reducer';


export default combineReducers({
    users,
    auth,
    projects,
    errors,
    departments,
    tasks,
    rates,
})