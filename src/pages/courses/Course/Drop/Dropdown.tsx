import React from "react";

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="text-sm font-medium mb-1 text-gray-800">{label}</label>
      <select
        className="w-full p-2 border border-gray-300 rounded-md text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
