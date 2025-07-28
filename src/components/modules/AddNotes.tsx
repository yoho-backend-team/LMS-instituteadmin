<<<<<<< HEAD
// import React from "react";
=======
import React from "react";
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {FONTS} from '../../constants/uiConstants'

interface AddNotesProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

function AddNotes({ open, onClose }: AddNotesProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold" style={FONTS.heading_01}>
            Add Modules
          </SheetTitle>
         
        </SheetHeader>

        <div className=" mt-4 ml-4 mr-4">
          <div>
      
            <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1"style={FONTS.form_topic} >Branch</label>
            <select className="w-full border rounded-md px-2 py-1" />
          </div>
          </div>

        
            <div>
            <label className="text-sm font-semibold text-gray-700 block" style={FONTS.form_topic}>Course</label>
            <select className="w-full border rounded-md  py-1" />
          </div>
          

          <div>
            <label className="text-sm font-medium" style={FONTS.form_topic}>Title</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium" style={FONTS.form_topic}>Description</label>
            <textarea
              className="w-full border rounded-md p-2 mt-1"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium" style={FONTS.form_topic}>Video URI</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6 -ml-10">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600"
          >
            Cancel
          </button>
          <button className="px-6 ml-4 py-2 rounded-md bg-[#ca406f] text-white hover:bg-[#b23561]">
            Submit
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AddNotes