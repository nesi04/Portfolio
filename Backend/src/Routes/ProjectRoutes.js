import express from 'express';
import {getProjects,addProject, updateProject, deleteProject} from '../Controller/ProjectController.js';
import { verifyToken } from "../Middlewares/adminMiddleware.js"; 

const router = express.Router();
router.get("/", getProjects);
router.post("/", verifyToken, addProject);
router.put("/:id", verifyToken, updateProject);
router.delete("/:id", verifyToken, deleteProject);
export default router;