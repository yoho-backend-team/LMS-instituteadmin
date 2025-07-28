
import Maskgroup from "@/assets/icons/Mask group.png"
import Maskgroup1 from "@/assets/icons/Mask group_1.png"
import Maskgroup2 from "@/assets/icons/Mask group_2.png"
import { useState } from "react";
import { Link } from "react-router-dom";

const Staffnotification = () => {

    const people = [
        {
            id: "EMP001",
            name: "John Doe",
            email: "john.doe@example.com",
            image:
                "https://randomuser.me/api/portraits/men/32.jpg",
            title: "Senior Developer",
            description:
                "John has over 10 years of experience in full stack development, leading teams across multiple projects."
        },
        {
            id: "EMP002",
            name: "Jane Smith",
            email: "jane.s@example.com",
            image:
                "https://randomuser.me/api/portraits/women/44.jpg",
            title: "Product Manager",
            description:
                "Jane oversees product strategy and ensures timely delivery while collaborating across departments."
        },
        {
            id: "EMP002",
            name: "Jane Smith",
            email: "jane.s@example.com",
            image:
                "https://randomuser.me/api/portraits/women/44.jpg",
            title: "Product Manager",
            description:
                "Jane oversees product strategy and ensures timely delivery while collaborating across departments."
        }
    ];

    const [showForm, setShowForm] = useState(false);
    return (


        <div className="p-2">
            <div className=" rounded-lg  p-4">
                <p>staff</p>

                <div className="grid grid-cols-4 h-52   gap-10">
                    <Link to="/staffnotification_c" className="block py-5">
                        <div className="bg-red-200 p-3 bg-gradient-to-br from-[#DB558D] to-[#7A69FE] rounded-lg hover:scale-115 cursor-pointer">
                            <img
                                className="w-16 h-14 p-2 bg-white rounded-sm shadow-2xl shadow-white"
                                src={Maskgroup}
                            />
                            <p className="text-white py-1">Total Notification</p>
                            <p className="relative top- font-bold text-white text-2xl">0</p>
                        </div>
                    </Link>

                    <Link to="/staffnotification_c" className="block py-5">
                        <div className="bg-red-200 p-3 bg-gradient-to-br from-[#7EE74F] to-[#3EDFEB] rounded-lg hover:scale-125 cursor-pointer">
                            <img
                                className="w-16 h-14 p-2 bg-white rounded-sm shadow-2xl shadow-white"
                                src={Maskgroup1}
                            />
                            <p className="text-white py-1">Seen Notification</p>
                            <p className="relative top-2 font-bold text-white text-2xl">0</p>
                        </div>
                    </Link>

                    <Link to="/staffnotification_c" className="block py-5">
                        <div className="bg-red-200 p-3 bg-gradient-to-br from-[#E3418F] to-[#E6F321] rounded-lg hover:scale-125 cursor-pointer">
                            <img
                                className="w-16 h-14 p-2 bg-white rounded-sm shadow-2xl shadow-white"
                                src={Maskgroup2}
                            />
                            <p className="text-white py-1">Unseen Notification</p>
                            <p className="relative top-2 font-bold text-white text-2xl">0</p>
                        </div>
                    </Link>

                     <div className="py-3">
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-[#CA406F] text-white w-28 h-8 text-sm text-center py-1 rounded-sm absolute left-298  ">
                            Add Notification
                        </button>
                    </div>
                </div>

                {showForm && (
                    <div className="absolute top-23 right-0 w-80  z-50">
                        {/* <StudentAddnotification /> */}
                        <div className="bg-white p-7 rounded-lg shadow-2xl">
                            <div>
                                Add notification page
                            </div>
                            <form className="grid grid-cols-1 gap-y-1 gap-x-3 relative mt-4 text-sm">
                                <div className="grid " >
                                    <label className="mb-1">select course</label>
                                    <input
                                        type="text"
                                        name="state"

                                        readOnly

                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>
                                <div className="grid " >
                                    <label className="mb-1">Batch</label>
                                    <input
                                        type="text"
                                        name="batch"
                                        readOnly
                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>
                                <div className="grid">
                                    <label className="mb-1">Student</label>
                                    <input
                                        type="text"
                                        name="class"
                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>
                                <div className="grid">
                                    <label className="mb-1">Notification Type</label>
                                    <input
                                        type="text"
                                        name="class"
                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>
                                <div className="grid">
                                    <label className="mb-1">Title</label>
                                    <input
                                        type="text"
                                        name="class"
                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>
                                <div className="grid">
                                    <label className="mb-1">Body</label>
                                    <input
                                        type="text"
                                        name="class"
                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>
                                <div className="grid">
                                    <label className="mb-1">link</label>
                                    <input
                                        type="text"
                                        name="class"
                                        className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                                </div>

                                <div className="flex gap-4 justify-end pt-4">
                                    <button
                                        onClick={() => setShowForm(false)}
                                        type="button"
                                        className="text-blue-700 bg-blue-100 w-24 h-10 rounded-sm border border-blue-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-[#CA406F] text-white w-24 h-10 rounded-sm"
                                        onClick={() => {
                                            alert('Notification added successfully');
                                            setShowForm(false);
                                        }}

                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}



                <div className=" ">
                    <div className="font-semibold">Notification</div>
                    <div className="py-4 ">
                        <div className="grid grid-cols-3 gap-3 ">
                            {people.map((person) => (
                                <div
                                    key={person.id}
                                    className="bg-white shadow-md rounded-xl p-4 relative  flex flex-col justify-between"
                                    style={{ height: "100%" }}
                                >
                                  
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={person.image}
                                                    alt={person.name}
                                                    className="w-16 h-16 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h2 className="text-lg font-semibold">{person.name}</h2>
                                                    <p className="text-sm text-gray-500">{person.email}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium text-gray-600">
                                                    ID: {person.id}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h3 className="text-md font-bold">{person.title}</h3>
                                            <p className="text-xs text-gray-600 mt-1">{person.description}</p>
                                        </div>
                                    </div>

                                    
                                    <div className="mt-4 self-end">
                                        <button className="text-white px-4 py-2 rounded-md bg-[#CA406F]">
                                            Resend
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
        </div>

    );
};


export default Staffnotification;


