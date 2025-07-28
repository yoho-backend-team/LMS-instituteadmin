import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FONTS } from "@/constants/uiConstants";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Pencil, Trash2 } from "lucide-react";
import StatusCourseFilterfqa from "./fqa-drop-down";
import filter from '../../assets/Filter.png'
import AddFaqNotes from "./Addfaq-category";
import Editfaq from './editfaq'
import DeleteConfirmationModal from './deletefaq'
interface FAQItem {
  id: number;
  title: string;
  author: string;
  category:string;
  status: string;
}

const initialData: FAQItem[] = [
  { id: 1, title: "Chennai",category:"", author: "29/1,second floor chennai ", status: "Active" },
];

const Category = () => {
<<<<<<< HEAD
  const [search,] = useState("");
=======
  const [search, setSearch] = useState("");
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
   const [openAddNotes, setOpenAddNotes] = useState(false);
   const [showFilter, setShowFilter] = useState(false);
   const [openEditModules, setOpenEditModules] = useState(false);
   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
const [selectedItemId, setSelectedItemId] = useState<number | null>(null);


  const filteredData = initialData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const [statusMap, setStatusMap] = useState<{ [key: number]: string }>(
    Object.fromEntries(initialData.map((item) => [item.id, item.status]))
  );

    const handleStatusChange = (id: number, newStatus: string) => {
    setStatusMap((prev) => ({ ...prev, [id]: newStatus }));
  };
const handleDeleteConfirm = () => {
  console.log("Deleting Item ID:", selectedItemId);

};


  return (
    <div className="p-6 min-h-screen">
        <div style={{ ...FONTS.heading_01 }}>
            FAQ 
        </div>
  



   <div className="flex justify-between mt-5">
        <button
  onClick={() => setShowFilter(!showFilter)}
  className="bg-[#ca406f] text-white px-4 py-2  rounded-md mt-1 shadow hover:bg-[#b23561] flex items-center justify-center gap-2 " style={FONTS.add_button}
>
  <img src={filter} className="w-4 h-4" alt="filter" />
  {showFilter ? "Hide" : "Show"}
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
          <StatusCourseFilterfqa />
        </div>
      )}


      <div className="bg-white rounded-xl shadow px-4 py-3 mt-8">
        <Card className="bg-gray-100 rounded-md shadow-sm px-6 py-4">
  <div className="grid grid-cols-5 font-semibold text-gray-600">
    <div>ID</div>
    <div>FAQ Name</div>
    <div>Category</div>
    <div>Status</div>
    <div className="text-right">Actions</div>
  </div>
</Card>

        <div className="space-y-4 py-4">
          {filteredData.map((item) => (
            <Card key={item.id} className="shadow-lg rounded-lg relative">
  <CardContent className="grid grid-cols-5 items-center py-2 px-4 relative">

                <div>{item.id}</div>
                <div>
                  <div className="font-semibold text-gray-800">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.author}</div>
                  
                </div>
                 <div className="text-sm text-gray-500">{item.category}</div>
                 <div className="flex justify-start">
                    <Select
                      value={statusMap[item.id]}
                      onValueChange={(val) => handleStatusChange(item.id, val)}
                    >
                      <SelectTrigger
                        className={`w-[111px] h-[40px] border px-2 bg-transparent shadow-none ${
                          statusMap[item.id] && "px-0 [&>svg]:hidden"
                        }`}
                      >
                        {statusMap[item.id] ? (
                          <div
                            className="w-[111px] h-[40px] bg-[#ca406f] text-white border rounded-md flex items-center justify-center"
                            style={{ ...FONTS.dropdown }}
                          >
                            {statusMap[item.id]}
                          </div>
                        ) : (
                          <SelectValue placeholder="Status" />
                        )}
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-md shadow-md p-2 space-y-2 z-50">
                        <SelectItem
                          value="Active"
                         className="bg-[#ca406f]  rounded-md px-4 py-2 text-sm font-medium 
                data-[highlighted]:bg-[#ca406f] hover:bg-[#ca406f] focus:bg-[#ca406f]"
                          style={{ ...FONTS.dropdown }}
                        >
                          Active
                        </SelectItem>
                        <SelectItem
                          value="Inactive"
                          className="bg-[#ca406f] mt-2 rounded-md px-4 py-2 text-sm font-medium 
                data-[highlighted]:bg-[#ca406f] hover:bg-[#ca406f] focus:bg-[#ca406f]"
                          style={{ ...FONTS.dropdown }}
                        >
                          Inactive
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                <div className="flex justify-end">
                  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button
      className="absolute top-2 right-2  "
      aria-label="More options"
    >
      <MoreVertical className="w-5 h-5 -ml-12 text-[#ca406f]" />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-[120px] p-2 z-20 space-y-2">
   
<DropdownMenuItem
  className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
  onClick={() => setOpenEditModules(true)}
>
  <Pencil className="w-4 h-4 text-black group-hover:text-white" />
  <span className="group-hover:text-white">Edit</span>
</DropdownMenuItem>
{/* 
    <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
      <span className="group-hover:text-white">Delete</span>
    </DropdownMenuItem> */}
    <DropdownMenuItem
  className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
  onClick={() => {
    setSelectedItemId(item.id); 
    setDeleteModalOpen(true);   
  }}
>
  <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
  <span className="group-hover:text-white">Delete</span>
</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
       <AddFaqNotes open={openAddNotes} onClose={setOpenAddNotes} />
      <Editfaq open={openEditModules} onClose={setOpenEditModules} />
      {/* <Deletefaq open={openDelete} onClose={()=>setOpendelete(false)} /> */}
      <DeleteConfirmationModal
  open={deleteModalOpen}
  onClose={() => setDeleteModalOpen(false)}
  onConfirmDelete={handleDeleteConfirm}
/>

      {/* openDelete,setOpendelete] */}
    </div>
  );
};

export default Category;