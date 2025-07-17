import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import bgImage from "../../assets/bgg.png";
import StudyFilter from "../ContentManagement/StudyFilter";
import StudyCard from './StudyCard';

const StudyMaterials: React.FC = () => {
  const [showFilter] = useState(true);
  const [showCard, setCard] = useState(false);

  return (
    <div
      className="h-screen w-screen flex bg-[#fce4ec] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex-1 flex flex-col mt-5 ml-5">
        {/* Content*/}
        <h1 className="text-xl font-semibold mt-4 ml-5 text-[#716F6F]">Study Materials</h1>
        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            {/* Filter button */}
            {showFilter && <StudyFilter />}


            {/* Add Button */}
            <button onClick={() => setCard(true)}
              className="bg-[#d81b60] hover:bg-[#c2185b] text-white px-5 py-2.5 rounded-md shadow-md">
              + Add Study Material
            </button>
            {showCard && <StudyCard onClose={() => setCard(false)} />}
          </div>


          <div className="flex flex-wrap gap-6">
            <div className="bg-white rounded-xl shadow-lg w-80 p-4">
              {/* Card header */}
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800 flex items-center gap-2">
                  <span className="text-gray-500">📄</span>
                  RVR
                </span>
                <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
              </div>

              <hr className="my-2" />

              {/* Card body */}
              <div className="flex flex-col gap-2">
                <span className="text-gray-700 flex items-center gap-2">
                  <span className="text-xl text-[#7D7D7D]">📘</span>
                  Manual Testing Basic
                </span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-green-600 font-medium">Active</span>
                  {/* Toggle on and off */}
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 peer-checked:bg-green-500 rounded-full relative">
                      <div className="absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                    </div>
                  </label>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyMaterials;
