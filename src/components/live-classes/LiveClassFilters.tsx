// src/components/live-classes/LiveClassFilters.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LiveClassFilters: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6  max-w-xl mx-auto bg-white dark:bg-background rounded shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4 text-[#CA406F]">
        Filter Classes
      </h2>

      <input className="w-full p-2 border rounded" placeholder="Search by name" />
      <select className="w-full p-2 border rounded">
        <option>Branch</option>
      </select>
      <select className="w-full p-2 border rounded">
        <option>Course</option>
      </select>

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
        <button className="px-4 py-2 bg-[#CA406F] text-white rounded">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default LiveClassFilters;

