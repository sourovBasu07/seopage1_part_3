import React, { SetStateAction } from "react";
import { PiNotepad, PiLinkSimple } from "react-icons/pi";
import { IoLayers } from "react-icons/io5";
import { RiWechatLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
const ClientCard = ({
  setIsModalOpen,
  count,
}: {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  count: number;
}) => {
  return (
    <section className="w-full bg-white p-2 rounded-xl">
      <div className="flex flex-col gap-1 text-primary">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-1">
            <img
              src={profile1}
              alt="profile"
              className="w-[25px] h-[25px] rounded-full"
            />
            <p className="text-primary text-[14px] font-[500]">Client Name</p>
          </div>

          <div className="flex gap-1 items-center">
            <img
              src={profile4}
              alt="profile"
              className="w-[25px] h-[25px] rounded-full"
            />
            <p className="text-primary text-sm font-[500]">Sadik Istiak</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2/3 flex items-center gap-1">
            <IoLayers size={37} />
            <p className="inline-block whitespace-nowrap overflow-hidden text-ellipsis text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              quas.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-gray-100 rounded-sm ml-auto px-[1px] py-[2px] text-sm">
            <PiNotepad />
            <p className="font-[600] text-sm">1/2</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <img
            src={profile2}
            alt="profile"
            className="w-[25px] h-[25px] rounded-full"
          />
          <img
            src={profile3}
            alt="profile"
            className="w-[25px] h-[25px] rounded-full"
          />
          <p className="w-[25px] h-[25px] bg-gray-300 rounded-full font-[600] text-xs flex justify-center items-center">
            12+
          </p>
          <div className="flex items-center font-[600] gap-1">
            <RiWechatLine />
            <p className="text-xs">15</p>
          </div>
          <div className="flex items-center font-[600] gap-1">
            <PiLinkSimple
              className="cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
            <p className="text-xs">{count}</p>
          </div>
          <div className="flex items-center font-[600] gap-1">
            <FaRegCalendarAlt />
            <p className="text-xs">30-12-2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientCard;
