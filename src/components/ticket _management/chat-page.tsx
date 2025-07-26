import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon } from "lucide-react";
import human from "../../assets/Frame 6135.png"
import chattheme from "../../assets/WhatsApp Image 2025-07-22 at 11.03.34_96cf8c1d.jpg";
import cancel from "../../assets/greencancel.png"
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ChatPage() {
     const navigate = useNavigate(); 
  return (
    <div className="min-h-screen p-4">
        <Button className="bg-white text-[#ca406f] hover:bg-gray-100 px-4 py-1 text-sm font-bold"  onClick={() => navigate("/Staffticket")} >
          <ArrowLeft /> BACK
        </Button>
      <h2 className="text-lg font-semibold">STAFF TICKET</h2>
    
      <div className="flex justify-between mt-5 items-center bg-[#ca406f] text-white font-semibold px-6 py-3 rounded-xl">
        <span>TICKET ID : #2345678</span>
        <span>RAISED DATE & TIME : APR 28, 2025, 4:14 PM</span>
        <Button className="bg-white text-[#23a45d] hover:bg-gray-100 px-4 py-1 text-sm font-bold"  onClick={() => navigate("/closed-ticket")} >
          <img src={cancel}/> CLOSE TICKET
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-4 flex flex-col max-h-[75vh]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#ca406f]" />
            <div>
              <p className="font-semibold text-gray-800">Oliver Smith</p>
              <p className="text-green-500 text-sm">Active Now</p>
            </div>
          </div>

         
          <div
            className="flex flex-col gap-3 flex-1 overflow-y-auto rounded-lg p-4"
            style={{ backgroundImage:` url(${chattheme})`, backgroundSize: "cover" }}
          >
           
            <div className="flex items-start gap-2">
              <div className="w-14 h-12 rounded-full flex items-center justify-center text-md">
                <img src={human} />
              </div>
              <div>
                <div className="bg-blue-100 text-gray-800 p-2 rounded-lg max-w-xs">
                  Hi there, How are you?
                </div>
                <span className="text-xs text-gray-500 mt-1 block">12:24 PM</span>
              </div>
            </div>

          
            <div className="flex items-start gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-md">
                <img src={human}/>
              </div>
              <div>
                <div className="bg-blue-100 text-gray-800 p-2 rounded-lg max-w-xs">
                  Waiting for your reply. As I have to go back soon. I have to travel long distance.
                </div>
                <span className="text-xs text-gray-500 mt-1 block">12:25 PM</span>
              </div>
            </div>

           
            <div className="flex justify-end items-start gap-2">
              <div className="flex flex-col items-end">
                <div className="bg-[#ca406f] text-white p-2 rounded-lg max-w-xs">
                  Hi, I am coming there in few minutes. Please wait! I am in taxi right now.
                </div>
                <span className="text-xs text-gray-500 mt-1 block">12:26 PM</span>
              </div>
             <div className="w-12 h-12 rounded-full flex items-center justify-center text-md">
                <img src={human}/>
              </div>
            </div>

          
            <div className="flex items-start gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-md">
                <img src={human}/>
              </div>
              <div>
                <div className="bg-blue-100 text-gray-800 p-2 rounded-lg max-w-xs">
                  Thank you very much, I am waiting here at StarBuck cafe.
                </div>
                <span className="text-xs text-gray-500 mt-1 block">12:35 PM</span>
              </div>
            </div>

            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="border-[#ca406f] text-[#ca406f]">
                Solved
              </Button>
              <Button className="bg-[#ca406f] text-white hover:bg-[#b2345c]">
                Not Related
              </Button>
            </div>
          </div>

         
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded-md p-2 text-sm outline-none"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
              ➤
            </Button>
          </div>
        </div>

       
        <div className="bg-white shadow rounded-xl p-4 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700  mb-5">Issue Description:</h4>
            <p className="text-sm text-gray-600">
              If You Can This Yes Successfully Mobile App On Android
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700  mb-5">Issue Category:</h4>
            <p className="text-sm text-gray-600">Feedback</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700  mb-5">Attachments:</h4>
            <p className="text-sm text-blue-600 underline cursor-pointer">
              2bf39530-F04d-4e22-A5ea-2be943f28e9e.jpeg
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-gray-700">Status:</h4>
            <span className="bg-[#ca406f] text-white px-4 py-2  rounded-md text-sm font-semibold">
              Opened
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}