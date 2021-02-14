export default (errors = [], action) => {
    switch(action.type){
        case 'ERROR_LOGIN_USER':
            return action.payload;
        case 'ERROR_REGISTER_USER':
            return action.payload;
        default:
            return errors;
    }
}