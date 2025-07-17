import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import TotalEarnings from "../assets/TotalEarningsicon.png";
import Instructor from "../assets/Instructoricon.png";
import Project from "../assets/Projects.png";
import DbChart from "../components/Dashboard/DbChart";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import StatsCarousal from "@/components/Dashboard/StatsCarousel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Filters */}
        <div className="flex gap-20">
          <input
            type="text"
            placeholder="Branch"
            className="bg-white/80 border border-[#CA406F] rounded-lg px-4 py-2 w-full max-w-sm"
          />
          {/* <select className="bg-[#CA406F] text-white rounded-lg px-4 py-2">
            <option value="period">Choose Period</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select> */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="border border-gray-300 px-4 py-2 rounded-md font-semibold text-sm bg-[#CA406F] text-[#FFFFFF] shadow-sm">
                  Choose Period
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white opacity-90 rounded-xl shadow-2xl w-64 p-4 space-y-4 z-50">
                {/* Month Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Month
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>

                {/* Year Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </select>
                </div>

                {/* Apply Button */}
                <button className="w-full bg-[#ca406f] hover:bg-[#b2355e] text-white font-semibold text-sm rounded-md py-3 transition-all duration-150">
                  Apply
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-40 ml-auto">
            <span className="text-lg font-bold text-[#CA406F]">
              Popular Course
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className=" border border-gray-300 text-[#FFFFFF] text-sm font-medium rounded-md  text-left bg-[#CA406F] h-10 w-30 px-6 ">
                  Treanding
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white/90 rounded-lg shadow-lg w-[250px] p-2 space-y-2 z-50">
                <DropdownMenuItem className=" border border-gray-300 text-[#716F6F] font-medium text-sm rounded-md px-4 py-2 flex items-center cursor-pointer  hover:bg-[#ca406f] hover:text-white">
                  Price – Low to High
                </DropdownMenuItem>

                <DropdownMenuItem className="border border-gray-300 text-[#716F6F] font-medium text-sm rounded-md px-4 py-2 flex items-center cursor-pointer transition-colors hover:bg-[#ca406f] hover:text-white">
                  Price – High to Low
                </DropdownMenuItem>

                <DropdownMenuItem className=" border border-gray-300 text-[#716F6F] font-medium text-sm rounded-md px-4 py-2 flex items-center cursor-pointer transition-colors hover:bg-[#ca406f] hover:text-white ">
                  Trending
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* stats */}
            <StatsCarousal/>
          {/* Courses */}
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="group text-[#716F6F] bg-white p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r from-[#BF4B94] to-[#F798D3] hover:text-white"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-[#CA406F] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm group-hover:text-white transition-all duration-300">
                      MEAN STACK 2024
                    </h3>
                    <p className="text-xs opacity-80 mt-1 group-hover:text-white transition-all duration-300">
                      The MEAN stack is a collection of JavaScript-based
                      technologies for building...
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-[#1A846C] border border-[#1A846C] bg-white/20 rounded-full transition-all duration-300 group-hover:text-white group-hover:border-white group-hover:bg-white/30">
                      1 Modules
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DbChart />
          </div>
          <div className="p-6 rounded-2xl mb-10">
            <h3 className="text-lg font-semibold text-[#CA406F] mb-4">
              Recent Activities
            </h3>
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 mb-3 bg-white p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br from-[#BF4B94] to-[#F798D3] hover:text-white"
              >
                <div className="w-8 h-8 bg-[#CA406F] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white" />
                <div className="flex-1">
                  <p className="font-medium text-sm text-[#716F6F] group-hover:text-white transition-colors duration-300">
                    Notes Created
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-white transition-colors duration-300">
                    1 Create | Hema - Study Material Created
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
