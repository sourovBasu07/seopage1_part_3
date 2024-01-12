import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("Missing Mongodb url");

  if (isConnected) {
    console.log("Mongodb connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};
