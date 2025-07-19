import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface AddNotesProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

function AddNotes({ open, onClose }: AddNotesProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">
            Add Modules
          </SheetTitle>
         
        </SheetHeader>

        <div className=" mt-4 ml-4 mr-4">
          <div>
      
            <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Branch</label>
            <select className="w-full border rounded-md px-2 py-1" />
          </div>
          </div>

        
            <div>
            <label className="text-sm font-semibold text-gray-700 block ">Course</label>
            <select className="w-full border rounded-md  py-1" />
          </div>
          

          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="w-full border rounded-md p-2 mt-1"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium">Video URI</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600"
          >
            Cancel
          </button>
          <button className="px-6 py-2 rounded-md bg-[#ca406f] text-white hover:bg-[#b23561]">
            Submit
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AddNotes