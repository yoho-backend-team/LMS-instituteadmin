import React from "react";
import closeImage from '../../assets/close.png'

interface DrawerProps {
  onClose: () => void;
}

const StudyCard: React.FC<DrawerProps> = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-4 w-[350px] sm:w-[350px] h-[720px] bg-white shadow-lg z-50 p-6 transition-all">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Edit Study Material</h2>
        <img src={closeImage} onClick={onClose} className="w-5 h-5" />
      </div>

      <div className="border border-gray-300 h-24 p-4 rounded-md text-center text-sm text-gray-500 mb-4">
        <span className="text-blue-600">⬆</span><br /> Drop Files Here Or Click To Upload
      </div>

      <input
        type="text"
        placeholder="Title"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
      />

      <textarea
        placeholder="Description"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
      ></textarea>

      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
        >
          Cancel
        </button>
        <button className="px-4 py-2 bg-[#CA406F] text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudyCard;
