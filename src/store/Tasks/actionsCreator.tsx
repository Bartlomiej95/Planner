import TasksConst from './constants';
import { Task } from '../../interfaces/Tasks/Tasks';

interface ActionSelectTypeOfTask {
    type: TasksConst.SELECT_TYPE_OF_TASK,
    payload: {
        name: string,
    }
}

interface ActionGetEmpty {
    type: TasksConst.GET_EMPTY,
    payload: [],
}

interface ActionCreateNewTask {
    type: TasksConst.CREATE_NEW_TASK,
    payload: {
        data: Task,
    }
}

interface ActionStartTask {
    type: TasksConst.START_TASK,
    payload: {
        id: string,
    }
}

interface ActionStopTask {
    type: TasksConst.STOP_TASK,
    payload: {
        id: string,
        time: number,
    }
}

interface ActionFetchAllTasks {
    type: TasksConst.FETCH_ALL_TASKS,
    payload: {
        name: string,
    }
}

interface ActionCloseTask {
    type: TasksConst.CLOSE_TASK,
    payload: {
        id: string,
        isFinish: boolean,
    }
}

interface ActionUpdateTask {
    type: TasksConst.UPDATE_TASK,
    payload: {
        id: string, 
        isFinish: boolean, 
        taskTime: number, 
        addedTime: number, 
    }
}

interface ActionFetchData {
    type: TasksConst.FETCH_DATA,
    payload: {
        tasks: Array<Task>,
    }
}

type ActionsTasks = ActionSelectTypeOfTask | ActionGetEmpty | ActionCreateNewTask | ActionStartTask
| ActionStopTask | ActionFetchAllTasks | ActionCloseTask | ActionUpdateTask | ActionFetchData

export default ActionsTasks;