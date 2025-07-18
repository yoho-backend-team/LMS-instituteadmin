import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import call from "../../assets/call.png";
import email from "../../assets/mail.png";
import flower from "../../assets/flower.png"
import location from "../../assets/location.png"

const batchData = [
  {
    name: "MEAN STACK 2024",
    duration: "6 Month",
    startDate: "April 2, 2025",
    endDate: "April 3, 2025",
  },
  {
    name: "MEAN STACK 2024",
    duration: "3 Month",
    startDate: "April 3, 2025",
    endDate: "April 4, 2025",
  },
  {
    name: "MEAN STACK 2024",
    duration: "2 Month",
    startDate: "April 4, 2025",
    endDate: "April 5, 2025",
  },
  {
    name: "MEAN STACK 2024",
    duration: "8 Month",
    startDate: "April 5, 2025",
    endDate: "April 6, 2025",
  },
];

const students = [
  {
    name: "Elon Musk",
    email: "elonmusk@gmail.com",
    phone: "+91 9876456783",
    location: "Boca Chica, Undefined",
    id: 54,
    img: "https://i.pravatar.cc/100?u=elon",
  },
  {
    name: "John",
    email: "johnronaldo@gmail.com",
    phone: "+91 9876456543",
    location: "Boca Chica, Chennai",
    id: 76,
    img: "https://i.pravatar.cc/100?u=john",
  },
];

export default function StudentDashboardMain() {
  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">MEAN 2025</h2>


      <Card className="p-6 bg-white shadow-lg rounded-xl mb-8 space-y-4">
  
  <Card className="p-4 bg-white shadow-sm rounded-xl">
    <div className="grid grid-cols-3 text-sm font-semibold text-gray-500">
      <span>Course Name</span>
      <span>Duration</span>
      <span className="ml-75">Days</span>
    </div>
  </Card>


  <div className="space-y-4">
    {batchData.map((batch, i) => (
      <Card
        key={i}
        className="p-4 bg-white shadow-sm rounded-xl flex flex-row items-center justify-between"
      >
        <div className="text-sm font-medium text-gray-800 w-1/3">
          {batch.name}
        </div>
        <div className="text-sm text-gray-600 w-1/3">{batch.duration}</div>
        <div className="flex items-center gap-2 justify-end w-1/3">
          <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {batch.startDate}
          </div>
         <div className="flex items-center justify-center w-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D43C80] rounded-full -translate-y-1/2" />
            <div className="absolute w-2 h-2 bg-[#D43C80] rounded-full left-0 -translate-y-1/2 top-1/2" />
            <div className="absolute w-2 h-2 bg-[#D43C80] rounded-full right-0 -translate-y-1/2 top-1/2" />
          </div>
          <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {batch.endDate}
          </div>
        </div>
      </Card>
    ))}
  </div>
</Card>

       

     
      <div className="relative max-w-md mb-6">
        <Input
          type="text"
          placeholder="Search Student"
          className="border border-pink-400 pl-10 rounded-md"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-500" />
      </div>

    
     <div className="space-y-4">
  {students.map((student, i) => (
    <Card
      key={i}
      className="p-4 rounded-2xl bg-white shadow-md flex flex-row items-center justify-between"
    >
     
      <div className="flex items-center gap-4">
        <img
          src={flower}
          alt={student.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800 text-base">{student.name}</h4>
          <p className="text-xs text-gray-500">Student ID : {student.id}</p>
        </div>
      </div>

      
      <div className="flex items-center gap-50 mr-60 text-sm text-gray-700">
        <div className="flex items-center gap-2 ">
          <img src={email} alt="email" className="w-4 h-4" />
          <span className="font-medium text-gray-600">{student.email}</span>
        </div>
        <div className="flex items-center ml-0  gap-2">
          <img src={call} alt="call" className="w-4 h-4" />
          <span className="font-medium text-gray-600">{student.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={location} alt="location" className="w-4 h-4" />
          <span className="font-medium text-gray-600">{student.location}</span>
        </div>
      </div>
    </Card>
  ))}
</div>

    </div>
  );
}
