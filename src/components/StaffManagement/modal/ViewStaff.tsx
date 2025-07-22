import React, { useState } from "react";
import { IoInformationCircle, IoShieldCheckmark } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { LiaUserCheckSolid } from "react-icons/lia";
import { TbGraphFilled } from "react-icons/tb";

import InfoTab from "../TabContent/Info";
import SecurityTab from "../TabContent/Security";
import ClassesTab from "../TabContent/Classes";
import AttendanceTab from "../TabContent/Attendance";
import ActivityTab from "../TabContent/Acitivity";

interface ViewStaffProps {
  staff: {
    name: string;
    email: string;
    status: string;
    image: string;
  };
  onBack: () => void;
}

const ViewStaff: React.FC<ViewStaffProps> = ({ staff, onBack }) => {
  const [activePage, setActivePage] = useState("info");

  const tabButtonStyle = (page: string) =>
    `px-4 py-2 border flex items-center gap-2 rounded transition-all ${
      activePage === page
        ? "bg-green-600 text-white"
        : "bg-white text-gray-700 hover:bg-green-100"
    }`;

  return (
    <div className=" flex flex-col gap-4">
      <button
        className="self-start bg-gray-200 px-3 py-2 rounded"
        onClick={onBack}
      >
        ← Back to Staff List
      </button>

      {/* Profile Header */}
      <div className="flex gap-4 bg-white rounded-xl shadow-md p-3">
        <div className="w-32 h-28 rounded-full overflow-hidden border">
          <img
            src={staff.image || "https://via.placeholder.com/150"}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold">{staff.name}</h2>
          <p
            className={`px-4 py-1 rounded-lg text-white text-sm font-medium ${
              staff.status.toLowerCase() === "active"
                ? "bg-green-600"
                : "bg-red-500"
            }`}
          >
            {staff.status}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 flex-wrap">
        <button
          className={tabButtonStyle("info")}
          onClick={() => setActivePage("info")}
        >
          <IoInformationCircle size={20} /> Info
        </button>
        <button
          className={tabButtonStyle("security")}
          onClick={() => setActivePage("security")}
        >
          <IoShieldCheckmark size={20} /> Security
        </button>
        <button
          className={tabButtonStyle("classes")}
          onClick={() => setActivePage("classes")}
        >
          <RiPresentationFill size={20} /> Classes
        </button>
        <button
          className={tabButtonStyle("attendance")}
          onClick={() => setActivePage("attendance")}
        >
          <LiaUserCheckSolid size={20} /> Attendance
        </button>
        <button
          className={tabButtonStyle("activity")}
          onClick={() => setActivePage("activity")}
        >
          <TbGraphFilled size={20} /> Activity
        </button>
      </div>

      {/* Tab Content */}
      {activePage === "info" && (
        <InfoTab email={staff.email} name={staff.name} />
      )}
      {activePage === "security" && <SecurityTab />}
      {activePage === "classes" && <ClassesTab />}
      {activePage === "attendance" && <AttendanceTab />}
      {activePage === "activity" && <ActivityTab />}
    </div>
  );
};

export default ViewStaff;
