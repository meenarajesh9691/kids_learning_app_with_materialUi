import errorHandler from "../utils/errorHandler.js";
import { CatchAsyncError } from "../middlewares/CatchAsyncErrors.js";
import { kidsDetails } from "../models/kidsSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import nodemailer from 'nodemailer'
import router from "../routes/kids.js";

//---------------- Kids Signup ------------------------

export const kidsSignup = CatchAsyncError(async (req, res, next) => {
  // get all data from clientSide
  const { name, email, password, phone, age } = req.body;
  //  encrypt the password
  const encryptedPassword = await bcrypt.hash(password, 10);
  // save the kids in DB
  const kids = await kidsDetails.create({
    name,
    email,
    phone,
    password: encryptedPassword,
    age,
  });
  res.status(201).json({ message: "kids created ", kids });
});

// export const kidsAge = CatchAsyncError(async (req, res, next) => {
//   const age = req.body;
//   const kidsAge = await kidsDetails.create({age:age});
//   res.status(201).json({ message: "Add Age Successfully! ", kidsAge });
// });

//---------------------------- Kids Login -----------------

export const kidsLogin = CatchAsyncError(async (req, res, next) => {
  // get all data from clientSide
  const { email, password } = req.body;

  // Find user in DB
  const kids = await kidsDetails.findOne({ email: email });

  // Validation
  if (!kids) {
    return next(
      new errorHandler("Kids Not Found With This Email Address", 400)
    );
  }

  // Match the password
  const isMatch = await bcrypt.compare(password, kids.password);

  //  Apply Condition
  if (kids && isMatch) {
    // Create JWT Token
    const token = jwt.sign({ id: kids._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    // Cookie Section
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    // send token in kids cookie
    return res
      .status(200)
      .cookie("token", token, options)
      .json({ message: "login successfully", email: kids.email, token });
  }
  // Validation
  res.json({ status: "invalid", error: "Invalid Password" });
});

// ------------kidsdetails Post API ------------

export const kidsData = CatchAsyncError(async (req, res) => {
  const userDetails = await kidsDetails.findOne(req.user);
  res.send({ status: "ok", userDetails: userDetails });
});

// --------------Kids Signout---------------------

export const kidsSignout = CatchAsyncError(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "successFully sign out !!!!" });
});

//-----------Send Mail by OTP----------

export const reSendEmail = CatchAsyncError(async (req, res, next) => {
  const kid = await kidsDetails.findOne();
  // console.log("-====>>>=",kid.email);
  if (!kid) return res.send("kid not found");

  const otp = Math.floor(Math.random() * 9000 + 1000);

  //------Node Mailer coding-------

  const transport = nodemailer.createTransport({
    service: "gamil",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "rajesh.meena1010@gmail.com",
      pass: "hvetpuspfefrtcqs",
    },
  });

  const mailOptions = {
    from: "rajesh.meena1010@gmail.com",
    to: kid.email,
    subject: "Password Reset OTP",
    text: "Do not share this OTP to anyone.",
    html: `<p>Do not share this OTP to anyone.</p><h1>${otp}</h1>`,
  };

  transport.sendMail(mailOptions, async (err, info) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(info);
    }

    await kidsDetails.findByIdAndUpdate(kid._id, { otp });
    
  });
});


