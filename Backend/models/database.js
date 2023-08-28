import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`DB Connected with ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
