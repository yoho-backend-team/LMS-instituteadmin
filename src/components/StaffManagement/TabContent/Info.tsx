import React from "react";
import { FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoTransgenderOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

interface Props {
  name: string;
  email: string;
}

const InfoTab: React.FC<Props> = ({ name, email }) => (
  <div>
    <div className="bg-[#CA406F] p-3 rounded-t-lg">
      <h3 className="text-lg text-white">User Details</h3>
    </div>

    <div className="bg-white">
      <form>
        {/* Personal Information */}
        <div>
          <h3 className="font-semibold px-2 pt-2 text-[#7D7D7D]">Personal Information</h3>
          <div className="p-2 grid grid-cols-3 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaUser className="text-[#CA406F]" />
                <label>User Name</label>
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
                <label>Email</label>
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
                <label>Role</label>
              </div>
              <input
                type="text"
                value="Faculty"
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoTransgenderOutline className="text-[#CA406F]" />
                <label>Gender</label>
              </div>
              <input
                type="text"
                value="Male"
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* DOB */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#CA406F]" />
                <label>Date Of Birth</label>
              </div>
              <input
                type="text"
                value="1990-01-01"
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
          <h3 className="font-semibold px-2 text-[#7D7D7D]">Contact Information</h3>
          <div className="grid grid-cols-3 p-2 gap-4">
            {/* Primary Number */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#CA406F]" />
                <label>Primary Number</label>
              </div>
              <input
                type="text"
                value="9876543210"
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>

            {/* Alternative Number */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#CA406F]" />
                <label>Alternative Number</label>
              </div>
              <input
                type="text"
                value="8765432109"
                readOnly
                className="border h-10 rounded-lg px-2"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default InfoTab;
