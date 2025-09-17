import axios from 'axios';
const API_URL = '/api/projects/';

const createProject = async (projectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.post(API_URL, projectData, config);
    return response.data;
}

const getProject = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const deleteProject = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config);
    return response.data;
} 

const updateProject = async (id, projectData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.put(`/api/projects/${id}`, projectData, config);
    return response.data;
};

const projectService = { createProject, getProject, deleteProject, updateProject };
export default projectService;