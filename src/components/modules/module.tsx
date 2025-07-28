import React, { useState } from "react";
import bg from "../../../src/assets/Backdrop Image.png";
import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";
import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,} from "@/components/ui/dropdown-menu";
import StatusCourseFilter from "./dropdown-modules";
import AddNotes from "./AddNotes"; 
import EditModules from "./EditModules";
import ViewModule from "./viewmodules";
import filter from '../../assets/Filter.png'
import pdfimage from '../../assets/pdf.png'
import {FONTS} from '../../constants/uiConstants'
import headcap from '../../assets/headcap.png'

function NotesUI() {
  const [isActive, setIsActive] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [openAddNotes, setOpenAddNotes] = useState(false);
const [openEditModules, setOpenEditModules] = useState(false);
const [openView, setOpenView] = useState(false);
const [selectedModule, setSelectedModule] = useState<any>(null);


  return (
    <div
      className="min-h-screen px-8 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="top-8">
        <h1 className="text-xl font-semibold text-gray-700" style={FONTS.heading_01}>Modules</h1>
      </div>

      <div className="flex justify-between mt-5">
        <button
  onClick={() => setShowFilter(!showFilter)}
  className="bg-[#ca406f] text-white px-4 py-2  rounded-md mt-1 shadow hover:bg-[#b23561] flex items-center justify-center gap-2 " style={FONTS.add_button}
>
  <img src={filter} className="w-4 h-4" alt="filter" />
  {showFilter ? "Hide Filter" : "Show Filter"}
</button>


        <button
          onClick={() => setOpenAddNotes(true)}
          className="bg-[#ca406f] text-white px-4 py-2  rounded-md  shadow hover:bg-[#b23561] flex items-center justify-center mr-4 gap-2" style={FONTS.add_button}
        >
          + Add Notes
        </button>
      </div>

    
      {showFilter && (
        <div className="p-4">
          <StatusCourseFilter />
        </div>
      )}

    
      <div className="pt-10">
        <div className="bg-white rounded-xl shadow-md p-4 w-72 relative">
        
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button
      className="absolute top-2 right-2 bg-white backdrop-blur-md rounded-md p-1 hover:bg-white shadow-md z-10"
      aria-label="More options"
    >
      <MoreVertical className="w-5 h-5 text-[#ca406f]" />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-[120px] p-2 z-20 space-y-2">
    
    <DropdownMenuItem
      onClick={() => {
        setSelectedModule({
          title: "Mern",
          courseName: "MEAN STACK 2024",
          description: "Mern Tech",
          status: "Active",
          image: "",
        });
        setOpenView(true);
      }}
      className="border border-gray-300 text-black font-semibold text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer 
                 hover:bg-pink-500 hover:text-white transition-colors duration-200"
    >
      <Eye className="w-4 h-4" />
      <span>View</span>
    </DropdownMenuItem>

    
    <DropdownMenuItem
      onClick={() => setOpenEditModules(true)}
      className="border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer 
                 hover:bg-[#CA406F] hover:text-white transition-colors duration-200"
    >
      <Pencil className="w-4 h-4" />
      <span>Edit</span>
    </DropdownMenuItem>

    {/* Delete */}
    <DropdownMenuItem
      className="border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer 
                 hover:bg-pink-500 hover:text-white transition-colors duration-200"
    >
      <Trash2 className="w-4 h-4" />
      <span>Delete</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        
          <div className="flex items-center gap-2 mt-2 ">
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
              <img src={pdfimage} className="w-4 h-4"/>
            </div>
            <span className="font-semibold text-gray-700" style={FONTS.card_head}>RVR</span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-gray-500">
            {/* <span className="text-lg"></span> */}
            <div><img src={headcap}/></div>
            <span style={FONTS.card_head}> Manual Testing Basic</span>
          </div>

          
          <div className="flex justify-between items-center mt-4">
            <span className="text-green-600 font-medium">Active</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      </div>

      
      <AddNotes open={openAddNotes} onClose={setOpenAddNotes} />
      <EditModules open={openEditModules} onClose={setOpenEditModules} />
<ViewModule  open={openView} onClose={setOpenView} moduleData={selectedModule}
/>

    </div>
  );
}

export default NotesUI;
