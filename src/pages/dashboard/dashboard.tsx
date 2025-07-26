import DbChart from "../../components/Dashboard/DbChart";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import StatsCarousal from "@/components/Dashboard/StatsCarousel";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef } from "react";

export default function Dashboard() {
  const dummyCourses = [
    {
      title: "MEAN STACK 2024",
      description:
        "The MEAN stack is a collection of JavaScript-based technologies for building...",
      modules: 1,
    },
    {
      title: "Full Stack Development",
      description:
        "Learn both frontend and backend technologies including React, Node.js, and MongoDB.",
      modules: 5,
    },
    {
      title: "Data Science Bootcamp",
      description:
        "A comprehensive program covering Python, machine learning, and AI concepts.",
      modules: 8,
    },
  ];

  const dummyActivities = [
    {
      action: "Notes Created",
      details: "1 Create | Hema - Study Material Created",
    },
    {
      action: "Assignment Submitted",
      details: "2 Submit | John - Module 3 Assignment Submitted",
    },
    {
      action: "Quiz Completed",
      details: "1 Complete | Lisa - JavaScript Quiz Completed",
    },
    {
      action: "Watched Tutorial",
      details: "Advanced JavaScript Concepts - 4 days ago",
    },
    {
      action: "Completed Quiz",
      details: "Node.js Basics Assessment - 5 days ago",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const courseScrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 200, behavior: "smooth" });
    }
  };

  const handleCourseScrollDown = () => {
    if (courseScrollRef.current) {
      courseScrollRef.current.scrollBy({ top: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="h-full p-4 sm:p-6 w-full">
      <div className=" mx-auto space-y-6">
        {/* Filters */}
        <div className="flex items-center w-full justify-between gap-7">
          <div className="flex justify-between flex-1">
           <div className="">
             <input
            type="text"
            placeholder="Branch"
            className="bg-white/80 border border-[#CA406F] rounded-lg px-4 py-2 w-80 max-w-sm"
          />
           </div>
          <div className="mr-[15%]">
            <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="border border-gray-300 px-4 py-2 rounded-md font-semibold text-sm bg-[#CA406F] text-white shadow-sm">
                Choose Period
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white opacity-90 rounded-xl shadow-2xl w-64 p-4 space-y-4 z-50">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
                  {["2024", "2025", "2026"].map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
              <button className="w-full bg-[#ca406f] hover:bg-[#b2355e] text-white font-semibold text-sm rounded-md py-3 transition-all duration-150">
                Apply
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          </div>

          <div className="flex gap-30 justify-between ml-auto items-center">
            <span className="text-lg font-bold text-[#CA406F]">
              Popular Course
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="border border-gray-300 text-white text-sm font-medium rounded-md bg-[#CA406F] h-10 w-32 px-6  mr-2">
                  Trending
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white/90 rounded-lg shadow-lg w-[250px] p-2 space-y-2 z-50">
                {["Price – Low to High", "Price – High to Low", "Trending"].map(
                  (label) => (
                    <DropdownMenuItem
                      key={label}
                      className="!bg-transparent hover:!bg-[#CA406F] border border-[#716F6F] text-[#716F6F] hover:!text-white font-medium text-sm rounded-md px-4 py-2 flex items-center cursor-pointer transition-colors duration-200"
                    >
                      {label}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Stats + Courses */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full">
            <StatsCarousal />
          </div>
          <div className="w-full max-w-md lg:max-w-lg">
            <div
              ref={courseScrollRef}
              className="space-y-4 max-h-[267px] overflow-y-scroll scrollbar-hide p-2"
            >
              {dummyCourses.map((course, i) => (
                <div
                  key={i}
                  className="group text-[#716F6F] bg-white p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r from-[#BF4B94] to-[#F798D3] hover:text-white shadow-lg"
                >
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 bg-[#CA406F] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm group-hover:text-white transition-all duration-300">
                        {course.title}
                      </h3>
                      <p className="text-xs opacity-80 mt-1 group-hover:text-white transition-all duration-300">
                        {course.description}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-[#1A846C] border border-[#1A846C] bg-white/20 rounded-full transition-all duration-300 group-hover:text-white group-hover:border-white group-hover:bg-white/30">
                        {course.modules} Modules
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="text-2xl flex justify-center text-gray-500 cursor-pointer hover:text-[#CA406F] transition-colors duration-300 mt-2"
              onClick={handleCourseScrollDown}
            >
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>

        {/* Chart + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 mt-6">
            <DbChart />
          </div>
          <div className="p-3 mt-3 ">
            <h3 className="text-xl font-bold text-[#CA406F] mb-3">
              Recent Activities
            </h3>
            <div
              ref={scrollRef}
              className="max-h-[300px] overflow-y-scroll space-y-3 scrollbar-hide"
            >
              {dummyActivities.map((activity, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 bg-white p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br from-[#BF4B94] to-[#F798D3] hover:text-white px-6 py-6 shadow-lg"
                >
                  <div className="w-9 h-9 bg-[#CA406F] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white" />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-[#716F6F] group-hover:text-white transition-colors duration-300">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-white transition-colors duration-300">
                      {activity.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="text-2xl flex justify-center text-gray-500 cursor-pointer hover:text-[#CA406F] transition-colors duration-300 mt-2"
              onClick={handleScrollDown}
            >
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
