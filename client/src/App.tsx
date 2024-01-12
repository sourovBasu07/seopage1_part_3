import { useEffect, useState } from "react";
import VerticalListCard from "./components/VerticalListCard";
import { categories } from "./constants";
import UploadFilesModal from "./components/UploadFilesModal";
import axios from "axios";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/files");
        setFiles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFiles();
  }, [isModalOpen]);

  console.log(files);

  return (
    <section className="relative">
      {isModalOpen && <UploadFilesModal setIsModalOpen={setIsModalOpen} />}
      <div className="h-screen flex gap-10 bg-[#fff] px-7 py-10 overflow-scroll">
        {categories.map((category) => (
          <VerticalListCard
            key={category.text}
            category={category}
            setIsModalOpen={setIsModalOpen}
            filesCount={files.length}
          />
        ))}
      </div>
    </section>
  );
};
export default App;
