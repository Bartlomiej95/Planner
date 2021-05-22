import ActionsErr from './actionsCreator';
import ErrorsConst from './constants';

export default (errors = [], action: ActionsErr) => {
    switch(action.type){
        case ErrorsConst.ERROR_LOGIN_USER:
            return action.payload;
        case ErrorsConst.ERROR_REGISTER_USER:
            return action.payload;
        case ErrorsConst.ERROR_CREATE_NEW_PROJECT:
            return action.payload;
        case ErrorsConst.ERROR_CREATE_NEW_TASK:
            return action.payload;
        case ErrorsConst.ERROR_EDIT_PROJECT:
            return action.payload;
        default:
            return errors;
    }
}