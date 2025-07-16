import React from "react";
import { Filter, MoreVertical } from "lucide-react";
import bgImage from '../../assets/bg.png';


const StudyMaterials: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-[#fce4ec] relative overflow-hidden"
    style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="relative z-10 flex justify-between items-start p-6 h-full">
        {/* Left Sidebar */}
        <div className="space-y-4">
          {/* Filter Button */}
          <button className="flex items-center gap-2 bg-[#d81b60] text-white px-4 py-2 rounded-md shadow hover:bg-[#c2185b]">
            <Filter size={16} />
            Filter
          </button>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg w-80 p-4">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-800 flex items-center gap-2">
                <span className="text-gray-500">📄</span>
                RVR
              </span>
              <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
            </div>

            <hr className="my-2" />

            {/* Card Item */}
            <div className="flex flex-col gap-2">
              <span className="text-gray-700 flex items-center gap-2">
                <span className="text-xl">📘</span>
                Manual Testing Basic
              </span>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">Active</span>
                {/* Switch on and off */}
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-checked:bg-green-500 rounded-full peer relative">
                    <div className="absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Add Button */}
        <button className="bg-[#d81b60] hover:bg-[#c2185b] text-white px-5 py-2.5 rounded-md shadow-md">
          + Add Study Material
        </button>
      </div>
    </div>
  );
};

export default StudyMaterials;