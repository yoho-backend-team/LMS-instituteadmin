interface EditBranchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditBranchModal: React.FC<EditBranchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl mx-4">
        <div className="bg-[#ca406f] text-white text-lg  font-semibold rounded-t-xl px-80 py-3">
          Edit Branch
        </div>
        <div className="grid grid-cols-2 gap-8 p-8">

  <div className="col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">Branch Name</label>
    <input
      type="text"
    //   placeholder="Enter branch name"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone Number</label>
    <input
      type="text"
    //   placeholder="Enter alternate phone"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
    <input
      type="text"
    //   placeholder="Enter phone number"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div className="col-span-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
    <input
      type="text"
    //   placeholder="Enter address"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
    <input
      type="text"
    //   placeholder="Enter pin code"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
    <input
      type="text"
    //   placeholder="Enter landmark"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
    <input
      type="text"
    //   placeholder="Enter city"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
    <input
      type="text"
    //   placeholder="Enter state"
      className="w-full border border-gray-700 rounded-md p-2"
    />
  </div>


          <div className="flex justify-end gap-4 px-178 pb-2 mt-4">
  <button
    onClick={onClose}
    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
  >
    Cancel
  </button>
  <button className="bg-[#ca406f] text-white px-4 py-2 rounded-md hover:bg-[#b1365e]">
    Submit
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default EditBranchModal;