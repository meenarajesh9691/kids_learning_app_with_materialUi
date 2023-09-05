import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    subject_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
    },
    lessonTitle: String,
    image:String,
    // email: String,
    // avatar: String,
    // avatar:{
    //   type:Object,
    //   default:{
    //     fileId:"",
    //     url:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    //   }
    // }
  },

  { timestamps: true }
);

export const addLesson = mongoose.model("lesson", lessonSchema);
