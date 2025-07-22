import React from "react";
import editIcon from "../../../Assets/editIcon.png";
import Dropleft from "../../../Assets/Dropleft.png";
import back from "../../../Assets/back.png";

interface CourseDetailProps {

  course: {
    id: number;
    title: string;
    tag: string;
    image: string;
  };


  onBack: () => void;
  onEdit: () => void; // NEW
}

const CourseDetail: React.FC<CourseDetailProps> = ({  onBack, onEdit }) => {
  return (
    <div
      className="min-h-screen w-full p-5 flex justify-center items-start bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="w-full max-w-4xl">
        {/* Back Arrow Button */}
        <div className="mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#e00076] font-semibold"
          >
            <img src={Dropleft} alt="Back" className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl p-4 shadow-md relative">
          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1 flex items-center gap-2 text-sm"
          >
            <img src={editIcon} alt="Edit" className="w-4 h-4" />
            Edit
          </button>

          {/* Course Image Box */}
          <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>

          {/* Schedule and Price */}
          <div className="flex justify-between items-center px-1 text-sm text-gray-700 mb-2">
            <span className="flex items-center gap-1">
              <span className="text-lg">🕒</span> Mon–Fri | 10AM - 8PM
            </span>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-base">₹1,00,000</span>
              <button className="bg-[#e00076] hover:bg-[#c70065] text-white px-4 py-1 rounded-md text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
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
    </div>
  );
};

export default CourseDetail;
