import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export interface FormDataType {
  course: string;
  batch: string;
  student: string;
  studentFee: string;
  amount: string;
}

export interface RefundModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isEditing: boolean;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  uploadedFile: File | null;
  setUploadedFile: (file: File | null) => void;
  onSubmit: () => void;
}

const courseOptions = ["MERN", "Python", "Java", "MEAN", "Data Analyst", "SQL"];
const batchOptions = ["Batch 2023", "Batch 2024", "Batch 2025"];
const studentOptions = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Chris Hemsworth",
  "Brad Pitt",
];
const feeOptions = ["30000", "35000", "40000", "25000", "38000"];

export const RefundModal: React.FC<RefundModalProps> = ({
  showModal,
  setShowModal,
  isEditing,
  formData,
  setFormData,
  // uploadedFile,
  // setUploadedFile,
  onSubmit,
}) => {
  if (!showModal) return null;

  const handleInputChange = (key: keyof FormDataType, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/30 backdrop-blur-md">
      <div className="w-full max-w-md h-[90vh] rounded-lg flex flex-col shadow-xl bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 text-2xl sticky text-[#716F6F] top-0 bg-white z-10">
          <h2 className=" font-semibold">
            {isEditing ? "Edit Fees" : "Add Fees"}
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="bg-black text-white rounded-full p-1 hover:bg-gray-800"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 hide-scrollbar">
          <div>
            <label className="block text-lg text-[#716F6F] font-medium mb-1">
              Select Course
            </label>
            <select
              value={formData.course}
              onChange={(e) => handleInputChange("course", e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 appearance-none"
            >
              <option value=""></option>
              {courseOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg text-[#716F6F] font-medium mb-1">
              Batch
            </label>
            <select
              value={formData.batch}
              onChange={(e) => handleInputChange("batch", e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 appearance-none"
            >
              <option value=""></option>
              {batchOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg text-[#716F6F] font-medium mb-1">
              Student
            </label>
            <select
              value={formData.student}
              onChange={(e) => handleInputChange("student", e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 appearance-none"
            >
              <option value=""></option>
              {studentOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg text-[#716F6F] font-medium mb-1">
              Student Fee
            </label>
            <select
              value={formData.studentFee}
              onChange={(e) => handleInputChange("studentFee", e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2 appearance-none"
            >
              <option value=""></option>
              {feeOptions.map((fee) => (
                <option key={fee} value={fee}>
                  ₹ {fee}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg  text-[#716F6F] font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
              className="w-full bg-white border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t flex justify-end gap-4">
          <button
            className="border border-gray-300 bg-[#0400FF1A] text-[#0400FF] px-4 py-2 rounded-md"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-[#CA406F] text-white px-4 py-2 rounded-md"
            onClick={onSubmit}
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
