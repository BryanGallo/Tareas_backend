import express from "express";
import { listRoles } from "../controllers/rolController.js";

const rolRouter = express.Router();

rolRouter.get("/", listRoles);

export default rolRouter;
