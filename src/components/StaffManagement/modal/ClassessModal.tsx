import React from "react";
import { IoMdClose } from "react-icons/io";

interface ClassessModalProps {
  onClose: () => void;
  classData: {
    title: string;
    students: number;
    time: string;
  };
}

const dummyStudents = [
  {
    id: "ST001",
    name: "Alice Johnson",
    city: "Chennai",
    address: "123 Anna Nagar",
  },
  {
    id: "ST002",
    name: "Rahul Mehta",
    city: "Bangalore",
    address: "45 MG Road",
  },
  {
    id: "ST003",
    name: "Sneha Sharma",
    city: "Mumbai",
    address: "12 Marine Drive",
  },
];

const ClassessModal: React.FC<ClassessModalProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-lg w-full max-w-full mx-auto relative text-[#7D7D7D]">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
      >
        <IoMdClose size={20} />
      </button>

      <h2 className="text-xl font-semibold mb-4 text-[#716F6F]">Class Details</h2>

      {/* Placeholder Inputs */}
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          "Course",
          "Batch",
          "Duration",
          "Date",
          "Started At",
          "Ended At",
          "Instructor",
          "Class Link",
        ].map((label, index) => {
          const safeId = label.toLowerCase().replace(/\s+/g, "-");
          return (
            <div className="flex flex-col gap-1" key={index}>
              <label htmlFor={safeId} className="text-[#716F6F]">{label}</label>
              <input
                type="text"
                id={safeId}
                name={safeId}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="border p-2 rounded w-full"
              />
            </div>
          );
        })}
      </form>

      {/* Students Table */}
      <div className="border-t-2" />
      <div className="mb-4 mt-4 w-full">
        <input
          type="search"
          placeholder="Search Student"
          className="border w-1/5 p-2 rounded-sm border-[#CA406F]"
        />
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-[#716F6F]">
              <th className="p-3 border">Student ID</th>
              <th className="p-3 border">Student Name</th>
              <th className="p-3 border">City</th>
              <th className="p-3 border">Address</th>
            </tr>
          </thead>
          <tbody>
            {dummyStudents.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border">{student.id}</td>
                <td className="p-3 border">{student.name}</td>
                <td className="p-3 border">{student.city}</td>
                <td className="p-3 border">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Close Button */}
      <div className="flex justify-end mt-6">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ClassessModal;
