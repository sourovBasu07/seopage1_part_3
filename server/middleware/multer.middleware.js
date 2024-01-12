import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(" ").join("_");
    cb(null, `${Date.now()}-${name}`);
  },
});

export const upload = multer({ storage });
