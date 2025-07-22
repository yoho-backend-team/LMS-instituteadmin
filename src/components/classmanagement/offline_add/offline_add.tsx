
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaClock, } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Option {
    id: number;
    name: string;
}

const OfflineAdd = () => {
    const branchData: Option[] = [
        { id: 1, name: "Chennai" },
        { id: 2, name: "Bangalore" },
        { id: 3, name: "Mumbai" },
    ];

    const courseData: Option[] = [
        { id: 1, name: "Web Development" },
        { id: 2, name: "Data Science" },
        { id: 3, name: "AI & ML" },
    ];

    const instructor: Option[] = [
        { id: 1, name: "Web Development" },
        { id: 2, name: "Data Science" },
        { id: 3, name: "AI & ML" },
    ];

    const navigate = useNavigate();


    const [selectedBranch, setSelectedBranch] = useState("");
    const [showBranchDropdown, setShowBranchDropdown] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState("");
    const [showCourseDropdown, setShowCourseDropdown] = useState(false);

    const [selectedBranch2, setSelectedBranch2] = useState("");
    const [showBranch2Dropdown, setShowBranch2Dropdown] = useState(false);
    const [selectedBranch3, setSelectedBranch3] = useState("");
    const [showBranch3Dropdown, setShowBranch3Dropdown] = useState(false);

    return (
        <div className="px-10 py-2 ">
            <div className="px-10 bg-white py-5 rounded-sm shadow-2xl">
                <div>
                    <div className="bg-[#CA406F] text-white text-2xl text-center font-bold h-12 rounded-sm py-1">
                        Add Offline Class
                    </div>
                </div>

                <form className="space-y-4 py-4">

    <div className="grid gap-1">
        <label className="text-sm">Class Name</label>
        <input
            type="text"
            className="h-10 w-full rounded-sm px-3 text-black border border-gray-400"
        />
    </div>

    <div className="grid gap-1 relative">
        <label className="text-sm">Select Branch</label>
        <div
            className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
            onClick={() => setShowBranchDropdown(!showBranchDropdown)}
        >
            <span>{selectedBranch || ""}</span>
            {showBranchDropdown ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </div>
        {showBranchDropdown && (
            <ul className="absolute z-10 bg-white w-full mt-1 rounded-sm shadow text-black">
                {branchData.map((branch) => (
                    <li
                        key={branch.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSelectedBranch(branch.name);
                            setShowBranchDropdown(false);
                        }}
                    >
                        {branch.name}
                    </li>
                ))}
            </ul>
        )}
    </div>

    <div className="grid gap-1 relative">
        <label className="text-sm">Select Course</label>
        <div
            className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
            onClick={() => setShowCourseDropdown(!showCourseDropdown)}
        >
            <span>{selectedCourse || ""}</span>
            {showCourseDropdown ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </div>
        {showCourseDropdown && (
            <ul className="absolute z-10 bg-white w-full mt-1 rounded-sm shadow text-black">
                {courseData.map((course) => (
                    <li
                        key={course.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSelectedCourse(course.name);
                            setShowCourseDropdown(false);
                        }}
                    >
                        {course.name}
                    </li>
                ))}
            </ul>
        )}
    </div>

    <div className="grid gap-1 relative">
        <label className="text-sm">Branch</label>
        <div
            className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
            onClick={() => setShowBranch2Dropdown(!showBranch2Dropdown)}
        >
            <span>{selectedBranch2 || ""}</span>
            {showBranch2Dropdown ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </div>
        {showBranch2Dropdown && (
            <ul className="absolute z-10 bg-white w-full mt-1 rounded-sm shadow text-black">
                {branchData.map((branch) => (
                    <li
                        key={branch.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSelectedBranch2(branch.name);
                            setShowBranch2Dropdown(false);
                        }}
                    >
                        {branch.name}
                    </li>
                ))}
            </ul>
        )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid gap-1">
            <label className="text-sm">Start Time</label>
            <input
                type="text"
                name="state"
                readOnly
                className="border-black/40 px-2 h-10 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer w-full"
            />
        </div>

        <div className="grid gap-1">
            <label className="text-sm">Add Date</label>
            <div className="flex items-center relative">
                <FaClock className="absolute right-2 top-3" />
                <input
                    type="text"
                    name="state"
                    readOnly
                    className="border-black/40 px-2 h-10 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer w-full pr-7"
                />
            </div>
        </div>

        <div className="grid gap-1">
            <label className="text-sm">End Time</label>
            <div className="flex items-center relative">
                <FaClock className="absolute right-2 top-3" />
                <input
                    type="text"
                    name="state"
                    readOnly
                    className="border-black/40 px-2 h-10 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer w-full pr-7"
                />
            </div>
        </div>
    </div>

    <div className="grid gap-1 relative">
        <label className="text-sm">Instructor</label>
        <div
            className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
            onClick={() => setShowBranch3Dropdown(!showBranch3Dropdown)}
        >
            <span>{selectedBranch3 || ""}</span>
            {showBranch3Dropdown ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </div>
        {showBranch3Dropdown && (
            <ul className="absolute z-10 bg-white w-full mt-1 rounded-sm shadow text-black">
                {instructor.map((branch) => (
                    <li
                        key={branch.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSelectedBranch3(branch.name);
                            setShowBranch3Dropdown(false);
                        }}
                    >
                        {branch.name}
                    </li>
                ))}
            </ul>
        )}
    </div>

    <div className="flex gap-4 justify-end pt-4">
        <button
            type="button"
            onClick={() => { navigate("/offlineclass"); }}
            className="text-blue-700 bg-blue-100 w-24 h-10 rounded-sm border border-blue-500"
        >
            Cancel
        </button>
        <button
            type="button"
            className="bg-[#CA406F] text-white w-24 h-10 rounded-sm"
            onClick={() => alert(` added successfully`)}
        >
            Submit
        </button>
    </div>
</form>

            </div>
        </div>
    );
};

export default OfflineAdd;
