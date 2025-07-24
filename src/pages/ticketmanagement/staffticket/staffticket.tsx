import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketTabs from "@/components/ticketmanagement/staffticket/TicketTabs";
import TicketCard, { type Ticket } from "@/components/ticketmanagement/staffticket/TicketCard";
import { FaCalendarCheck } from "react-icons/fa";


const initialTickets: Ticket[] = [
  {
    id: "t1",
    subject: "Login not working",
    status: "Open",
    createdAt: "2025-07-20",
    assignedTo: "John Doe",
    priority: "High",
  },
  {
    id: "t2",
    subject: "Unable to join live class",
    status: "Open",
    createdAt: "2025-07-18",
    assignedTo: "Jane Smith",
    priority: "Medium",
  },
  {
    id: "t3",
    subject: "Course material not available",
    status: "Closed",
    createdAt: "2025-07-15",
    assignedTo: "John Doe",
    priority: "Low",
  },
  {
    id: "t4",
    subject: "Audio issue in live session",
    status: "Closed",
    createdAt: "2025-07-14",
    assignedTo: "Mary Johnson",
    priority: "High",
  },
  {
    id: "t5",
    subject: "Video link not opening",
    status: "Open",
    createdAt: "2025-07-21",
    assignedTo: "Jane Smith",
    priority: "High",
  },
];

const StaffTicket: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [selectedTab, setSelectedTab] = useState("Opened Tickets");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const navigate = useNavigate();

  const handleCloseTicket = (ticketId: string) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: "Closed" } : ticket
      )
    );

    // If currently viewing this ticket, update it locally too
    if (selectedTicket?.id === ticketId) {
      setSelectedTicket({ ...selectedTicket, status: "Closed" });
    }
  };

  const filteredTickets = tickets.filter((ticket) => {
    if (selectedTab === "Opened Tickets") return ticket.status === "Open";
    if (selectedTab === "Closed Tickets") return ticket.status === "Closed";
    return true;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Left Section: Tabs + Ticket Cards */}
      <div className="flex-1 flex-col flex gap-8">
        <div className="w-full flex gap-2  items-center justify-start bg-[#CA406f] text-white p-4 rounded-sm ">
            <FaCalendarCheck size={20} />
        <h2 className="text-2xl font-bold ">STAFF TICKETS</h2>
        </div>
        <TicketTabs selected={selectedTab} setSelected={setSelectedTab} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
             onClick={() => navigate(`/staff-tickets/${ticket.id}`)}
              isActive={selectedTicket?.id === ticket.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffTicket;
