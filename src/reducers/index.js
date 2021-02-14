import { combineReducers } from 'redux';

import users from './users';
import auth from './auth';
import projects from './projects';
import errors from './errors';


export default combineReducers({
    users,
    auth,
    projects,
    errors
})