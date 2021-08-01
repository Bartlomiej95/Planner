import Departments from "../Departments/Departments";
import Rates from "../Rates/Rates";
import { Users } from "../Users/Users";
import { Task } from "../Tasks/Tasks";


export default interface DefaultRootState {
    users: Array<Users> | [],
    departments: Array<Departments> | [],
    errors: {
        message?: string,
    }, 
    rates: Array<Rates>,
    tasks: {
        tasks: Array<Task>,
        categoryTask: string,
    },
    projects: {
        name: string,
        map: Function,
        slice: Function,
        projects: any,
    };  
}