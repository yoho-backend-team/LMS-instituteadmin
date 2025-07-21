import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LiveClassCard from "@/components/live-classes/LiveClassCard";
import { FaSliders } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";

type ClassCardProps = {
  id: number;
  title: string;
  studentCount: number;
  date: string;
  time: string;
};



const LiveClasses: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [view, setView] = useState<"list" | "add" | "details">("list");
  const navigate = useNavigate();
   const { id } = useParams(); 
 

  const classData = [
    {
      id: 1,
      title: "MERN",
      studentCount: 2,
      date: "Thu, July 12, 2025",
      time: "12:00 PM – 01:00 PM",
    },
    {
      id: 2,
      title: "React",
      studentCount: 1,
      date: "Fri, July 13, 2025",
      time: "02:00 PM – 03:00 PM",
    },
  ];

const renderFilterForm = () => (
  <div className="p-6 mt-6">
    <div className="w-full max-w-[1230px] mx-auto bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">Filters</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {/* Status */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700 font-medium">Status</label>
          <select className="border border-gray-800 px-3 py-4 rounded-md text-sm">
            <option></option>
          </select>
        </div>

        {/* Course */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700 font-medium">Course</label>
          <select className="border border-gray-800 px-3 py-4 rounded-md text-sm">
            <option className="mt-8"></option>
          </select>
        </div>

        {/* Batches */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700 font-medium">Batches</label>
         <select className="border border-gray-800 px-3 py-4 rounded-md text-sm">
            <option> </option>
          </select>
        </div>

        {/* Start and End Date */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 font-medium">Start Date</label>
            <input
      
              className="border border-gray-800 px-3 py-4 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 font-medium">End Date</label>
            <input
             
              className="border border-gray-800 px-3 py-4 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col gap-1 ">
          <label className="text-sm text-gray-700 font-medium">Search Class</label>
          <input
            type="text"
            className="border border-gray-800 px-3 py-4 rounded-md text-sm"
          />
        </div>
      </div>
    </div>
  </div>
);




  return (
    <div className="min-h-screen  px-6 py-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-3xl font-bold text-gray-800 px-6 mt-0">Live Classes</h2>
         </div>
      <div className="flex justify-between items-center mb-4 px-8">
  <button
    onClick={() => setShowFilter(!showFilter)}
    className="flex items-center gap-2 bg-[#CA406F] text-white px-4 py-3 rounded-lg hover:bg-[#b93563] transition"
    aria-expanded={showFilter}
    aria-label="Toggle Filter"
  >
    <FaSliders className="w-4 h-4" />
    {showFilter ? "Hide" : "Show Filter"} 
  </button>

  <button
   onClick={() => navigate("/live-classes/add")}
    className="flex items-center gap-2 bg-[#CA406F] text-white px-4 py-3 rounded-lg hover:bg-[#b93563] transition"
  >
    <IoAddSharp className="w-5 h-5" />
    Add Live Class
  </button>
</div>


      {/* Filter UI */}
      {showFilter && renderFilterForm()}



      {view ==="list" && <LiveClassCard />}

      
     



        <div className="flex justify-end mt-4">
        <button
          onClick={() => navigate(`/live-classes/details`)}
          className="px-4 py-2 bg-green-600 text-white rounded mr-6 "
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default LiveClasses;

