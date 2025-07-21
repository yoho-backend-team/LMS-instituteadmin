import React from "react";
import aadhaarImage from '../../assets/aadhar.png';
import bgImage from "../../assets/Backgroundimage.png";
import closeImage from '../../assets/close.png';
import { useNavigate } from "react-router-dom";

const ViewCardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full bg-black/40 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-lg p-6 m-4">
        <img
          src={closeImage}
          onClick={() => navigate(-1)}
          className="w-5 h-5 ml-auto cursor-pointer"
          alt="Close"
        />
        <div className="flex flex-col items-center">
          <img
            src={aadhaarImage}
            alt="ID Card"
            className="w-full max-w-sm rounded-lg shadow"
            style={{
              boxShadow: `
                -4px -4px 6px rgba(255, 255, 255, 0.3),
                 4px  4px 6px rgba(0, 0, 0, 0.25)
              `,
            }}
          />
          <div className="mt-6 text-left w-full space-y-2">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              RVR <span className="ml-2 text-yellow-500">⭐</span>
              <span className="inline-block mt-2 ml-auto px-3 py-1 text-sm text-white bg-green-500 rounded-lg">
                Active
              </span>
            </h2>
            <p className="text-sm text-gray-700"><strong>Title:</strong> RVR</p>
            <p className="text-sm text-gray-700"><strong>Course:</strong> Manual Testing Basic</p>
            <p className="text-sm text-gray-700"><strong>Description:</strong> Tvttb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardPage;
