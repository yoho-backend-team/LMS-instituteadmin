import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import ClassessModal from "../modal/ClassessModal";

const dummyClasses = [
  {
    title: "Intro to Python Programming",
    students: 15,
    time: "9:00 AM to 11:00 AM",
  },
  {
    title: "Full Stack Web Development",
    students: 22,
    time: "1:00 PM to 4:00 PM",
  },
  {
    title: "UI/UX Design Basics",
    students: 8,
    time: "10:00 AM to 12:30 PM",
  },
  {
    title: "Advanced React Techniques",
    students: 18,
    time: "2:00 PM to 5:00 PM",
  },
  {
    title: "Data Structures in Java",
    students: 12,
    time: "4:00 PM to 6:30 PM",
  },
  {
    title: "Machine Learning Intro",
    students: 20,
    time: "11:00 AM to 1:00 PM",
  },
];

const ClassesTab = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedClassIndex, setSelectedClassIndex] = useState<number | null>(
    null
  );

  const handleOpenForm = (index: number) => {
    setSelectedClassIndex(index);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedClassIndex(null);
  };

  return (
    <div className="p-4 transition-all duration-300">
      {showForm && selectedClassIndex !== null ? (
        <ClassessModal
          onClose={handleCloseForm}
          classData={dummyClasses[selectedClassIndex]}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {dummyClasses.map((cls, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-sm flex flex-col gap-3"
            >
              <div>
                <h3 className="text-lg font-semibold">{cls.title}</h3>
                <p className="text-gray-500 text-sm">
                  {cls.students} students in this class
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaCalendarAlt />
                <p>{cls.time}</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-3 py-1 bg-green-500 rounded-sm text-white hover:bg-green-600"
                  onClick={() => handleOpenForm(index)}
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
