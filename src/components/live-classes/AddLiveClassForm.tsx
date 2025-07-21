import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddLiveClassForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white dark:bg-background rounded-lg shadow-md max-w-5xl mx-auto space-y-5">
      <h2 className="text-xl font-semibold text-center bg-[#CA406F] text-white p-3 rounded-md">
        Add Live Class
      </h2>

      {/* Class Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Class Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Select Branch */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Branch</label>
        <select className="w-full p-3 border border-gray-300 rounded-md">
          <option></option>
        </select>
      </div>

      {/* Select Course */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Course</label>
        <select className="w-full p-3 border border-gray-300 rounded-md">
          <option></option>
        </select>
        <p className=" px-2 text-sm text-gray-400">please select a Branch first to enable course selection</p>
      </div>

      {/* Batch */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Batch</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
         <p className=" px-2 text-sm text-gray-400">please select a Course first to enable course selection</p>
      </div>

      {/* Date, Start Time, End Time */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Class Date */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Class Date</label>
      <input
        type="date"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
    </div>

    {/* Start Time with Icon */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Start Time</label>
      <div className="relative">
        <input
         
          className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-md"
        />
        <MdAccessTimeFilled className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    {/* End Time with Icon */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">End Time</label>
      <div className="relative">
        <input
         
          className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-md"
        />
        <MdAccessTimeFilled className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  </div>



      {/* Instructors */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Instructors</label>
        <select className="w-full p-3 border border-gray-300 rounded-md">
          <option></option>
        </select>
         <p className=" px-2 text-sm text-gray-400">please select a Class Date first to enable course selection</p>
      </div>

      {/* Video Link */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Video URL</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4">
       <button
  onClick={() => navigate(-1)}
  className="px-5 py-2 border border-[#0400FF] text-[#0400FF] rounded-md hover:bg-[#0400ff1a]"
>
  Cancel
</button>

        <button className="px-5 py-2 bg-[#CA406F] text-white rounded-md hover:bg-[#b43763]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddLiveClassForm;
