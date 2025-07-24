import CustomDropdown from "@/components/StaffManagement/CustomeDropDown";
import type { Ticket } from "@/pages/ticketmanagement/yourticket/yourticket";
import { useRef, useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface Props {
  onClose: () => void;
  onSubmit: (ticket: Omit<Ticket, "id">) => void;
}

const Createticket = ({ onClose, onSubmit }: Props) => {
  const priorityOptions = ["Low", "Medium", "High"];
  const [priority, setPriority] = useState("");
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!query.trim()) newErrors.query = "Query is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!priority) newErrors.priority = "Priority is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newTicket = {
      name: "User",
      email: "user@example.com",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      priority,
      description: query + "\n" + description,
    };

    onSubmit(newTicket);
  };

  return (
    <div className="relative text-[#7D7D7D] p-4 h-full ">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white bg-gray-500 rounded-full p-1 hover:bg-red-500"
      >
        <IoMdClose size={16} />
      </button>
      <h2 className="text-xl font-bold mb-4 text-[#716F6]">Create Ticket</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-6 overflow-y-auto h-[70vh] scrollbar-hide"
      >
        {/* Query */}
        <div className="flex flex-col gap-2">
          <label>Query</label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Your query"
            className={`border p-2 rounded h-20 ${
              errors.query ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.query && (
            <span className="text-red-500 text-sm">{errors.query}</span>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue"
            className={`border p-2 rounded h-20 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <span className="text-red-500 text-sm">{errors.description}</span>
          )}
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-2">
          <label>Priority</label>
          <CustomDropdown
            options={priorityOptions}
            value={priority}
            onChange={setPriority}
            placeholder="Select Priority"
          />
          {errors.priority && (
            <span className="text-red-500 text-sm">{errors.priority}</span>
          )}
        </div>

        {/* File Upload */}
        <div
          onClick={handleUploadClick}
          className="flex items-center gap-2 border p-5 rounded-lg flex-col justify-center cursor-pointer hover:bg-gray-100 transition"
        >
          <BiSolidCloudUpload size={40} className="text-blue-800" />
          <span className="text-gray-600">
            Drop File Here Or Click To Upload
          </span>
          <input type="file" ref={fileInputRef} className="hidden" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4">
          <button
            className="bg-gray-300 text-blue-700 border-blue-700 border px-4 py-1 rounded mt-2"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-[#CA406F] text-white px-4 py-1 rounded mt-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createticket;
