import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import AddQyestion from "../../../components/helpcenter/AddQyestion";
import EditQyestion from "@/components/helpcenter/EditQuestion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";

const table = [
  {
    id: 1,
    category: "Classes",
    videoLink: "https://example.com/video1",
    status: "How to learn?",
  },
  {
    id: 2,
    category: "Profile",
    videoLink: "https://example.com/video2",
    status: "Classes 12345 ",
  },
  {
    id: 3,
    category: "Classes",
    videoLink:
      "https://www.youtube.com/watch?v=xeXV1KoX034&pp=ygUNc2FtcGxlIHZpZGVvcw%3D%3D",
    status: "Classes 12345",
  },
];

const AddQust = () => {
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showEditQuestion, setShowEditQuestion] = useState(false);

  return (
    <>
      <p className="text-2xl font-semibold text-[#716F6F] mb-4 ">FAQ</p>

      <div className="flex items-center justify-between gap-4 mb-5 px-5 py-5">
        <input
          type="text"
          placeholder="Search category"
          className="border-2 border-[#CA406F] rounded px-3 py-2 w-full max-w-sm "
        />
        <button
          onClick={() => setShowAddQuestion(true)}
          className="flex items-center gap-2 text-white bg-[#CA406F] px-4 py-2 rounded hover:bg-[#b1355f]"
        >
          <HiOutlinePlus />
          Add Question
        </button>
      </div>
{/* Header */}
<div className="bg-white rounded-lg shadow-md px-5 py-4 mb-6 ml-4">
  <Card className="bg-gray-100 rounded-md shadow-sm">
    <div className="grid grid-cols-5 gap-4 items-center text-[#716F6F] font-semibold px-2 py-1">
      <div>ID</div>
      <div>Category</div>
      <div>Video Link</div>
      <div>Status</div>
      <div className="text-right mr-4">Actions</div>
    </div>
  </Card>

  {/* Card List */}
  <div className="space-y-4 mt-4">
    {table.map((item) => (
      <Card key={item.id} className="rounded-lg shadow-md overflow-hidden">
        <CardContent className="grid grid-cols-5 gap-4 items-center px-4 py-3 text-[#716F6F] font-medium">
          <div>{item.id}</div>

          <div>{item.category}</div>

          <div className="text-sm text-blue-600 break-all underline">
            <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>

          <div className="text-sm break-all">{item.status}</div>

        <div className="flex justify-end mr-4">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        className="p-1 hover:bg-gray-100 rounded"
        aria-label="More options"
      >
        <MoreVertical className="w-5 h-5 text-[#ca406f]" />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      side="right"
      align="start"
      className="bg-white rounded-lg shadow-xl w-[130px] p-2 space-y-1 z-20"
    >
      <DropdownMenuItem
        onClick={() => setShowEditQuestion(true)}
        className="group text-[#716F6F] border border-[#716F6F] text-sm font-medium px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:!bg-[#ca406f] hover:!text-white"
      >
        <Pencil className="w-4 h-4" />
        <span>Edit</span>
      </DropdownMenuItem>

      <DropdownMenuItem className="group text-[#716F6F] border border-[#716F6F] text-sm font-medium px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:!bg-[#ca406f] hover:!text-white">
        <Trash2 className="w-4 h-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>

        </CardContent>
      </Card>
    ))}
  </div>
</div>


      {/* Add Question Slide Panel */}
      {showAddQuestion && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <AddQyestion onClose={() => setShowAddQuestion(false)} />
        </div>
      )}

      {/* Edit Question Slide Panel */}
      {showEditQuestion && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <EditQyestion onClose={() => setShowEditQuestion(false)} />
        </div>
      )}
    </>
  );
};

export default AddQust;
