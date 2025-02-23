import Project from '../models/ProjectSchema.js'


export const addProject = async (req, res) => {
    try {
        const { title, description, imageUrl, gitHubLink, liveDemo, techStack, createdAt } = req.body;

        // Check if required fields are provided
        if (!title || !description || !imageUrl || !gitHubLink || !liveDemo || !techStack) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newProject = new Project({
            title,
            description,
            imageUrl,
            gitHubLink,
            liveDemo,
            techStack,
            createdAt
        });

        await newProject.save();
        res.status(201).json(newProject);

    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error while adding the project", error: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error getting projects:", error); 
        res.status(500).json({ message: "Error while getting the projects", error: error.message });
    }
};

export const updateProject=async (req,res) => {
    try {
        const {id} = req.params;
        const updateData =req.body;
        const updatedProject = await Project.findByIdAndUpdate(id,updateData,{new:true});
        if(!updatedProject){
            return res.status(404).json({message:"Project not found"})
        }
        res.status(200).json(updatedProject)
    } catch (error) {
        res.status(500).json({message:"Error while updating  the projects"});
    }
};
export const deleteProject = async (req,res) => {
    try {
        const {id} = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
        if(!deleteProject) {
            return res.status(404).json({message:"Project was not deleted"});
        }
        res.status(200).json({message:"Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message:"Error while deleting the projects"});
    }
}