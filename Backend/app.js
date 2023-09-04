import express from "express";
import "dotenv/config";
import logger from "morgan";
import cors from "cors";
import kidsRouter from "./routes/kids.js";
import subjectRouter from "./routes/subject.js";
import lessonRouter from "./routes/lesson.js";

const app = express();

// -----database connection----
import { connectDB } from "./models/database.js";
connectDB();

//--------- Middleware-----------
app.use(logger("tiny"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

// ------------------session & cookie-parser-----------

import cookieParser from "cookie-parser";
import session from "express-session";

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);

app.use(cookieParser());

// ---------------All Routes--------------
app.use("/", kidsRouter);
app.use("/", subjectRouter);
app.use("/", lessonRouter);

// ---------Error Handling-------------
import genratedErrors from "./middlewares/Error.js";
app.use(genratedErrors);

// ---------Server Running-------------
app.listen(process.env.PORT, () => {
  console.log(`Server is start on ${process.env.PORT}`);
});
