import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import projectRoutes from './Routes/ProjectRoutes.js';
import contactRoutes from './Routes/ContactRoutes.js';

dotenv.config();
const PORT = process.env.PORT||4000;

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DataBase connected")).catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("Server is running")
});
app.use("/api/projects",projectRoutes);
app.use("/api/contact",contactRoutes);
app.listen(PORT,()=>console.log("Server is running"));