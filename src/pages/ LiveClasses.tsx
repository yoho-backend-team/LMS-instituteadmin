import React, { useState } from "react";
import AddLiveClassForm from "../components/live-classes/AddLiveClassForm";
import ClassDetails from "../components/live-classes/ClassDetails";
import { useNavigate } from "react-router-dom";
import LiveClassCard from "@/components/live-classes/LiveClassCard";

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
    <div className="bg-white rounded shadow p-4 mb-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="border p-2 rounded"><option>Status</option></select>
        <select className="border p-2 rounded"><option>Course</option></select>
        <input className="border p-2 rounded" placeholder="Batches" />
        <input type="date" className="border p-2 rounded" />
        <input type="date" className="border p-2 rounded" />
        <input className="border p-2 rounded" placeholder="Search Class" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover px-6 py-8 bg-pink-50"
      style={{ backgroundImage: "url('/Backdrop Image (1).png')" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Live Classes</h2>
        <button
          onClick={() => setView("add")}
          className="bg-[#CA406F] text-white px-4 py-2 rounded hover:opacity-90"
        >
          + Add Live Class
        </button>
      </div>

      {/* Filter Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-[#CA406F] text-white px-4 py-1.5 rounded hover:opacity-90"
        >
          {showFilter ? "Hide" : "Show"} Filter
        </button>
      </div>

      {/* Filter UI */}
      {showFilter && renderFilterForm()}



      {view ==="list" && <LiveClassCard />}

      {view === "add" && <AddLiveClassForm />}
      {view === "details" && <ClassDetails />}
    </div>
  );
};

export default LiveClasses;

