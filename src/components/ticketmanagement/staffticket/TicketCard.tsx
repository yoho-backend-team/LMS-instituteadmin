import React, { useState, useRef, useEffect } from "react";
import { GoClockFill } from "react-icons/go";
import { RiListCheck3 } from "react-icons/ri";
import { MoreVertical } from "lucide-react";
import { FaCalendarAlt,  } from "react-icons/fa";

export type Ticket = {
  id: string;
  subject: string;
  status: string;
  createdAt: string;
  assignedTo: string;
  priority?: "Low" | "High" | "Medium";
};

type Props = {
  ticket: Ticket;
  onClick: () => void;
  isActive: boolean;
};

const TicketCard: React.FC<Props> = ({ ticket, onClick, isActive }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition relative"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://source.unsplash.com/40x40/?flower"
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">Elon Musk</p>
            <p className="text-sm text-gray-500">Email: Musk@Gmail.Com</p>
          </div>
        </div>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="p-1 text-[#D24582] hover:bg-gray-100 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen((prev) => !prev);
            }}
          >
            <MoreVertical size={20} />
          </button>

          {dropdownOpen && (
           <div className="p-2 absolute right-0 mt-2 w-40 bg-white border  rounded-lg shadow-lg z-50">
                              <button
                                
                                className="w-full flex items-center gap-2 text-md px-4 border py-3 mt-1 text-#716F6F border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white"
                              >
                                Low
                              </button>
                              <button
                               
                                className="w-full flex items-center gap-2 text-md px-4 py-3 border mt-1 text-#716F6F border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white"
                              >

                                Medium
                              </button>
                              <button
                                
                                className="w-full flex items-center gap-2 text-md px-4 py-3 border mt-1 text-#716F6F border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white"
                              >

                                High
                              </button>
                            </div>
          )}
        </div>
      </div>

      {/* Ticket Message */}
      <p className="font-semibold text-gray-700 leading-relaxed min-h-[48px]">
        {ticket.subject || "This ticket created from student mobile app"}
      </p>

      {/* Date & Time */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <FaCalendarAlt size={16} className="text-gray-500" />
          <span>{ticket.createdAt}</span>
        </div>
        <div className="flex items-center gap-1">
          <GoClockFill size={16} className="text-gray-500" />
          <span>6:03 AM</span>
        </div>
      </div>

      {/* Priority Tag */}
      <div className="mt-6">
        <div className="inline-flex items-center gap-1 bg-[#D24582] text-white px-4 py-2 rounded-lg text-sm font-medium">
          <RiListCheck3 size={19} />
          Priority: {ticket.priority || "Low"}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
