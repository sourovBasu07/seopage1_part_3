import express from "express";
import cors from "cors";
import { connectToDb } from "./config/dbConfig.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import "dotenv/config";
import { upload } from "./middleware/multer.middleware.js";
import { uploadToCloudinary } from "./utils/cloudinary.js";
import File from "./models/file.model.js";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome seopage1");
});

app.get("/api/files", async (req, res) => {
  try {
    const files = await File.find();

    return res.status(200).json({
      message: "Files Fetched Successfully",
      data: files,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/api/upload", upload.array("files", 10), async (req, res) => {
  try {
    const files = req.files;
    const uploadFiles = [];

    for (const file of files) {
      const result = await uploadToCloudinary(file.path);

      console.log(result);

      const newFile = new File({
        fileName: result.original_filename,
        cloudinaryUrl: result.url,
        fileType: result.format,
      });

      await newFile.save();

      uploadFiles.push(result);
    }

    return res.status(200).json({
      message: "Files Uploaded Successfully",
      data: uploadFiles,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;

connectToDb().then(() =>
  app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
);
