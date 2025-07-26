

import Student_Allnotification from "@/components/notificationmanagement/studentnotification/student_all/student_all"
import Student_Read from "@/components/notificationmanagement/studentnotification/student_read/student_read"
import Student_Unread from '@/components/notificationmanagement/studentnotification/student_unread/student_unread'
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router";

const StudentNotification_c = () => {
    const [activeTab, setActiveTab] = useState("all");

    const renderContent = () => {
        switch (activeTab) {
            case "all":
                return <div><Student_Allnotification/></div>;
            case "read":
                return <div><Student_Read/></div>;
            case "unread":
                return <div><Student_Unread/></div>;
            default:
                return null;
        }
    };

    return (
        <div className="px-5">
           <Link to="/Studentnotification">
  <MdKeyboardArrowLeft />
</Link>
            
            <div className="mb-5 text-lg font-bold">
                STUDENT NOTIFICATION
            </div>

            
            <div className="flex gap-3 mb-4">
                <button
                    className={`px-3 py-1 rounded-sm text-sm text-center ${
                        activeTab === "all" ? "bg-[#CA406F] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setActiveTab("all")}
                >
                    All Notification
                </button>
                <button
                    className={`px-3 py-1 rounded-sm text-sm text-center ${
                        activeTab === "read" ? "bg-[#CA406F] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setActiveTab("read")}
                >
                    Read
                </button>
                <button
                    className={`px-3 py-1 rounded-sm text-sm text-center ${
                        activeTab === "unread" ? "bg-[#CA406F] text-white" : "bg-gray-200"
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

export default StudentNotification_c;
