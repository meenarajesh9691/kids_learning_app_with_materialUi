import express from "express";
import {
  subject,
  getSubject,
  deleteSubject,
  editSubject,
  getSubjects,
  // avatarSubject,
} from "../controllers/subjectController.js";
import { isAuthenticated } from "../middlewares/auth.js";

import { uploadSub } from "../helpers/multerSub.js"

const router = express.Router();

// ------------------All Subject API's---------------

router.post(
  "/addSubject/:id",
  isAuthenticated,
  uploadSub.single("image"),
  subject
);
// router.post("/addSubject/populate", isAuthenticated, getKidsBySubject);
router.get("/getSubjects", isAuthenticated, getSubjects);
router.get("/getSubject/:id", isAuthenticated, getSubject);
router.post("/editSub/:id", isAuthenticated, editSubject);
// router.post("/avatarSubject/:id", isAuthenticated, avatarSubject);
router.get("/deleteSub/:id", isAuthenticated, deleteSubject);

export default router;
