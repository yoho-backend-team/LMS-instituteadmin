import React from "react";
import { GoClockFill } from "react-icons/go";

import { MoreVertical, BadgeInfo } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";

type Ticket = {
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
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md p-4 cursor-pointer transition relative ${
        isActive ? "ring-2 ring-[#CA406F]" : ""
      }`}
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
        <MoreVertical className="text-[#D24582]" />
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
        <div className="inline-flex items-center gap-2 bg-[#D24582] text-white px-4 py-2 rounded-lg text-sm font-medium">
          <BadgeInfo size={16} />
          Priority: {ticket.priority || "Low"}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
