import { SetStateAction } from "react";
import ClientCard from "./ClientCard";

const VerticalListCard = ({
  category,
  setIsModalOpen,
  filesCount,
}: {
  category: {
    text: string;
    color?: string;
    count: number;
  };
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  filesCount: number;
}) => {
  return (
    <div className="w-[325px] flex flex-col bg-bgPrimary rounded-md">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-2">
          <div className={`w-[30px] h-[30px] ${category.color} rounded-l-xl`} />
          <p className="font-bold text-base">{category.text}</p>
        </div>
        <p className="flex justify-center items-center bg-gray-300 w-[25px] h-[25px] rounded-md text-sm font-bold">
          {category.count}
        </p>
      </div>
      <div className="flex flex-col gap-3 p-2 overflow-scroll">
        {Array.from({ length: category.count }).map((_, i) => (
          <ClientCard
            key={i}
            count={filesCount}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
    </div>
  );
};
export default VerticalListCard;
