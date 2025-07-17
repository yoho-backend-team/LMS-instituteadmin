import React from "react";
import { X } from "lucide-react";

interface DrawerProps {
    onClose: () => void;
}

const StudyMaterialDrawer: React.FC<DrawerProps> = ({ onClose }) => {
    return (
        <div className="fixed right-0 top-0 w-[350px] sm:w-[400px] h-full bg-white shadow-lg z-50 p-6 transition-all">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Edit Study Material</h2>
                <button onClick={onClose}>
                    <X className="text-gray-500 hover:text-black" />
                </button>
            </div>

            <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center text-sm text-gray-500 mb-4">
                <span className="text-blue-600">⬆</span> Drop Files Here Or Click To Upload
            </div>
            <input
                type="text"
                placeholder="Title"
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
            />

            {/* Description */}
            <textarea
                placeholder="Description"
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
            ></textarea>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
                >
                    Cancel
                </button>
                <button className="px-4 py-2 bg-[#d81b60] text-white rounded hover:bg-[#c2185b]">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default StudyMaterialDrawer;
