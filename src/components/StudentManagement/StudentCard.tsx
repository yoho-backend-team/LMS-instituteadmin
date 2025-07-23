import type React from "react";
import { FaLocationDot } from "react-icons/fa6";
import type { Note } from "../StudentManagement/Student";
import mail from "../../assets/Mail.svg";
import user from "../../assets/User.svg";
import call from "../../assets/Call.svg";
import send from "../../assets/Send.svg";

interface StudentCardProps {
  student: Note;
  onEdit: (student: Note) => void;
  onDelete: (id: number) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-xl relative flex flex-col">
      <div className="w-full rounded-lg h-34 bg-gray-200 mt-2" />

      <h2 className="text-2xl font-bold text-[#716F6F] mt-4">
        {student.title}
      </h2>
      <p className="text-md text-[#7D7D7D] mt-2">{student.email}</p>
      <p className="text-md text-[#716F6F] mt-2 flex">
        <FaLocationDot className="mt-1" />
        <div className="ml-1">{student.location}</div>
      </p>

      <div className="flex justify-center gap-5 mt-4 text-pink-600">
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={user || "/placeholder.svg"} alt="Profile" />
        </button>
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={mail || "/placeholder.svg"} alt="Email" />
        </button>
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={send || "/placeholder.svg"} alt="Message" />
        </button>
        <button className="bg-[#CA406F] p-2 rounded-md">
          <img src={call || "/placeholder.svg"} alt="Call" />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
