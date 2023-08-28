import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    kids_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "kidsdetail",
    },
    title: String,
    // email: String,
    avatar: {
      type: Object,
      default: {
        fileId: "",
        url: "https://w7.pngwing.com/pngs/332/939/png-transparent-3d-computer-graphics-child-school-graphy-3d-children-hold-books-3d-computer-graphics-child-photography.png",
      },
    },
  },

  { timestamps: true }
);

export const addSubject = mongoose.model("subject", subjectSchema);
