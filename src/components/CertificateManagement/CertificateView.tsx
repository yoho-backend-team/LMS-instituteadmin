import React, { useRef } from "react";
import { toJpeg } from "html-to-image";
import { FaFilter } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const CertificateView = () => {
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (certificateRef.current === null) return;

    toJpeg(certificateRef.current, { quality: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "certificate.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating JPEG:", err);
      });
  };

  const handleNavigate = () => {
    navigate("/Studentcertificate");
  };

  return (
    <div
      id="certificate-wrapper"
      className="min-h-screen bg-gradient-to-b  px-6 py-4"
    >
      <div onClick={() => handleNavigate()} className="">
        {" "}
        <IoArrowBackOutline className="h-6 w-6 bg-[#CA406F] rounded text-white" />
      </div>
      <div className="bg-[#CA406F] px-6 py-3 mt-5 rounded-xl flex justify-between items-center">
        <h2 className="text-white text-xl font-semibold flex">
          <div className="h-6 w-6 bg-gray-100 rounded-full mr-3"></div> Elon
        </h2>
        <button className="bg-white p-1 rounded">
          <TbXboxXFilled className="text-gray-500 w-6 h-6" />
        </button>
      </div>
      <div className="min-h-screen p-6">
        <div
          ref={certificateRef}
          className="bg-white p-10 max-w-3xl mx-auto border-4 border-yellow-400 rounded shadow-lg"
        >
          <h1 className="text-center text-3xl font-bold text-yellow-700">
            Certificate
          </h1>
          <p className="text-center mt-2">Presented to</p>
          <h2 className="text-center text-xl font-semibold mt-1 mb-2">
            Elon Musk
          </h2>
          <p className="text-center text-sm">
            For completing the MEAN STACK 2024 program
          </p>
          <p className="text-center text-sm max-w-3xl mx-auto leading-relaxed">
            The MERN stack is a collection of technologies for building web
            applications using JavaScript. It's made up of MongoDB, Express.js,
            React, and Node.js. MERN is a popular, pre-built, and versatile
            technology stack.
          </p>

          <p className="text-center mt-6">Duration: 6 Months</p>

          <div className="grid grid-cols-2 mt-10 text-center text-sm">
            <div>
              <hr className="w-1/2 mx-auto border-black mb-1" />
              Director
            </div>
            <div>
              <hr className="w-1/2 mx-auto border-black mb-1" />
              Instructor
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <button
            onClick={handleDownload}
            className=" px-4 ml-auto py-2 bg-[#CA406F] text-white rounded "
          >
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;
