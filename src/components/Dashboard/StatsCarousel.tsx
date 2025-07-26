import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import TotalEarnings from "../../assets/TotalEarningsicon.png";
import Instructor from "../../assets/Instructoricon.png";
import Project from "../../assets/Projects.png";


const statCards = [
  {
    title: "Total Earnings",
    value: "₹21,440",
    icon: TotalEarnings,
    color: "from-red-400 via-pink-500 to-purple-500",
  },
  {
    title: "Projects",
    value: "10,000",
    icon: Project,
    color: "from-green-400 via-blue-400 to-purple-500",
  },
  {
    title: "Instructor",
    value: "543",
    icon: Instructor,
    color: "from-green-200 via-green-300 to-blue-300",
  },
  {
    title: "Students",
    value: "10,000",
    icon: Instructor,
    color: "from-pink-400 via-purple-500 to-blue-500",
  },
  {
    title: "Revenue",
    value: "₹8,000",
    icon: TotalEarnings,
    color: "from-yellow-400 via-orange-400 to-red-500",
  },
];

export default function StatsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = [
    statCards[startIndex % statCards.length],
    statCards[(startIndex + 1) % statCards.length],
    statCards[(startIndex + 2) % statCards.length],
  ];

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % statCards.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + statCards.length) % statCards.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden py-4">
      <div className="flex gap-6 justify-center relative z-0 min-h-[300px]">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleCards.map((card, index) => (
            <motion.div
              key={card.title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: index === 1 ? 1.1 : 1,
                zIndex: index === 1 ? 20 : 10,
              }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 ${
                index === 1
                  ? "w-[220px] h-[280px] rounded-3xl"
                  : "w-[200px] h-[250px] rounded-2xl"
              } bg-gradient-to-br ${card.color} text-white shadow-lg flex items-center justify-between px-6 py-6 relative`}
            >
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="bg-white rounded-xl p-3 mb-2 w-fit shadow-[0_-6px_10px_rgba(255,255,255,0.6)]">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-10 w-10"
                    />
                  </div>
                  <p className="text-base font-semibold">{card.title}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-30">
        <button
          onClick={handlePrev}
          className="bg-[#CA406F] text-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-30">
        <button
          onClick={handleNext}
          className="bg-[#CA406F] text-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
