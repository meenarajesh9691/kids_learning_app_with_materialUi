import multer from "multer";
import path from "path";

// Multer for Upload Images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const uniqeName =
      "lessonImage_" + Date.now() + path.extname(file.originalname);
    cb(null, uniqeName);
  },
});

export const uploadLesson = multer({ storage: storage });


