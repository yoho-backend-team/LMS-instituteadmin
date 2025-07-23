import React, { useState } from "react";
import CustomDropdown from "../CustomeDropDown";

interface AddStaffProps {
  onClose: () => void;
  onSave: (newStaff: any) => void;
}

const AddStaff: React.FC<AddStaffProps> = ({ onClose, onSave }) => {
  const genderOptions = ["Male", "Female", "Other"];
  const courseOptions = [
  "MERN Full Stack Development",
  "UI/UX Design",
  "Data Science & Machine Learning",
  "Python Programming",
  "DevOps & Cloud Computing",
  "Android App Development",
  "iOS App Development",
  "Cybersecurity Fundamentals",
  "Blockchain Development",
  "AI & Deep Learning"
];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    course: "",
    designation: "",
    qualification: "",
    state: "",
    city: "",
    pinCode: "",
    address1: "",
    address2: "",
    phone: "",
    altPhone: "",
    image: "",
  });

  const handleSave = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill in required fields");
      return;
    }
    onSave(formData);
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className="bg-white p-4 rounded-sm shadow-lg w-full h-full  ">
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Add New Staff</h2>
            <div className="shadow-xl border rounded-sm p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="border-2 rounded-full w-20 h-20 overflow-hidden scrollbar-hide">
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
              <button className="p-2 border-2 rounded-sm bg-green-500 text-white hover:bg-green-600">
                Update Profile Picture
              </button>
            </div>
          </div>

          <form className="p-2 grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label>Full Name</label>
              <input
                type="text"
                className="border rounded-sm h-10 px-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                className="border rounded-sm h-10 px-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Date of Birth</label>
              <input
                type="date"
                className="border rounded-sm h-10 px-2"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Gender</label>
              <CustomDropdown
                options={genderOptions}
                value={formData.gender}
                onChange={(value) =>
                  setFormData({ ...formData, gender: value })
                }
                placeholder="Select Gender"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Courses</label>
              <CustomDropdown
                options={courseOptions}
                value={formData.course}
                onChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Designation</label>
              <input
                type="text"
                className="border rounded-sm h-10 px-2"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Qualification</label>
              <input
                type="text"
                className="border rounded-sm h-10 px-2"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData({ ...formData, qualification: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>State</label>
              <input
                type="text"
                className="border rounded-sm h-10 px-2"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>City</label>
              <input
                type="text"
                className="border rounded-sm h-10 px-2"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Pin Code</label>
              <input
                type="text"
                className="border rounded-sm h-10 px-2"
                value={formData.pinCode}
                onChange={(e) =>
                  setFormData({ ...formData, pinCode: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Address Line 1</label>
              <textarea
                className="border rounded-sm h-10 px-2 py-1 resize-none"
                value={formData.address1}
                onChange={(e) =>
                  setFormData({ ...formData, address1: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Address Line 2</label>
              <textarea
                className="border rounded-sm h-10 px-2 py-1 resize-none"
                value={formData.address2}
                onChange={(e) =>
                  setFormData({ ...formData, address2: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Phone Number</label>
              <input
                type="tel"
                className="border rounded-sm h-10 px-2"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Alt Phone Number</label>
              <input
                type="tel"
                className="border rounded-sm h-10 px-2"
                value={formData.altPhone}
                onChange={(e) =>
                  setFormData({ ...formData, altPhone: e.target.value })
                }
              />
            </div>
          </form>

          <div className="flex justify-end items-center gap-4 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="bg-[#CA406F] text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
