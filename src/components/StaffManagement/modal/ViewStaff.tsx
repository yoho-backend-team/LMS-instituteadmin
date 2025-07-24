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
import { IoIosArrowBack } from "react-icons/io";

interface ViewStaffProps {
  staff: {
    name: string;
    email: string;
    status: string;
    image?: string;
    dob?: string;
    gender?: string;
    course?: string;
    designation?: string;
    qualification?: string;
    state?: string;
    city?: string;
    pinCode?: string;
    address1?: string;
    address2?: string;
    phone?: string;
    altPhone?: string;
  };
  onBack: () => void;
}

const ViewStaff: React.FC<ViewStaffProps> = ({ staff, onBack }) => {
  const [activePage, setActivePage] = useState("info");

  const tabButtonStyle = (page: string) =>
    `px-4 py-2 border flex items-center gap-2 rounded-sm transition-all border-[#716F6F]  ${
      activePage === page
        ? "bg-green-600 text-white"
        : "bg-tranparent border-2 text-[#716F6F] hover:bg-green-100"
    }`;
  return (
    <div className=" flex flex-col gap-4">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-[#CA406F]  rounded-full "
      >
        <IoIosArrowBack size={20} />
      </button>

      {/* Profile Header */}
      <div className="flex gap-4 bg-white rounded-sm shadow-md p-3">
        <div className="w-28 h-24 rounded-full overflow-hidden border bg-gray-100 flex items-center justify-center text-3xl font-bold text-[#CA406F] uppercase">
          {staff.image ? (
            <img
              src={staff.image}
              alt={staff.name}
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : (
            staff.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
          )}
        </div>

        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold text-[#716F6F]">{staff.name}</h2>
          <p
            className={`px-8 py-2 rounded-sm text-white text-lg font-medium ${
              staff.status.toLowerCase() === "active"
                ? "bg-green-600"
                : "bg-red-500"
            }`}
          >
            {staff.status || "Inactive"}
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
        <InfoTab
          name={staff.name}
          email={staff.email}
          gender={staff.gender}
          dob={staff.dob}
          primaryNumber={staff.phone}
          alternativeNumber={staff.altPhone}
          role={staff.designation}
        />
      )}
      {activePage === "security" && <SecurityTab />}
      {activePage === "classes" && <ClassesTab />}
      {activePage === "attendance" && <AttendanceTab />}
      {activePage === "activity" && <ActivityTab />}
    </div>
  );
};

export default ViewStaff;
