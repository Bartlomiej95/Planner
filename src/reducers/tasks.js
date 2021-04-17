const initialState = {
    tasks: [],
    categoryTask: [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_TYPE_OF_TASK':
            return {
                ...state,
                categoryTask: checkFunction(action.payload, state.categoryTask),
            }
        case 'GET_EMPTY':
            return {
                ...state,
                tasks: [
                    ...state.tasks
                ],
                categoryTask: action.payload
            };
        case 'CREATE_NEW_TASK':
            return {
                tasks: [
                    ...state.tasks,
                    action.payload
                ],
                categoryTask: []
            }     
        case 'FETCH_ALL_TASKS':
            return {
                tasks: action.payload,
                categoryTask: [],
            };
        case 'START_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks
                ].map(task => {
                    if(task._id === action.payload.id){
                        task.isActive = true;
                    }
                    return task;
                })
            }
            case 'STOP_TASK':
                return {
                    ...state,
                    tasks: [
                        ...state.tasks
                    ].map(task => {
                        if(task._id === action.payload.id){
                            task.taskTime = task.taskTime + action.payload.time;
                        }
                        return task;
                    })
                } 
        default:
            return initialState;
    }
}

const checkFunction = (name, array ) => {
    console.log(array);
    let count = 0;
    for(let i = 0; array.length > i; i++ ){
        if(array.includes(name)){
            count++;
        }
    }
    if(count === 2){
        const newArray = array.filter(item => item !== name);
        return newArray;
    } else if( count !== 2) {
        array.push(name);
        return array;
    }
}