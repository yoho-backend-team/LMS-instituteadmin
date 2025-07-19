import React, { useRef } from "react";
import closeImage from '../../assets/close.png';
import cloudImage from '../../assets/cloud.png';

interface Props {
  onClose: () => void;
}

const AddStudyMaterial: React.FC<Props> = ({ onClose }) => {
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
        <h2 className="text-lg font-semibold text-[#716F6F]">Add Study Materials</h2>
        <img src={closeImage} onClick={onClose} className="w-5 h-5 cursor-pointer" />
      </div>

      <form className="space-y-4">
        {/* Upload Box */}
        <div
          className="cursor-pointer border border-gray-300 h-24 p-4 rounded-md text-center text-sm text-gray-500 mb-4 flex flex-col justify-center items-center"
          onClick={handleUploadClick}
        >
          <img src={cloudImage} className="w-6 mb-1" alt="Cloud Icon" />
          Drop Files Here Or Click To Upload
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <div>
          <label className="block text-sm">Branch</label>
          <select className="w-full border-2 px-4 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Select Course</label>
          <select className="w-full border-2 px-4 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Title</label>
          <input className="w-full border-2 px-4 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Description</label>
          <input className="w-full border-2 px-4 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Video URI</label>
          <input className="w-full border-2 px-4 py-2 rounded" />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 h-8 border rounded text-blue-600 border-blue-600"
          >
            Cancel
          </button>
          <button className="px-4 h-8 bg-[#CA406F] text-white rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudyMaterial;
