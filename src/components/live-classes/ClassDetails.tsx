import React from "react";

const ClassDetails: React.FC = () => {
  const students = [
    {
      id: 46,
      name: "Elon Musk",
      city: "Chennai",
      address: "Boca Chica Town, Near The SpaceX Starbase",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 46,
      name: "Elon Musk",
      city: "Chennai",
      address: "The SpaceX Starbase",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div className="min-h-screen bg-cover p-6"
      style={{ backgroundImage: "url('/Backdrop Image (1).png')" }}>
      <h2 className="text-2xl font-bold mb-6 ">Live Classes</h2>

      {/* Batch Info */}
      
      <div className="flex justify-between items-center mb-2">
  <span className="bg-[#CA406F] text-white px-3 py-1 rounded-full font-semibold">
    MERN
  </span>
  <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">Duration: 6 Months</span>
    <span className="text-md bg-green-600 text-white px-3 py-3  rounded-lg">
      Offline
    </span>
  
  </div>
</div>
<h3 className="text-xl font-semibold">Batch 21</h3>


    {/* Course Details - 4 items per card */}
<div className="grid grid-cols-1 gap-4 mb-6 pt-2">
  {/* Row 1: Course, Batch, Duration, Date */}
  <div className="bg-white p-4 rounded shadow">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

  {/* Row 2: Started At, Ended At, Instructor, Class Link */}
  <div className="bg-white p-4 rounded shadow">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
      <div>
        <p className="text-sm text-gray-500">Started At</p>
        <p className="font-medium">2025-05-99</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Ended At</p>
        <p className="font-medium">2025-05-12</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Instructor</p>
        <img
          src="https://via.placeholder.com/40"
          alt="Instructor"
          className="rounded-full w-10 h-10 mt-1"
        />
      </div>
      <div>
        <p className="text-sm text-gray-500">Class Link</p>
        <a href="#" className="text-blue-700 font-medium break-words">
          https:SARDFYGUHKJHFD
        </a>
      </div>
    </div>
  </div>
</div>



      {/* Student Search */}
      <input
        type="text"
        placeholder="Search Student"
        className="mb-4 w-full md:w-1/3 border border-gray-300 rounded px-3 py-2"
      />

      {/* Student Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 font-medium">Student ID</th>
              <th className="p-4 font-medium">Student Name</th>
              <th className="p-4 font-medium">City</th>
              <th className="p-4 font-medium">Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-4">{student.id}</td>
                <td className="p-4 flex items-center gap-2">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{student.name}</div>
                    <div className="text-xs text-gray-500">Instructor</div>
                  </div>
                </td>
                <td className="p-4">{student.city}</td>
                <td className="p-4">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassDetails;
