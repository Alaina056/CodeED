import { Request, Response } from "express";
import { Schema } from "../models/Schema";

//defining backend functions

export const saveCode = async (req: Request, res: Response) => {
  const { completeCode } = req.body;
  try {
    const newCode = await Schema.create({            // this function adds the code in the database then it returns an object containing _id, object{code} and _v (version)
      completeCode: completeCode,
    });
    // console.log(newCode);
    return res.status(201).send({ url: newCode._id, status: "Code saved" });
  } catch (error) {
    return res.status(500).send({ message: "Error saving code", error });
  }
};

export const loadCode = async (req:Request, res:Response)=>{
  const {urlId} = req.body;
  console.log(req.body);
  try {
    const savedCode = await Schema.findById(urlId);  // Schema is the database
    if(!savedCode){
      return res.status(404).send({message: "Code not found"});
    }
    return res.status(200).send({completeCode: savedCode.completeCode, status: "Code Loaded"})
  }catch(error){
    return res.status(500).send({ message: "Error loading code", error });

  }
}