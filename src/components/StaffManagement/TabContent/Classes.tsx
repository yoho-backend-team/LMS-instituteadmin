import { useState } from "react";
import { Calendar } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import ClassessModal from "../modal/ClassessModal";

const ClassesTab = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="p-4 transition-all duration-300">
      {showForm ? (
        <ClassessModal onClose={handleCloseForm} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg flex flex-col gap-3"
            >
              <div>
                <h3 className="text-lg font-semibold">To path Of MERN Stack</h3>
                <p className="text-gray-500 text-sm">2 students in this class</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                {index % 2 === 0 ? <Calendar /> : <FaCalendarAlt />}
                <p>4:00 AM to 12:30 PM</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-3 py-1 bg-green-500 rounded-lg text-white hover:bg-green-600"
                  onClick={handleOpenForm}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassesTab;
