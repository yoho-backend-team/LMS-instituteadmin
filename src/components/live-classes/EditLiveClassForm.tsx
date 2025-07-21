import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { X } from "lucide-react";

const EditLiveClassForm: React.FC = () => {
  return (
    <div className=" flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 space-y-6">
        {/* Header */}
        <h2 className="text-center text-white font-semibold text-lg bg-[#CA406F] py-3 rounded-md">
          Edit Live Class
        </h2>

        {/* Class Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Class Name</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Class Date</label>
            <input  className="w-full p-3 border border-gray-300 rounded-md" />
          </div>

          {/* Start Time */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Start Time</label>
            <div className="relative">
              <input
      
                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
              />
              <MdAccessTimeFilled className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* End Time */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">End Time</label>
            <div className="relative">
              <input
          
                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
              />
              <MdAccessTimeFilled className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Instructors</label>
          <div className="flex items-center flex-wrap gap-2 bg-white border border-gray-300 p-2 rounded-md min-h-[48px]">
            <span className="flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
              Elon Musk
              <button type="button">
                <X className="w-4 h-4" />
              </button>
            </span>
          </div>
        </div>

        {/* Link */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Link</label>
          <input
            type="text"
            defaultValue="https://gbvtdsqwefgtryuxqwertyoaertghj"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-5 py-2 border border-[#0400FF] text-[#0400FF] rounded-md hover:bg-[#0400ff1a]">
            Cancel
          </button>
          <button className="px-5 py-2 bg-[#CA406F] text-white rounded-md hover:bg-[#b43763]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLiveClassForm;
