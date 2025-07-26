import Frame from "../../../assets/frame.png";
import { IoIosArrowBack, IoMdSend } from "react-icons/io";
import { FaRegSmileWink, FaUser } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";

interface ChatTicketProps {
  ticket: {
    id: number;
    name: string;
    email: string;
    date: string;
    time: string;
    priority: string;
    description: string;
    image?: string;
    status?: "Open" | "Closed";
  };
  onBack: () => void;
}

const ChatTicket: React.FC<ChatTicketProps> = ({ ticket, onBack }) => {
  return (
    <div className=" h-fit flex flex-col overflow-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-[#CA406F] mb-2  rounded-full "
      >
        <IoIosArrowBack size={20} />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {/* Chat Panel */}
        <div className="lg:col-span-2 bg-white rounded-sm shadow p-4  ">
          {/* Header */}
          <div className="flex items-center gap-3 border-b p-2 border h-20  rounded-lg shadow-lg">
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
              <h2 className="font-semibold text-lg text-[#716F6F]">
                {ticket.name}
              </h2>
              <p className="text-[#3ABE65] text-sm">Active Now</p>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex-1  bg-repeat p-3 rounded-md justify-between flex flex-col"
            style={{
              backgroundImage: `url(${Frame})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col gap-4 overflow-y-auto max-h-full flex-1">
              {/* User message */}
              <div className="flex flex-col items-start mb-1">
                <div className="flex items-start mb-1">
                  <div className="w-8 h-8 bg-[#0400FF] rounded-lg mr-2 flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <div>
                  <div className="bg-white rounded-lg px-4 py-2 text-sm shadow max-w-[75%]">
                    Hi there, How are you?
                  </div>
                  <div className="text-[11px] text-[#7D7D7D] mt-1 ml-2">
                    12:24 PM
                  </div>
                </div>
                </div>
                <div className="flex items-start ml-10 flex-col">
                  <div className="bg-white rounded-lg px-4 py-2 text-sm shadow max-w-[75%]">
                    Waiting for your reply. As I have to go back soon. I have to
                    travel long distance.
                  </div>
                  <div className="text-[11px] text-[#7D7D7D] mt-1 ml-2">
                    12:25 PM
                  </div>
                </div>
              </div>

              {/* Admin reply */}
              <div className="flex justify-end mb-1">
                <div className="flex flex-col justify-end items-end ">
                  <div className="bg-[#CA406F] text-white rounded-lg px-4 py-2 text-sm max-w-[75%] shadow">
                    Hi, I am coming there in few minutes. Please wait!! I am in
                    taxi right now.
                  </div>
                  <div className="text-[11px] ">12:28 PM</div>
                </div>
                <div className="w-8 h-8 bg-[#0400FF] rounded-lg ml-2 flex items-center justify-center text-white">
                  <FaUser />
                </div>
              </div>

              {/* Another message */}
              <div className="flex items-start mb-1">
                <div className="w-8 h-8 bg-[#0400FF] rounded-lg mr-2 flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <div>
                  <div className="bg-white rounded-lg px-4 py-2 text-sm shadow max-w-[75%]">
                    Thank you very much, I am waiting here at Starbucks cafe.
                  </div>
                  <div className="text-[11px] text-[#7D7D7D] mt-1 ml-2">
                    12:35 PM
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button className="px-3 py-1 border border-[#CA406F] text-[#CA406F] text-xs rounded hover:bg-red-50">
                      Solved
                    </button>
                    <button className="px-3 py-1 border bg-[#CA406F] text-white text-xs rounded hover:bg-[#CA406F]">
                      Not Related
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Message Input Bar */}
            <div className=" flex items-center gap-2 border-t pt-3 justify-bottom">
              <div className="flex items-center gap-2 flex-1  bg-white rounded  px-4 py-2 border border-gray-300">
                <FaRegSmileWink className="text-gray-500 cursor-pointer" />
                <input
                  type="text"
                  placeholder="Type your message..."
                  className=" flex-1  focus:outline-none "
                />
                <FiPaperclip />
              </div>
              <button className="bg-[#3ABE65] text-white px-2 py-2 rounded-lg  transition-all flex items-center justify-center">
                <IoMdSend size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Ticket Info */}
        <div className="bg-white rounded-sm shadow-lg p-4   gap-4 flex flex-col justify-around">
         <div className=" flex flex-col justify-between gap-3">
           <h3 className="text-xl font-bold text-[#716F6F]">
            Issue Description:
          </h3>
          <p className="text-lg text-[#7D7D7D] border h-20 p-2 rounded-xl">{ticket.description}</p>
         </div>
         < div className=" flex flex-col justify-between gap-3">
            <h3 className="text-xl font-bold  text-[#716F6F]">
            Issue Category:
          </h3>
          <p className="text-lg text-[#7D7D7D] border h-20 p-2 rounded-xl">{ticket.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold  text-[#716F6F]">
            Attachments:
          </h3>
         <div className="flex justify-between border h-20 p-2 rounded-xl items-center " >
           <p className="text-lg text-[#7D7D7D] underline  cursor-pointer border-r flex-1 ">
            2bf39530-F04d-4e22-A5ea-2be943f28e9e.jpeg
          </p>
          <p className="text-lg text-[#7D7D7D] ">
            view
          </p>
         </div>
          </div>
          <div>
            <h3 className="text-xl font-bold  text-[#716F6F]">
             Status: </h3>
          <span
            className={`inline-block px-5 py-2 text-white  font-semibold rounded p-2 ${
              ticket.status === "Open" ? "bg-[#CA406F]" : "bg-[#3ABE65]"
            }`}
          >
            {ticket.status}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTicket;
