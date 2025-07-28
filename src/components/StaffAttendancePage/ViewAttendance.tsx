import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Plus } from "lucide-react";
import filterImage from '../../assets/filter.png';
import AddAttendancePanel from "./AddAttendancePanel"; 

const ViewAttendancePage: React.FC = () => {
    const { id } = useParams();
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className="relative min-h-screen p-4 bg-cover bg-center bg-no-repeat">
            {/* Profile Header */}
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                    <img
                        src="https://i.pravatar.cc/150?img=1"
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold">Elon Musk</h2>
                        <p className="text-sm text-gray-500">elonmusk@gmail.com</p>
                    </div>
                </div>
                <button
                    onClick={() => setShowPanel(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                    <Plus size={16} /> Add Attendance
                </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 bg-[#c62863] text-white px-3 py-1.5 mb-7 mt-3 rounded-md shadow">
                    <Calendar size={18} />
                </button>

                <button className="flex items-center gap-2 bg-[#c62863] text-white px-3 py-1.5 rounded-md shadow">
                    <img src={filterImage} className="w-6" />
                    <span>Filters</span>
                </button>
            </div>

            {/* Calendar View */}
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
                <div className="flex justify-center items-center gap-2">
                    <div className="relative flex items-center w-full px-4 h-16">
                        {/* Centered title */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 font-semibold text-lg">
                            July 2025
                        </div>

                        {/* Right-aligned buttons */}
                        <div className="ml-auto flex gap-2">
                            {["Monthly", "Week", "Day", "List"].map((view) => (
                                <button
                                    key={view}
                                    className={`w-24 py-2 border rounded-lg text-sm font-medium transition-all duration-200
                                    ${view === "Monthly"
                                            ? "border-blue-500 text-blue-600 bg-blue-50"
                                            : "border-gray-300 text-gray-600 bg-white hover:bg-gray-100"}`}
                                >
                                    {view}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700 pt-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="h-10 flex items-center justify-center rounded border border-gray-200">{day}</div>
                    ))}
                    <div className="h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400">29</div>
                    <div className="h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400">30</div>

                    {Array.from({ length: 31 }, (_, i) => {
                        const day = i + 1;
                        const isToday = day === 16;
                        return (
                            <div
                                key={day}
                                className={`h-10 flex items-center justify-center rounded border ${isToday
                                    ? "bg-blue-100 border-blue-500 text-blue-600 font-bold"
                                    : "border-gray-300 bg-white"
                                    }`}
                            >
                                {day}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Add Attendance Panel */}
            {showPanel && <AddAttendancePanel onClose={() => setShowPanel(false)} />}
        </div>
    );
};

export default ViewAttendancePage;
