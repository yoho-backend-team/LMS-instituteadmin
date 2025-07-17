import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

import { Eye, Pencil, Trash2, MoreVertical } from "lucide-react";
import cardimg from "../../assets/institute.webp";
import { FONTS } from "@/constants/uiConstants";
import EditBranchModal from "./editBranch";

interface BranchCardProps {
  name: string;
  address: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ name, address }) => {
  const [status, setStatus] = useState<string>("");
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);


     const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const navigate = useNavigate();

  return (
    <Card className="rounded-xl shadow-sm w-[344px]">
      <CardContent className="p-4 space-y-3">
        <div className="relative w-full h-[160px] rounded-md overflow-hidden">
          <img
            src={cardimg}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />

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
    <DropdownMenuItem  onClick={() => navigate("/branch-overview")}
  className="group border border-gray-300 text-black font-semibold text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
>
  
  <Eye className="w-4 h-4 text-black group-hover:text-white" />
  <span className="group-hover:text-white">View</span>
</DropdownMenuItem>


   <DropdownMenuItem
  className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
  onClick={openEditModal}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
>
  <Pencil className="w-4 h-4 text-black group-hover:text-white" />
  <span className="group-hover:text-white">Edit</span>
</DropdownMenuItem>

    <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
      <span className="group-hover:text-white">Delete</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>

        <div>
          <h3 style={{ ...FONTS.heading_01 }}>{name}</h3>
          <p style={{ ...FONTS.Description }}>{address}</p>
        </div>

        <div className="relative z-10">
          <Select onValueChange={(value) => setStatus(value)}>
            <SelectTrigger
              className={`w-[111px] h-[40px] border border-grey px-2 bg-transparent shadow-none ${
                status && "px-0 [&>svg]:hidden"
              }`}
            >
              {status ? (
                <div className="w-[111px] h-[40px] bg-[#ca406f] text-white text-sm font-medium border rounded-md flex items-center justify-center">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              ) : (
                <SelectValue placeholder="Status" />
              )}
            </SelectTrigger>

            <SelectContent
              className="z-20 bg-white rounded-md shadow-md p-2 space-y-2"
              side="bottom"
              align="start"
            >
              <SelectItem
                value="active"
                className="bg-[#ca406f] text-white rounded-md px-4 py-2 text-sm font-medium 
                data-[highlighted]:bg-[#ca406f] hover:bg-[#ca406f] focus:bg-[#ca406f]"
              >
                Active
              </SelectItem>
              <SelectItem
                value="inactive"
                className="bg-[#ca406f] text-white mt-2 rounded-md px-4 py-2 text-sm font-medium 
                data-[highlighted]:bg-[#ca406f] hover:bg-[#ca406f] focus:bg-[#ca406f]"
              >
                Inactive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <EditBranchModal isOpen={isEditModalOpen} onClose={closeEditModal} />

    </Card>
  );
};

export default BranchCard;
