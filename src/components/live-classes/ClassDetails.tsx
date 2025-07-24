import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const ClassDetails: React.FC = () => {
  const navigate = useNavigate();
  const students = [
    {
      id: 46,
      name: "Elon Musk",
      city: "Chennai",
      address: "Boca Chica Town, Near The SpaceX Starbase",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 47,
      name: "Elon Musk",
      city: "Chennai",
      address: "The SpaceX Starbase",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
<div className="min-h-screen pt-6 pr-6 pb-6 pl-[10px] xl:pl-[40px] transition-all duration-300">
  {/* Header */}
  <div className="flex flex-wrap justify-between items-start mb-4">
    <div>
      <span className="bg-[#CA406F] text-white px-2 py-2 rounded-lg font-bold text-lg flex items-center"
        onClick={() => navigate("/liveclasses")}>
<IoIosArrowBack size={20} /> MERN
      </span>
      <h3 className="text-xl font-semibold mt-6 px-2">Batch 21</h3>
    </div>

    <div className="flex items-center gap-4">
      {/* Duration with Icon */}
      <span className="flex items-center gap-2 text-lg text-gray-600">
        <MdAccessTimeFilled className="text-base w-5 h-5" />
        Duration: 6 Months
      </span>

      {/* Status Badge */}
      <span className="text-lg font-medium bg-green-600 text-white px-4 py-2 rounded-lg mr-1 ">
        Offline
      </span>
    </div>
  </div>

  {/* Class Info Cards */}
  <div className="grid grid-cols-1 gap-4 mb-6">
    {/* Row 1 */}
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-sm text-gray-500">Course</p>
          <p className="font-medium">MEAN STACK 202</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Batch</p>
          <p className="font-medium">MERN 2025</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="font-medium">8 Hrs 30 Min</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">2025-06-12</p>
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
        <div>
          <p className="text-sm text-gray-500">Started At</p>
          <p className="font-medium">2025-09-12</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Ended At</p>
          <p className="font-medium">2025-10-12</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Instructor</p>
          <div className="flex items-center gap-2">
            {/* <img
              src="https://via.placeholder.com/40"
              alt="Instructor"
              className="rounded-full w-10 h-10"
            /> */}
            <span className="font-medium text-sm">IMAGE</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Class Link</p>
          <a href="#" className="text-blue-700 font-medium break-all">
            https:SARDFYGUHKJHFD
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-white rounded-xl shadow overflow-x-auto p-4">
  {/* Search Student */}
  <div className="m-2">
    <input
      type="text"
      placeholder="Search Student"
      className="w-full md:w-1/3 border border-[#CA406F] rounded px-2 py-2"
    />
  </div>

  <table className="min-w-full table-auto text-sm p-4">
    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="p-4 font-semibold">Student ID</th>
        <th className="p-4 font-semibold">Student Name</th>
        <th className="p-4 font-semibold text-center">City</th>
        <th className="p-4 font-semibold text-center">Address</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, idx) => (
        <tr key={idx} className="border-t text-sm">
          <td className="p-4">{student.id}</td>

          <td className="p-4">
            <div className="flex items-center gap-2">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">{student.name}</span>
            </div>
          </td>

          <td className="p-4 text-center">{student.city}</td>
          <td className="p-4 text-center">{student.address}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>
  );
};

export default ClassDetails;
