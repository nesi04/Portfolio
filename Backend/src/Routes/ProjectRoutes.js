import express from 'express';
import {getProjects,addProject, updateProject, deleteProject} from '../Controller/ProjectController.js';

const router = express.Router();
router.get("/",getProjects);
router.post("/",addProject);
router.put("/:id",updateProject);
router.delete("/:id",deleteProject);

export default router;