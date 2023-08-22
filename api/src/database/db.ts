import mongoose, { Mongoose } from "mongoose";

export const connectDB = async (URI: string): Promise<Mongoose> => {
  return mongoose.connect(URI);
};
