import type React from "react";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import type { Note, FormData } from "../StudentManagement/Student";
import upload from "../../assets/Upload.svg";

interface AddEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData, file: File | null) => void;
  editingStudent: Note | null;
  isEditing: boolean;
}

const AddEditModal: React.FC<AddEditModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  editingStudent,
  isEditing,
}) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    course: "",
    branch: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    qualification: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",
    phoneNumber: "",
    altPhoneNumber: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  useEffect(() => {
    if (isEditing && editingStudent) {
      const nameParts = editingStudent.title.split(" ");
      setFormData({
        title: editingStudent.title,
        description: editingStudent.description,
        course: editingStudent.course,
        branch: editingStudent.branch,
        password: "",
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(" "),
        email: editingStudent.email,
        dateOfBirth: "",
        gender: "",
        qualification: "",
        addressLine1: "",
        addressLine2: "",
        city: editingStudent.location,
        state: "",
        pinCode: "",
        phoneNumber: "",
        altPhoneNumber: "",
      });
      setUploadedFile(editingStudent.file || null);
    } else {
      // Reset form for new student
      setFormData({
        title: "",
        description: "",
        course: "",
        branch: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        qualification: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pinCode: "",
        phoneNumber: "",
        altPhoneNumber: "",
      });
      setUploadedFile(null);
    }
  }, [isEditing, editingStudent]);

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData, uploadedFile);
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const MAX_FILE_SIZE = 800 * 1024;

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert("File size must be less than 800 KB");
        e.target.value = "";
        return;
      }
      setUploadedFile(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-md">
      <div className="w-full h-[90vh] rounded-lg flex flex-col shadow-xl">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 rounded-t-2xl border-b bg-white border-gray-200 sticky top-0 z-10">
            <h2 className="text-2xl font-semibold text-[#CA406F]">
              {isEditing ? "Edit Student" : "Add New Student"}
            </h2>
            <button
              onClick={onClose}
              className="bg-black text-white rounded-full p-1 hover:bg-gray-800"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Profile Picture Upload */}
          <div className="bg-white p-5 rounded-b-2xl">
            <h1 className="text-2xl text-[#716F6F]">Upload Profile Picture</h1>
            <h4 className="text-sm text-[#716F6F]">
              Allowed PNG or JPEG, Max Size of 800K
            </h4>
            <div
              className="border mt-3 border-dashed border-gray-300 bg-white rounded-md text-center py-6 mb-4 cursor-pointer"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
              <p className="text-sm text-gray-500">
                <img
                  src={upload || "/placeholder.svg"}
                  alt="upload"
                  className="mx-auto mb-2"
                />
                {uploadedFile
                  ? uploadedFile.name
                  : "Drop Files Here Or Click To Upload"}
              </p>
            </div>
          </div>

          {/* Student Details */}
          <div className="bg-white p-5 rounded-lg mt-5 shadow">
            <div className="border-b-2 pb-3 mb-4">
              <h1 className="text-2xl font-semibold text-[#716F6F]">
                Student Details
              </h1>
              <p className="text-md text-[#716F6F]">Add User Details Here</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "First Name", key: "firstName" },
                { label: "Last Name", key: "lastName" },
                { label: "Email", key: "email" },
                { label: "Date Of Birth", key: "dateOfBirth", type: "date" },
                { label: "Gender", key: "gender" },
                { label: "Qualification", key: "qualification" },
                { label: "Branch", key: "branch" },
                { label: "Course", key: "course" },
              ].map(({ label, key, type }) => (
                <div key={key}>
                  <label className="block mb-1 text-lg text-gray-600">
                    {label}
                  </label>
                  {key === "gender" ? (
                    <select
                      className="w-full border-1 border-gray-300 rounded-md px-3 py-2"
                      value={formData.gender}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <input
                      type={type || "text"}
                      className="w-full border-1 border-gray-300 rounded-md px-3 py-2"
                      value={(formData as any)[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg mt-5 shadow">
            <div className="border-b-2 pb-3 mb-4">
              <h1 className="text-2xl font-semibold text-[#716F6F]">
                Contact Info
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Address Line 1", key: "addressLine1" },
                { label: "Address Line 2", key: "addressLine2" },
                { label: "City", key: "city" },
                { label: "State", key: "state" },
                { label: "Pin Code", key: "pinCode" },
                { label: "Phone Number", key: "phoneNumber" },
                { label: "Alt Phone Number", key: "altPhoneNumber" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block mb-1 text-lg text-gray-600">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full border-1 border-gray-300 rounded-md px-3 py-2"
                    value={(formData as any)[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="p-5 flex rounded-lg justify-end gap-4 bottom-0 z-10">
              <button
                onClick={onClose}
                className="border border-gray-300 bg-[#0400FF1A] text-[#0400FF] px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#CA406F] text-white px-4 py-2 rounded-md"
              >
                {isEditing ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;
