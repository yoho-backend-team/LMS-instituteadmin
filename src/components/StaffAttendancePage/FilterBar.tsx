import React from "react";

const FilterBar: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md my-4">
      <h2 className="text-gray-700 font-semibold mb-2">Filters</h2>
      <div className="flex gap-4">
        <select className="border p-2 rounded-md flex-1">
          <option value="">Batches</option>
          <option value="batch1">Batch 1</option>
          <option value="batch2">Batch 2</option>
        </select>
        <input
          type="text"
          placeholder="Search Batch"
          className="border p-2 rounded-md flex-1"
        />
      </div>
    </div>
  );
};

export default FilterBar;
