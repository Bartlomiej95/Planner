export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_RATES':
            return action.payload;
        case 'EDIT_RATE':
            return [
                ...state, 
            ].map(rate => {
                if(rate._id === action.payload.id){
                    rate.rate = action.payload.value;
                }
                return rate
            })
        default:
            return state;
        }
}