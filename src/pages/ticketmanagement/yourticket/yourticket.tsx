import Createticket from "@/components/YourTicket/Modal/Createticket";
import ChatTicket from "@/components/YourTicket/Modal/ChatTicket";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaCalendarCheck, FaClock } from "react-icons/fa";
import { RiListCheck3 } from "react-icons/ri";

export interface Ticket {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  priority: string;
  image?: string;
  description: string;
  status?: "Open" | "Closed";
}
const initialTickets: Ticket[] = [
  {
    id: 1,
    name: "Elon Musk",
    email: "musk@gmail.com",
    date: "2025-07-22",
    time: "10:30 AM",
    priority: "High",
    description: "This ticket was created from the student mobile app.",
    status: "Open",
  },
  {
    id: 2,
    name: "Sundar Pichai",
    email: "sundar@gmail.com",
    date: "2025-07-21",
    time: "2:15 PM",
    priority: "Medium",
    description: "Issue with student login.",
    status: "Open",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    email: "zuck@gmail.com",
    date: "2025-07-18",
    time: "1:00 PM",
    priority: "Low",
    description: "Resolved: Query regarding attendance sync.",
    status: "Closed",
  },
  {
    id: 4,
    name: "Satya Nadella",
    email: "satya@gmail.com",
    date: "2025-07-17",
    time: "9:45 AM",
    priority: "High",
    description: "Resolved: Server timeout issue reported.",
    status: "Closed",
  },
];

const YourTicket = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [filter, setFilter] = useState<"Open" | "Closed">("Open");
  const [dropdownOpenId, setDropdownOpenId] = useState<number | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  const handleCreateTicket = (newTicket: Omit<Ticket, "id" | "status">) => {
    const ticketWithId: Ticket = {
      ...newTicket,
      id: Date.now(),
      status: "Open",
    };
    setTickets((prev) => [...prev, ticketWithId]);
    setShowPanel(false);
  };

  const filteredTickets = tickets.filter((t) => t.status === filter);
  const handleDeleteTicket = (ticketId: number) => {
    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.id !== ticketId)
    );
    setDropdownOpenId(null);
  };

  return (
    <div className=" relative flex flex-col h-fit max-h-fit w-full gap-6">
      {/* Create Ticket Modal */}
      {showPanel && (
        <div
          className="absolute h-[85vh] inset-0 flex justify-end "
          onClick={() => setShowPanel(false)} 
        >
          <div
            className="h-[85vh] w-1/3 bg-white shadow-xl "
            onClick={(e) => e.stopPropagation()} // prevent inner modal click from closing
          >
            <Createticket
              onClose={() => setShowPanel(false)}
              onSubmit={handleCreateTicket}
            />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-[#CA406F] shadow rounded  ">
        <h2 className="uppercase text-lg text-white font-bold flex items-center gap-2 ">
          <FaCalendarCheck size={20} /> Your Ticket
        </h2>
        <button
          className="px-4 py-2 bg-white text-[#CA406F] font-bold rounded shadow"
          onClick={() => setShowPanel(true)}
        >
          Create
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 ">
        <button
          onClick={() => setFilter("Open")}
          className={`p-2 rounded-sm text-sm font-semibold w-32 flex items-center justify-center ${
            filter === "Open"
              ? "bg-[#CA406F] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Opened Tickets
        </button>
        <button
          onClick={() => setFilter("Closed")}
          className={`p-2 rounded-sm text-sm font-semibold w-32 flex items-center justify-center ${
            filter === "Closed"
              ? "bg-[#CA406F] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Closed Tickets
        </button>
      </div>

      {/* Ticket List or Chat View */}
      <div className="">
        {selectedTicket ? (
          <ChatTicket
            ticket={selectedTicket}
            onBack={() => setSelectedTicket(null)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto scrollbar-hide">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-sm shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-[#CA406F] font-bold text-sm uppercase">
                      {ticket.image ? (
                        <img
                          src={ticket.image}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        ticket.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#333]">
                        {ticket.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Email: {ticket.email}
                      </p>
                    </div>
                  </div>
                  <div
                    className="text-[#CA406F] cursor-pointer text-lg relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="p-1 text-[#D24582] hover:bg-gray-100 rounded-full"
                      onClick={() =>
                        setDropdownOpenId((prevId) =>
                          prevId === ticket.id ? null : ticket.id
                        )
                      }
                    >
                      <SlOptionsVertical size={20} />
                    </button>

                    {dropdownOpenId === ticket.id && (
                      <div className="p-2 absolute right-0 mt-2 w-30 bg-white border rounded-lg shadow-lg z-50">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteTicket(ticket.id);
                          }}
                          className="w-full flex items-center gap-2 text-md px-2 py-1 border mt-1 text-[#716F6F] border-gray-300 rounded-lg hover:bg-[#CA406F] hover:text-white"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mt-4 text-[15px] h-13 line-clamp-3 font-medium">
                  {ticket.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mt-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarCheck className="text-gray-400" />
                    <span>{ticket.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-gray-400" />
                    <span>{ticket.time}</span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2 bg-[#FF3B63] text-white px-3 py-2 rounded-sm w-fit shadow-sm">
                    <RiListCheck3 size={18} />
                    <span className="text-sm font-semibold">
                      Priority: {ticket.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourTicket;
