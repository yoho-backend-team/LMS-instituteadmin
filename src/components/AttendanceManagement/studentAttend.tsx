import roundedimg from '../../assets/Frame 427321452.png';
import roundedblock from '../../assets/Frame 427321451.png'
import AttendanceManage from '../../assets/Attendence management.png';
import Time from '../../assets/Time.png'
import studentattendance from '../../assets/Mask group.png'
import Cancel from '../../assets/Cancel.png'
import React, { useState } from "react";
import CourseDetails from './viewattendance';
import bg from "../../../src/assets/Backdrop Image.png";


function StudentAttendance() {
  const [showFilter, setShowFilter] = useState(false);


  const [showCourseDetails, setShowCourseDetails] = useState(false);

  if (showCourseDetails) {
    return <CourseDetails />;
  }


  return (

    <div className="p-6  min-h-screen bg-cover bg-no-repeat bg-center"    style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-[#ca406f] text-white px-4 py-3 rounded-md flex justify-between items-center shadow-md">
        <h1 className="font-semibold text-lg flex items-center gap-2">
            <img src={studentattendance}/>
          STUDENT ATTENDANCE
        </h1>
<button
  className="bg-white text-green-500 px-4 py-1 rounded-md shadow hover:bg-white flex items-center justify-center"
  onClick={() => setShowFilter(!showFilter)}
>
  {showFilter ? (
    <img src={Cancel} className="h-6" alt="cancel" />
  ) : (
    "GO"
  )}
</button>
      </div>

{showFilter && (
  <div className="mt-4 bg-white p-4 rounded-lg shadow-md flex flex-col gap-3">
  
    <label className="text-sm font-medium">Batches</label>
    <div className="flex">
       
      <div>
      <select className="border p-2  rounded-md w-[650px]">
        <option>Select Batch</option>
        <option>Batch 1</option>
        <option>Batch 2</option>
      </select>
</div>
<div>
      <input
        type="text"
        className="border p-2 rounded-md ml-2 w-[630px]"
        placeholder="Search"
      />
      </div>
    </div>

  </div>


)}
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-700">
            Where Begins The Web History Class
          </h3>

          <div className="flex items-center gap-2 mt-3">
              <img src={roundedimg} className='w-34 h-18'/>
            <span className="ml-auto text-gray-500">2 Students</span>
          </div>

<div className="flex items-center justify-center gap-20 mt-3 mr-26 text-gray-500 text-sm w-full">
  <span className="flex  gap-1">
    <img src={AttendanceManage} className="w-4 h-4" alt="attendance" />
    5-7-2025
  </span>
  <span  className="flex  gap-1">
    <img src={Time} className="w-4 h-4" alt="Time" />
    9:00 AM</span>
  <span  className="flex  gap-1">
    <img src={Time} className="w-4 h-4" alt="Time" />
    6:00 AM</span>
</div>

<div>
          <button className=" -mr-26  mt-4  bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 ml-60" onClick={() => setShowCourseDetails(true)}>
            View Attendance
          </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-700">
            The Path Of MERN Stack Class
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <img src={roundedimg} className='w-34 h-18'/>
            <span className="ml-auto text-gray-500">2 Students</span>
          </div>


          <div className="flex items-center justify-center gap-20 mt-3 mr-26 text-gray-500 text-sm w-full">
  <span className="flex  gap-1">
    <img src={AttendanceManage} className="w-4 h-4 " alt="attendance" />
    5-7-2025
  </span>
  <span  className="flex  gap-1">
    <img src={Time} className="w-4 h-4" alt="Time" />
    9:00 AM</span>
  <span  className="flex  gap-1">
    <img src={Time} className="w-4 h-4" alt="Time" />
    6:00 AM</span>
</div>


          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 ml-60" onClick={() => setShowCourseDetails(true)}>
            View Attendance
          </button>
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-700">MERN Class</h3>

          <div className="flex items-center gap-2 mt-3">
            <img src={roundedblock} className='w-20 h-16'/>
            <span className="ml-auto text-gray-500">1 Student</span>
          </div>

          <div className="flex items-center justify-center gap-20 mt-3 mr-26 text-gray-500 text-sm w-full">
  <span className="flex  gap-1">
    <img src={AttendanceManage} className="w-4 h-4" alt="attendance" />
    5-7-2025
  </span>
  <span  className="flex  gap-1">
    <img src={Time} className="w-4 h-4" alt="Time" />
    9:00 AM</span>
  <span  className="flex  gap-1">
    <img src={Time} className="w-4 h-4" alt="Time" />
    6:00 AM</span>
</div>

          <button className="mt-4 bg-green-500 text-white ml-60 px-4 py-2 rounded-md shadow hover:bg-green-600"   onClick={() => setShowCourseDetails(true)}>
            View Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentAttendance;

