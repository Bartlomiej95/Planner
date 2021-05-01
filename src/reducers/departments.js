export default (departments = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_DEPARTMENTS':
            return [...action.payload].map(item => {
                item.active = false;
                return item;
            });
        case 'ADD_ACTIVE':
            return [...departments].map(item => {
                if(item.name === action.payload.name){
                    item.active = action.payload.status;                  
                }
                return item;
                });;    
            
         case 'ADD_ACTIVE_FROM_EDIT':
             return [...departments].map(item => {
                    if(action.payload.names.includes(item.name)){
                         item.active = true;
                    }
                    return item;
                });       
        default:
            return departments;
    }
}