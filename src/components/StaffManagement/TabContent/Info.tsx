import React from "react";
import { FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaVenusMars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface Props {
  name: string;
  email: string;
  gender?: string;
  dob?: string;
  primaryNumber?: string;
  alternativeNumber?: string;
  role?: string;
}

const InfoTab: React.FC<Props> = ({
  name,
  email,
  gender,
  dob,
  primaryNumber,
  alternativeNumber,
  role,
}) => (
  <div className="">
    <div className="bg-[#CA406F] p-3 rounded-t-sm">
      <h3 className="text-lg text-white font-semibold ">User Details</h3>
    </div>

    <div className="bg-white rounded-b-sm">
      <form>
        {/* Personal Information */}
        <div>
          <h3 className="font-semibold px-2 pt-2 text-[#716F6F] text-xl">
            Personal Information
          </h3>
          <div className="p-2 grid grid-cols-3 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaUser className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">User Name</label>
              </div>
              <input
                type="text"
                value={name}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MdEmail className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">Email</label>
              </div>
              <input
                type="email"
                value={email}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">Role</label>
              </div>
              <input
                type="text"
                value={role || ""}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaVenusMars className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">Gender</label>
              </div>
              <input
                type="text"
                value={gender || ""}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* DOB */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">Date Of Birth</label>
              </div>
              <input
                type="text"
                value={dob || ""}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4 mx-2" />

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold px-2 text-[#716F6F] text-xl">
            Contact Information
          </h3>
          <div className="grid grid-cols-3 p-2 gap-4">
            {/* Primary Number */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">Primary Number</label>
              </div>
              <input
                type="text"
                value={primaryNumber || ""}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* Alternative Number */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#CA406F]" />
                <label className="text-[#7D7D7D] font-medium">Alternative Number</label>
              </div>
              <input
                type="text"
                value={alternativeNumber || ""}
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>
          </div>
        </div>
         {/* Divider */}
        <div className="border-t border-gray-300 my-4 mx-2 " />
        <div className="p-2">

        </div>
      </form>
    </div>
  </div>
);

export default InfoTab;
