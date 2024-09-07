import mongoose from "mongoose";


// FOR DATABASE CONNECTION
export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "CodeEdDatabase",
    });
    console.log("connected to Database");
  } catch (error) {
    console.log("ERROR! connection failed");
  }
};
