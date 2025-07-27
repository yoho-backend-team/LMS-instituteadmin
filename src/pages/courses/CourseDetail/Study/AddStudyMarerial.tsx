import React, { useRef, useState } from "react";
import closeimg from "../../../../Assets/closeimg.png";
import cloud from "../../../../Assets/cloud.png";

interface AddNotesProps {
  onClose: () => void;
  onSubmit: (data: {
    branch: string;
    course: string;
    title: string;
    description: string;
    confirmPassword: string;
  }) => void;
}

const AddStudyMaterial: React.FC<AddNotesProps> = ({ onClose, onSubmit }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [branch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ branch, course, title, description, confirmPassword });
  };

  return (
    <div className="fixed right-0 top-0 h-full w-[325px] bg-white shadow-lg z-50 p-5 rounded-l-xl overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Add StudyMaterial
        </h2>
        <img
          src={closeimg}
          alt="Close"
          className="w-5 h-5 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Upload */}
        <div
          onClick={handleUploadClick}
          className="border border-gray-300 h-24 p-4 rounded-md text-center text-sm text-gray-500 cursor-pointer flex flex-col justify-center items-center hover:bg-gray-50"
        >
          <img src={cloud} alt="Upload" className="w-6 h-6 mb-1" />
          Drop Files Here Or Click To Upload
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) =>
              e.target.files && console.log("Uploaded:", e.target.files[0])
            }
          />
        </div>

        {/* Branch */}
        <div>
          <label className="text-sm text-gray-700">Branch</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
          </select>
        </div>

        {/* Course */}
        <div>
          <label className="text-sm text-gray-700">Select Course</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="text-sm text-gray-700">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-gray-700">Description</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm text-gray-700">Confirm Password</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <option value="">Confirm Password</option>
            <option value="1234">1234</option>
            <option value="abcd">abcd</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 border border-blue-600 text-blue-600 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-1 bg-[#CA406F] text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudyMaterial;
