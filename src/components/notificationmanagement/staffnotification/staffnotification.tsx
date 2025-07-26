


import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router";
import Staff_Read from "./staff_read/staff_read";
import Staff_Unread from "./staff_unread/staff_unread";
import Staff_All from "./staff_all/staff_all";

const StaffNotification_c = () => {
    const [activeTab, setActiveTab] = useState("all");

    const renderContent = () => {
        switch (activeTab) {
            case "all":
                return <div><Staff_All /></div>;
            case "read":
                return <div><Staff_Read /></div>;
            case "unread":
                return <div><Staff_Unread /></div>;
            default:
                return null;
        }
    };

    return (
        <div className="px-5">
            <Link to="/Staffnotification">
                <MdKeyboardArrowLeft />
            </Link>

            <div className="mb-5 text-lg font-bold">
                STAFF NOTIFICATION
            </div>


            <div className="flex gap-3 mb-4">
                <button
                    className={`px-3 py-1 rounded-sm text-sm text-center ${activeTab === "all" ? "bg-[#CA406F] text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setActiveTab("all")}
                >
                    All Notification
                </button>
                <button
                    className={`px-3 py-1 rounded-sm text-sm text-center ${activeTab === "read" ? "bg-[#CA406F] text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setActiveTab("read")}
                >
                    Read
                </button>
                <button
                    className={`px-3 py-1 rounded-sm text-sm text-center ${activeTab === "unread" ? "bg-[#CA406F] text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setActiveTab("unread")}
                >
                    Unread
                </button>
            </div>

            {/* CONTENT */}
            <div className="bg-white p-4 rounded border">
                {renderContent()}
            </div>
        </div>
    );
};

export default StaffNotification_c;
