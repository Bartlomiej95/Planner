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
        case 'EDIT_PROJECT':
            return {
                ...state,
                projects: [...state.projects].map(project => {
                    if(project._id === action.payload.id){
                        project = action.payload.data;
                        project._id = action.payload.id;
                        return project;
                    }
                    return project;
                })
            }
        default:
            return initialState

        }
}