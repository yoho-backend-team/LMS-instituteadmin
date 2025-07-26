import { IoIosArrowBack } from "react-icons/io"
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router";


const OfflineView = () => {

    const Tablecontent = [
        {
            title: "MERN",
            email: "student@gmail.com",
            id: "49",
            location: "Chennai",
            address: "pallavaram chennai",

        },
        {
            title: "MERN",
            email: "student@gmail.com",
            id: "49",
            location: "Chennai",
            address: "pallavaram chennai",
        },


    ]

    const Instructor = [
        {
            name: "ELON",
            job: "INSTRUCTOR",

        },
        {
            name: "KRISHNA",
            job: "INSTRUCTOR",

        },
        {
            name: "VELAN",
            job: "INSTRUCTOR",

        },

    ]

    const navigate = useNavigate();
    return (

        <div className="p-3">
            <div className="flex items-center gap-2 cursor-pointer">
                <IoIosArrowBack
                    className="text-2xl text-gray-600 hover:text-black"
                    onClick={() => navigate("/offlinemanagement")}
                />

            </div>

            <div className="flex justify-between mt-7">
                <h4 className="bg-[#CA406F] text-white w-20 text-center h-8 py-1 rounded-sm">MERN</h4>
                <div className="flex justify-end gap-5">
                    <FaClock className="relative top-2 left-3 " />
                    <p className="py-1">DURATION : 6 Months</p>
                    <h4 className="bg-green-600 text-white w-20 text-center h-8 py-1 rounded-sm">OFFLINE</h4>
                </div>
            </div>

            <div className="flex p-5 justify-between bg-white mt-7 rounded-sm shadow-2xl">
                <div className="grid p-2">
                    <p className="text-gray-400 text-sm">Course</p>
                    <p className="font-semibold">MEAN STACT 202</p>
                </div>
                <div className="grid">
                    <p className="text-gray-400 text-sm">Started At</p>
                    <p className="font-semibold">2025-05-21</p>
                </div>
                <div className="grid">
                    <p className="text-gray-400 text-sm">Ended At</p>
                    <p className="font-semibold">2025-05-21</p>
                </div>
                <div className="grid">
                    <p className="text-gray-400 text-sm">Date</p>
                    <p className="font-semibold">2025-05-21</p>
                </div>
            </div>

            <div className="flex items-start justify-between gap-5 mb-15">
                <div className="grid grid-row-3 gap-2 w-72 mt-5  ">
                    <p className="text-lg px-6 font-semibold">Faculty & Co-ordinates</p>
                    {Instructor.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 rounded-2xl shadow-2xl relative w-72 "
                        >
                            <div className="flex justify-between items-center mb-3  mt-4  ml-5">
                                <div className="h-[60px] w-[60px]  rounded-full overflow-hidden border-2 border-gray-300">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75N_tftPWlyK4Q5-QDx_QZtLFJAG7JiDM3A&s"
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="grid mr-30  ">
                                    <div className="text-lg font-bold">{item.name}</div>
                                    <div className="text-gray-500 text-xs">{item.job}</div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" flex gap-5 mb-15">
                    <div className="grid grid-row-3 gap-2  mt-5 ">
                        <p className="text-lg  font-semibold">Enrolled Students</p>
                        {Tablecontent.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 rounded-2xl p-2 shadow-2xl  grid grid-cols-2 gap-4"
                            >
                                <div className="flex mt-3">
                                    <div className=" mb-3">
                                        <div className="h-[60px] w-[60px] rounded-full overflow-hidden border-2 border-gray-300">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75N_tftPWlyK4Q5-QDx_QZtLFJAG7JiDM3A&s"
                                                alt="Profile"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-5 py-2">
                                        <div className="font-bold text-gray-500 ">{item.title}</div>
                                        <div className="text-sm text-gray-700 ">{item.email}</div>
                                    </div>

                                </div>

                                <div className="flex flex-col  items-start  space-y-3 px-30">
                                    <p className="border border-gray-300 w-fit  rounded-sm text-sm font-semibold">
                                        ID: {item.id}
                                    </p>
                                    <div className="flex gap-3">
                                        <FaLocationDot />
                                        <p className="text-sm text-gray-700">{item.location}</p>
                                    </div>
                                    <p className=" text-sm text-gray-700"> Address : {item.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}
export default OfflineView;