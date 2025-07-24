import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical, BadgeAlert } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
// import calenders from "../../assets/Attendence management.png";
import calender from '../../assets/Mask group.png' ;
import buttonicon from '../../assets/buttonicon.png'
import { ClockIcon ,Calendar} from "lucide-react";
import { FONTS } from "@/constants/uiConstants";
import { useNavigate } from "react-router-dom";

const tickets = [
  {
    name: "Elon Musk",
    email: "Musk@Gmail.Com",
    message: "This ticket created from student mobile app",
    date: "5-7-2025",
    time: "6:03 AM",
    priority: "High",
  },
  {
    name: "Elon Musk",
    email: "Musk@Gmail.Com",
    message: "This ticket created from student mobile app",
    date: "5-7-2025",
    time: "6:03 AM",
    priority: "Low",
  },
  {
    name: "Elon Musk",
    email: "Musk@Gmail.Com",
    message: "This ticket created from student mobile app",
    date: "5-7-2025",
    time: "6:03 AM",
    priority: "Low",
  },
];

const getPriorityClass = (priority: string) =>
  priority === "High" ? "bg-[#ca406f]" : "bg-[#ca406f]/80";

const StaffTicket = () => {

    const navigate = useNavigate(); 


  return (
    <div className="min-h-screen px-6 py-8">

     <div className="flex items-center w-full bg-[#ca406f] px-6 py-3 rounded-md shadow mb-6">
  <img
    src={calender}
    alt="calendar"
    className="w-6 h-6 mr-4 !text-white"
  />
  <h2 className="!text-white"style={{...FONTS.heading_01}}>STAFF TICKETS</h2>
</div>


      <div className="flex gap-4 mb-8">
        <Button className="bg-[#ca406f] hover:bg-[#b4385d] rounded-md px-6" style={{...FONTS.add_button}}>
          Opened Tickets
        </Button>
        <Button className="bg-[#ca406f] hover:bg-[#b4385d] rounded-md px-6" style={{...FONTS.add_button}}>
          Closed Tickets
        </Button>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket, idx) => (
          <Card
            key={idx}
            className="relative bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between"
          > 
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=58"
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 style={{...FONTS.card_htext}}>{ticket.name}</h3>
                  {/* <p style={{...FONTS.Description}}>{Email: ${ticket.email}}</p> */}
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-[#ca406f] hover:text-[#a2355a]">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                 <DropdownMenuItem
    className="bg-[#ca406f] text-white hover:bg-[#b4385d] focus:bg-[#b4385d] focus:text-white"
  onClick={() => navigate("/chat-page")} >
    Resolved
  </DropdownMenuItem>
                  
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            
            <p className="mt-4 text-sm text-gray-700 font-medium"style={{...FONTS.card_head}}>
              {ticket.message}
            </p>

          
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500"style={{...FONTS.text}}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {ticket.date}
              </div>
              <div className="flex items-center gap-2"style={{...FONTS.text}}>
                <ClockIcon  className="w-4 h-4" />
                {ticket.time}
              </div>
            </div>

           
            <div className="mt-6">
              <Button
                className={cn(
                  "text-white rounded-md shadow px-4 py-1 flex gap-2 items-center text-sm",
                  getPriorityClass(ticket.priority)
                )}style={{...FONTS.Buttons}}
              >
                <img src={buttonicon}/>
                Priority: {ticket.priority}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StaffTicket;