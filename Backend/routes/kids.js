import express from "express";
import {
  kidsData,
  kidsSignup,
  kidsLogin,
  kidsSignout,
  reSendEmail,
  // kidsAge
 
} from "../controllers/kidsController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// ------------------All Kids API's---------------

router.post("/signup", kidsSignup);
router.post("/send-OTP", reSendEmail);
router.post("/login", kidsLogin);
router.get("/kidsData", isAuthenticated, kidsData);
router.get("/kids/signout", isAuthenticated, kidsSignout);


export default router;
