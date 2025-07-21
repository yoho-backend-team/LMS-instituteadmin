import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface FAQItem {
  id: string;
  categoryName: string;
  description?: string;
}

interface EditFaqCategoryDrawerProps {
  open: boolean;
  onClose: () => void;
  editItem: FAQItem | null;
}

const EditFaqCategoryDrawer: React.FC<EditFaqCategoryDrawerProps> = ({
  open,
  onClose,
  editItem,
}) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editItem) {
      setCategory(editItem.categoryName || "");
      setDescription(editItem.description || "");
    }
  }, [editItem]);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-6 border-l border-gray-200"
      >
        <SheetHeader>
          <div className="flex items-center justify-between mb-4">
            <SheetTitle className="text-lg font-bold text-gray-800">
              Edit FAQ Category
            </SheetTitle>
            {/* <SheetClose asChild>
              <button onClick={onClose}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
            </SheetClose> */}
          </div>
        </SheetHeader>

        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border"
              placeholder="Enter Category"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border"
              placeholder="Enter Description"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <SheetClose asChild>
              <Button
                variant="outline"
                onClick={onClose}
                className="border border-blue-500 text-blue-600 hover:text-white hover:bg-blue-500"
              >
                Cancel
              </Button>
            </SheetClose>
            <Button className="bg-[#CA406F] text-white hover:bg-[#b43e65]">
              Update
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditFaqCategoryDrawer;
