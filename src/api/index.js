import axios from 'axios';

const urlRegister = 'http://localhost:5000/homepage/register';
const urlLogin = 'http://localhost:5000/homepage/login';
const urlProjects = 'http://localhost:5000/homepage/user';


export const fetchAllUsers = () => axios.get(urlLogin);
export const createUser = (newUser) => axios.post(urlRegister, newUser);
export const loginUser = (userData) => axios.post(urlLogin, userData); 
export const createProject = (projectData) => axios.post(urlProjects, projectData);
export const fetchAllProjects = () => axios.get(urlProjects);
export const fetchLoggedInUser = () => axios.get(urlProjects);


