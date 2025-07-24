import React, { useState } from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddLiveClassForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    className: "",
    branch: "",
    course: "",
    batch: "",
    date: "",
    startTime: "",
    endTime: "",
    instructor: "",
    videoUrl: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.className.trim()) newErrors.className = "Class name is required.";
    if (!formData.branch) newErrors.branch = "Branch is required.";
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.batch.trim()) newErrors.batch = "Batch is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.startTime) newErrors.startTime = "Start time is required.";
    if (!formData.endTime) newErrors.endTime = "End time is required.";
    if (!formData.instructor) newErrors.instructor = "Instructor is required.";

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!formData.videoUrl.trim()) {
      newErrors.videoUrl = "Video URL is required.";
    } else if (!urlRegex.test(formData.videoUrl.trim())) {
      newErrors.videoUrl = "Enter a valid URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Form submitted successfully! (You can now add logic to create the card)");
      // Logic to add the new class to state goes here
      navigate("/live-classes");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto space-y-5">
      <h2 className="text-xl font-semibold text-center bg-[#CA406F] text-white p-3 rounded-md">
        Add Live Class
      </h2>

      {/* Class Name */}
      <div className="flex flex-col gap-1">
        <label>Class Name</label>
        <input
          name="className"
          value={formData.className}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md"
        />
        {errors.className && <p className="text-red-500 text-sm">{errors.className}</p>}
      </div>

      {/* Branch */}
      <div className="flex flex-col gap-1">
        <label>Branch</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        {errors.branch && <p className="text-red-500 text-sm">{errors.branch}</p>}
      </div>

      {/* Course */}
      <div className="flex flex-col gap-1">
        <label>Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="MERN">MERN</option>
          <option value="Python">Python</option>
        </select>
        {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
      </div>

      {/* Batch */}
      <div className="flex flex-col gap-1">
        <label>Batch</label>
        <input
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md"
        />
        {errors.batch && <p className="text-red-500 text-sm">{errors.batch}</p>}
      </div>

      {/* Date, Start, End Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label>Class Date</label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        <div className="flex flex-col gap-1 relative">
          <label>Start Time</label>
          <input
            name="startTime"
            type="time"
            value={formData.startTime}
            onChange={handleChange}
            className="p-3  border border-gray-300 rounded-md"
          />
          {/* <MdAccessTimeFilled className="absolute right-3 top-9 text-gray-500" />
          {errors.startTime && <p className="text-red-500 text-sm">{errors.startTime}</p>} */}
        </div>

        <div className="flex flex-col gap-1 relative">
          <label>End Time</label>
          <input
            name="endTime"
            type="time"
            value={formData.endTime}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md"
          />
          {/* <MdAccessTimeFilled className="absolute right-3 top-9 text-gray-500" />
          {errors.endTime && <p className="text-red-500 text-sm">{errors.endTime}</p>} */}
        </div>
      </div>

      {/* Instructor */}
      <div className="flex flex-col gap-1">
        <label>Instructor</label>
        <select
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select</option>
          <option value="John">John</option>
          <option value="Elon Musk">Elon Musk</option>
        </select>
        {errors.instructor && <p className="text-red-500 text-sm">{errors.instructor}</p>}
      </div>

      {/* Video URL */}
      <div className="flex flex-col gap-1">
        <label>Video URL</label>
        <input
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md"
        />
        {errors.videoUrl && <p className="text-red-500 text-sm">{errors.videoUrl}</p>}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 border border-[#0400FF] text-[#0400FF] rounded-md hover:bg-[#0400ff1a]"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-5 py-2 bg-[#CA406F] text-white rounded-md hover:bg-[#b43763]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddLiveClassForm;
