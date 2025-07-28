import React from "react";
import { Calendar } from "lucide-react";
import closeImage from "../../assets/close.png";

interface HeaderProps {
  showFilter: boolean;
  toggleFilter: () => void;
}

const Header: React.FC<HeaderProps> = ({ showFilter, toggleFilter }) => {
  return (
    <div className="w-full bg-[#c62863] text-white px-4 py-3 flex justify-between items-center rounded-md shadow-md">
      <div className="flex items-center gap-2 font-bold">
        <Calendar className="w-5 h-5" />
        <span>STAFF ATTENDANCE</span>
      </div>
      <button
        onClick={toggleFilter}
        className="bg-white text-green-600 font-semibold px-4 py-1 rounded shadow h-9 w-14"
      >
        {showFilter ? (
          <img
            src={closeImage}
            alt="Close"
            className="w-4 h-5 object-contain"
          />
        ) : (
          "GO"
        )}
      </button>
    </div>
  );
};

export default Header;
