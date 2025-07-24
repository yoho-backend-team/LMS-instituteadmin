import React, { useState } from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EditLiveClassForm: React.FC = () => {


  const [formData, setFormData] = useState({
    className: "",
    classDate: "",
    startTime: "",
    endTime: "",
    instructors: ["Elon Musk"],
    link: "https://gbvtdsqwefgtryuxqwertyoaertghj",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.className.trim()) newErrors.className = "Class name is required.";
    if (!formData.classDate.trim()) newErrors.classDate = "Class date is required.";
    if (!formData.startTime.trim()) newErrors.startTime = "Start time is required.";
    if (!formData.endTime.trim()) newErrors.endTime = "End time is required.";
    if (!formData.instructors.length) newErrors.instructors = "At least one instructor required.";
    if (!formData.link.trim()) newErrors.link = "Class link is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Save logic here
      alert("Live class updated successfully!");
    }
  };

  const removeInstructor = (name: string) => {
    setFormData({
      ...formData,
      instructors: formData.instructors.filter((i) => i !== name),
    });
  };

const navigate = useNavigate();



  return (
    <div className="flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 space-y-6"
      >
        {/* Header */}
        <h2 className="text-center text-white font-semibold text-lg bg-[#CA406F] py-3 rounded-md">
          Edit Live Class
        </h2>

        {/* Class Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Class Name</label>
          <input
            name="className"
            type="text"
            value={formData.className}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md ${
              errors.className ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.className && <p className="text-sm text-red-500">{errors.className}</p>}
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Class Date</label>
            <input
              name="classDate"
              type="date"
              value={formData.classDate}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md ${
                errors.classDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.classDate && <p className="text-sm text-red-500">{errors.classDate}</p>}
          </div>

          {/* Start Time */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-medium text-gray-700">Start Time</label>
            <input
              name="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleChange}
              className={`w-full p-3  border rounded-md   ${
                errors.startTime ? "border-red-500" : "border-gray-300"
              }`}
            />
             {/* <MdAccessTimeFilled className="absolute top-9 right-3 text-gray-500" />
            {errors.startTime && <p className="text-sm text-red-500">{errors.startTime}</p>}  */}
          </div>

          {/* End Time */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-medium text-gray-700">End Time</label>
            <input
              name="endTime"
              type="time"
              value={formData.endTime}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md ${
                errors.endTime ? "border-red-500" : "border-gray-300"
              }`}
            />
            {/* <MdAccessTimeFilled className="absolute top-9 right-3 text-gray-500" />
            {errors.endTime && <p className="text-sm text-red-500">{errors.endTime}</p>} */}
          </div>
        </div>

        {/* Instructor */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Instructors</label>
          <div className="flex items-center flex-wrap gap-2 border border-gray-300 p-2 rounded-md min-h-[48px]">
            {formData.instructors.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {name}
                <button type="button" onClick={() => removeInstructor(name)}>
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
          {errors.instructors && <p className="text-sm text-red-500">{errors.instructors}</p>}
        </div>

        {/* Link */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Link</label>
          <input
            name="link"
            type="text"
            value={formData.link}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md ${
              errors.link ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.link && <p className="text-sm text-red-500">{errors.link}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
          onClick={() => navigate(-1)}
            type="button"
            className="px-5 py-2 border border-[#0400FF] text-[#0400FF] rounded-md hover:bg-[#0400ff1a]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-[#CA406F] text-white rounded-md hover:bg-[#b43763]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditLiveClassForm;
