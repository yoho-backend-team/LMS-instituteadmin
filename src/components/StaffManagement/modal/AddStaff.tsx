import React, { useRef, useState } from "react";
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
    "AI & Deep Learning",
  ];

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.dob.trim()) newErrors.dob = "Date of birth is required";
    if (!formData.gender.trim()) newErrors.gender = "Please select a gender";
    if (!formData.course.trim()) newErrors.course = "Please select a course";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;
    onSave(formData);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-end items-center pt-4 pl-4 text-[#716F6F] font-medium">
      <div className="bg-white p-4 rounded-sm shadow-lg w-full h-full">
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-[#716F6F]">Add New Staff</h2>
            <div className="shadow-xl border rounded-sm p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div
                  className="border-2 rounded-full w-20 h-20 overflow-hidden cursor-pointer"
                  onClick={handleImageClick}
                >
                  <img
                    src={
                      formData.image || "https://via.placeholder.com/150"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-3 h-full">
                  <h3 className="font-medium">Name</h3>
                  <p className="text-sm text-gray-500">
                    Allowed PNG or JPEG. Max size: 800KB.
                  </p>
                </div>
              </div>
              <button
                onClick={handleImageClick}
                className="p-2 border-2 rounded-sm bg-green-500 text-white hover:bg-green-600"
              >
                Update Profile Picture
              </button>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <form className="p-2 grid grid-cols-3 gap-6">
            {/* Full Name */}
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
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            {/* Email */}
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
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* DOB */}
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
              {errors.dob && (
                <span className="text-red-500 text-sm">{errors.dob}</span>
              )}
            </div>

            {/* Gender */}
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
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender}</span>
              )}
            </div>

            {/* Course */}
            <div className="flex flex-col gap-2">
              <label>Courses</label>
              <CustomDropdown
                options={courseOptions}
                value={formData.course}
                onChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
              />
              {errors.course && (
                <span className="text-red-500 text-sm">{errors.course}</span>
              )}
            </div>

            {/* Designation */}
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

            {/* Qualification */}
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

            {/* State */}
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

            {/* City */}
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

            {/* Pin Code */}
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

            {/* Address Line 1 */}
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

            {/* Address Line 2 */}
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

            {/* Phone Number */}
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
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            {/* Alt Phone */}
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
