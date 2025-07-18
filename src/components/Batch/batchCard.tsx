import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical} from "lucide-react";
import humaning from "../../assets/humanimg.png";
import clock from "../../assets/clock.png"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Eye, Pencil, Trash2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import EditBatchModal from "./editBatch";
import { useNavigate } from "react-router-dom";





interface BatchCardProps {
  title: string;
  subtitle: string;
  students: number;
  startDate: string;
  endDate: string;
  status: string;
}

export const BatchCard: React.FC<BatchCardProps> = ({
  
  title,
  subtitle,
  students,
  startDate,
  endDate,
  
}) => {
  const [status, setStatus] = useState<string>("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  
       const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);
      const navigate = useNavigate();
  return (
    <Card className="rounded-xl shadow-[0px_0px_12px_rgba(0,0,0,0.08)] w-[auto] bg-white">
      <CardContent className="p-4 pb-3 relative">
  
      
        <div className="flex justify-between items-start border-b border-gray-200 pb-2">
          <div>
            <h4 className="text-[14px] font-semibold text-neutral-800">{title}</h4>
            
          </div>
         <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button
      className="absolute top-2 right-2  "
      aria-label="More options"
    >
      <MoreVertical className="w-5 h-5 text-[#ca406f]" />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-[120px] p-2 z-20 space-y-2">
    <DropdownMenuItem  onClick={() => navigate("/view-page")}
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
        <div><p className="text-xs text-neutral-500 mt-4">{subtitle}</p></div>

       
        <div className="flex items-center justify-between mt-4">
          <div className="bg-[#1E1EFF] text-white text-[12px] px-6 py-[6px] rounded-md font-semibold">
            {startDate}
          </div>
          <div className="flex items-center justify-center w-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D43C80] rounded-full -translate-y-1/2" />
            <div className="absolute w-2 h-2 bg-[#D43C80] rounded-full left-0 -translate-y-1/2 top-1/2" />
            <div className="absolute w-2 h-2 bg-[#D43C80] rounded-full right-0 -translate-y-1/2 top-1/2" />
          </div>
          <div className="bg-[#1E1EFF] text-white text-[12px] px-6 py-[6px] rounded-md font-semibold">
            {endDate}
          </div>
        </div>

        
        <div className="flex items-center justify-between text-[10px] text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <img src={humaning} className="w-3.5 h-3.5" />
            <span>{students} Students</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={clock}  className="w-3.5 h-3.5" />
            <span>Days</span>
          </div>
        </div>

        
        <div className="mt-4 h-[60px]">
          <svg
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#D43C80" />
                <stop offset="90%" stopColor="#BDC2C7BF" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C20,10 40,10 60,25 C80,40 100,10 120,25 C140,40 160,10 180,25 C190,30 200,35 200,40"
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
          </svg>
        </div>

      
        <div className="flex justify-end mt-6">
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
       <EditBatchModal isOpen={isEditModalOpen} onClose={closeEditModal} />
    </Card>
  );
};
