import type React from "react";
import filter from "../../assets/Mask group.svg";

interface FilterSectionProps {
  showFilter: boolean;
  onToggleFilter: () => void;
  statusFilter: string;
  courseFilter: string;
  searchFilter: string;
  onStatusFilterChange: (value: string) => void;
  onCourseFilterChange: (value: string) => void;
  onSearchFilterChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  showFilter,
  onToggleFilter,
  statusFilter,
  courseFilter,
  searchFilter,
  onStatusFilterChange,
  onCourseFilterChange,
  onSearchFilterChange,
}) => {
  return (
    <>
      <button
        onClick={onToggleFilter}
        className="gap-2 flex items-center bg-[#CA406F] px-4 py-2 rounded-lg text-white shadow-md"
      >
        <img
          src={filter || "/placeholder.svg"}
          alt="filter"
          className="h-5 w-5"
        />
        {showFilter ? "Hide" : "Show Filter"}
      </button>

      {showFilter && (
        <div className="mt-4 grid grid-cols-2 bg-white p-6 rounded-xl shadow-2xl gap-6">
          <div className="flex flex-col w-full relative">
            <label className="text-md font-semibold text-gray-600">
              Filter By Status
            </label>
            <select
              className="appearance-none border w-full rounded-md px-3 py-2 pr-10"
              value={statusFilter}
              onChange={(e) => onStatusFilterChange(e.target.value)}
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-md font-semibold text-gray-600">
              Filter By Course
            </label>
            <select
              className="appearance-none border w-full rounded-md px-3 py-2 pr-10"
              value={courseFilter}
              onChange={(e) => onCourseFilterChange(e.target.value)}
            >
              <option value="">All</option>
              <option>React</option>
              <option>Java</option>
            </select>
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-md font-semibold text-gray-600">
              Filter By Batches
            </label>
            <select
              className="appearance-none border w-full rounded-md px-3 py-2 pr-10"
              value={courseFilter}
              onChange={(e) => onCourseFilterChange(e.target.value)}
            >
              <option value="">All</option>
              <option>2025</option>
              <option>2020</option>
            </select>
          </div>

          <div>
            <label className="text-md font-semibold text-gray-600">
              Search Student
            </label>
            <input
              type="text"
              placeholder="Enter Student Name"
              className="appearance-none border w-full rounded-md px-3 py-2"
              value={searchFilter}
              onChange={(e) => onSearchFilterChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSection;
