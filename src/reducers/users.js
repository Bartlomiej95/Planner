export default (users = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_USERS':
            return users;
        case 'CREATE_USER':
            return users;
        default:
            return users;
    }
}