import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const kidsSchema = new mongoose.Schema(
 {
  name:String,
  email:String,
  phone:String,
  password:String,
  age:String,
  otp:String,
 },

  { timestamps: true }
);



export const kidsDetails = mongoose.model("kidsdetail", kidsSchema);