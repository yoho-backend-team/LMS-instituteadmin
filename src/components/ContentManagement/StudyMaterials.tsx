import React, { useState } from "react";
import { Filter, MoreVertical, Bell } from "lucide-react";
import bgImage from "../../assets/bg.png";
import img1 from '../../assets/nav/img1.png'
import img2 from '../../assets/nav/img2.png'
import img3 from '../../assets/nav/img3.png'
import img4 from '../../assets/nav/img4.png'
import img5 from '../../assets/nav/img5.png'
import img6 from '../../assets/nav/img6.png'
import img7 from '../../assets/nav/img7.png'
import img8 from '../../assets/nav/img8.png'
import img9 from '../../assets/nav/img9.png'
import img10 from '../../assets/nav/img10.png'
import img11 from '../../assets/nav/img11.png'
import img12 from '../../assets/nav/img12.png'
import profile from '../../assets/nav/profile.png'
import StudyFilter from "../ContentManagement/StudyFilter";
import StudyMaterialDrawer from './StudyCard';

const StudyMaterials: React.FC = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div
      className="h-screen w-screen flex bg-[#fce4ec] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar */}
      <aside className="w-16 md:w-20 lg:w-24 bg-gradient-to-b from-pink-300 via-white to-pink-200 p-2 flex flex-col items-center space-y-4 shadow-lg">
        {/* Example sidebar icons */}
        <img src={img1} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img2} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img3} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img4} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img5} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img6} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img7} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img8} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img9} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img10} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img11} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
        <img src={img12} alt="Sidebar Logo" className="w-10 h-10 rounded-full" />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 px-6 py-4 flex items-center bg-gradient-to-r from-pink-200 via-white to-pink-200 shadow">
          <div className="flex items-center gap-4 ml-auto">
            {/* Notification Bell */}
            <div className="w-10 h-10 rounded-full bg-[#0400FF] flex items-center justify-center relative">
              <Bell size={18} className="text-white" />
            </div>

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white shadow">
              <img
                src={profile}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content*/}
        <h1 className="text-xl font-semibold mt-4 ml-5 text-gray-700">Study Materials</h1>
        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            {/* Filter button */}
            {showFilter && <StudyFilter />}


            {/* Add Button */}
            <button onClick={() => setShowDrawer(true)}
              className="bg-[#d81b60] hover:bg-[#c2185b] text-white px-5 py-2.5 rounded-md shadow-md">
              + Add Study Material
            </button>
            {showDrawer && <StudyMaterialDrawer onClose={() => setShowDrawer(false)} />}
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
                  <span className="text-xl">📘</span>
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
