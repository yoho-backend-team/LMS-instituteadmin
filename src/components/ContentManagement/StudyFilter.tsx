import React, { useState } from "react";

const StudyMaterials: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      {/*Button */}
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
      >
        {showFilter ? "Hide Filter" : "Show Filter"}
      </button>

      {/* Filter Panel */}
      {showFilter && (
        <div className="bg-white shadow rounded-lg p-6 w-full max-w-5xl mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Status
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Course
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select Course</option>
                <option>Manual Testing</option>
                <option>Automation</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
