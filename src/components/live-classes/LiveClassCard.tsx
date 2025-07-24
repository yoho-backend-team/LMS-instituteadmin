import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paperclip, MoreVertical,   } from "lucide-react";
import { BiSolidCalendar } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";

const classData = [
  {
    id: "class-1",
    title: "MERN",
    students: 2,
    schedule: "Thu, July 12, 2025 | 12:00 PM – 01:00 PM",
    link: "https://zoom.us/j/123456789",
    avatars: ["bg-gray-400", "bg-black"],
  },
  {
    id: "class-2",
    title: "MERN",
    students: 1,
    schedule: "Thu, July 12, 2025 | 12:00 PM – 01:00 PM",
    link: "https://zoom.us/j/987654321",
    avatars: ["bg-black"],
  },
];

const LiveClassCard: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);

  const toggleDropdown = (classId: string) => {
    setDropdownOpenId(prev => (prev === classId ? null : classId));
  };

  const handleEdit = (id: string) => {
    navigate(`/live-classes/edit/${id}`);
  };

  const handleView = (id: string) => {
    navigate(`/live-classes/details`);
  };

  const handleDelete = (id: string) => {
    alert(`Delete class: ${id}`);
  };

  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-white h-70 rounded-2xl shadow-2xl p-4 relative"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div className="flex -space-x-2">
                {item.avatars.map((avatarColor, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full border-2 border-white ${avatarColor}`}
                  />
                ))}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className="p-1 rounded hover:bg-gray-100"
                >
                  <MoreVertical className="w-5 h-5 text-[#CA406F]" />
                </button>

                {dropdownOpenId === item.id && (
                  <div className="p-2 absolute right-0 mt-2 w-40 bg-white border  rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => handleView(item.id)}
                      className="w-full flex items-center gap-2 text-md px-4 py-3 mt-1 text-#716F6F border border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white" 
                    >
                      <FaEye className="w-4 h-4" />
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="w-full flex items-center gap-2 text-md px-4 py-3 mt-1 text-#716F6F border border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white"
                    >
                      <MdEditDocument className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-full flex items-center gap-2 text-md px-4 py-3 mt-1 text-#716F6F border border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white"
                    >
                      <FaTrashCan className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-5 mt-4">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {item.students} {item.students === 1 ? "Student" : "Students"} on this Class
              </p>

              <div className="flex items-center text-sm text-gray-600 mb-1">
                <BiSolidCalendar className="w-6 h-6 mr-2" />
                {item.schedule}
              </div>

              <div className="flex items-center text-sm text-blue-700 pt-1">
                <Paperclip className="w-5 h-5 mr-2 text-blue-700" />
                <a
                  href={item.link}
                  className="underline font-medium"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.schedule}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveClassCard;
