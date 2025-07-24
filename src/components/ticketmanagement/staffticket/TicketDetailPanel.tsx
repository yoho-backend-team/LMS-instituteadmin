import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Ticket } from "./TicketCard";
import chatbg from "../../../assets/chatbg.png"
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowBack, IoMdSend } from "react-icons/io";
import { FiPaperclip, FiSmile } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";



// Dummy ticket data (use as shared)
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

// ... imports stay unchanged

const TicketDetailPanel: React.FC = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const ticket = initialTickets.find((t) => t.id === ticketId);
  const [status, setStatus] = useState(ticket?.status || "Open");
  const [isSolved, setIsSolved] = useState(false);


  const handleClose = () => {
    setStatus("Closed");
    alert("Ticket closed successfully");
    navigate("/staff-tickets");
  };

  if (!ticket) {
    return (
      <div className="text-center p-6 text-red-600">
        Ticket not found.
      </div>
    );
  }

  return (
    <div className="p-6 w-full flex flex-col gap-4">

      <div className="flex items-center gap-1 mb-4">
      {/* Back Icon */}
      <IoIosArrowBack
        size={24}
        className="text-gray-600 cursor-pointer hover:text-[#CA406F]"
        onClick={() => navigate("/Staffticket")} // Go back to previous page
      />

      {/* Title */}
      <h3 className="text-3xl font-bold text-gray-500">Staff Ticket</h3>
    </div>


      {/* Header */}
      {!isSolved && (
      <div className="flex justify-between items-center bg-[#CA406F] text-white px-6 py-3 rounded-md">
        <h2 className="font-bold text-lg">TICKET ID : #{ticket.id}</h2>
        <p className="text-sm font-semibold">
          RAISED DATE & TIME : {new Date(ticket.createdAt).toLocaleString()}
        </p>
        
        {status === "Open" && (
            
          <button
            onClick={handleClose}
            className= "flex items-center gap-1 bg-white text-[#3ABE65] px-4 py-1.5 rounded-sm font-semibold shadow hover:bg-gray-100"
          >
            <RxCrossCircled size={20}  className="bg-[#3ABE65] text-white rounded-full"/>
            CLOSE TICKET
          </button>
        )}
      </div>
      )}

      {/* Main content layout */}
      <div className="flex gap-6">
        {/* Chat Section */}
        <div className="flex flex-col flex-1 bg-white shadow-md rounded-xl p-4 h-[75vh]">
          {/* User Info */}
          <div className="border rounded-lg shadow-lg p-1 mt-2 pt-2">
          <div className=" px-2 flex items-center gap-4 mb-4 mt-2  rounded ">
            <div className="w-12 h-12 rounded-full bg-[#CA406F] flex items-center justify-center font-bold text-xl">
              
            </div>
            <div className="">
              <h3 className="font-semibold">Oliver Smith</h3>
              <span className="text-green-600 text-sm">Active Now</span>
            </div>
          </div>
          </div>

          {/* Chat area and controls (stacked) */}
          <div
            className="flex flex-col justify-between flex-1 border border-gray-200 rounded-md p-4 mt-4"
            style={{
              backgroundImage: `url(${chatbg})`,
              backgroundSize: "cover",
             
               
            }}
          >
            {/* Messages */}
        <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
  {/* User Message */}
  <div className="flex items-start gap-2">
    <div className="text-white p-2 rounded bg-[#0400FF]">
      <FaUserAlt size={16} />
    </div>
    <div>
      <p className="bg-white inline-block px-4 py-2 rounded-md shadow text-md mb-1">
        Hi there, How are you?
      </p>
      <p className="text-xs text-gray-400">12:41 PM</p>
    </div>
  </div>

  {/* User Follow-up */}
  <div className="flex items-start gap-2">
    <div className="text-white p-2 rounded bg-[#0400FF]">
      <FaUserAlt size={16} />
    </div>
    <div>
      <p className="bg-white inline-block px-4 py-2 rounded-md shadow text-md mb-1">
        Waiting for your reply...
      </p>
      <p className="text-xs text-gray-400">12:45 PM</p>
    </div>
  </div>

  {/* Agent Response */}
  <div className="flex justify-end">
    <div className="flex items-start gap-2">
      <div>
        <p className="bg-[#CA406F] text-white inline-block px-4 py-2 rounded-md shadow text-md mb-1">
          Hi, I am coming there in few minutes.
        </p>
        <p className="text-xs text-gray-400 text-right">12:48 PM</p>
      </div>
      <div className="text-white p-2 rounded bg-[#0400FF]">
        <FaUserAlt size={16} />
      </div>
    </div>
  </div>

  {/* User Reply */}
  <div className="flex items-start gap-2">
    <div className="text-white p-2 rounded bg-[#0400FF]">
      <FaUserAlt size={16} />
    </div>
    <div>
      <p className="bg-white inline-block px-4 py-2 rounded-md shadow text-md mb-1">
        Thank you very much, I am waiting here at Starbucks.
      </p>
      <p className="text-xs text-gray-400">12:55 PM</p>
    </div>
  </div>
   <div className="flex gap-2">
              <button
            className="border border-[#CA406F] text-[#CA406F] px-4 py-2 rounded font-semibold"
             onClick={() => {
              setStatus("Closed");
              setIsSolved(true);
                                }}
                 >solved</button>
                <button className="bg-[#CA406F] text-white px-4 py-1 rounded  font-semibold">
                  Not Related
                </button>
              </div>
</div>


            {/* Controls */}
            <div className="mt-4 flex justify-between items-center gap-4">
              {/* <div className="flex gap-2">
                <button className="border border-[#CA406F] text-[#CA406F] px-4 py-1 rounded-full  font-semibold">
                  Solved
                </button>
                <button className="bg-[#CA406F] text-white px-4 py-1 rounded-full  font-semibold">
                  Not Related
                </button>
              </div> */}
              <div className="flex items-center gap-2 flex-1">
              <div className="flex flex-1 items-center gap-2 border bg-white rounded px-4 py-2">
                 <FiSmile />
                <input
                  type="text"
                  placeholder="Type a message"
                  className= "flex-1 rounded"
                />
                <FiPaperclip />
                </div>
                <div className="flex bg-[#3ABE65] rounded p-1 items-center mt-1">
                <IoMdSend size={28} className=" text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-[300px] h-[40vh] bg-white shadow-md rounded-xl p-4">
          <h3 className="font-semibold mb-2">Issue Description:</h3>
          <p className="text-sm text-gray-700 mb-4">{ticket.subject}</p>

          <h3 className="font-semibold">Issue Category:</h3>
          <p className="mb-4 text-sm">Feedback</p>

          <h3 className="font-semibold">Attachments:</h3>
          <p className="text-sm mb-4 text-blue-600 underline cursor-pointer">
            2bf39530...jpeg <span className="ml-2">View</span>
          </p>

          <h3 className="font-semibold">Status:</h3>
          <span
            className={`inline-block mt-1 px-4 py-2 text-sm font-semibold rounded ${
              status === "Closed"
                ? "bg-[#3ABE65] text-white"
                : "bg-[#CA406F] text-white"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailPanel;
