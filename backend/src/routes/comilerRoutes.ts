import  express  from "express";
import { loadCode, saveCode } from "../controllers/compilerControllers";

export const compilerRoutes = express.Router();

// setting backend routes
compilerRoutes.post("/save",saveCode);
compilerRoutes.post("/load",loadCode);