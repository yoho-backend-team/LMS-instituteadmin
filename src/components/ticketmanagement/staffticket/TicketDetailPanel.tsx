import React from "react";

type Ticket = {
  id: string;
  subject: string;
  status: string;
  createdAt: string;
  assignedTo: string;
};

type Props = {
  ticket: Ticket;
};

const TicketDetailPanel: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#CA406F]">{ticket.subject}</h3>
      <p>
        <span className="font-medium">Status:</span> {ticket.status}
      </p>
      <p>
        <span className="font-medium">Created At:</span> {ticket.createdAt}
      </p>
      <p>
        <span className="font-medium">Assigned To:</span> {ticket.assignedTo}
      </p>

      <hr />

      <h4 className="text-lg font-semibold">Conversation</h4>
      <div className="space-y-2 text-sm">
        <div className="bg-gray-100 p-2 rounded">
          <strong>Student:</strong> I can’t access my course materials.
        </div>
        <div className="bg-blue-100 p-2 rounded">
          <strong>Staff:</strong> We are looking into the issue. Please hold on.
        </div>
      </div>

      <div className="mt-4">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={3}
          placeholder="Type a reply..."
        />
        <button className="mt-2 px-4 py-2 bg-[#CA406F] text-white rounded-md hover:bg-[#b2345d]">
          Send
        </button>
      </div>
    </div>
  );
};

export default TicketDetailPanel;
