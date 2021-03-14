export default (departments = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_DEPARTMENTS':
            return action.payload;
        case 'ADD_ACTIVE':
            [...departments].map(item => {
                if(item.name === action.payload.name){
                    item.active = action.payload.status;                  
                }
                return item
            })

            
        default:
            return departments;
    }
}