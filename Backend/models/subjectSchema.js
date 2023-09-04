import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    kids_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "kidsdetail",
    },
    title: String,
    image: String,
   
  },

  { timestamps: true }
);

export const addSubject = mongoose.model("subject", subjectSchema);
