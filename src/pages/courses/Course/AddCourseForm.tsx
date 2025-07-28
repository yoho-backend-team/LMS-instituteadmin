import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import card1 from "../../../Assets/card1.png";


type AddCourseFormProps = {
  onBack: () => void;
};

const AddCourseForm = ({ onBack }: AddCourseFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-[1278px] w-full bg-white p-6 rounded-xl mx-auto mt-10 font-[Poppins]">
      {!isSubmitted ? (
        <>
          <h2 className="text-2xl font-semibold text-[#e00080] mb-8">
            Add New Course
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Enter course name"
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Course Duration
                </label>
                <select
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                >
                  <option>Select Duration</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Actual Price
                </label>
                <input
                  type="text"
                  placeholder="Enter actual price"
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Current Price
                </label>
                <input
                  type="text"
                  placeholder="Enter current price"
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Star Rating
                </label>
                <input
                  type="text"
                  placeholder="Enter rating"
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Total Review
                </label>
                <input
                  type="text"
                  placeholder="Enter total reviews"
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Select Branches
                </label>
                <select
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                >
                  <option>Select Branch</option>
                  <option>Branch A</option>
                  <option>Branch B</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Select Category
                </label>
                <select
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                >
                  <option>Select Category</option>
                  <option>Design</option>
                  <option>Development</option>
                </select>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Learning Format
                </label>
                <select
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md"
                >
                  <option>Select Format</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Course Overview
                </label>
                <textarea
                  placeholder="Write overview..."
                  rows={3}
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md resize-none"
                ></textarea>
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Course Description
                </label>
                <textarea
                  placeholder="Write description..."
                  rows={3}
                  required
                  className="p-3 text-sm border border-gray-300 rounded-md resize-none"
                ></textarea>
              </div>
            </div>

            {/* Row 7 */}
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Thumbnail
                </label>
                <label className="border border-dashed border-gray-400 p-5 rounded-md bg-gray-50 text-center cursor-pointer text-gray-600 flex flex-col items-center">
                  <FaCloudUploadAlt className="text-blue-600 text-2xl mb-1" />
                  <span>Choose File</span>
                  <input type="file" hidden />
                </label>
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium text-sm text-[#7D7D7D] mb-1">
                  Main Image
                </label>
                <label className="border border-dashed border-gray-400 p-5 rounded-md bg-gray-50 text-center cursor-pointer text-gray-600 flex flex-col items-center">
                  <FaCloudUploadAlt className="text-blue-600 text-2xl mb-1" />
                  <span>Choose File</span>
                  <input type="file" hidden />
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                className="px-5 py-2 bg-gray-200 rounded-md font-medium"
                onClick={onBack} 
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#e00080] text-white rounded-md font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="p-20 text-center bg-white rounded-xl shadow-md">
          <h2 className="text-[#e00076] mb-3 text-2xl font-semibold">
            Thank you for submitting!
          </h2>
          <img
            src={card1}
            alt="Course Submitted"
            className="mx-auto mt-4 w-48 h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default AddCourseForm;
