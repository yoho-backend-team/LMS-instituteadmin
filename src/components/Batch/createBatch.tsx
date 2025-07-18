import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface CreateBatchModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CreateBatchModal = ({ isOpen, setIsOpen }: CreateBatchModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-[#ffffff] w-full max-w-4xl rounded-2xl shadow-2xl">
        <h2 className="text-[20px] font-bold text-white text-center justify-center bg-[#c24175] px-6 py-4 rounded-t-2xl mb-6">
          Create New Batch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-gray-700 block mb-1">
              Batch Name
            </label>
            <input className="w-full border rounded-md px-4 py-2" type="text" />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Start Date</label>
            <input className="w-full border rounded-md px-4 py-2" type="date" />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">End Date</label>
            <input className="w-full border rounded-md px-4 py-2" type="date" />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Branch</label>
            <select className="w-full border rounded-md px-4 py-2" />
            <p className="text-xs text-gray-500 mt-1">Select A Branch To See Available Courses.</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Course</label>
            <select className="w-full border rounded-md px-4 py-2" />
            <p className="text-xs text-gray-500 mt-1">Please select a branch first to enable course selection.</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Students</label>
            <select className="w-full border rounded-md px-4 py-2" />
            <p className="text-xs text-gray-500 mt-1">Please select a course to view and select students.</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Teacher</label>
            <select className="w-full border rounded-md px-4 py-2" />
            <p className="text-xs text-gray-500 mt-1">Please select a course to view and select Teacher.</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 mb-4 px-4">
          <Button
            variant="outline"
            className="border border-[#422ed1] text-[#422ed1] hover:bg-[#f1f1f1]"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button className="bg-[#c24175] text-white hover:bg-[#b23369]">
            Create Batch
          </Button>
        </div>
      </div>
    </div>
  );
};
