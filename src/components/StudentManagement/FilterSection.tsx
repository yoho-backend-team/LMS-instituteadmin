import React from "react";

interface FilterSectionProps {
  statusFilter: string;
  courseFilter: string;
  searchFilter: string;
  onStatusFilterChange: (value: string) => void;
  onCourseFilterChange: (value: string) => void;
  onSearchFilterChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  statusFilter,
  courseFilter,
  searchFilter,
  onStatusFilterChange,
  onCourseFilterChange,
  onSearchFilterChange,
}) => {
  return (
    <div className="mt-6 grid grid-cols-2 text-[#716F6F] md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-2xl">
      <div className="flex flex-col w-full">
        <label className=" text-lg ">
          Filter By Status
        </label>
        <select
          className="border h-13 rounded-md px-3 py-2"
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
        >
          <option value=""></option>
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="flex flex-col w-full">
        <label className=" text-lg ">
          Filter By Course
        </label>
        <select
          className="border h-13 rounded-md px-3 py-2"
          value={courseFilter}
          onChange={(e) => onCourseFilterChange(e.target.value)}
        >
          <option value=""></option>
          <option value="">All</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
        </select>
      </div>

      <div className="flex flex-col w-full">
        <label className=" text-lg ">
          Filter By Batches
        </label>
        <select className="border h-13 rounded-md px-3 py-2">
          <option value=""></option>
          <option value="">All</option>
          <option value="2025">2025</option>
          <option value="2020">2020</option>
        </select>
      </div>

      <div className="flex flex-col w-full">
        <input
          type="text"
          placeholder="Enter Student Name"
          className="border mt-6 h-13 rounded-md px-3 py-2"
          value={searchFilter}
          onChange={(e) => onSearchFilterChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterSection;
