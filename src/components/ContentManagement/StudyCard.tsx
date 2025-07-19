import React, { useRef } from "react";
import closeImage from '../../assets/close.png';
import cloudImage from '../../assets/cloud.png';

interface DrawerProps {
  onClose: () => void;
}

const StudyCard: React.FC<DrawerProps> = ({ onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="fixed rounded-md right-0 top-4 w-[350px] sm:w-[350px] h-[690px] bg-white shadow-lg z-50 p-6 transition-all">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#716F6F]">Edit Study Material</h2>
        <img src={closeImage} onClick={onClose} className="w-5 h-5 cursor-pointer" alt="Close" />
      </div>

      {/* Upload Box */}
      <div
        onClick={handleUploadClick}
        className="cursor-pointer border border-gray-300 h-24 p-4 rounded-md text-center text-sm text-gray-500 mb-4 flex flex-col justify-center items-center"
      >
        <img src={cloudImage} className="w-6 mb-1" alt="Upload" />
        Drop Files Here Or Click To Upload
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

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
          className="px-4 h-8 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
        >
          Cancel
        </button>
        <button className="px-4 h-8 bg-[#CA406F] text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudyCard;
