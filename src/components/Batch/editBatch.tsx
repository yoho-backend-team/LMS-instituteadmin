import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FONTS } from "@/constants/uiConstants";

interface EditBatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditBatchModal: React.FC<EditBatchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const selectedStudents = ["Elon Muck", "John William"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg ">
        <div className="bg-[#c24175] text-white rounded-t-xl py-3 px-6">
          <h2 className="!text-white text-center justify-center"style={{...FONTS.form_head}}>Edit Batch</h2>
        </div>
        <div className="mt-6 px-6 space-y-4">
          <div>
            <label className="block  mb-1"style={{...FONTS.form_topic}}>
              Batch Name
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Enter Batch Name"
            />
          </div>

          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1"style={{...FONTS.form_topic}}>
                Start Date
              </label>
              <input
                type="date"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>

            <div className="flex-1">
              <label className="block  mb-1"style={{...FONTS.form_topic}}>
                End Date
              </label>
              <input
                type="date"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
          </div>

        
          <div>
            <label className="block mb-1"style={{...FONTS.form_topic}}>
              Students
            </label>
            <div className="w-full border rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[44px]">
              {selectedStudents.map((student, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  {student}
                  <X className="w-4 h-4 cursor-pointer text-green-700 hover:text-red-600" />
                </div>
              ))}
            </div>
          </div>
        </div>

      
        <div className="flex justify-end items-center gap-4 mt-6 mb-4 px-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="!border-[#0400FF] !text-[#0400FF]  px-4 py-2 rounded-md "style={{...FONTS.Buttons}}
          >
            Cancel
          </Button>
          <Button className="bg-[#c24175] text-white hover:bg-[#b23369] px-4 py-2 rounded-md" style={{...FONTS.Buttons}}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditBatchModal;
