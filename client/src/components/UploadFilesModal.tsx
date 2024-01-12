import React, { SetStateAction, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
import axios from "axios";

const UploadFilesModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFiles(files);
    }
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));

      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);

      if (response.statusText !== "OK") {
        setErrorMessage("Something went wrong!");
        return;
      }

      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/50 flex justify-center items-center">
      <div className="relative w-[700px] h-[650px] rounded-3xl pt-16 bg-white z-10 flex flex-col gap-28 items-center text-primary">
        <MdOutlineCancel
          size={25}
          className="absolute top-5 right-3 cursor-pointer hover:text-gray-300 duration-300"
          onClick={() => setIsModalOpen(false)}
        />

        <div className="text-center">
          <h1 className="text-2xl font-bold">Upload Files</h1>
          <p className="">Select single or multiple files to upload</p>
        </div>

        <form
          className="flex flex-col justify-center items-center gap-10"
          onSubmit={handleUpload}
        >
          <input type="file" multiple onChange={handleFileChange} />

          <button
            type="button"
            disabled={files.length < 1}
            className="bg-primary w-max px-5 py-2 rounded-md text-white font-medium"
            onClick={handleUpload}
          >
            Upload Files <IoCloudUpload size={30} className="inline-block" />
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};
export default UploadFilesModal;
