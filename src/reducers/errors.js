export default (errors = [], action) => {
    switch(action.type){
        case 'ERROR_LOGIN_USER':
            return action.payload;
        case 'ERROR_REGISTER_USER':
            return action.payload;
        case 'ERROR_CREATE_NEW_PROJECT':
            return action.payload;
        case 'ERROR_CREATE_NEW_TASK':
            return action.payload;
        case 'ERROR_EDIT_PROJECT':
            return action.payload;
        default:
            return errors;
    }
}