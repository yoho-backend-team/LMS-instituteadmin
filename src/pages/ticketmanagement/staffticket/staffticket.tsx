import React, { useState } from "react";
import TicketTabs from "@/components/ticketmanagement/staffticket/TicketTabs";
import TicketCard from "@/components/ticketmanagement/staffticket/TicketCard";
import TicketDetailPanel from "@/components/ticketmanagement/staffticket/TicketDetailPanel";


// import type { Ticket  from "@/components/ticketmanagement/staffticket/TicketTabs";

interface Ticket {
  id: string;
  subject: string;
  status: string;
  createdAt: string;
  assignedTo: string;
  priority?: "High" | "Medium" | "Low";
}

const dummyTickets: Ticket[] = [
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
  const [selectedTab, setSelectedTab] = useState("Opened Tickets");
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const filteredTickets =
    selectedTab === "Opened Tickets"
      ? dummyTickets.filter((t) => t.status === "Open")
      : dummyTickets.filter((t) => t.status === "Closed");

  return (
    <div className="flex flex-col md:flex-row  p-6 gap-6">
      {/* Ticket List Section */}
      <div className="flex-1 md:max-w-md">
        <h2 className="text-2xl font-bold mb-4">Staff Tickets</h2>
        <TicketTabs selected={selectedTab} setSelected={setSelectedTab} />

        <div className="mt-4 space-y-4">
          {filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={() => setSelectedTicket(ticket)}
              isActive={selectedTicket?.id === ticket.id}
            />
          ))}
        </div>
      </div>

      {/* Ticket Details Section */}
      {/* <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        {selectedTicket ? (
          <TicketDetailPanel ticket={selectedTicket} />
        ) : (
          <p className="text-gray-600 text-center pt-12">
            Select a ticket to view details
          </p>
        )}
      </div> */}
    </div>
  );
};

export default StaffTicket;
