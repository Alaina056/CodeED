import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRoutes } from "./routes/comilerRoutes";

const app = express();

app.use(express.json());  //middleware
app.use(cors());
config();

app.get("/",(req:Request,res:Response)=>{
    return res.status(200).send("ok")
});

app.use("/compiler", compilerRoutes);

//FOR DATABASE CONNECTION
dbConnect();

app.listen(4000,()=>{
    
    console.log("http://localhost:4000");
});