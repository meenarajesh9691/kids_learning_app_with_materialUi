import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const kidsSchema = new mongoose.Schema(
 {
  name:String,
  email:String,
  phone:String,
  password:String,
 },

  { timestamps: true }
);



export const kidsDetails = mongoose.model("kidsdetail", kidsSchema);