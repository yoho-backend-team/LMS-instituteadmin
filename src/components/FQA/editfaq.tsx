// import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// import uploadimg from '../../assets/fileupload.png';
import {FONTS} from '../../constants/uiConstants'
interface EditModulesProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

function EditModules({ open, onClose }: EditModulesProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold" style={FONTS.heading_01}>Edit Modules</SheetTitle>
        </SheetHeader>

        <div className="space-y-3 mt-4 ml-4">
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
              // placeholder="Edit description"
            ></textarea>
          </div>

        </div>

    
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 rounded-md border border-blue-600 !text-blue-700"style={FONTS.add_button}
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-[#ca406f] text-white hover:bg-[#b23561]" style={FONTS.add_button}>
            Update
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default EditModules;