import React, { useState } from 'react';
import cardimg1 from '../../../assets/card1.png';
import cardimg2 from '../../../assets/cardimg2.png';
import cardimg3 from '../../../assets/cardimg3.png';
import cardimg4 from '../../../assets/cardimg4.png';
import Filterimg from '../../../assets/Filter.png';
import adduserimg from '../../../assets/adduserimg.jpg';
import bgimg from '../../../assets/Backgroundimg.png';

const Dashboard: React.FC = () => {
    const [showFilter, setShowFilter] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const cards = [
        { label: 'Total Users', count: 0, color: 'bg-gradient-to-r from-[#EA745F] to-[#B53018]', image: cardimg3 },
        { label: 'Total Groups', count: 0, color: 'bg-gradient-to-r from-[#6454E2] to-[#1A0E7A]', image: cardimg2 },
        { label: 'Active Users', count: 0, color: 'bg-gradient-to-r from-[#39D1CB] to-[#0E7874]', image: cardimg1 },
        { label: 'Blocked Users', count: 0, color: 'bg-gradient-to-r from-[#58D436] to-[#267E0E]', image: cardimg4 }
    ];

    return (
        <div className="relative bg-white text-gray-500  font-poppins"
            style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: '1440px 1024px',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="min-w-[1440px] w-full min-h-[900px]">
                <div className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                        <h2 className="text-[22px] font-semibold mb-4 font-poppins">Admin User</h2>

                        {/* Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ">
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col p-4 rounded-lg shadow ${card.color} text-white min-h-[166px] min-w-[293px] `}
                                >
                                    {/* Image - Top Left */}
                                    <div className="absolute top-1 left-1">
                                        <img
                                            src={card.image}
                                            alt={card.label}
                                            className="w-20 h-20 object-contain"
                                        />
                                    </div>

                                    {/* Label - Top Right (aligned with image) */}
                                    <div className="ml-16 mt-2 text-[22px] font-normal mb-4 font-poppins text-white">{card.label}</div>

                                    {/* Count - Bottom Right */}
                                    <div className="text-right">
                                        <div className="text-[32px] font-semibold mb-4 font-poppins">{card.count}</div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 ">
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex items-center bg-[#CA406F] hover:bg-[#CA406F] text-white px-4 py-2 rounded mb-4 md:mb-0 min-h-[48px] min-w-[105px] text-[16px] font-poppins"
                        >
                            <span className="mr-2"><img src={Filterimg} /></span>

                            <span className="text-[16px] font-semibold font-poppins">
                                {showFilter ? 'Hide' : 'Show Filter'}</span>
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-[#CA406F] hover:bg-[#CA406F] text-white px-4 py-2 rounded md:ml-4 min-h-[48px] min-w-[105px] text-[16px]"
                        ><span className="text-[16px] font-medium font-poppins">
                                + Add User</span>
                        </button>
                    </div>

                    {/* Search and Filters */}
                    {showFilter && (
                        <>
                            <div className="mb-4 text-[18px] text-[#6C6C6C] font-medium font-poppins">
                                <input
                                    type="text"
                                    placeholder="Search Admin User"
                                    className="border border-pink-500 rounded px-4 py-2  min-h-[48px] min-w-[360px] md:w-1/3 "
                                />
                            </div>
                            <div className="bg-white p-4 shadow-lg border-t border-gray-100 rounded-md mb-6 text-gray-700">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* First select + label */}
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label className="text-[16px] font-medium font-poppins text-[#716F6F] mb-1">Status</label>
                                        <select className="border border-[#716F6F] min-h-[48px] rounded-[8px] px-4 py-2 w-full">

                                        </select>
                                    </div>

                                    {/* Second select + label */}
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label className="text-[16px] font-medium font-poppins text-[#716F6F] mb-1">Status</label>
                                        <select className="border border-[#716F6F] min-h-[48px] rounded-[8px] px-4 py-2 w-full">

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Add User Modal */}
                    {showModal && (
                        <div className="absolute top-[0px] right-0 w-full max-w-sm h-full bg-white shadow-lg z-40 p-6 overflow-y-auto min-w-[403px]">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-[24px] text-[#716F6F] font-semibold font-poppins">Add User</h2>
                                <button onClick={() => setShowModal(false)} className="text-xl font-bold text-gray-600 hover:text-black">
                                    ×
                                </button>
                            </div>

                            <div className="flex flex-col items-center mb-4">
                                <img
                                    src={adduserimg}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover min-h-[100px] min-w-[100px]"
                                />
                                <span className="text-green-600 font-poppins font-bold text-[12px] mt-2">Upload</span>
                            </div>

                            <form className="space-y-3">
                                <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Branch</option>
                                <select className="w-full border border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]">

                                </select>
                                <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>First Name</option>
                                <input type="text" placeholder="" className="w-full border border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Last Name</option>
                                <input type="text" placeholder="" className="w-full border border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Email</option>
                                <input type="email" placeholder="" className="w-full border border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Contact</option>
                                <input type="text" placeholder="" className="w-full border border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                <option style={{ fontSize: '16px', color: '#716F6F', fontWeight: 400, fontFamily: 'Poppins, sans-serif', }}>Designation</option>
                                <input type="text" placeholder="" className="w-full border border-[1px] border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px] min-w-[371px]" />
                                <div className="flex justify-end pt-2 space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 text-[16px] border border-[#716F6F] min-h-[40px] min-w-[98px] rounded-[8px] text-[#0400FF] bg-blue-100 font-semibold hover:bg-blue-100 font-poppins"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-[16px] bg-[#CA406F] border-[#716F6F] min-h-[40px] min-w-[98px] text-[#FFF] rounded-[8px] hover:bg-[#CA406F] font-poppins"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
