import express from "express";
import { register } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", register);

export default authRouter
