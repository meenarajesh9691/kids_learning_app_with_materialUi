import { CatchAsyncError } from "../middlewares/CatchAsyncErrors.js";
import "dotenv/config";
import { addLesson } from "../models/lessonSchema.js";

// -----------Lesson Create----------------

export const lesson = CatchAsyncError(async (req, res, next) => {
  const subject_id = req.params.id;
  const { title, email } = req.body;
  const lessonData = await addLesson.create({
    subject_id: subject_id,
    title,
    email,
  });

  // console.log(result);
  res.status(201).json({ message: "Add Lesson", lessonData });
});

// ----------Get All Lessons----------------------------

export const getLessons = CatchAsyncError(async (req, res, next) => {
  const data = await addLesson.find();
  // console.log(data);
  res.status(200).json({ message: "Get All Lesson", data });
});

// ----------Get Single Lesson----------------------------

export const getLesson = CatchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const oneLesson = await addLesson.findById({ _id: id });

  res.status(200).json({ message: " One Subject", oneLesson });
});

// ----------Edit Lesson----------------------------

export const editLesson = CatchAsyncError(async (req, res, next) => {
  const lesson = req.body;
  const editLesson = new addLesson(lesson);
  // console.log("==>", editSubject);
  const id = req.params.id;
  // console.log("------>", id);
  const lessonEdit = await addLesson.updateOne(
    {
      _id: id,
    },
    editLesson
  );
  res.status(200).json({ message: "Lesson edit", lessonEdit });
});

//-------------------Delete Lesson------------------------

export const deleteLesson = CatchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const data = await addLesson.deleteOne({ _id: id });

  res.status(200).json({ message: "Lesson delete", data });
});
