import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  width?: string; 
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  width = "w-full",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative inline-block text-sm ${width}`}>
      {label && (
        <label className="block mb-1 text-gray-700 font-medium bg-[#CA406F]">{label}</label>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-left bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:bg-gray-100"
      >
        {value || placeholder} <span className="float-right"><RiArrowDownSLine size={24}/></span>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-md max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-[#CA406F] ${
                value === option ? "bg-[#CA406F] font-semibold" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
