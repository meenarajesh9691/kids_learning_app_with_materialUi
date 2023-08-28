import { CatchAsyncError } from "../middlewares/CatchAsyncErrors.js";
import "dotenv/config";
import { addSubject } from "../models/subjectSchema.js";
import { initImageKit as imagekit } from "../utils/imageKit.js";

// --------------------Subject Create------------------------------

export const subject = CatchAsyncError(async (req, res, next) => {
  const kids_id = req.params.id;
  const { title, email } = req.body;
  const subData = await addSubject.create({
    kids_id: kids_id,
    title,
    email,
  });

  // console.log(result);
  res.status(201).json({ message: "Add Subject", subData });
});

// --------------- Get Kids By Subject------------------
// export const getKidsBySubject = async(req,res)=>{
//  const data= await addSubject.find().populate("kidsdetail")
//  console.log(data);
//  res.status(200).json({message:" getKidsBySubject Successfully", data})
//  }

// ----------Get All Subjects----------------------------

export const getSubjects = CatchAsyncError(async (req, res, next) => {
  const data = await addSubject.find();
  res.status(200).json({ message: "Get All Subject", data });
});

// ----------Get Single Subject----------------------------

export const getSubject = CatchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const oneSubject = await addSubject.findById({ _id: id });

  res.status(200).json({ message: " One Subject", oneSubject });
});

// ----------Edit Subject----------------------------

export const editSubject = CatchAsyncError(async (req, res, next) => {
  const subject = req.body;
  const editSubject = new addSubject(subject);
  // console.log("==>", editSubject);
  const id = req.params.id;
  // console.log("------>", id);
  const subEdit = await addSubject.updateOne(
    {
      _id: id,
    },
    editSubject
  );
  res.status(200).json({ message: "Subject edit", subEdit });
});

// ------------Avtar Subject------------------
export const avatarSubject = CatchAsyncError(async (req, res, next) => {
  const student = await 
  res.json({file:req.files.avatar});
});

//-------------------Delete Subject------------------------

export const deleteSubject = CatchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  await addSubject.deleteOne({ _id: id });

  res.status(200).json({ message: "Subject delete" });
});
