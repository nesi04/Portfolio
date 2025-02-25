import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post('/login',(req,res)=>{
    const { userName, password } = req.body;
    if (userName === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        // Generate JWT
        const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.json({ token, message: "Login successful" });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});
export default router;