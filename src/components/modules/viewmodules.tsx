import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ViewModuleProps {
  open: boolean;
  onClose: (open: boolean) => void;
  moduleData?: {
    title: string;
    courseName: string;
    description: string;
    status: string;
    image?: string;
  };
}

function ViewModule({ open, onClose, moduleData }: ViewModuleProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {moduleData?.title || "Module Details"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
        
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
            {moduleData?.image ? (
              <img
                src={moduleData.image}
                alt="Module"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <span className="text-gray-500">No Image Available</span>
            )}
          </div>


          
 <div className="flex justify-between">
  <p className="text-lg font-semibold ">{moduleData?.title}</p>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium  justify-end ${
                moduleData?.status === "Active"
                  ? "bg-green-500 text-white"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {moduleData?.status}
            </span>
          </div>

          
          <p className="text-sm">
            <span className="font-semibold">Course Name:</span> {moduleData?.courseName}
          </p>

        
          <p className="text-sm">
            <span className="font-semibold">Description:</span> {moduleData?.description}
          </p>

        
          {/* <div className="flex items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                moduleData?.status === "Active"
                  ? "bg-green-500 text-white"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {moduleData?.status}
            </span>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default ViewModule;