import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import dollar from "../../assets/dollar.png";
import classimg from "../../assets/classimg (1).png";
import img from "../../assets/arr.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const metrics = [
  { label: "Profits", value: "12345", img: dollar, bg: "from-[#DB55D2] to-[#7A69FE]" },
  { label: "Payouts", value: "1234", img: img, bg: "from-[#7ED74F] to-[#3EDFEB]" },
  { label: "Courses", value: "098", img: classimg, bg: "from-[#E3418F] to-[#E6E321]" },
  { label: "Instructor", value: "8734", img: dollar, bg: "from-[#4181E3] to-[#21BBE6]" },
  { label: "Student", value: "4567", img: img, bg: "from-[#BDE341] to-[#749019]" },
  { label: "Batches", value: "65", img: classimg, bg: "from-[#FBA0A6] to-[#FE6991]" },
];

const getPositionClass = (index: number, activeIndex: number, length: number) => {
  const diff = (index - activeIndex + length) % length;

  if (diff === 0) return "z-30 scale-110 translate-x-0"; 
  if (diff === 1) return "z-20 scale-90 translate-x-[140px]"; 
  if (diff === 2) return "z-10 scale-75 translate-x-[280px] opacity-70"; 
  if (diff === length - 1) return "z-20 scale-90 -translate-x-[140px]"; 
  if (diff === length - 2) return "z-10 scale-75 -translate-x-[280px] opacity-70"; 

  return "opacity-0 hidden";
};

export default function CircularCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % metrics.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + metrics.length) % metrics.length);
  };

  return (
    <Card className="p-4 rounded-xl shadow-md bg-white relative overflow-hidden">
      <h4 className="text-sm font-semibold text-[#ca406f] mb-2">Key Metrics</h4>

      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-40 p-2 rounded-full bg-[#ca406f] text-white shadow hover:bg-gray-100"
        >
          <ArrowLeft />
        </button>

        <div className="flex justify-center items-center w-full h-[250px] relative">
          {metrics.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 transition-all duration-500 ease-in-out transform ${getPositionClass(
                index,
                activeIndex,
                metrics.length
              )}`}
            >
              <div
                className={`w-[220px] h-[220px] rounded-xl bg-gradient-to-br ${item.bg} text-white p-4 flex flex-col items-center justify-center shadow-lg`}
              >
                <img src={item.img} alt={item.label} className="w-14 h-14 mb-3" />
                <p className="text-md font-semibold">{item.label}</p>
                <p className="text-2xl font-bold mt-2">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-40 p-2 rounded-full bg-[#ca406f] text-white shadow hover:bg-gray-100"
        >
          <ArrowRight />
        </button>
      </div>
    </Card>
  );
}

