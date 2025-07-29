import React, { useState } from "react";
import dropdownIcon from "../../../Assets/dropdownIcon.png";
import module from "../../../Assets/module.png";

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
}) => {
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (newStatus: string) => {
    setCurrentStatus(newStatus);
    setShowStatusDropdown(false);
  };

  return (
    <div className="rounded-2xl p-5 shadow-lg w-[410px] flex flex-col gap-3 bg-white bg-cover bg-center relative">
      <div className="flex justify-between mt-5">
        <span className="px-3 py-1 rounded-lg text-xs font-normal text-[#b4004e] bg-[#f1c9d7]">
          {category}
        </span>
        <span className="px-3 py-1 rounded-lg text-xs font-normal text-white bg-[#00b300]">
          {mode}
        </span>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />

      <h3 className="text-[#d2005a] text-base font-semibold">{title}</h3>

      <div className="flex justify-between items-center text-sm text-[#444]">
        <div className="flex items-center gap-2">
          <img src={module} alt="Modules" className="w-4 h-4" />
          <span>{modules} Modules</span>
        </div>
        <span className="font-semibold text-[#d2005a]">{price}</span>
      </div>

      <div className="flex justify-between items-center mt-2 relative">
        <div className="relative">
          <button
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
            className="flex items-center gap-2 bg-[#CA406F] text-white px-4 py-2 rounded-md text-[10px] font-medium w-[90px] h-[35px]"
          >
            <span>{currentStatus}</span>
            <img src={dropdownIcon} alt="Dropdown" className="w-3 h-3" />
          </button>

          {showStatusDropdown && (
            <div className="absolute z-10 mt-1 left-0 bg-white border border-gray-200 rounded-md shadow-md text-xs text-gray-800 w-[100px]">
              <button
                className="block w-full px-4 py-2 hover:bg-[#CA406F] text-left"
                onClick={() => handleStatusChange("Active")}
              >
                Active
              </button>
              <button
                className="block w-full px-4 py-2 hover:bg-[#CA406F] text-left"
                onClick={() => handleStatusChange("Inactive")}
              >
                Inactive
              </button>
            </div>
          )}
        </div>

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
