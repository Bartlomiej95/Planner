import { combineReducers } from 'redux';

import users from './users';
import auth from './auth';
import projects from './projects';
import errors from './errors';
import departments from './departments';
import tasks from './tasks';
import rates from './rates';



export default combineReducers({
    users,
    auth,
    projects,
    errors,
    departments,
    tasks,
    rates,
})