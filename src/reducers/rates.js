export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_RATES':
            return action.payload;
        default:
            return state;
        }
}