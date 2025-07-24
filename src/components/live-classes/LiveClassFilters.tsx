import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LiveClassFilters: React.FC = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    name: "",
    branch: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    branch: "",
    course: "",
  });

  const handleApply = () => {
    let newErrors = { branch: "", course: "" };

    // Example validation: Require both branch and course
    if (!filters.branch) newErrors.branch = "Branch is required.";
    if (!filters.course) newErrors.course = "Course is required.";

    setErrors(newErrors);

    if (!newErrors.branch && !newErrors.course) {
      // Apply your filter logic here
      console.log("Filters applied:", filters);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-background rounded shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4 text-[#CA406F]">
        Filter Classes
      </h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Search by name"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />

      <div>
        <select
          className={`w-full p-2 border rounded ${errors.branch ? "border-red-500" : ""}`}
          value={filters.branch}
          onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
        >
          <option value="">Select Branch</option>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
        </select>
        {errors.branch && <p className="text-sm text-red-500">{errors.branch}</p>}
      </div>

      <div>
        <select
          className={`w-full p-2 border rounded ${errors.course ? "border-red-500" : ""}`}
          value={filters.course}
          onChange={(e) => setFilters({ ...filters, course: e.target.value })}
        >
          <option value="">Select Course</option>
          <option value="MERN">MERN</option>
          <option value="DSA">DSA</option>
        </select>
        {errors.course && <p className="text-sm text-red-500">{errors.course}</p>}
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-[#CA406F] text-white rounded"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default LiveClassFilters;
