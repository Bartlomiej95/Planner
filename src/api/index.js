import axios from 'axios';
import domain from '../util/domain';

const urlRegister = `${domain}/homepage/register`;
const urlLogin = `${domain}/homepage/login`;
const urlProjects = `${domain}/homepage/user`;


export const fetchAllUsers = () => axios.get(urlLogin);
export const createUser = (newUser) => axios.post(urlRegister, newUser);
export const loginUser = (userData) => axios.post(urlLogin, userData); 
export const createProject = (projectData) => axios.post(urlProjects, projectData);
export const fetchAllProjects = () => axios.get(urlProjects);
export const fetchLoggedInUser = () => axios.get(urlProjects);


