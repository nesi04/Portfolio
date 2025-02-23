import {create} from 'zustand';
import { addProject, deleteProject, getMessages, getProjects, sendMessage, updateProject } from '../Api/api';

const useStore = create((set)=>({
    projects:[],
    messages:[],

    fetchProjects:async () => {
        try {
            const data = await getProjects();
            set({projects:data});
            
        } catch (error) {
            console.error("Error fetching projects",error);
        }
        
    },
    addNewProject:async (projectData) => {
        try {
            const newProject = await addProject(projectData);
            set((state)=>({projects:[...state.projects,newProject]}));
            
        } catch (error) {
            console.error("Error adding new project",error);
        }
        
    },

    updateExistingProject : async (id,updatedData)=>{
        try {
            const updatedProject = await updateProject(id,updatedData);
            set((state)=>({
                projects:state.projects.map((proj)=>proj._id===id?updatedProject:proj),
            }));
            
        } catch (error) {
            console.error("Error updating project",error);
        }
    },
    removeProject:async (id)=>{
        try {
            await deleteProject(id);
            set((state)=>({
                projects:state.projects.filter((proj)=>proj._id!==id),
            }));
            
        } catch (error) {
            console.error("Error deleting project",error);
        }
    },
    fetchMessage:async()=>{
        try {
            const data = await getMessages();
            set({messages:data});
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    },
    sendNewMessage:async(messageData)=>{
        try {
            const newMessage = await sendMessage(messageData);
            set((state) => ({ messages: [...state.messages, newMessage] }));
            
        } catch (error) {
            console.error("Error sending messages:", error);
        }
    },
}));

export default useStore;