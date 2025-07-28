import React, { useState } from "react";
import closeImage from "../../assets/close.png";

interface AddAttendancePanelProps {
  onClose: () => void;
<<<<<<< HEAD
  onAddDate: (date: number, status: string) => void; // updated
=======
  onAddDate: (date: number) => void;
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
}

const AddAttendancePanel: React.FC<AddAttendancePanelProps> = ({ onClose, onAddDate }) => {
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [attendanceDate, setAttendanceDate] = useState("2025-09-19");

  const handleAdd = () => {
    const day = new Date(attendanceDate).getDate();
<<<<<<< HEAD
    if (!isNaN(day) && attendanceStatus) {
      onAddDate(day, attendanceStatus); // send both day and status
=======
    if (!isNaN(day)) {
      onAddDate(day);
      // Reset form if needed
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
      setAttendanceStatus("");
      setAttendanceDate("2025-09-19");
    }
  };

  const handleReset = () => {
    setAttendanceStatus("");
    setAttendanceDate("2025-09-19");
  };

  return (
<<<<<<< HEAD
    <div className="fixed top-0 mt-3 right-0 w-[350px] h-[675px] bg-white shadow-lg z-50 p-6 overflow-y-auto">
=======
    <div className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      {/* Header */}
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Attendance</h2>
        <img
          src={closeImage}
          onClick={onClose}
          className="w-5 h-5 cursor-pointer"
          alt="Close"
        />
      </div>

<<<<<<< HEAD
=======
      {/* Profile Info */}
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
      <div className="flex flex-col items-center mb-4">
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <h3 className="mt-2 font-semibold">Elon Musk</h3>
        <p className="text-sm text-gray-500">elonmusk@gmail.com</p>
      </div>

<<<<<<< HEAD
=======
      {/* Attendance Dropdown */}
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
      <label className="block mb-2 text-sm font-medium text-gray-700">Attendance</label>
      <select
        value={attendanceStatus}
        onChange={(e) => setAttendanceStatus(e.target.value)}
        className="w-full mb-4 border rounded px-3 py-2"
      >
        <option value="">Select</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>

<<<<<<< HEAD
=======
      {/* Date Picker */}
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
      <label className="block mb-2 text-sm font-medium text-gray-700">Attendance Date</label>
      <input
        type="date"
        className="w-full mb-4 border rounded px-3 py-2"
        value={attendanceDate}
        onChange={(e) => setAttendanceDate(e.target.value)}
      />

<<<<<<< HEAD
=======
      {/* Actions */}
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
      <div className="flex justify-between">
        <button
          onClick={handleReset}
          className="border border-blue-500 text-blue-500 px-4 py-1 rounded"
        >
          Reset
        </button>
        <button
          onClick={handleAdd}
          className="bg-[#c62863] text-white px-6 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddAttendancePanel;
