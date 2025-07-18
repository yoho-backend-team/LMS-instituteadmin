import React, { useState } from "react";
import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";
import bgImage from "../../assets/bgg.png";
import docImage from "../../assets/doc.png";
import capImage from "../../assets/cap.png";
import { useNavigate } from "react-router-dom";
import StudyFilter from "../ContentManagement/StudyFilter";
import StudyCard from "./StudyCard";
import AddStudyMaterial from "./AddStudyMaterial";


const StudyMaterials: React.FC = () => {
  const navigate = useNavigate();
  const [showFilter] = useState(true);
  const [showCard, setCard] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

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
        <h1 className="text-xl font-semibold mt-4 ml-5 text-[#716F6F]">
          Study Materials
        </h1>

        <section className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            {showFilter && <StudyFilter />}

            <button
              onClick={() => setShowAdd(true)}
              className="bg-[#CA406F] text-white px-5 py-2.5 rounded-md shadow-md"
            >
              + Add Study Material
            </button>

            {showAdd && <AddStudyMaterial onClose={() => setShowAdd(false)} />}
            {showCard && <StudyCard onClose={() => setCard(false)} />}


          </div>

          {/* Card with menu */}
          <div className="bg-white w-80 rounded-xl shadow-md p-4 space-y-2 relative">
            <div className="absolute top-3 right-3">
              <div className="relative">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <MoreVertical className="w-5 h-5 text-[#CA406F] cursor-pointer" />
                </button>

                {menuOpen && (
                  <div className="absolute top-0 left-full ml-2 w-36 bg-white rounded-lg shadow-lg z-10 p-2">
                    <button className="w-full flex items-center gap-2 border hover:bg-[#CA406F] hover:text-white border-gray-300 text-gray-700 px-3 py-2 mt-2 rounded-md text-sm"
                      onClick={() => {
                        navigate("/view");
                        setMenuOpen(false);
                      }}>
                      <Eye size={16} /> View
                    </button>

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setCard(true);
                      }}
                      className="w-full flex items-center gap-2 border hover:bg-[#CA406F] hover:text-white border-gray-300 text-gray-700 px-3 py-2 mt-2 rounded-md text-sm"
                    >
                      <Pencil size={16} /> Edit
                    </button>

                    <button className="w-full flex items-center gap-2 border hover:bg-[#CA406F] hover:text-white border-gray-300 text-gray-700 px-3 py-2 mt-2 rounded-md text-sm">
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Card content */}
            <div className="flex justify-between items-center bg-[#F5F5F5] rounded-md mt-8 px-3 py-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <img src={docImage}
                  className="w-5" />
                RVR
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium mt-5 text-gray-700">
              <img src={capImage}
                className="w-5 ml-3" />
              Manual Testing Basic
            </div>

            <div className="flex justify-between items-center px-2 pt-2">
              <div className="flex items-center gap-3">
                <span
                  className={`font-medium text-sm capitalize ${isActive ? "text-[#3ABE65]" : "text-gray-400"
                    }`}
                >
                  {isActive ? "Active" : "Inactive"}
                </span>
                <span
                  className={`w-[16px] h-[16px] rounded-full ${isActive ? "bg-[#3ABE65]" : "bg-gray-400"
                    }`}
                />
              </div>

              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => setIsActive((prev) => !prev)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-300 rounded-full relative transition-colors peer-checked:bg-green-500">
                  <div
                    className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${isActive ? "translate-x-4 left-0.5" : "left-0.5"
                      }`}
                  />
                </div>
              </label>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyMaterials;
