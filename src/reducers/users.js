export default (users = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_USERS':
            return action.payload;
        case 'CREATE_USER':
            return [...users, action.payload];
        case 'LOGOUT_USER':
            return users;
        default:
            return users;
    }
}