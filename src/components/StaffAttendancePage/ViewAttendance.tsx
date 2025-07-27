import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Plus } from "lucide-react";
import filterImage from "../../assets/filter.png";
import AddAttendancePanel from "./AddAttendancePanel";

interface AttendanceEntry {
    date: string;
    status: string;
}

const formatDate = (year: number, month: number, day: number): string => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
};

const ViewAttendancePage: React.FC = () => {
    const { id } = useParams();
    const [showPanel, setShowPanel] = useState(false);
    const [attendanceDates, setAttendanceDates] = useState<AttendanceEntry[]>([]);
    const [activeView, setActiveView] = useState<"Monthly" | "Week" | "Day" | "List">("Monthly");
    const [showView, setShowView] = useState(false);
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [filterStatus, setFilterStatus] = useState<string | null>(null);

    const latestDate = attendanceDates.length
        ? new Date(attendanceDates[attendanceDates.length - 1].date)
        : new Date();

    const currentYear = latestDate.getFullYear();
    const currentMonth = latestDate.getMonth();

    const handleAddDate = (date: string, status: string) => {
        if (!attendanceDates.find((entry) => entry.date === date)) {
            setAttendanceDates((prev) => [...prev, { date, status }]);
        }
        setShowPanel(false);
    };

    const getStatusForDate = (dateString: string): string | undefined => {
        return attendanceDates.find((entry) => entry.date === dateString)?.status;
    };

    const presentCount = attendanceDates.filter(entry => entry.status === "present").length;
    const absentCount = attendanceDates.filter(entry => entry.status === "absent").length;

    const renderAttendanceView = () => {
        switch (activeView) {
            case "Monthly":
                const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                return (
                    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700 pt-2">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="h-10 flex items-center justify-center rounded border border-gray-200">
                                {day}
                            </div>
                        ))}
                        {Array.from({ length: daysInMonth }, (_, i) => {
                            const day = i + 1;
                            const formatted = formatDate(currentYear, currentMonth, day);
                            const status = getStatusForDate(formatted);

                            let statusClass = "";
                            if (status === "present") statusClass = "bg-green-100 border-green-500 text-green-700 font-semibold";
                            else if (status === "absent") statusClass = "bg-red-100 border-red-500 text-red-700 font-semibold";
                            else statusClass = "border-gray-300 bg-white";

                            return (
                                <div key={day} className={`h-10 flex items-center justify-center rounded border ${statusClass}`}>
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                );

            case "Week":
                const today = attendanceDates.length > 0
                    ? new Date(attendanceDates[attendanceDates.length - 1].date)
                    : new Date();

                const weekStart = new Date(today);
                weekStart.setDate(today.getDate() - weekStart.getDay());

                const weekDays = Array.from({ length: 7 }, (_, i) => {
                    const date = new Date(weekStart);
                    date.setDate(weekStart.getDate() + i);
                    return date;
                });

                return (
                    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700 pt-2">
                        {weekDays.map((date, i) => {
                            const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
                            const dateStr = date.toISOString().split("T")[0];
                            const status = getStatusForDate(dateStr);

                            let statusClass = "";
                            if (status === "present") statusClass = "bg-green-100 border-green-500 text-green-700 font-semibold";
                            else if (status === "absent") statusClass = "bg-red-100 border-red-500 text-red-700 font-semibold";
                            else statusClass = "border-gray-300 bg-white";

                            return (
                                <div key={i} className={`h-16 flex flex-col justify-center rounded border ${statusClass}`}>
                                    <span className="font-medium">{dayName}</span>
                                    <span className="text-xs">{dateStr}</span>
                                </div>
                            );
                        })}
                    </div>
                );

            case "Day":
                const latestMarkedDate = attendanceDates.length > 0
                    ? attendanceDates[attendanceDates.length - 1].date
                    : formatDate(currentYear, currentMonth, 1);

                const status = getStatusForDate(latestMarkedDate);

                return (
                    <div className="p-4 text-center text-sm">
                        <p className="font-semibold text-lg">{latestMarkedDate}</p>
                        {!status && (
                            <p className="mt-4 text-sm text-gray-500">No Attendance Marked</p>
                        )}
                    </div>
                );

            case "List":
                return (
                    <div className="p-4 space-y-2">
                        {attendanceDates
                            .filter(entry => !filterStatus || entry.status === filterStatus)
                            .map((entry) => (
                                <div key={entry.date} className="flex justify-between border-b py-2 text-sm">
                                    <span className="font-medium">
                                        {new Date(entry.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                    <span className={`font-semibold ${entry.status === "present" ? "text-green-600" : "text-red-600"
                                        }`}>
                                        {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                                    </span>
                                </div>
                            ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="relative min-h-screen p-4 bg-cover bg-center bg-no-repeat">
            {/* Header */}
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                    <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-12 h-12 rounded-full" />
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

            {/* Calendar & Filter */}
            <div className="flex justify-between items-center relative">
                <button
                    onClick={() => setShowView(!showView)}
                    className="flex items-center gap-2 bg-[#c62863] text-white px-3 py-1.5 mb-7 mt-3 rounded-md shadow"
                >
                    <Calendar size={18} />
                </button>

                <div className="relative">
                    <button
                        onClick={() => setShowFilterOptions(!showFilterOptions)}
                        className="flex items-center gap-2 bg-[#c62863] text-white px-3 py-1.5 rounded-md shadow"
                    >
                        <img src={filterImage} className="w-6" />
                        <span>Filters</span>
                    </button>

                    {showFilterOptions && (
                        <div className="absolute top-12 right-0 flex flex-col gap-2 bg-white p-2 shadow rounded z-10 w-40">
                            <button
                                onClick={() => setFilterStatus("present")}
                                className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded border border-green-400 flex items-center gap-2"
                            >
                                Present
                                <span className="text-xs bg-green-700 text-white px-2 py-0.5 rounded-full">{presentCount}</span>
                            </button>
                            <button
                                onClick={() => setFilterStatus("absent")}
                                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded border border-red-400 flex items-center gap-2"
                            >
                                Absent
                                <span className="text-xs bg-red-700 text-white px-2 py-0.5 rounded-full">{absentCount}</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Attendance View */}
            {showView && (
                <div className="bg-white p-4 rounded-lg shadow space-y-4 mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex-1 text-center">
                            <h2 className="text-lg font-semibold">
                                {latestDate.toLocaleString("default", { month: "long" })} {latestDate.getFullYear()}
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            {["Monthly", "Week", "Day", "List"].map((view) => (
                                <button
                                    key={view}
                                    onClick={() => setActiveView(view as any)}
                                    className={`px-3 py-1 rounded border text-sm ${activeView === view ? "bg-blue-100 text-blue-600 border-blue-400" : "border-gray-300"
                                        }`}
                                >
                                    {view}
                                </button>
                            ))}
                        </div>
                    </div>

                    {renderAttendanceView()}
                </div>

            )}

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
