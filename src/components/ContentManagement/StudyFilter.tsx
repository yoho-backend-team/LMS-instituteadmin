import React, { useState } from "react";
import filterImage from '../../assets/filter.png'

const StudyMaterials: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      {/*Button */}
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="bg-[#CA406F] text-white px-4 h-12 rounded-md shadow-md transition flex items-center gap-2"
      >
        <img src={filterImage} className="w-6" />
        {showFilter ? "Hide Filter" : "Show Filter"}
      </button>

      {/* Filter Panel */}
      {showFilter && (
        <div className="bg-white shadow rounded-lg p-6 w-350  mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-337">
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
