import axios from 'axios';
import Projects from '../interfaces/Projects/Projects';
import Rates from '../interfaces/Rates/Rates';
import { InitialTaskData, Task } from '../interfaces/Tasks/Tasks';
import {  Users, RegisterUserData } from '../interfaces/Users/Users';
import domain from '../util/domain';

const urlRegister = `${domain}/homepage/register`;
const urlLogin = `${domain}/homepage/login`;
const urlLogout = `${domain}/homepage/logout`;
const urlHomepageUser = `${domain}/homepage/user`;
const urlCreateProjects = `${domain}/homepage/project/create`;
const urlProjectCreate = `${domain}/homepage/project/create`;
const urlNewTask = `${domain}/homepage/project/tasks`;

interface LoginData {
    email: Users['email'],
    user_id: Users['user_id'],
    password: Users['password'],

}

export const fetchAllUsers = () => axios.get(urlLogin);
export const createUser = (newUser :RegisterUserData) => axios.post(urlRegister, newUser);
export const loginUser = (userData :LoginData) => axios.post(urlLogin, userData); 
export const logoutUser = () => axios.get(urlLogout); 
export const createProject = (projectData :Projects) => axios.post(urlProjectCreate, projectData);
export const fetchAllProjects = () => axios.get(urlHomepageUser);
export const fetchData = () => axios.get(urlHomepageUser);
export const fetchLoggedInUser = () => axios.get(urlHomepageUser);
export const fetchAllDepartments = () => axios.get(urlCreateProjects);
export const addActiveDepartment = () => axios.post(urlCreateProjects);
export const getDetailsProject = (name :string) => axios.get(`${domain}/homepage/project/${name}`);
export const createNewTask = (taskData :Task) => axios.post(urlNewTask, taskData);
export const editRate = ( id :string, value :number) => axios.put(urlHomepageUser, { id, value });
export const editProject = (name: string, data :Projects, id:string) => axios.put(`${domain}/homepage/project/edit/${name}`, {data, id});
export const addTaskToProject = (idProject: string, task:InitialTaskData) => axios.put(`${domain}/homepage/project/tasks`, { idProject, task });
export const updateTask = (id:string, isFinish:boolean, time:number, addedTime:number) => axios.put(urlHomepageUser, {id, isFinish, time, addedTime}); 

