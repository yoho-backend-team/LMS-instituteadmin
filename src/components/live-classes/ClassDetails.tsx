

// src/components/live-classes/ClassDetails.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ClassDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-background rounded shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-[#CA406F]">Class Details</h2>

      <div className="space-y-2">
        <p><strong>Class ID:</strong> {id}</p>
        <p><strong>Title:</strong> MERN Stack</p>
        <p><strong>Instructor:</strong> Jane Doe</p>
        <p><strong>Date:</strong> Thu, July 12, 2025</p>
        <p><strong>Time:</strong> 12:00 PM – 01:00 PM</p>
        <p><strong>Students:</strong> 2</p>
        <p><strong>Video Link:</strong> <a href="#" className="text-blue-600 underline">Watch Recording</a></p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ClassDetails;