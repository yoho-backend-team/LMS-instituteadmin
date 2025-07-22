import React, { useState } from "react";
import CustomDropdown from "../CustomeDropDown"; // adjust path as needed

interface AddStaffProps {
  onClose: () => void;
}

const AddStaff: React.FC<AddStaffProps> = ({ onClose }) => {
  const genderOptions = ["Male", "Female", "Other"];
  const courseOptions = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Computer Science",
  ];

  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  return (
    <div className=" flex justify-end items-center z-80">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[85%] h-[88%] overflow-y-auto">
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Add New Staff</h2>
            <div className="shadow-xl border rounded-xl p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="border-2 rounded-full w-20 h-20 overflow-hidden">
                  <img
                    src=""
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Name</h3>
                  <p className="text-sm text-gray-500">
                    Allowed PNG or JPEG. Max size: 800KB.
                  </p>
                </div>
              </div>
              <button className="p-2 border-2 rounded-xl bg-green-500 text-white hover:bg-green-600">
                Update Profile Picture
              </button>
            </div>
          </div>

          <form className="p-2 grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label>Full Name</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input type="email" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Date of Birth</label>
              <input type="date" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Gender</label>
              <CustomDropdown
                options={genderOptions}
                value={gender}
                onChange={setGender}
                placeholder="Select Gender"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Courses</label>
              <CustomDropdown
                options={courseOptions}
                value={course}
                onChange={setCourse}
                placeholder="Select Course"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Designation</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Qualification</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>State</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>City</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Pin Code</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Address Line 1</label>
              <textarea className="border rounded-md h-10 px-2 py-1 resize-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Address Line 2</label>
              <textarea className="border rounded-md h-10 px-2 py-1 resize-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Phone Number</label>
              <input type="tel" className="border rounded-md h-10 px-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Alt Phone Number</label>
              <input type="text" className="border rounded-md h-10 px-2" />
            </div>
          </form>

          <div className="flex justify-end items-center gap-4 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
            <button className="bg-[#CA406F] text-white px-4 py-2 rounded hover:bg-pink-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
