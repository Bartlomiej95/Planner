export default (department = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_DEPARTMENTS':
            return action.payload;
        default:
            return department;
    }
}