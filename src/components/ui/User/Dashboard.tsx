import React, { useState } from 'react';
import userImage from '../../../assets/userimg.jpg';
import cardimg1 from '../../../assets/card1.png';
import cardimg2 from '../../../assets/cardimg2.png';
import cardimg3 from '../../../assets/cardimg3.png';
import cardimg4 from '../../../assets/cardimg4.png';

const Dashboard: React.FC = () => {
    const [showFilter, setShowFilter] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const cards = [
        { label: 'Total Users', count: 0, color: 'bg-red-500', image: cardimg3 },
        { label: 'Total Groups', count: 0, color: 'bg-[#1A0E7A]', image: cardimg2 },
        { label: 'Active Users', count: 0, color: 'bg-cyan-600', image: cardimg1 },
        { label: 'Blocked Users', count: 0, color: 'bg-green-600', image: cardimg4 }
    ];

    return (
        <div className="relative h-screen w-screen bg-white text-gray-500 overflow-hidden">
            {/*Background color*/}
            <div className="absolute w-[1528.72px] h-[589.94px] -left-[79px] -top-[304px] rotate-[15.14deg] z-0"
                style={{
                    background: 'linear-gradient(150deg, #FCF3F6 0%, #F6D3E9 100%)'
                }} />
            <div className="absolute w-[1564.98px] h-[705.9px] -left-[261px] top-[485px] -rotate-[158.3deg] z-0"
                style={{
                    background: 'linear-gradient(180deg, #FCF3F6 0%, #F6D3E9 100%)'
                }} />

            {/* Sidebar + Content */}
            <div className="flex h-full pt-[50px] relative z-10">

                <div className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                        <h2 className="text-lg font-bold mb-4">Admin User</h2>

                        {/* Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col p-4 rounded-lg shadow ${card.color} text-white min-h-[120px]`}
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
                                    <div className="text-base ml-18 mt-4">{card.label}</div>

                                    {/* Count - Bottom Right */}
                                    <div className="mt-auto text-right">
                                        <div className="text-xl font-bold">{card.count}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex items-center bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded mb-4 md:mb-0"
                        >
                            <span className="mr-2">⚙️</span>
                            {showFilter ? 'Hide Filter' : 'Show Filter'}
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded md:ml-4"
                        >
                            + Add User
                        </button>
                    </div>

                    {/* Search and Filters */}
                    {showFilter && (
                        <>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search Admin User"
                                    className="border border-pink-500 rounded px-4 py-2 w-full md:w-1/3"
                                />
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow mb-6">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <h6> &nbsp;status</h6>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <select className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2">
                                        <option>Status</option>
                                    </select>
                                    <select className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2">
                                        <option>Status</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Add User Modal */}
                    {showModal && (
                        <div className="absolute top-[0px] right-0 w-full max-w-sm h-full bg-white shadow-lg z-40 p-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Add User</h2>
                                <button onClick={() => setShowModal(false)} className="text-xl font-bold text-gray-600 hover:text-black">
                                    ×
                                </button>
                            </div>

                            <div className="flex flex-col items-center mb-4">
                                <img
                                    src={userImage}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <span className="text-green-600 text-sm mt-2">Upload</span>
                            </div>

                            <form className="space-y-3">
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Branch</option>
                                </select>
                                <input type="text" placeholder="First Name" className="w-full border rounded px-3 py-2" />
                                <input type="text" placeholder="Last Name" className="w-full border rounded px-3 py-2" />
                                <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
                                <input type="text" placeholder="Contact" className="w-full border rounded px-3 py-2" />
                                <input type="text" placeholder="Designation" className="w-full border rounded px-3 py-2" />

                                <div className="flex justify-between pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
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
