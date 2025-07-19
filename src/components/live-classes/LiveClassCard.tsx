
import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Paperclip } from "lucide-react";

const LiveClassCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* Card Start */}
        <div className="flex bg-white shadow-md rounded-xl overflow-hidden shadow-2xl">
          {/* Avatar */}
          <div className="flex items-center justify-center p-4">
            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <h3 className="font-semibold text-lg">MERN</h3>
            <p className="text-sm text-gray-600">2 Students on this Class</p>

            <div className="flex items-center text-sm text-gray-600 mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              Thu, July 12, 2025 | 12:00 PM – 01:00 PM
            </div>

            <div className="flex items-center text-sm text-blue-700 mt-2">
              <Paperclip className="w-4 h-4 mr-2 text-purple-600" />
              <a href="#" className="underline">
                Thu, July 12, 2025 | 12:00 PM – 01:00 PM
              </a>
            </div>
          </div>

          {/* Menu (3 dots) */}
          <div className="flex items-start p-4">
            <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        {/* Card End */}

        {/* Card 2 Start */}
        <div className="flex bg-white shadow-md rounded-xl overflow-hidden">
          {/* Avatar */}
          <div className="flex items-center justify-center p-4">
            <div className="w-12 h-12 rounded-full bg-black"></div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <h3 className="font-semibold text-lg">MERN</h3>
            <p className="text-sm text-gray-600">1 Students on this Class</p>

            <div className="flex items-center text-sm text-gray-600 mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              Thu, July 12, 2025 | 12:00 PM – 01:00 PM
            </div>

            <div className="flex items-center text-sm text-blue-700 mt-2">
              <Paperclip className="w-4 h-4 mr-2 text-purple-600" />
              <a href="#" className="underline">
                Thu, July 12, 2025 | 12:00 PM – 01:00 PM
              </a>
            </div>
          </div>

          {/* Menu (3 dots) */}
          <div className="flex items-start p-4">
            <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        {/* Card 2 End */}
      </div>

      {/* Single View More Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => navigate("/live-classes/details/123")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default LiveClassCard;
