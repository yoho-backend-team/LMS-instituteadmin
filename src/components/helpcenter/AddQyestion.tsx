// import React from 'react';
import { MdCancel } from "react-icons/md";

export default function AddQyestion({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-100  h-140 p-4 bg-white mt-5 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl text-[#716F6F] font-semibold">Add Question</p>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl">
          <MdCancel />
        </button>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-[#716F6F] mb-1">Question</label>
          <input
            type="text"
            className="w-full border border-[#716F6F] px-5 py-4 rounded"
            placeholder="Enter your question"
          />
        </div>

        <div>
          <label className="block text-sm text-[#716F6F] mb-1">Answer</label>
          <input
            type="text"
            className="w-full border border-[#716F6F] px-5 py-4 rounded"
            placeholder="Enter the answer"
          />
        </div>

        <div>
          <label className="block text-sm text-[#716F6F] mb-1">Video Link</label>
          <input
            type="text"
            className="w-full border border-[#716F6F] px-5 py-4 rounded"
            placeholder="Paste video URL"
          />
        </div>

        <div>
          <label className="block text-sm text-[#716F6F] mb-1">Select Category</label>
          <input
            type="text"
            className="w-full border border-[#716F6F] px-4 py-3 rounded"
            placeholder="Category"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={onClose}
            className="mr-3 border border-[#CA406F] text-[#CA406F] px-3 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#CA406F] text-white px-3 py-2 rounded hover:bg-[#b1355f]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
