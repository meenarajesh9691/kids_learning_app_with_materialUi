import express from "express";
import {

  lesson,
  getLessons,
  deleteLesson,
  getLesson,
  editLesson,
} from "../controllers/lessonController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addLesson/:id", isAuthenticated, lesson);
router.get("/getLessons", isAuthenticated, getLessons);
router.get("/deletelesson/:id", isAuthenticated, deleteLesson);
router.get("/getLesson/:id", isAuthenticated, getLesson);
router.post("/editLesson/:id", isAuthenticated, editLesson);


export default router;
