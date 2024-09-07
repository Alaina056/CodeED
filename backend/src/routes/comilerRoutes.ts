import  express  from "express";
import { saveCode } from "../controllers/compilerControllers";

export const compilerRoutes = express.Router();

// setting backend routes
compilerRoutes.post("/save",saveCode);