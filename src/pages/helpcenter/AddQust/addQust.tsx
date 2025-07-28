<<<<<<< HEAD
import  { useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
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
    status: "Classes 12345",
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

      {/* Header Card */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-6 ml-4">
        <Card className="bg-gray-100 rounded-md shadow-sm px-3 py-2">
          <div className="grid grid-cols-5 items-center text-[#716F6F] font-semibold px-2 py-1">
            <div>ID</div>
            <div>Category</div>
            <div>Video Link</div>
            <div className="ml-12">Status</div>
            <div className="text-right">Actions</div>
          </div>
        </Card>
        {/* Cards List */}
        <div className="space-y-2 py-4">
          {table.map((item) => (
            <Card key={item.id} className="shadow-xl rounded-lg relative">
              <CardContent className="grid grid-cols-5 items-center py-1 px-2 text-[#716F6F] relative font-semibold ml-2">
                <div>{item.id}</div>

                <div className="font-semibold text-[#716F6F]">
                  {item.category}
                </div>

                <div className=" text-gray-400 break-all">
                  {item.videoLink}
                  {/* <a
                    href={item.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 underline"
                  >
                    Watch Video
                  </a> */}
                </div>

                <div>
                  <div className="w-[111px] h-[40px] text-[#716F6F] font-semibold rounded-md flex items-center ml-10">
                    {item.status}
                  </div>
                </div>

                <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="absolute top-2 right-2"
                        aria-label="More options"
                      >
                        <MoreVertical className="w-5 h-5 text-[#ca406f] mt-4 mr-8" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-[130px] p-2 space-y-1 z-20">
                      <DropdownMenuItem
                        onClick={() => setShowEditQuestion(true)}
                        className="group text-[#716F6F] border border-[#716F6F] text-sm font-medium px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:!bg-[#ca406f] hover:!text-white"
                      >
                        <Pencil className="w-4 h-4 hover:text-white" />
                        <span>Edit</span>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="group text-[#716F6F] border border-[#716F6F] text-sm font-medium px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:!bg-[#ca406f] hover:!text-white">
                        <Trash2 className="w-4 h-4 hover:text-white" />
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
