import React from "react";
import dropdownIcon from "../../../Assets/dropdownIcon.png";
import module from "../../../Assets/module.png";
import back from "../../../Assets/back.png";
import Dropleft from "../../../Assets/Dropleft.png";


type CourseCardProps = {
  category: string;
  mode: string;
  image: string;
  title: string;
  modules: number;
  price: string;
  status: string;
  onViewClick: () => void;
  onDeleteClick: () => void;
  onBackClick: () => void;
};

const CourseCard: React.FC<CourseCardProps> = ({
  category,
  mode,
  image,
  title,
  modules,
  price,
  status,
  onViewClick,
  
  onBackClick,
}) => {
  return (
    <div
      className="rounded-2xl p-5 shadow-lg w-[300px] flex flex-col gap-3 bg-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      {/* Back Arrow */}
      <img src={Dropleft}
  alt="Back"
  className="w-5 h-5 absolute top-4 left-4 cursor-pointer"
  onClick={onBackClick}
      />

      {/* Top Badges */}
      <div className="flex justify-between mt-5">
        <span className="px-3 py-1 rounded-lg text-xs font-normal text-[#b4004e] bg-[#f1c9d7]">
          {category}
        </span>
        <span className="px-3 py-1 rounded-lg text-xs font-normal text-white bg-[#00b300]">
          {mode}
        </span>
      </div>

      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />

      {/* Course Title */}
      <h3 className="text-[#d2005a] text-base font-semibold">{title}</h3>

      {/* Module & Price Info */}
      <div className="flex justify-between items-center text-sm text-[#444]">
        <div className="flex items-center gap-2">
          <img src={module} alt="Modules" className="w-4 h-4" />
          <span>{modules} Modules</span>
        </div>
        <span className="font-semibold text-[#d2005a]">{price}</span>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-2">
        {/* Status Button */}
        <div className="flex items-center gap-2 bg-[#CA406F] text-white px-4 py-2 rounded-md text-[10px] font-medium w-[80px] h-[35px]">
          <span>{status}</span>
          <img src={dropdownIcon} alt="Dropdown" className="w-3 h-3" />
        </div>

        {/* View Button */}
        <button
          onClick={onViewClick}
          className="px-4 py-2 bg-[#00c04b] text-white rounded-lg font-semibold text-sm"
        >
          View
        </button>
      </div>

      
    </div>
  );
};

export default CourseCard;
