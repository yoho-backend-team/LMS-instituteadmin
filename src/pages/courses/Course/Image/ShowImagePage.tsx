// src/Components/ShowImagePage.tsx
import React from "react";
import card1 from "../../Assets/card1.png"; // your image path

const ShowImagePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <img src={card1} alt="Submitted Image" className="w-96 shadow-lg rounded" />
    </div>
  );
};

export default ShowImagePage;
