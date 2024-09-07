import { Request, Response } from "express";
import { Schema } from "../models/Schema";

//defining backend functions

export const saveCode = async (req: Request, res: Response) =>{
const {completeCode} = req.body;
    try{
const newCode = await Schema.create({
    completeCode: completeCode,
})
return res.status(201).send(newCode);
}catch(error){
    return res.status(500).send({message: "Enter saving code", error});
}
};