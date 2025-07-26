
import React, { useState } from "react";
import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import docImage from "../../../assets/doc.png";
import capImage from "../../../assets/cap.png";
import filterImage from "../../../assets/filter.png";
import AddStudyMaterial from "@/components/ContentManagement/AddStudyMaterial";
import StudyCard from "@/components/ContentManagement/StudyCard";

interface Material {
  id: number;
  title: string;
  course: string;
  description: string;
  isActive: boolean;
}

const StudyMaterials: React.FC = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);

  const [materials, setMaterials] = useState<Material[]>([
    {
      id: 1,
      title: "RVR",
      course: "Manual Testing Basic",
      description: "Tvttb",
      isActive: true,
    },
  ]);

  const handleAddMaterial = (newMaterial: Omit<Material, "id">) => {
    setMaterials((prev) => [...prev, { ...newMaterial, id: Date.now() }]);
  };

  return (
    <div className="h-screen w-screen flex fixed">
      <main className="flex-1 flex flex-col mt-5 ml-5">
        <h1 className="text-xl font-semibold mt-4 ml-5 text-[#716F6F]">Study Materials</h1>

        <section className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-[#CA406F] text-white px-4 h-12 rounded-md shadow-md flex items-center gap-2"
            >
              <img src={filterImage} className="w-6" />
              {showFilter ? "Hide Filter" : "Show Filter"}
            </button>

            <button
              onClick={() => setShowAdd(true)}
              className="bg-[#CA406F] text-white px-5 py-2 ml-240 rounded-md shadow-md flex items-center gap-2"
            >
              <span className="text-3xl leading-none">+</span>
              <span className="text-base">Add Study Material</span>
            </button>
          </div>

          {showFilter && (
            <div className="bg-white shadow rounded-lg p-6 w-330 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-315">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Status</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                    <option>Select Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Course</label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                    <option>Select Course</option>
                    <option>Manual Testing</option>
                    <option>Automation</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {materials.map((material) => (
              <div key={material.id} className="bg-white w-80 rounded-xl shadow-md p-4 space-y-2 relative border border-gray-200">
                <div className="absolute top-3 right-3">
                  <button onClick={() => setMenuOpen(menuOpen === material.id ? null : material.id)}>
                    <MoreVertical className="w-5 h-5 text-[#CA406F] cursor-pointer" />
                  </button>
                  {menuOpen === material.id && (
                    <div className="absolute top-0 left-full ml-2 w-36 bg-white rounded-lg shadow-lg z-10 p-2">
                      <button
                        onClick={() => {
                          navigate("/studymaterial/view");
                          setMenuOpen(null);
                        }}
                        className="w-full flex items-center gap-2 border hover:bg-[#CA406F] hover:text-white border-gray-300 text-gray-700 px-3 py-2 mt-2 rounded-md text-sm"
                      >
                        <Eye size={16} /> View
                      </button>
                      <button
                        onClick={() => {
                          setEditingMaterial(material);
                          setShowAdd(false);
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

                <div className="flex justify-between items-center bg-[#F5F5F5] rounded-md mt-8 px-3 py-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <img src={docImage} className="w-5" />
                    {material.title}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium mt-5 text-gray-700">
                  <img src={capImage} className="w-5 ml-3" />
                  {material.course}
                </div>

                <div className="flex justify-between items-center px-2 pt-2">
                  {/* Left side: Status and dot */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-medium text-sm capitalize ${material.isActive ? "text-[#3ABE65]" : "text-gray-400"
                        }`}
                    >
                      {material.isActive ? "Active" : "Inactive"}
                    </span>
                    <span
                      className={`w-[16px] h-[16px] rounded-full ${material.isActive ? "bg-[#3ABE65]" : "bg-gray-400"
                        }`}
                    />
                  </div>

                  {/* Right side: Toggle switch */}
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={material.isActive}
                      onChange={() => {
                        setMaterials((prev) =>
                          prev.map((mat) =>
                            mat.id === material.id ? { ...mat, isActive: !mat.isActive } : mat
                          )
                        );
                      }}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 rounded-full relative transition-colors peer-checked:bg-green-500">
                      <div
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${material.isActive ? "translate-x-4" : ""
                          }`}
                      />
                    </div>
                  </label>
                </div>

              </div>
            ))}
          </div>
        </section>
      </main>

      {showAdd && (
        <AddStudyMaterial
          onClose={() => setShowAdd(false)}
          onSubmit={handleAddMaterial}
        />
      )}

      {editingMaterial && (
        <StudyCard
          material={editingMaterial}
          onClose={() => setEditingMaterial(null)}
          onSubmit={(updated) => {
            setMaterials((prev) =>
              prev.map((mat) => (mat.id === updated.id ? updated : mat))
            );
            setEditingMaterial(null);
          }}
        />
      )}
    </div>
  );
};

export default StudyMaterials;
