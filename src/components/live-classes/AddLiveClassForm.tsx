


// src/components/live-classes/AddLiveClassForm.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AddLiveClassForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white dark:bg-background rounded-lg shadow-md max-w-4xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold mb-4 text-center bg-[#CA406F] text-white p-3 rounded">
        Add Live Class
      </h2>

      <input className="w-full p-2 border rounded" placeholder="Class Name" />

      <select className="w-full p-2 border rounded">
        <option>Select Branch</option>
      </select>

      <select className="w-full p-2 border rounded">
        <option>Select Course</option>
      </select>

      <input className="w-full p-2 border rounded" placeholder="Batch" />

      <div className="grid grid-cols-2 gap-4">
        <input type="date" className="p-2 border rounded" />
        <input type="time" className="p-2 border rounded" />
        <input type="time" className="p-2 border rounded" />
      </div>

      <input className="w-full p-2 border rounded" placeholder="Instructor" />
      <input className="w-full p-2 border rounded" placeholder="Video Link" />

      <div className="flex justify-end gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded"
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

export default AddLiveClassForm;