const initialState = {
    projects: [],
    detailsProject: {},
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_ALL_PROJECTS':
            return {
                ...state,
                projects: action.payload,
            }
        case 'FETCH_DATA': 
            return {
                ...state,
                projects: action.payload.selectedProjects,
            };
        case 'CREATE_PROJECT':
            return {
                ...state,
                projects: [...state.projects, action.payload],
            }
        case 'GET_DETAILS_PROJECT':
            return {
                ...state,
                detailsProject: action.payload
            };
        default:
            return initialState

        }
}