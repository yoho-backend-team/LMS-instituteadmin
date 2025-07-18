// ViewCardPage.tsx
import React from "react";
import { X } from "lucide-react";
import aadhaarImage from '../../assets/aadhar.png';
import bgImage from "../../assets/bgg.png";
import { useNavigate } from "react-router-dom";
import closeImage from '../../assets/close.png'

const ViewCardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <img src={closeImage} onClick={handleClose} className="w-5 h-5 ml-125" />
        <div className="flex flex-col items-center">
          <img
            src={aadhaarImage}
            alt="ID Card"
            className="w-full max-w-sm rounded-lg shadow"
          />

          {/* Details */}
          <div className="mt-6 text-left w-full space-y-2">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              RVR <span className="ml-2 text-yellow-500">⭐</span>
              <span className="inline-block mt-2 ml-102 px-3 py-1 text-sm text-white bg-green-500 rounded-full w-fit">
                Active
              </span>
            </h2>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Title :</span> RVR
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Course Name :</span> Manual Testing Basic
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Description :</span> Tvttb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardPage;
