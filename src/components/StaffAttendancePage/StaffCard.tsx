import React from "react";
import { useNavigate } from "react-router-dom";

interface StaffCardProps {
  name: string;
  email: string;
  id: number;
  present: number;
  absent: number;
  imageUrl: string;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  email,
  id,
  present,
  absent,
  imageUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-sm">
      <div className="flex items-center gap-4 mb-3">
        <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">Email: {email}</p>
        </div>
      </div>
      <p className="text-center text-[#d81b60] font-semibold text-lg mb-3">
        ID : {id}
      </p>
      <div className="flex justify-between mb-3">
        <div className="text-center border rounded-md px-4 py-2 text-green-600 font-semibold">
          <div>{present}</div>
          <div className="text-sm">Present</div>
        </div>
        <div className="text-center border rounded-md px-4 py-2 text-pink-600 font-semibold">
          <div>{absent}</div>
          <div className="text-sm">Absent</div>
        </div>
      </div>
      <button
        onClick={() => navigate(`/attendance/${id}`)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold"
      >
        View Attendance
      </button>
    </div>
  );
};

export default StaffCard;
