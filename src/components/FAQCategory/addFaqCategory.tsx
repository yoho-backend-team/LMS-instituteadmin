

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";




const AddFaqCategoryDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-[#CA406F] hover:bg-[#ca406f] flex items-center gap-2">
          <Plus size={16} />
          Add FAQ Category
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-6 border-l border-gray-200"
      >
        <SheetHeader>
          <div className="flex items-center justify-between mb-4">
            <SheetTitle className="text-lg font-bold text-gray-800">
              Add FAQ Category
            </SheetTitle>
           
          </div>
        </SheetHeader>

        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <Input className="w-full border" placeholder="Enter Category" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Input className="w-full border" placeholder="Enter Description" />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <SheetClose asChild>
              <Button
                variant="outline"
                className="border border-blue-500 text-blue-600 hover:text-white hover:bg-blue-500"
              >
                Cancel
              </Button>
            </SheetClose>
            <Button className="bg-[#CA406F] text-white hover:bg-[#b43e65]">
              Submit
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddFaqCategoryDrawer;
