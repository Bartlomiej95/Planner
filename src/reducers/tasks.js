export default (tasks = [], action) => {
    switch(action.type){
        case 'SELECT_TYPE_OF_TASK':
            return {
                ...tasks,
                categoryTask: checkFunction(action.payload, tasks.categoryTask),
            }
        case 'GET_EMPTY':
            return action.payload;
        default:
            return tasks;
    }
}

const checkFunction = (name, array ) => {
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