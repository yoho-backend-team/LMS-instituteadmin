import React, { useState, useEffect, type ChangeEvent } from "react";
import {
  FiSend,
  FiSmile,
  FiPaperclip,
  FiCheck,
  FiClock,
  FiPhone,
  FiX,
} from "react-icons/fi";
import EmojiPicker from "emoji-picker-react";
import sendIcon from "../../assets/Send.svg";
import userIcon from "../../assets/User.svg";
import chatbg from "../../assets/ChatBg.png";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
  status: "sent" | "delivered" | "seen";
  file?: File;
  fileUrl?: string;
}

interface Batch {
  id: number;
  name: string;
  image: string;
  about?: string;
  email?: string;
  timing?: string;
  phone?: string;
  status?: string;
  batch?: string;
}

interface ChatProps {
  selectedBatch: Batch | null;
  setSelectedBatch: (batch: Batch | null) => void;
}

<<<<<<< HEAD
const Chat: React.FC<ChatProps> = ({ selectedBatch,}) => {
=======
const Chat: React.FC<ChatProps> = ({ selectedBatch, setSelectedBatch }) => {
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
  const [messagesByBatch, setMessagesByBatch] = useState<
    Record<number, Message[]>
  >({});
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setNewMessage("");
    setSelectedFile(null);
    setShowEmojiPicker(false);
    if (selectedBatch && !messagesByBatch[selectedBatch.id]) {
      setMessagesByBatch((prev) => ({
        ...prev,
        [selectedBatch.id]: [
          {
            id: 1,
            text: "Hello!",
            sender: "other",
            time: "10:00 AM",
            status: "seen",
          },
          {
            id: 2,
            text: "Hi there!",
            sender: "me",
            time: "10:01 AM",
            status: "delivered",
          },
        ],
      }));
    }
  }, [selectedBatch]);

  const currentMessages = selectedBatch
    ? messagesByBatch[selectedBatch.id] || []
    : [];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim() && !selectedFile) return;
    if (!selectedBatch) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const fileUrl = selectedFile
      ? URL.createObjectURL(selectedFile)
      : undefined;

    const newMsg: Message = {
      id: currentMessages.length + 1,
      text: newMessage,
      sender: "me",
      time,
      status: "sent",
      file: selectedFile || undefined,
      fileUrl: fileUrl || undefined,
    };

    setMessagesByBatch((prev) => ({
      ...prev,
      [selectedBatch.id]: [...(prev[selectedBatch.id] || []), newMsg],
    }));

    setNewMessage("");
    setSelectedFile(null);
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (emojiData: any) => {
    setNewMessage((prev) => prev + emojiData.emoji);
  };

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sent":
        return <FiCheck className="inline text-gray-400 ml-1" />;
      case "delivered":
        return (
          <span className="inline ml-1 text-blue-500">
            <FiCheck className="inline" />
            <FiCheck className="inline -ml-2" />
          </span>
        );
      case "seen":
        return (
          <span className="inline ml-1 text-green-500">
            <FiCheck className="inline" />
            <FiCheck className="inline -ml-2" />
          </span>
        );
      default:
        return <FiClock className="inline text-gray-400 ml-1" />;
    }
  };

  const renderFilePreview = (fileUrl: string, file: File) => {
    if (!file || !fileUrl) return null;

    if (file.type.startsWith("image/")) {
      return <img src={fileUrl} alt="uploaded" className="w-40 mt-2 rounded" />;
    } else if (file.type.startsWith("video/")) {
      return <video controls src={fileUrl} className="w-40 mt-2 rounded" />;
    } else {
      return (
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-2 block"
        >
          {file.name}
        </a>
      );
    }
  };

  if (!selectedBatch) {
    return (
      <div className="text-gray-500 text-center mt-32">
        Select a batch to start chatting
      </div>
    );
  }

  return (
    <div className="relative text-[#716F6F] bg-white rounded-lg h-[87vh] p-4 mr-10 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 bg-white shadow-2xl h-18 rounded-2xl cursor-pointer">
        <img
          src={selectedBatch.image}
          alt=""
          className="w-13 h-13 ml-5 rounded-full"
          onClick={() => setShowModal(true)}
        />
        <div>
          <h2 className="text-xl font-semibold">{selectedBatch.name}</h2>
          <h2 className="text-sm">{selectedBatch.batch}</h2>
        </div>
      </div>

      {/* Message area */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3 rounded-t-2xl "
        style={{
          backgroundImage: `url(${chatbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {currentMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col items-${
              msg.sender === "me" ? "end" : "start"
            } mb-3`}
          >
            <div
              className={`flex items-end ${
                msg.sender === "me" ? "flex-row-reverse" : "flex-row"
              } gap-2`}
            >
              <img
                src={userIcon}
                alt=""
                className={`p-2 rounded-lg w-10 h-10 ${
                  msg.sender === "me" ? "bg-blue-700 ml-2" : "bg-blue-700 mr-2"
                }`}
              />

              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  msg.sender === "me"
                    ? "bg-[#CA406F] text-white"
                    : "bg-white text-black"
                }`}
              >
                <div>{msg.text}</div>
                {msg.file &&
                  msg.fileUrl &&
                  renderFilePreview(msg.fileUrl, msg.file)}
              </div>
            </div>

            <div
              className={`text-xs mt-1 text-gray-400 flex items-center gap-1 ${
                msg.sender === "me"
                  ? "justify-end pr-12"
                  : "justify-start pl-12"
              }`}
            >
              {msg.time}
              {msg.sender === "me" && getStatusIcon(msg.status)}
            </div>
          </div>
        ))}
      </div>

      {showEmojiPicker && (
        <div className="absolute bottom-24 left-6 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      <div
        className="p-4 flex items-center gap-2 rounded-b-2xl relative"
        style={{
          backgroundImage: `url(${chatbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex items-center w-full">
          <span
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className="absolute left-3 text-gray-500 cursor-pointer"
          >
            <FiSmile className="text-xl" />
          </span>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="w-full rounded-lg pl-12 pr-12 h-13 py-2 focus:outline-none shadow-2xl bg-white focus:ring-2"
            placeholder="Type your message..."
          />
          <span className="absolute right-8 text-gray-500">
            <label className="cursor-pointer">
              <FiPaperclip className="text-xl" />
              <input type="file" hidden onChange={handleFileChange} />
            </label>
          </span>
        </div>
        <button
          onClick={sendMessage}
          className="bg-green-500 h-13 w-13 text-white p-2 rounded-md"
        >
          <img src={sendIcon} alt="Send" className="ml-1.5" />
        </button>
      </div>

     
      {showModal && selectedBatch && (
        <div className="fixed inset-0 z-50 flex backdrop-blur-sm bg-white/30 h-screen justify-end bg-opacity-40">
          <div className="relative w-2/8 h-[87vh] mt-15 bg-white rounded-2xl shadow-2xl z-50 p-6 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-white bg-black rounded-2xl"
              onClick={() => setShowModal(false)}
            >
              <FiX className="text-2xl" />
            </button>
            <div className="flex flex-col gap-5 items-center text-center mt-4">
              <img
                src={selectedBatch.image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h2 className="text-xl font-bold mt-2">{selectedBatch.name}</h2>
              <p className="text-green-600 text-sm font-semibold">
                {selectedBatch.status}
              </p>
            </div>
            <hr className="my-6 border-gray-200" />
            <div className="space-y-6 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">About</h3>
                <p>{selectedBatch.about}</p>
              </div>
              <div className="border-b-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Personal Information
                </h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <FiSend className="text-gray-500" />
                    {selectedBatch.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiClock className="text-gray-500" />
                    {selectedBatch.timing}
                  </p>
                  <p className="flex items-center gap-2 pb-5">
                    <FiPhone className="text-gray-500" />
                    {selectedBatch.phone}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Staff</h3>
                <p className="text-gray-500">No Staffs Found</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Students</h3>
                <p className="text-gray-500">No Students Found</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
