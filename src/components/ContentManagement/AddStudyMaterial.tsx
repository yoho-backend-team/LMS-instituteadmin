import React, { useRef, useState } from "react";
import closeImage from '../../assets/close.png';
import cloudImage from '../../assets/cloud.png';

interface Props {
    onClose: () => void;
    onSubmit: (data: {
        title: string;
        course: string;
        description: string;
        isActive: boolean;
    }) => void;
}

const AddStudyMaterial: React.FC<Props> = ({ onClose, onSubmit }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState("");
    const [course, setCourse] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState(true);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            console.log("Uploaded file:", files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, course, description, isActive });
        onClose();
    };

    return (
        <div className="fixed rounded-md right-0 top-4 w-[350px] bg-white shadow-lg z-50 p-6 transition-all">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#716F6F]">Add Study Materials</h2>
                <img src={closeImage} onClick={onClose} className="w-5 h-5 cursor-pointer" alt="Close" />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>

                <div
                    className="border border-gray-300 h-24 p-4 rounded-md text-center text-sm text-gray-500 mb-4 cursor-pointer flex flex-col justify-center items-center"
                    onClick={handleUploadClick}
                >
                    <img src={cloudImage} className="w-6 mb-1" alt="Upload Icon" />
                    Drop Files Here Or Click To Upload
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
                <div>
                    <label className="block text-sm">Branch</label>
                    <select className="w-full border-2 px-4 py-2 rounded">
                        <option>Select Branch</option>
                        <option value="RVR">RVR</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm">Title</label>
                    <input
                        className="w-full border-2 px-4 py-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm">Course</label>
                    <input
                        className="w-full border-2 px-4 py-2 rounded"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm">Description</label>
                    <input
                        className="w-full border-2 px-4 py-2 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm">Video URI</label>
                    <input className="w-full border-2 px-4 py-2 rounded" />
                </div>

                <div className="flex gap-2 items-center">
                    <label className="text-sm">Status:</label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={() => setIsActive((prev) => !prev)}
                            className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-300 rounded-full relative transition-colors peer-checked:bg-green-500">
                            <div
                                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${isActive ? "translate-x-4 left-0.5" : "left-0.5"
                                    }`}
                            />
                        </div>
                    </label>
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 h-8 border rounded text-blue-600 border-blue-600"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="px-4 h-8 bg-[#CA406F] text-white rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudyMaterial;