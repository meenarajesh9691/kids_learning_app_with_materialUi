import multer from "multer";
import path from "path";

// Multer for Upload Videos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/videos");
  },
  filename: (req, file, cb) => {
    const uniqeName =
      "lessonVideos_" + Date.now() + path.extname(file.originalname);
    cb(null, uniqeName);
  },
});

export const videoUpload = multer({ storage: storage });
