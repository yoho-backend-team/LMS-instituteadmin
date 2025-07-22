
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import Profile_security from "@/components/profile/security/security";
import Timeline from "@/components/profile/timeline/timeline";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("account"); // default tab

    return (
        <div className="h-screen p-4">
            <div className="text-xl font-semibold mb-4">Profile</div>
            <div className="flex gap-5 h-[calc(100vh-80px)]">

                <div className="bg-white w-72 px-5 py-5 space-y-6 rounded-sm shadow-2xl h-full">
                    <p
                        onClick={() => setActiveTab("account")}
                        className={`flex items-center cursor-pointer hover:bg-gray-300 px-3 gap-5 h-10 rounded-sm border-2
                            ${activeTab === "account" ? "bg-[#CA406F] text-white " : "border-gray-300"}`}>
                        <FaRegUser />
                        Account
                    </p>
                    <p
                        onClick={() => setActiveTab("security")}
                        className={`flex items-center cursor-pointer hover:bg-gray-300 px-3 gap-5 h-10 rounded-sm border-2
                            ${activeTab === "security" ? "bg-[#CA406F] text-white " : "border-gray-300"}`}>
                        <MdOutlineSecurity />
                        Security
                    </p>
                    <p
                        onClick={() => setActiveTab("timeline")}
                        className={`flex items-center cursor-pointer hover:bg-gray-300 px-3 gap-5 h-10 rounded-sm border-2
                            ${activeTab === "timeline" ? "bg-[#CA406F] text-white " : "border-gray-300"}`}>
                        <FaRegUser />
                        Timeline
                    </p>
                </div>


                <div className="flex-1 h-full">
                    {activeTab === "account" && (
                        <div className="h-full flex flex-col">
                            <div className="bg-white p-4 rounded shadow flex flex-col gap-6 relative h-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRs80wcNFYC-cDoRbj54Bg1KtvTx_WPXyQodNfddw7B-fe9kUHyYDX0ZHmjWZLmdPAgoeCH72hBbtGa44Uy4dBn7NuAl19jbYMaaLbW20X5"
                                        alt=""
                                        className="w-20 h-20 object-cover rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-lg">Albert Einstein</p>
                                        <p className="text-sm text-gray-600">Trainee ID: LLL12345</p>
                                        <button className="mt-2 bg-green-500 text-white text-sm px-3 py-1 rounded-sm">
                                            Active
                                        </button>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <button className="bg-[#CA406F] text-white px-3 py-1 text-sm rounded">
                                            Institute Admin
                                        </button>
                                    </div>
                                </div>
                                <hr />

                                <div className="rounded flex-grow relative">
                                    <h4 className="font-semibold text-lg mb-4">User Details</h4>
                                    <div className="flex gap-8 justify-between">
                                        <div>
                                            <p className="font-medium text-gray-600">Name</p>
                                            <p>Chandran</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600">Email</p>
                                            <p>chandran@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600">Status</p>
                                            <p>Active</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600">Contact</p>
                                            <p>+919988776655</p>
                                        </div>
                                    </div>

                                    <Link
                                        to="/profiledit"
                                        className="bg-green-600 text-white rounded-sm p-2 absolute right-12 bottom-4"
                                    >
                                        Edit Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <Profile_security />
                    )}


                    {activeTab === "timeline" && (
                       <Timeline/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
