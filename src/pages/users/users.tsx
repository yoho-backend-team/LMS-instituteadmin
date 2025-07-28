import React, { useState, useRef, type ChangeEvent } from 'react';
import cardimg1 from '../../assets/cardimg1.png';
import cardimg2 from '../../assets/cardimg2.png';
import cardimg3 from '../../assets/cardimg3.png';
import cardimg4 from '../../assets/cardimg4.png';
import FilterSH from '../../assets/SHFilter.png';
import adduserimg from '../../assets/adduserimg.jpg';
import plusimg from '../../assets/Plusimg.png';
import clsimg from '../../assets/closeimg.png';
import { FONTS } from '@/constants/uiConstants';
import '../../index.css';

const Users: React.FC = () => {

    const [showFilter, setShowFilter] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('Selected file:', file);
            e.target.value = '';
        }
    };

    const cards = [
        { label: 'Total Users', count: 0, color: 'bg-gradient-to-r from-[#EA745F] to-[#B53018]', image: cardimg3 },
        { label: 'Total Groups', count: 0, color: 'bg-gradient-to-r from-[#6454E2] to-[#1A0E7A]', image: cardimg2 },
        { label: 'Active Users', count: 0, color: 'bg-gradient-to-r from-[#39D1CB] to-[#0E7874]', image: cardimg1 },
        { label: 'Blocked Users', count: 0, color: 'bg-gradient-to-r from-[#58D436] to-[#267E0E]', image: cardimg4 }
    ];

    return (
        <div className="relative text-gray-500  font-poppins">
            {/* <div className="mx-auto min-w-[1420px]"> */}
            <div className="w-full min-h-auto px-1">
                <div className="flex-1 p-1">
                    <div className="bg-white p-3 rounded-lg shadow-[0_4px_10px_3px_rgba(0,0,0,0.10)] mb-4 w-full min-h-[204px]">
                        <h2 className="text-[18px] font-semibold mb-4 font-poppins">Admin User</h2>

                        {/* Status Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col p-4 rounded-lg shadow ${card.color} text-white min-h-[136px] `}
                                >
                                    {/* Image - Top Left */}
                                    <div className="absolute top-1 left-1">
                                        <img
                                            src={card.image}
                                            alt={card.label}
                                            className="w-[90px] h-[90px] object-contain"
                                        />
                                    </div>

                                    {/* Label - Top Right (aligned with image) */}
                                    <div className="ml-17 mt-5 text-[15px] font-normal mb-4 font-poppins text-white leading-[24px]">{card.label}</div>

                                    {/* Count - Bottom Right */}
                                    <div className="absolute right-6 bottom-1 text-right">
                                        <div className="text-[23px] font-semibold mb-4 font-poppins">{card.count}</div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 ">
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex items-center bg-[#CA406F] hover:bg-[#CA406F] text-white px-4 py-2 rounded-lg mb-2 md:mb-0 min-h-[38px] min-w-[105px] text-[16px] font-poppins"
                        >
                            <span className="mr-2"><img src={FilterSH} /></span>

                            <span className="text-[14px] font-semibold font-poppins">
                                {showFilter ? 'Hide' : 'Show Filter'}</span>
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-[#CA406F] hover:bg-[#CA406F] text-white px-4 py-2 rounded-lg md:ml-4 min-h-[38px] min-w-[105px] text-[16px]"
                        ><span className="flex items-center text-[14px] font-medium font-poppins">
                                <img src={plusimg} alt="plus icon" className="mr-2" />
                                Add User
                            </span>
                        </button>
                    </div>

                    {/* Search and Filters */}
                    {showFilter && (
                        <>
                            <div className="mb-2 text-[14px] text-[#6C6C6C] font-medium font-poppins">
                                <input
                                    type="text"
                                    placeholder="Search Admin User"
                                    className="border-3 border-pink-500 rounded-lg px-4 py-2  min-h-[38px] min-w-[360px] md:w-1/3 "
                                />
                            </div>
                            <div className=" shadow-[0_4px_10px_3px_rgba(0,0,0,0.10)] p-4 bg-white border-t border-gray-100 rounded-md mb-6 text-gray-700">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    {/* First select + label */}
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label className="text-[14px] font-medium font-poppins text-[#716F6F] mb-1">Status</label>
                                        <select className="border border-[#716F6F] min-h-[38px] rounded-[8px] px-4 py-2 w-full">
                                            <option value="active" className="text" style={{ ...FONTS.heading_03 }}>-- Select --</option>
                                            <option value="active" className="text" style={{ ...FONTS.heading_03 }}>Active</option>
                                            <option value="inactive" className="text" style={{ ...FONTS.heading_03 }}>Inactive</option>
                                        </select>
                                    </div>

                                    {/* Second select + label */}
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label className="text-[14px] font-medium font-poppins text-[#716F6F] mb-1">Status</label>
                                        <select className="border border-[#716F6F] min-h-[38px] rounded-[8px] px-4 py-2 w-full">
                                            <option value="active" className="text" style={{ ...FONTS.heading_03 }}>-- Select --</option>
                                            <option value="active" className="text" style={{ ...FONTS.heading_03 }}>Active</option>
                                            <option value="inactive" className="text" style={{ ...FONTS.heading_03 }}>Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Add User Modal */}
                    {showModal && (
                        <div className="fixed inset-0 z-30 mt-22">
                            <div className="absolute top-0 right-0 w-full max-w-sm min-w-[403px] h-full overflow-auto p-6 rounded-lg bg-white shadow-lg z-40 no-scrollbar">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-[18px] text-[#716F6F] font-semibold font-poppins">Add User</h2>
                                    <button onClick={() => setShowModal(false)} className="text-xl font-bold text-gray-600 hover:text-black">
                                        <img src={clsimg} />
                                    </button>
                                </div>

                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src={adduserimg}
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full object-cover min-h-[100px] min-w-[100px]"
                                    />
                                    <span onClick={handleUploadClick} className="text-green-600 font-poppins font-bold text-[12px] mt-2 cursor-pointer">Upload</span>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </div>

                                <form className="space-y-2">
                                    <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Branch</option>
                                    <select className="w-full border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]">

                                    </select>
                                    <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>First Name</option>
                                    <input type="text" placeholder="" className="w-full border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                    <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Last Name</option>
                                    <input type="text" placeholder="" className="w-full border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                    <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Email</option>
                                    <input type="email" placeholder="" className="w-full border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                    <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Contact</option>
                                    <input type="text" placeholder="" className="w-full border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                    <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Designation</option>
                                    <input type="text" placeholder="" className="w-full border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                    <div className="flex justify-end pt-2 space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 text-[16px] border border-[#716F6F] min-h-[40px] min-w-[98px] rounded-[8px] text-[#0400FF] bg-blue-100 font-semibold hover:bg-blue-100 font-poppins"
                                        >
                                            Cancel
                                        </button>&nbsp;&nbsp;
                                        <button
                                            type="submit"
                                            className="px-4 py-2 text-[16px] bg-[#CA406F] border-[#716F6F] min-h-[40px] min-w-[98px] text-[#FFF] rounded-[8px] hover:bg-[#CA406F] font-poppins"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Users;