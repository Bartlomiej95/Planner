export default (projects = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_PROJECTS':
            return action.payload;
        case 'FETCH_PROJECTS_FOR_LOGGEDIN_USER':
            return action.payload;
        case 'CREATE_PROJECT':
            return [...projects, action.payload];
        case 'GET_DETAILS_PROJECT':
            return action.payload;
        default:
            return projects;
    }
}