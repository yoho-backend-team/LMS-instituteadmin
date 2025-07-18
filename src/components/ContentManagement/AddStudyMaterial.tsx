// src/components/StudyMaterial/AddStudyMaterial.tsx
import React from "react";
import closeImage from '../../assets/close.png'

interface Props {
    onClose: () => void;
}

const AddStudyMaterial: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="fixed right-0 top-4 w-[350px] sm:w-[350px] h-[720px] bg-white shadow-lg z-50 p-6 transition-all">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Add Study Materials</h2>

                <img src={closeImage} onClick={onClose} className="w-5 h-5" />
            </div>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm">Branch</label>
                    <select className="w-full border-2 px-4 py-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Select Course</label>
                    <select className="w-full border-2 px-4 py-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Title</label>
                    <input className="w-full border-2 px-4 py-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Description</label>
                    <input className="w-full border-2 px-4 py-2 rounded" />
                </div>
                <div>
                    <label className="block text-sm">Video URI</label>
                    <input className="w-full border-2 px-4 py-2 rounded" />
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border rounded text-blue-600 border-blue-600"
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#CA406F] text-white rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudyMaterial;
