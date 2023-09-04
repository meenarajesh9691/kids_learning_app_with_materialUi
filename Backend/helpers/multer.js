import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const uniqeName =
      "subjectImage_" + Date.now() + path.extname(file.originalname);
    cb(null, uniqeName);
  },
});

export const upload = multer({ storage: storage });
