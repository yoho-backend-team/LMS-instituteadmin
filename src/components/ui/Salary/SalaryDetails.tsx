import React, { useState } from 'react';
import bgimg from '../../../assets/Backgroundimg.png';
import Filterimg from '../../../assets/Filter.png';
import plusimg from '../../../assets/Plusimg.png';
import ellipseimg from '../../../assets/Ellipse.png';
import Editimg1 from '../../../assets/Maskeye.png';
import Editimg2 from '../../../assets/Maskedit.png';
import Editimg3 from '../../../assets/Maskdelete.png';
import Editimg4 from '../../../assets/Maskdoenload.png';
import clsimg from '../../../assets/closeimg.png';
import adduserimg from '../../../assets/adduserimg.jpg';

const SalaryDetails: React.FC = () => {
    const [showFilter, setShowFilter] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [viewShowModal, setviewShowModal] = useState(false);
    const [showrid, setShowGrid] = useState(false);
    const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);

    interface SalaryRecord {
        id: string;
        transactionId: string;
        staff: string;
        salaryAmount: string;
        paymentDate: string;
        status: 'Active' | 'Inactive';
    }

    const salaryData: SalaryRecord[] = [
        { id: '#1', transactionId: '098765', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$200', paymentDate: '2025‑08‑07', status: 'Active' },
        { id: '#2', transactionId: '987656', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$500', paymentDate: '2025‑08‑07', status: 'Active' },
        { id: '#3', transactionId: '123456', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$10,000', paymentDate: '2025‑08‑07', status: 'Active' },
        { id: '#4', transactionId: '987654', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$4,000', paymentDate: '2025‑05‑07', status: 'Active' },
        { id: '#5', transactionId: '123456', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$80,000', paymentDate: '2025‑05‑07', status: 'Active' },
        { id: '#6', transactionId: '765432', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$290,700', paymentDate: '2025‑05‑07', status: 'Active' },
        { id: '#7', transactionId: '876543', staff: 'Elon Musk Musk@Gmail.Com', salaryAmount: '$8,777,000', paymentDate: '2025‑05‑07', status: 'Active' },
    ];

    const handleMenuToggle = (index: number) => {
        setMenuOpenIndex(prev => (prev == index ? null : index));
    };

    const handleEdit = () => {
        console.log("Edit clicked");
    };

    const handleDelete = () => {
        console.log("Delete clicked");  
    };

    const handleDownload = () => {
        console.log("Download clicked"); 
    };

    return (
        <div
            className="relative bg-white text-gray-500"
            style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-[1278px] w-full min-h-[900px] mx-auto px-4">

                {/* Title + Buttons Section ---> Start*/}
                <div className="flex flex-col mt-5 mb-4 font-poppins">
                    <div className="mb-2">
                        <span className="ml-1 text-gray-500 text-[24px] font-semibold">
                            Salaries
                        </span>
                    </div>

                    <div className="flex justify-between items-center flex-col md:flex-row">
                        {/* Filter Button */}
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex items-center bg-[#CA406F] hover:bg-[#CA406F] text-white px-4 py-2 rounded-lg mb-4 md:mb-0 min-h-[48px] min-w-[105px] text-[16px]"
                        >
                            <img src={Filterimg} alt="filter icon" className="mr-2" />
                            <span className="text-[16px] font-semibold">
                                {showFilter ? 'Hide' : 'Show Filter'}
                            </span>
                        </button>

                        {/* Add User Button */}
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-[#CA406F] hover:bg-[#CA406F] text-white px-4 py-2 rounded-lg min-h-[48px] min-w-[105px] text-[16px]"
                        >
                            <span className="flex items-center text-[16px] font-medium">
                                <img src={plusimg} alt="plus icon" className="mr-2" />
                                Add Salaries
                            </span>
                        </button>
                    </div>
                </div>
                {/* Title + Buttons Section ---> End */}

                {/* Show and Hide Filters Section ---> Start */}
                {showFilter && (
                    <>
                        {/* Filter Container */}
                        <div className="bg-white p-6 shadow-[0_4px_10px_3px_rgba(0,0,0,0.10)] border-t border-gray-100 rounded-md mb-6 text-gray-700">

                            {/* First Row: Search */}
                            <div className="mb-4">
                                <label className="text-sm font-medium text-[#6C6C6C] mb-1 block">Search</label>
                                <input type="text" placeholder="Search by Status" className="border border-[#D1D5DB] rounded-lg px-4 py-2 min-h-[40px] w-full sm:w-[557px]"/>
                            </div>

                            {/* Second Row: Batches, Start Date, End Date */}
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
                                {/* Batches */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-[#6C6C6C] mb-1">Batches</label>
                                    <select className="border border-[#D1D5DB] rounded-lg px-4 py-2 min-h-[40px] w-full">
                                    </select>
                                </div>

                                {/* Start Date */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-[#6C6C6C] mb-1">Start Date</label>
                                    <input type="" className="border border-[#D1D5DB] rounded-lg px-4 py-2 min-h-[40px] w-full" />
                                </div>

                                {/* End Date */}
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-[#6C6C6C] mb-1">End Date</label>
                                    <input type="" className="border border-[#D1D5DB] rounded-lg px-4 py-2 min-h-[40px] w-full" />
                                </div>
                            </div>

                        </div>
                    </>
                )}
                {/* Show and Hide Filters Section ---> End */}

                {/* Add Salaries Modal ---> Start */}
                {showModal && (
                    <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-40 p-6 overflow-y-auto min-w-[403px]">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-[20px] text-[#3B3B3B] font-semibold font-poppins">Add Salaries</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-xl font-bold text-gray-600 hover:text-black"
                            >
                                <img src={clsimg} alt="Close" />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="space-y-3 font-poppins text-[#716F6F] text-[16px]">
                            {/* Branch */}
                            <label>Select Branch</label>
                            <select className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]">
                            </select>

                            {/* Staff Type */}
                            <label>Select Staff Type</label>
                            <select className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]">
                            </select>

                            {/* Staff */}
                            <label>Select Staff</label>
                            <input type="text" className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]"/>

                            {/* Payment Date */}
                            <label>Payment Date</label>
                            <input type="" className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]"/>

                            {/* Transaction ID */}
                            <label>Transaction ID</label>
                            <input type="text" placeholder="" className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]"/>

                            {/* Salary Amount */}
                            <label>Salary Amount</label>
                            <input type="text" placeholder="" className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]"/>

                            {/* Balance */}
                            <label>Balance</label>
                            <input type="text" placeholder="" className="w-full border border-[#716F6F] rounded-[8px] px-3 py-2 min-h-[48px]"/>

                            {/* Action Buttons */}
                            <div className="flex justify-end pt-4 space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-[16px] border border-[#716F6F] text-[#0400FF] bg-blue-100 min-w-[98px] rounded-[8px] font-semibold">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-[16px] bg-[#CA406F] text-white min-w-[98px] rounded-[8px] font-semibold">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {/* Add Salaries Modal ---> End */}

                {/* View Salaries Modal ---> Start */}
                {viewShowModal && (
                    <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-40 p-6 overflow-y-auto min-w-[403px]">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-[20px] text-[#3B3B3B] font-semibold font-poppins">Salary Details</h2>
                            <button onClick={() => setviewShowModal(false)} className="text-xl font-bold text-gray-600 hover:text-black">
                                <img src={clsimg} alt="Close" />
                            </button>
                        </div>

                        {/* Profile Section */}
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={adduserimg}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <p className="mt-2 font-semibold text-[16px] text-[#3B3B3B] font-poppins">Elon Musk</p>
                            <p className="text-[12px] text-[#A0A0A0] font-poppins">BHA-TR-SF002</p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4 font-poppins text-[#3B3B3B] text-[14px]">
                            <h3 className="text-[16px] font-semibold mb-2">Staff Details:</h3>

                            {/* Transaction ID */}
                            <div>
                                <label className="block mb-1">Transaction ID</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Staff ID */}
                            <div>
                                <label className="block mb-1">Staff ID</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Staff Name */}
                            <div>
                                <label className="block mb-1">Staff Name</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Staff Email */}
                            <div>
                                <label className="block mb-1">Staff Email</label>
                                <input
                                    type="email"
                                    placeholder=""
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Staff Amount */}
                            <div>
                                <label className="block mb-1">Staff Amount</label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Paid Date */}
                            <div>
                                <label className="block mb-1">Paid Date</label>
                                <input
                                    type="date"
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end pt-4 space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-[14px] border border-[#716F6F] text-[#0400FF] bg-blue-100 rounded-lg font-semibold"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-[14px] bg-[#CA406F] text-white rounded-lg font-semibold"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {/* View Salaries Modal ---> End */}

                {/* Grid - View records  ---> Start */}
                <div className="bg-white p-4 rounded-lg bg-gray-200 shadow-[0_4px_10px_3px_rgba(0,0,0,0.10)] mb-6 min-w-[1200px] w-full min-h-[264px]">
                    {/* Salary Table */}
                    <div className="overflow-x-auto font-poppins">
                        <div className="grid grid-cols-7 font-semibold grid-cols-[80px_160px_250px_157px_151px_105px_89px] gap-x-[20px] p-[10px] text-gray-700 text-sm border-b bg-gray-100 rounded-md h-[68px]">
                            <div className="flex items-center justify-start px-4">ID</div>
                            <div className="flex items-center justify-start px-4">Transaction ID</div>
                            <div className="flex items-center justify-start px-4">Staff</div>
                            <div className="flex items-center justify-start px-4">Salary Amount</div>
                            <div className="flex items-center justify-start px-4">Payment Date</div>
                            <div className="flex items-center justify-start px-4">Status</div>
                            <div className="flex items-center justify-start px-4">Actions</div>
                        </div>

                        {salaryData.map((record, index) => (
                            <div
                                key={record.id}
                                className="grid grid-cols-7 grid-cols-[80px_160px_250px_157px_151px_105px_89px] gap-x-[20px] p-[10px] gap-4 items-center text-sm text-gray-600 py-2 border-b relative"
                            >
                                <div className="flex items-center justify-start px-4">{record.id}</div>
                                <div className="flex items-center justify-start px-4">{record.transactionId}</div>
                                {/* <div dangerouslySetInnerHTML={{ __html: record.staff }} /> */}
                                <div className="flex items-center justify-start px-4">
                                    <img
                                        src={ellipseimg}
                                        className="w-10 h-10 rounded-full object-cover mr-3"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800">{record.staff}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start px-4">{record.salaryAmount}</div>
                                <div className="flex items-center justify-start px-4">{record.paymentDate}</div>
                                <div className="flex items-center justify-start px-4">
                                    <span
                                        className={`px-2 py-1 rounded-4 text-xs font-medium flex items-center justify-start px-4 ${record.status === 'Active'
                                            ? 'text-white text-[18px]'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                        style={record.status === 'Active' ? { backgroundColor: '#3ABE65' } : {}}
                                    >
                                        {record.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-end px-4">
                                    <button
                                        // onClick={() => handleMenuToggle(index)}
                                        className="text-xl hover:text-black"
                                    >
                                        ⋮
                                    </button>
                                    {menuOpenIndex === index && (
                                        <div className="absolute mr-5 top-0 w-[160px] h-[242px] p-4 flex flex-col gap-[30px] bg-white rounded-[12px] shadow-lg z-50">
                                            <div className="w-[112px] h-[210px] flex flex-col gap-[10px]">
                                                {/* View Button */}
                                                <button
                                                    onClick={() => {
                                                        // setMenuOpenIndex(null); // Close dropdown menu
                                                        // setviewShowModal(true); // Open the modal
                                                    }}
                                                    className="w-[132px] h-[48px] bg-[#CA406F] rounded-[8px] flex items-center px-3 gap-2"
                                                >
                                                    {/* <div className="w-6 h-6 bg-[url(`{Editimg1})]"></div> */}
                                                    <img src={Editimg1} alt="Edit Icon" className="w-6 h-6" />
                                                    <span className="text-white text-[16px] font-medium leading-6">View</span>
                                                </button>

                                                {/* Edit Button */}
                                                <button
                                                    onClick={handleEdit}
                                                    className="w-[132px] h-[48px] border border-[#716F6F] rounded-[8px] flex items-center px-3 gap-2"
                                                >
                                                    {/* <div className="w-6 h-6 bg-[url('/edit (2).png')]"></div> */}
                                                    <img src={Editimg2} alt="Edit Icon" className="w-6 h-6" />
                                                    <span className="text-[#716F6F] text-[16px] font-medium leading-6">Edit</span>
                                                </button>

                                                {/* Delete Button */}
                                                <button
                                                    onClick={handleDelete}
                                                    className="w-[132px] h-[48px] border border-[#716F6F] rounded-[8px] flex items-center px-3 gap-2"
                                                >
                                                    {/* <div className="w-6 h-6 bg-[url('/trash-bin.png')]"></div> */}
                                                    <img src={Editimg3} alt="Edit Icon" className="w-6 h-6" />
                                                    <span className="text-[#716F6F] text-[16px] font-medium leading-6">Delete</span>
                                                </button>

                                                {/* Download Button */}
                                                <button
                                                    onClick={handleDownload}
                                                    className="w-[132px] h-[48px] border border-[#716F6F] rounded-[8px] flex items-center px-3 gap-2"
                                                >
                                                    {/* <div className="w-6 h-6 bg-[url('/image.png')]"></div> */}
                                                    <img src={Editimg4} alt="Edit Icon" className="w-6 h-6" />
                                                    <span className="text-[#716F6F] text-[16px] font-medium leading-6">Download</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Gird - View record  ----> End */}

            </div>
        </div>
    );
};

export default SalaryDetails;
