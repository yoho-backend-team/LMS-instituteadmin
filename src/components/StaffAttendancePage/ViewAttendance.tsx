import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, Plus } from "lucide-react";
import filterImage from '../../assets/filter.png';
import bgImage from "../../assets/bgg.png";

const ViewAttendancePage: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="min-h-screen p-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}>
            
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
                <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <Plus size={16} /> Add Attendance
                </button>
            </div>

            {/* Calendar and Filter buttons */}
            <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 bg-[#c62863] text-white px-3 py-1.5 mb-7 mt-3 rounded-md shadow">
                    <Calendar size={18} />
                </button>

                <button className="flex items-center gap-2 bg-[#c62863] text-white px-3 py-1.5 rounded-md shadow">
                    <img src={filterImage} className="w-6" />
                    <span>Filters</span>
                </button>
            </div>
            {/* Calendar and Filters Section */}
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
                {/* Month Name */}

                {/* View Buttons */}
                <div className="flex justify-center gap-2">
                    <div className="text-center font-semibold text-lg ml-77">July 2025</div>
                    {["Monthly", "Week", "Day", "List"].map((view) => (
                        <button
                            key={view}
                            className={`px-4 py-1 border rounded ${view === "Monthly"
                                ? "border-blue-500 text-blue-600"
                                : "text-gray-600"
                                }`}
                        >
                            {view}
                        </button>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700 pt-2">
                    {/* Weekdays */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="h-10 flex items-center justify-center rounded border border-gray-200">{day}</div>
                    ))}

                    {/* Previous month overflow: 29, 30 */}
                    <div className="h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400">29</div>
                    <div className="h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400">30</div>

                    {/* July 1–31 */}
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
        </div>
    );
};

export default ViewAttendancePage;
