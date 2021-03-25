import axios from 'axios';
import domain from '../util/domain';

const urlRegister = `${domain}/homepage/register`;
const urlLogin = `${domain}/homepage/login`;
const urlLogout = `${domain}/homepage/logout`;
const urlProjects = `${domain}/homepage/user`;
const urlCreateProjects = `${domain}/homepage/project/create`;
const urlProjectCreate = `${domain}/homepage/project/create`;
const urlDetailsProject =`${domain}/homepage/project/:name`;


export const fetchAllUsers = () => axios.get(urlLogin);
export const createUser = (newUser) => axios.post(urlRegister, newUser);
export const loginUser = (userData) => axios.post(urlLogin, userData); 
export const logoutUser = () => axios.get(urlLogout); 
export const createProject = (projectData) => axios.post(urlProjectCreate, projectData);
export const fetchAllProjects = () => axios.get(urlProjects);
export const fetchProjectsForLoggedUser = () => axios.get(urlProjects);
export const fetchLoggedInUser = () => axios.get(urlProjects);
export const fetchAllDepartments = () => axios.get(urlCreateProjects);
export const addActiveDepartment = () => axios.post(urlCreateProjects);
export const getDetailsProject = (name) => axios.get(`${domain}/homepage/project/${name}`);


