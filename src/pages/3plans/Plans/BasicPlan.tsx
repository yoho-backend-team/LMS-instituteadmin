import React, { useState } from "react";
// import back from "../../../Assets/back.png";
import check from "../../../Assets/check.png";
import close from "../../../Assets/close.png";

interface Props {
  goBackToSubscription: () => void;
}

const BasicPlan: React.FC<Props> = ({ goBackToSubscription }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${""})` }}
    >
      {!showDetail ? (
        <>
          {/* Header */}
          <div className="bg-[#cc2f6b] text-white rounded-xl p-6 w-full max-w-5xl mx-auto shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Basic PLAN</h2>
              <p className="text-sm mt-1">The Plan is for Basic Plan</p>
            </div>
            <div
              className="bg-white rounded-full p-1 cursor-pointer"
              onClick={goBackToSubscription}
            >
              <img src={close} alt="close" className="w-6 h-6" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6 mt-8 max-w-5xl mx-auto">
            {/* Feature Box */}
            <div className="bg-white bg-opacity-90 shadow-md rounded-xl p-6 w-full md:w-2/3">
              <h3 className="text-gray-600 font-semibold mb-4 tracking-wide">
                FEATURES
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Admins",
                  "Students",
                  "Teachers",
                  "Batches",
                  "Courses",
                  "Classes",
                  "Fees",
                  "Time Table",
                  "Exam",
                  "Reports",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <img src={check} alt="tick" className="w-4 h-4" />
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Card */}
            <div className="bg-white bg-opacity-90 shadow-md rounded-xl p-6 w-full md:w-1/3">
              <div className="w-full h-36 bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img
                  src=""
                  alt="Plan"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700 mb-2 text-sm">
                COURSE TYPE : <span className="text-gray-500">BASIC</span>
              </p>
              <p className="font-semibold text-gray-700 mb-2 text-sm">
                ABOUT COURSE :{" "}
                <span className="text-gray-500">
                  This plan is for Basic Plan
                </span>
              </p>
              <p className="font-semibold text-gray-700 mb-4 text-sm">
                COURSE PRICE : <span className="text-gray-500">₹15,000</span>
              </p>
              <div className="flex justify-between">
                <button
                  className="border-2 border-[#cc2f6b] text-[#cc2f6b] rounded-lg px-6 py-2 font-semibold hover:bg-[#fef0f5] text-sm"
                  onClick={goBackToSubscription}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowDetail(true)}
                  className="bg-[#cc2f6b] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#b2265a] text-sm"
                >
                  Your Plan
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Detail View
        <div className="min-h-screen flex items-center justify-center bg-white bg-opacity-80 rounded-xl p-10 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#cc2f6b] mb-4">
              Welcome to Your Basic Plan
            </h1>
            <p className="text-gray-600 text-lg">
              This is the Basic Plan Detail Page
            </p>
            <button
              className="mt-6 px-6 py-2 bg-[#cc2f6b] text-white rounded-lg hover:bg-[#b2265a]"
              onClick={() => setShowDetail(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicPlan;
