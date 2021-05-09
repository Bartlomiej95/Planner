import axios from 'axios';
import domain from '../util/domain';

const urlRegister = `${domain}/homepage/register`;
const urlLogin = `${domain}/homepage/login`;
const urlLogout = `${domain}/homepage/logout`;
const urlHomepageUser = `${domain}/homepage/user`;
const urlCreateProjects = `${domain}/homepage/project/create`;
const urlProjectCreate = `${domain}/homepage/project/create`;
const urlNewTask = `${domain}/homepage/project/tasks`;


export const fetchAllUsers = () => axios.get(urlLogin);
export const createUser = (newUser) => axios.post(urlRegister, newUser);
export const loginUser = (userData) => axios.post(urlLogin, userData); 
export const logoutUser = () => axios.get(urlLogout); 
export const createProject = (projectData) => axios.post(urlProjectCreate, projectData);
export const fetchAllProjects = () => axios.get(urlHomepageUser);
export const fetchData = () => axios.get(urlHomepageUser);
export const fetchLoggedInUser = () => axios.get(urlHomepageUser);
export const fetchAllDepartments = () => axios.get(urlCreateProjects);
export const addActiveDepartment = () => axios.post(urlCreateProjects);
export const getDetailsProject = (name) => axios.get(`${domain}/homepage/project/${name}`);
export const createNewTask = (taskData) => axios.post(urlNewTask, taskData);
export const editRate = (id, value) => axios.put(urlHomepageUser, { id, value });
export const editProject = (name, data, id) => axios.put(`${domain}/homepage/project/edit/${name}`, {data, id});
export const addTaskToProject = (idProject, task) => axios.put(`${domain}/homepage/project/tasks`, { idProject, task });

