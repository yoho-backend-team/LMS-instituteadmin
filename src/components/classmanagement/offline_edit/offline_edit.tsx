import { FaClock } from "react-icons/fa";
import { useNavigate } from "react-router";

const OfflineEdit = () => {

    const navigate = useNavigate();
    return (
        <div className="p-27 ">
            <div className="grid w-[100%] p-5 bg-white rounded-lg shadow-2xl">
                <div>
                    <div className="bg-[#CA406F] text-white font-semibold text-center rounded-sm w-full h-10 py-2">Edit Offline Class </div>
                </div>
                <form>
                    <div className="grid relative py-3" >
                        <label className="mb-1 text-sm ">Class Name</label>
                        <input
                            type="text"
                            name="state"
                            readOnly
                            className="border-black/40 px-2 h-10 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                    </div>
                    

                    <div className="flex justify-between gap-4">
                        
                        <div className="grid w-full">
                            <label className="mb-2 text-sm">Start Time</label>
                            <input
                                type="text"
                                name="startTime"
                                readOnly
                                className="w-full h-9 px-3 border border-black/40 rounded-sm placeholder:text-gray-400 cursor-pointer"
                            />
                        </div>

                        <div className="grid w-full">
                            <label className="mb-2 text-sm">Add Date</label>
                            <div className="flex items-center relative">
                                <FaClock className="absolute left-2 text-gray-500" />
                                <input
                                    type="text"
                                    name="addDate"
                                    readOnly
                                    className="w-full h-9 pl-8 pr-3 border border-black/40 rounded-sm placeholder:text-gray-400 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="grid w-full">
                            <label className="mb-2 text-sm">End Time</label>
                            <div className="flex items-center relative">
                                <FaClock className="absolute left-2 text-gray-500" />
                                <input
                                    type="text"
                                    name="endTime"
                                    readOnly
                                    className="w-full h-9 pl-8 pr-3 border border-black/40 rounded-sm placeholder:text-gray-400 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="grid relative py-3" >
                        <label className="mb-1 text-sm ">Instructors</label>
                        <input
                            type="text"
                            name="state"
                            readOnly
                            className="border-black/40 px-2 h-10 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                    </div>
                    <div className="flex gap-3 justify-end ">
                        <button
                            onClick={() => {
                                navigate("/offlineclass");
                            }}
                            className="text-blue-700 bg-blue-100 w-20 rounded-sm border-blue-500 border">Cancel</button>
                        <button className="bg-[#CA406F] text-white w-20 h-10 rounded-sm"
                            onClick={() => {


                                alert(`Edited data added successfully`);
                            }}>Submit</button>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default OfflineEdit;