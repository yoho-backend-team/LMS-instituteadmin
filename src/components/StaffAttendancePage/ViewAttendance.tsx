import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Plus } from "lucide-react";
import filterImage from '../../assets/filter.png';
import AddAttendancePanel from "./AddAttendancePanel";

interface AttendanceEntry {
  date: number;
  status: string;
}

const ViewAttendancePage: React.FC = () => {
  const { id } = useParams();
  const [showPanel, setShowPanel] = useState(false);
  const [attendanceDates, setAttendanceDates] = useState<AttendanceEntry[]>([]);
  const [activeView, setActiveView] = useState<"Monthly" | "Week" | "Day" | "List">("Monthly");

  const handleAddDate = (date: number, status: string) => {
    if (!attendanceDates.find((entry) => entry.date === date)) {
      setAttendanceDates((prev) => [...prev, { date, status }]);
    }
    setShowPanel(false);
  };

  const getStatusForDate = (day: number): string | undefined => {
    const entry = attendanceDates.find((d) => d.date === day);
    return entry?.status;
  };

  const renderAttendanceView = () => {
    switch (activeView) {
      case "Monthly":
        return (
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700 pt-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="h-10 flex items-center justify-center rounded border border-gray-200">
                {day}
              </div>
            ))}

            <div className="h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400">29</div>
            <div className="h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400">30</div>

            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const status = getStatusForDate(day);

              let statusClass = "";
              if (status === "present") {
                statusClass = "bg-green-100 border-green-500 text-green-700 font-semibold";
              } else if (status === "absent") {
                statusClass = "bg-red-100 border-red-500 text-red-700 font-semibold";
              } else {
                statusClass = "border-gray-300 bg-white";
              }

              return (
                <div
                  key={day}
                  className={`h-10 flex items-center justify-center rounded border ${statusClass}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        );

      case "Week":
        return (
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700 pt-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => {
              const status = getStatusForDate(21 + i);
              let statusClass = "";
              if (status === "present") statusClass = "bg-green-100 border-green-500 text-green-700 font-semibold";
              else if (status === "absent") statusClass = "bg-red-100 border-red-500 text-red-700 font-semibold";
              else statusClass = "border-gray-300 bg-white";

              return (
                <div
                  key={day}
                  className={`h-16 flex flex-col justify-center rounded border ${statusClass}`}
                >
                  <span className="font-medium">{day}</span>
                  <span className="text-xs">Jul {20 + i}</span>
                </div>
              );
            })}
          </div>
        );

      case "Day":
        return (
          <div className="p-4 text-center text-sm">
            <p className="font-semibold text-lg">Saturday, July 26, 2025</p>
            <p
              className={`mt-4 text-sm ${
                getStatusForDate(24) === "present"
                  ? "text-green-600 font-medium"
                  : getStatusForDate(24) === "absent"
                  ? "text-red-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {getStatusForDate(24) === "present"
                ? "Present"
                : getStatusForDate(24) === "absent"
                ? "Absent"
                : "No Attendance Marked"}
            </p>
          </div>
        );

      case "List":
        return (
          <div className="p-4 space-y-2">
            {attendanceDates.length > 0 ? (
              attendanceDates.map((entry) => (
                <div key={entry.date} className="flex justify-between border-b py-2 text-sm">
                  <span className="font-medium">July {entry.date}, 2025</span>
                  <span
                    className={`font-semibold ${
                      entry.status === "present" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No attendance added yet.</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

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
            <div className="absolute left-1/2 transform -translate-x-1/2 font-semibold text-lg">
              July 2025
            </div>

            <div className="ml-auto flex gap-2">
              {["Monthly", "Week", "Day", "List"].map((view) => (
                <button
                  key={view}
                  onClick={() => setActiveView(view as any)}
                  className={`w-24 py-2 border rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      activeView === view
                        ? "border-blue-500 text-blue-600 bg-blue-50"
                        : "border-gray-300 text-gray-600 bg-white hover:bg-gray-100"
                    }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>
        </div>

        {renderAttendanceView()}
      </div>

      {showPanel && (
        <AddAttendancePanel
          onClose={() => setShowPanel(false)}
          onAddDate={handleAddDate}
        />
      )}
    </div>
  );
};

export default ViewAttendancePage;
