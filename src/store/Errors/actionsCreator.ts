import ErrorsConst from "./constants";


interface ActionErrCreateNewProject {
    type: ErrorsConst,
    payload: {
        error: {
            response: {
                data: string,
            }
        }
    }
}

interface ActionErrEditProject {
    type: ErrorsConst,
    payload: {
        error: {
            response: {
                data: string,
            }
        }
    }
}

interface ActionErrCreateNewTask {
    type: ErrorsConst,
    payload: {
        error: {
            response: {
                data: string,
            }
        }
    }
}

type ActionsErr = ActionErrCreateNewProject | ActionErrEditProject | ActionErrCreateNewTask


export default ActionsErr;