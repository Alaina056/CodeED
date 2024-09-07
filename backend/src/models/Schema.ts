import mongoose from "mongoose";

interface IDbSchema {
  completeCode: {
    html: string; //typescript way of defining datatype
    css: string;
    javascript: string;
  };
}
const DbSchema = new mongoose.Schema<IDbSchema>({
  completeCode: {
    html: String, // mongoose way of defining schema {datatype}
    css: String,
    javascript: String,
  },
});

export const Schema = mongoose.model("DbSchema", DbSchema);
