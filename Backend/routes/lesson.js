import express from "express";
import {
  lesson,
  getLessons,
  deleteLesson,
  getLesson,
  editLesson,
} from "../controllers/lessonController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { uploadLesson } from "../helpers/multerLesson.js";
import { videoUpload } from "../helpers/videoMulter.js";

const router = express.Router();

router.post(
  "/addLesson/:id",
  isAuthenticated,
  uploadLesson.single("image"),
  lesson
);
router.get("/getLessons", isAuthenticated, getLessons);
router.get("/deletelesson/:id", isAuthenticated, deleteLesson);
router.get(
  "/getLesson/:id",
  isAuthenticated,
  videoUpload.fields([
    {
      name: "video",
      maxCount: 5,
    },
  ]),
  getLesson
);
router.post("/editLesson/:id", isAuthenticated, editLesson);

export default router;
