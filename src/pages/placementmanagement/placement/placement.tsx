
import { IoMdAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Placement = () => {
    const placements = [
        {
            student: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
            company: "TCS",
            interviewDate: "2025-07-25",
            jobName: "Software Engineer",
        },
        {
            student: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
            company: "Infosys",
            interviewDate: "2025-07-28",
            jobName: "Data Analyst",
        },
    ];

    const [activeMenuIndex, setActiveMenuIndex] = useState(null);

    return (
        <div>
            <div>
                <h2 className="font-semibold">Placement</h2>
            </div>
            <div className="py-5 flex justify-end">
                <Link
                    to={"/placememntadd"}
                    className="bg-[#CA406F] w-34 h-8 gap-2 rounded-sm flex items-center justify-center text-white text-sm"
                >
                    <IoMdAdd size={20} />
                    Add Placement
                </Link>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
                {/* Header */}
                <div className="bg-gray-100 shadow-lg rounded-md p-4 mb-2">
                    <div className="flex items-center justify-between text-sm font-semibold">
                        <p className="w-1/5">Students</p>
                        <p className="w-1/5">Company Name</p>
                        <p className="w-1/5">Interview Date</p>
                        <p className="w-1/5">Job Name</p>
                        <p className="w-1/5 text-right">Active</p>
                    </div>
                </div>

                {/* Data rows */}
                <div className="space-y-4">
                    {placements.map((placement, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4">
                            <div className="flex items-center justify-between text-sm">
                                <div className="w-1/5">
                                    <img
                                        src={placement.student}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full object-cover border border-gray-300"
                                    />
                                </div>
                                <p className="w-1/5">{placement.company}</p>
                                <p className="w-1/5">{placement.interviewDate}</p>
                                <p className="w-1/5">{placement.jobName}</p>
                                <div className="relative w-1/5 text-right">
                                    <BsThreeDotsVertical
                                        className="h-4 w-4 text-red-500 cursor-pointer inline-block"
                                        onClick={() =>
                                            setActiveMenuIndex(
                                                activeMenuIndex === index ? null : index
                                            )
                                        }
                                    />

                                    {activeMenuIndex === index && (
                                        <div className="absolute right-0 mt-2 bg-white rounded shadow-2xl p-2 z-10 w-28">
                                            <div className="flex flex-col justify-center space-y-1">
                                                <Link
                                                    to={"/placememntedit"}
                                                    className="w-full hover:bg-[#CA406F] hover:text-white py-1 rounded border-1 border-gray-300 flex items-center gap-2 pl-2"
                                                >
                                                    <FaEdit className="text-sm" />
                                                    <span>Edit</span>
                                                </Link>
                                                <Link
                                                    to={""}
                                                    className="w-full hover:bg-[#CA406F] hover:text-white py-1 rounded border-1 border-gray-300 flex items-center gap-2 pl-2"
                                                    onClick={() => {
                                                        setActiveMenuIndex(null);
                                                        alert("Deleted Successfully");
                                                    }}
                                                >
                                                    <MdDelete className="text-sm" />
                                                    <span>Delete</span>
                                                </Link>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Placement;
