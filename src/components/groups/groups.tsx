import React from "react";
import { MoreVertical,Eye,Pencil,Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bg from '../../../src/assets/Backdrop Image.png'
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const  Groups=() =>{
  const groups = [
    { name: "John William", users: 0 },
    { name: "Kamal", users: 0 },
    { name: "Bhuvana", users: 0 },
  ];
 const navigate=useNavigate()

  return (
    <>
    <div
  className="min-h-screen px-8 py-6 bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-700">Groups</h1>
        <Button className="bg-[#CA406f] hover:bg-[#CA406f] text-white rounded-md" onClick={() => navigate("/add-group")}>
          Add New Group
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <Card key={index} className="shadow-md rounded-2xl">
            <CardContent className="p-4 flex flex-col justify-between h-40  relative">
              <button className="absolute top-3 right-3 p-1 rounded-full" >
      <MoreVertical className="w-5 h-5 text-gray-600"/>
      </button>

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
  className="group border border-gray-300 text-black font-semibold text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
  onClick={() => navigate("/permission-management")}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
>
  <Eye className="w-4 h-4 text-black group-hover:text-white" />
  <span className="group-hover:text-white">View</span>
</DropdownMenuItem>

    <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
    onClick={()=>navigate("/Edit")}
     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      
      <Pencil className="w-4 h-4 text-black group-hover:text-white" />
      <span className="group-hover:text-white ">Edit</span>
    </DropdownMenuItem>

    <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
      <span className="group-hover:text-white">Delete</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> 



              <div className="mb-2 text-gray-800 font-medium  rounded-md p-2">
                {group.name}
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Total {group.users} Users
              </p>


<div className="mt-auto flex justify-end">
  <Select defaultValue="active">
    <SelectTrigger className="w-30 bg-[#CA406f] text-white rounded-md hover:bg-[#CA406f] relative">
      <SelectValue placeholder="Active" />
      <ChevronDown className="absolute right-2 h-4 w-4 text-white pointer-events-none" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="active">Active</SelectItem>
      <SelectItem
        value="inactive"
        className="text-white bg-[#CA406f] hover:bg-[#CA406f]"
      >
        Inactive
      </SelectItem>
    </SelectContent>
  </Select>
</div>

            </CardContent>
          </Card>
        ))}
      </div>
     
    </div>
    </>
  );
}

export default Groups











// <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//     <button
//       className="absolute top-2 right-2 bg-white backdrop-blur-md rounded-md p-1 hover:bg-white shadow-md z-10"
//       aria-label="More options"
//     >
//       <MoreVertical className="w-5 h-5 text-[#ca406f]" />
//     </button>
//   </DropdownMenuTrigger>

//   <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-[120px] p-2 z-20 space-y-2">
//     <DropdownMenuItem
//   className="group border border-gray-300 text-black font-semibold text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
//   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
//   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
// >
//   <Eye className="w-4 h-4 text-black group-hover:text-white" />
//   <span className="group-hover:text-white">View</span>
// </DropdownMenuItem>


//     <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
//      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
//   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      
//       <Pencil className="w-4 h-4 text-black group-hover:text-white" />
//       <span className="group-hover:text-white ">Edit</span>
//     </DropdownMenuItem>

//     <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
//      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
//   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
//       <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
//       <span className="group-hover:text-white">Delete</span>
//     </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
{/* <DropdownMenu>
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
  className="group border border-gray-300 text-black font-semibold text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
>
  <Eye className="w-4 h-4 text-black group-hover:text-white" />
  <span className="group-hover:text-white">View</span>
</DropdownMenuItem>


    <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      
      <Pencil className="w-4 h-4 text-black group-hover:text-white" />
      <span className="group-hover:text-white ">Edit</span>
    </DropdownMenuItem>

    <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#ca406f]"
     onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ca406f")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}>
      <Trash2 className="w-4 h-4 text-black group-hover:text-white" />
      <span className="group-hover:text-white">Delete</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> */}

