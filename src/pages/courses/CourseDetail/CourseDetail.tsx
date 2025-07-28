import React, { useState } from "react";
import editIcon from "../../../Assets/editIcon.png";
import Dropleft from "../../../Assets/Dropleft.png";

interface CourseDetailProps {
  course: {
    id: number;
    title: string;
    tag: string;
    image: string;
  };
  onBack: () => void;
  onEdit: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({
  course,
  onBack,
  onEdit,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  
  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return (
      <div className="w-full max-w-4xl text-center mt-10">
        <p className="text-xl text-gray-500"> This course has been deleted.</p>
        <button
          onClick={onBack}
          className="mt-4 text-[#e00076] underline font-semibold"
        >
          ← Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#e00076] font-semibold"
        >
          <img src={Dropleft} alt="Back" className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Course Info */}
      <div className="bg-white rounded-xl p-4 shadow-md relative">
        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1 flex items-center gap-2 text-sm"
        >
          <img src={editIcon} alt="Edit" className="w-4 h-4" />
          Edit
        </button>

        {/* Image */}
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="h-full object-contain"
            />
          ) : (
            <span className="text-gray-500">No Image Available</span>
          )}
        </div>

        {/* Details Row */}
        <div className="flex justify-between items-center px-1 text-sm text-gray-700 mb-2">
          <span className="flex items-center gap-1">
            <span className="text-lg">🕒</span> Mon–Fri | 10AM - 8PM
          </span>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-base">₹1,00,000</span>
            <button
              className="bg-[#e00076] hover:bg-[#c70065] text-white px-4 py-1 rounded-md text-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="bg-white rounded-xl shadow-md mt-4 p-2">
        <div className="flex w-full">
          <button className="flex-1 bg-green-500 text-white font-semibold py-2 rounded-l-md">
            Study Materials
          </button>
          <button className="flex-1 text-gray-700 font-semibold py-2 bg-white rounded-r-md">
            Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
