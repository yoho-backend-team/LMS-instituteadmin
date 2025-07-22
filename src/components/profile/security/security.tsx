

import { FaRegEyeSlash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Profile_security = () => {
    return (
        <div className="h-full bg-white p-2">
            <div>
                <h4 className="text-lg font-semibold">Change Password</h4>
                <div className="flex gap-10 mt-2 flex-wrap md:flex-nowrap">
                    
                    <div className="w-full md:w-1/2 space-y-3 py-5">
                        <p className="text-sm font-semibold">Password Must Contain:</p>
                        <p className="flex items-center gap-2 text-sm">
                            <TiTick className="" /> At least 6 Characters
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <TiTick className="" /> At least 1 Uppercase Letter (A-Z)
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <TiTick className="" /> At least 1 Lowercase Letter (a-z)
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <TiTick className="" /> At least 1 Number
                        </p>
                    </div>
                   
                    <form className="w-full md:w-1/2">
                        <div className="grid gap-3">
                            
                            <div className="relative">
                                <label className="text-sm"></label>
                                <input
                                    placeholder="Current Password"
                                    type="password"
                                    className="h-10 w-full rounded-sm px-3 pr-10 text-black border border-gray-400"
                                />
                                <FaRegEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer" />
                            </div>

                           
                            <div className="relative">
                                <label className="text-sm"></label>
                                <input
                                    placeholder="New Password"
                                    type="password"
                                    className="h-10 w-full rounded-sm px-3 pr-10 text-black border border-gray-400"
                                />
                                <FaRegEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer" />
                            </div>

                          
                            <div className="relative">
                                <label className="text-sm"></label>
                                <input
                                    placeholder="Confirm New Password"
                                    type="password"
                                    className="h-10 w-full rounded-sm px-3 pr-10 text-black border border-gray-400"
                                />
                                <FaRegEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer" />
                            </div>

                           
                            <div className="h-10 w-full rounded-sm px-3 border bg-[#CA406F] text-white border-gray-400 mt-1 text-center">
                                <button className="py-1.5" type="submit">Change Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile_security;
