
import  { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import OfflineFilter from "@/components/classmanagement/offline_filter/offline_filter";


 const Tablecontent = [
        {
            title: "MERN",
            subtitle: " student on this class",
            date: "2025-07-20",
            day: "Sunday",
            time: "10:00 AM - 12:00 PM",
            totalStudents: 1,
        },
        {
            title: "Where Begins The Web History",
            subtitle: " students on this class",
            date: "2025-07-21",
            day: "Monday",
            time: "2:00 PM - 4:00 PM",
            totalStudents: 2,
        },

    ]

const OfflineClassPage = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className="p-3">
            <div className="text-2xl font-semibold">Offline Class</div>

            <div className="flex justify-between py-5 text-white">
                <div>
                    <button
                        onClick={toggleFilter}
                        className="bg-[#CA406F] w-28 h-8 rounded-sm flex items-center justify-center gap-2 text-sm text-white"
                    >
                        <IoMdAdd size={20} />
                        {showFilter ? "Hide Filter" : "Show Filter"}
                    </button>
                </div>
                <div>
                    <button className="bg-[#CA406F] w-44 h-8 gap-2 rounded-sm flex items-center justify-center  text-sm">
                        <IoMdAdd size={20} />
                        Add Offline Classes
                    </button>
                </div>
            </div>

            {showFilter && (
                <div className="">
                    <OfflineFilter />
                </div>
            )}

            <div className="grid grid-cols-3 gap-2 w-full">
                {Tablecontent.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 rounded-2xl p-3 shadow-2xl relative"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <div className="h-[40px] w-[40px] rounded-full overflow-hidden border-2 border-gray-300">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75N_tftPWlyK4Q5-QDx_QZtLFJAG7JiDM3A&s"
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <FiMoreVertical
                                className="text-gray-500 text-xl cursor-pointer"
                                onClick={() =>
                                    setActiveMenuIndex(
                                        activeMenuIndex === index ? null : index
                                    )
                                }
                            />
                        </div>

                        <div className="font-bold text-gray-500 mb-2">{item.title}</div>
                        <div className="text-sm text-gray-700 mb-2">
                            {item.totalStudents}
                            {item.subtitle}
                        </div>

                        <div className="text-sm text-gray-600 mt-2">
                            <div className="flex gap-2">
                                <FaCalendarAlt size={20} />
                                <div className="text-sm">
                                    {item.day} {item.date} | {item.time}
                                </div>
                            </div>
                        </div>

                        <div className=" mt-3 relative px-50">
                            <button
                            onClick={() => {
                                        setActiveMenuIndex(null);
                                        navigate("/offlineviewmore");
                                    }}
                            className="bg-green-500 px-1 py-1 w-24 h-8 rounded-sm text-white text-sm">
                                View More
                            </button>
                        </div>

                        {activeMenuIndex === index && (
                            <div className="absolute top-10 right-3 mt-2 w-28 bg-white border rounded-lg shadow-lg z-10">
                                <button
                                    onClick={() => {
                                        setActiveMenuIndex(null);
                                        navigate("/offlineedit");
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveMenuIndex(null);
                                        
                                        alert(`Delete clicked for ${item.title}`);
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfflineClassPage;
