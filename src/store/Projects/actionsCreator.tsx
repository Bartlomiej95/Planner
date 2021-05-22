import Projects from '../../interfaces/Projects/Projects';
import { InitialTaskData, Task } from '../../interfaces/Tasks/Tasks';
import ProjectsConst from './constans';


interface ProjectData {
    name: string,
    customer: string,
    deadline: string,
    hours: number | string,
    projectValue: string,
    content: string,
    assumptions: string,
    scopeOfWork: string,
    customerInfo: string,
    projectUsers: Array<string>,
    departments: Array<string>,
}

interface ActionFetchAllProjects {
    type: ProjectsConst.FETCH_ALL_PROJECTS,
    payload: Array<Projects>,
}

interface ActionFetchData {
    type: ProjectsConst.FETCH_DATA,
    payload: {
        selectedProjects: Projects,
        tasks: Array<Task>,
    },
}

interface ActionCreateProject {
    type: ProjectsConst.CREATE_PROJECT,
    payload: Projects | ProjectData,
}

interface ActionGetDetailsProject {
    type: ProjectsConst.GET_DETAILS_PROJECT,
    payload: Projects,
}

interface ActionEditProject {
    type: ProjectsConst.EDIT_PROJECT,
    payload: { 
        data: Projects,
        id: string, 
    }
}

interface ActionAddTaskToProject {
    type: ProjectsConst.ADD_TASK_TO_PROJECT,
    payload: {
        idProject: string, 
        task: InitialTaskData,
    }
}

type ActionsProjects = ActionFetchAllProjects
| ActionFetchData | ActionCreateProject | ActionGetDetailsProject
| ActionEditProject | ActionAddTaskToProject


export default ActionsProjects;
