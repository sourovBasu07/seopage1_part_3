import mongoose from "mongoose";

const FileSchema = mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  cloudinaryUrl: {
    type: String,
  },
  fileType: {
    type: String,
  },
});

const File = mongoose.model("File", FileSchema);

export default File;
