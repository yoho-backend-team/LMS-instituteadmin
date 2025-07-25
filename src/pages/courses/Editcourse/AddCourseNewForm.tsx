import React from "react";
import back from "../../../Assets/back.png";
import editIcon from "../../../Assets/editIcon.png";

interface AddCourseNewFormProps {
  onCancel?: () => void;
}

const AddCourseNewForm: React.FC<AddCourseNewFormProps> = ({ onCancel }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Course submitted");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#fce4f3] bg-cover bg-center p-4 font-poppins"
      style={{ backgroundImage: `url(${back})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md w-full max-w-4xl p-6"
      >
        {/* Header */}
        <h2 className="text-white text-center text-lg font-semibold py-2 rounded-md bg-[#d63b72] mb-4">
          Add New Course
        </h2>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Course Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Course Duration (In Month)"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option disabled selected>
              Learning Format
            </option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Course Price"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Course Category"
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <textarea
            placeholder="Course Overview"
            className="border p-2 rounded h-24 resize-none w-full"
          />
          <textarea
            placeholder="Description"
            className="border p-2 rounded h-24 resize-none w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Thumbnail Image"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Main Image"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Image Update Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <button
            type="button"
            className="flex items-center gap-2 bg-green-100 border border-green-600 text-green-700 py-1 px-3 rounded hover:bg-green-200 w-fit"
          >
            <img src={editIcon} alt="edit" className="w-4 h-4" />
            Update Thumbnail
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-green-100 border border-green-600 text-green-700 py-1 px-3 rounded hover:bg-green-200 w-fit"
          >
            <img src={editIcon} alt="edit" className="w-4 h-4" />
            Update Main Image
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#d63b72] text-white rounded hover:bg-pink-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseNewForm;
