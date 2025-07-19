import React,{useState} from "react";
import CourseIcon from "../../assets/profileion1.png";
import BatchIcon from "../../assets/Frame 5825blue.png";
import DurationIcon from "../../assets/Profileion1.png";
import DateIcon from "../../assets/Frame 5825green.png";
import bg from "../../../src/assets/Backdrop Image.png";
import backarrow from "../../assets/Mask grouparrow.png"
import StudentAttendance from "./studentAttend";
import { MoreVertical } from "lucide-react";


function CourseDetails() {
   const [showStudentAttendance, setshowStudentAttendance] = useState(false);

    if (showStudentAttendance) {
      return <StudentAttendance />;
    }
  return (
    <div className="p-4  bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }} >
    <div className="bg-[#ca406f] text-white px-4 py-3 mb-10 rounded-md flex justify-between items-center shadow-md">
        <h1 className="font-semibold text-lg flex items-center gap-2">
            <button onClick={() => setshowStudentAttendance(true)}><img src={backarrow} /></button>
          Where Begins The Web History Class
        </h1>
        </div>      
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hidden">
       <div className="bg-[#1996E3] text-white rounded-xl p-4 h-[200px] min-w-[300px] shadow-md">
          <div className="flex items-center gap-2">
            <img src={CourseIcon} alt="Course"/>
            <p className="text-lg font-medium">Course</p>
          </div>
          <h2 className="text-lg font-bold mt-2">MERN STACK 2025</h2>
        </div>

  
        <div className="bg-[#8519E3] text-white rounded-xl p-4  h-[200px] min-w-[300px] shadow-md">
          <div className="flex items-center gap-2">
            <img src={BatchIcon} alt="Batch"  />
            <p className="text-lg font-medium">Batch</p>
          </div>
          <h2 className="text-lg font-bold mt-2">13</h2>
        </div>

        
        <div className="bg-[#E37119] text-white rounded-xl p-4  h-[200px] min-w-[300px] shadow-md">
          <div className="flex items-center gap-2">
            <img src={DurationIcon} alt="Duration" />
            <p className="text-lg font-medium">Duration</p>
          </div>
          <h2 className="text-lg font-bold mt-2">6 Month</h2>
        </div>

        <div className="bg-[#19E35C] text-white rounded-xl p-4 min-w-[300px] shadow-md">
          <div className="flex items-center gap-2">
            <img src={DateIcon} alt="Start Date"  />
            <p className="text-lg font-medium">Start Date</p>
          </div>
          <h2 className="text-lg font-bold mt-2">2025-05-12</h2>
        </div>
      </div>

      
      <h2 className="mt-6 text-gray-700 text-lg font-semibold">
        Attendance Report
      </h2>

      <div className="mt-3 bg-white rounded-xl shadow p-4 w-72">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/50"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <p className="font-semibold text-gray-800">Elon Musk</p>
            <p className="text-sm text-gray-500">Email: Musk@Gmail.Com</p>
          </div>

          
           <button
      className=" top-2 right-2 bg-white backdrop-blur-md rounded-md p-1 hover:bg-white shadow-md z-10"
      aria-label="More options"
    >
      <MoreVertical className="w-5 h-5  text-[#ca406f]" />
    </button>


        </div>
        <p className="mt-2 text-red-500 font-bold text-center">ID : 46</p>

 <select
  className="mt-3 bg-[#ca406f] text-white px-4 py-2 rounded-md hover:bg-[#ca406f] ml-40 focus:outline-none"
  defaultValue="absent"
>
  <div className="w-50">
  <option value="absent" className="hover:bg-[#ca406f]  hover:bg-white ">Absent</option>
  <option value="present" className="hover:bg-[#ca406f]  hover:bg-white">Present</option>
  </div>
</select>
 



      </div>
    </div>
  );
}

export default CourseDetails;

