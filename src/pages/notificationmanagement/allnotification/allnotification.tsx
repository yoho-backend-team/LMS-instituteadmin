

import All from "@/components/notificationmanagement/overallnotification/all/all";
import Read from "@/components/notificationmanagement/overallnotification/read/read";
import UnRead from "@/components/notificationmanagement/overallnotification/unread/unread";
import { useState } from "react";

const Allnotification = () => {
    const [activeTab, setActiveTab] = useState("all");

    const renderContent = () => {
        switch (activeTab) {
            case "all":
                return <div><All/></div>;
            case "read":
                return <div><Read/></div>;
            case "unread":
                return <div><UnRead/></div>;
            default:
                return null;
        }
    };

    return (
        <div className="px-5">
            {/* TITLE */}
            <div className="mb-5 text-lg font-bold">
                OVERALL NOTIFICATION
            </div>

            {/* NAVBAR */}
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

export default Allnotification;
