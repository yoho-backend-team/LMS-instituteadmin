import React from "react";

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

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[95%] h-[98%] overflow-y-auto">
        <div className="flex flex-col w-full h-full gap-5">
          {/* Title + Profile Picture Section */}
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
              <div>
                <button className="p-2 border-2 rounded-xl bg-green-500 text-white hover:bg-green-600">
                  Update Profile Picture
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="p-2 grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="border rounded-md h-10 px-2"
              />
            </div>

            {/* Gender Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                className="border rounded-md h-10 px-2"
              >
                <option value="">Select Gender</option>
                {genderOptions.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            {/* Courses Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="courses">Courses</label>
              <select
                id="courses"
                name="courses"
                className="border rounded-md h-10 px-2"
              >
                <option value="">Select Course</option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                id="designation"
                name="designation"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="qualification">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="address1">Address Line 1</label>
              <textarea
                id="address1"
                name="address1"
                className="border rounded-md h-10 px-2 py-1 resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="address2">Address Line 2</label>
              <textarea
                id="address2"
                name="address2"
                className="border rounded-md h-10 px-2 py-1 resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border rounded-md h-10 px-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="altPhone">Alt Phone Number</label>
              <input
                type="text"
                id="altPhone"
                name="altPhone"
                className="border rounded-md h-10 px-2"
              />
            </div>
          </form>

          {/* Footer Buttons */}
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
