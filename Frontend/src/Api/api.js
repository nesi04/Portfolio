import axios from 'axios';
const api = axios.create({baseURL:"http://localhost:4304/api"});

export const getProjects = async ()=>{
    try {
        const res = await api.get("/projects");
        console.log(res.data);
        return res.data;
        
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
    
};

export const  addProject = async (projectData) => {
    try {
        const res = await api.post('/projects',projectData);
        return res.data;

        
    } catch (error) {
        console.error("Error adding project:", error);
        throw error;
    }
    
};
export const updateProject = async (id,updatedData) => {
    try {
        const res = await api.put(`/projects/${id}`,updatedData);
        return res.data;
        
    } catch (error) {
        console.error("Error adding project:", error);
        throw error;
    }
    
};
export const deleteProject = async (id) => {
    try {
        const res = await api.delete(`/projects/${id}`);
        return res.data;
        
    } catch (error) {
        console.error("Error deleting project:", error);
        throw error;
    }
    
};

export const sendMessage = async(messageData)=>{
    try {
        const res = await api.post('/contact',messageData);
        return res.data;
        
    } catch (error) {
        console.error("Error sending message", error);
        throw error;
    }
};

export const getMessages = async () => {
    try {
        const res = await api.get('/contact');
        return res.data;
    } catch (error) {
        console.error("Error getting message", error);
        throw error;
    }
};
