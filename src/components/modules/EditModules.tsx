import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import uploadimg from '../../assets/fileupload.png';

interface EditModulesProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

function EditModules({ open, onClose }: EditModulesProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">Edit Modules</SheetTitle>
        </SheetHeader>

        <div className="space-y-3 mt-4 ml-4">
          <div className="border border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
            <img src={uploadimg} className="w-6 h-6 m-auto"/>
            <p className="text-sm text-gray-600"> Drop Files Here Or Click To Upload</p>
          </div>


          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
              // placeholder="Edit module title"
            />
          </div>

        
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="w-full border rounded-md p-2 mt-1"
              rows={3}
              // placeholder="Edit description"
            ></textarea>
          </div>

          
          <div>
            <label className="text-sm font-medium">Video URI</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
              // placeholder="Edit video link"
            />
          </div>
        </div>

    
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-700"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-[#ca406f] text-white hover:bg-[#b23561]">
            Update
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default EditModules;