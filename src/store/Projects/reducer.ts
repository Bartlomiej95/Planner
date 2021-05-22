import Projects from '../../interfaces/Projects/Projects';
import ProjectsConst from './constans';
import ActionsProjects from './actionsCreator';

export interface ProjectsState {
    projects: Array<Projects>,
    detailsProjects: Projects | {},
}

const initialState: ProjectsState = {
    projects: [],
    detailsProjects: {},
}

export default (state: ProjectsState = initialState, action: ActionsProjects) => {
    switch(action.type){
        case ProjectsConst.FETCH_ALL_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            }
        case ProjectsConst.FETCH_DATA: 
            return {
                ...state,
                projects: action.payload.selectedProjects,
            };
        case ProjectsConst.CREATE_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
            }
        case ProjectsConst.GET_DETAILS_PROJECT:
            return {
                ...state,
                detailsProject: action.payload
            };
        case ProjectsConst.EDIT_PROJECT:
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
            return initialState;
        }
}