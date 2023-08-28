import errorHandler from "../utils/errorHandler.js";
import { CatchAsyncError } from "../middlewares/CatchAsyncErrors.js";
import { kidsDetails } from "../models/kidsSchema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const isAuthenticated = CatchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new errorHandler("Kids Not Authenticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await kidsDetails.findOne({ _id: decoded.id });
  next();
});
