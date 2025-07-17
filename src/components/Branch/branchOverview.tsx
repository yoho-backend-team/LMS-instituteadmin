import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import dollar from "../../assets/dollar.png";
import classimg from "../../assets/classimg (1).png";
import img from "../../assets/arr.png";
import EarningsChart from "./charts";
import CircularCardCarousel from "./branchCards";

const activities = new Array(8).fill({
  title: "Notes Created",
  desc: "Create | Rev - Study Material Created",
});

const metrics = [
  { label: "Profits", value: "12345", img: dollar, bg: "from-[#DB55D2] to-[#7A69FE]" },
  { label: "Payouts", value: "1234", img: img, bg: "from-[#7ED74F] to-[#3EDFEB]" },
  { label: "Courses", value: "098", img: classimg, bg: "from-[#E3418F] to-[#E6E321]" },
  { label: "Instructor", value: "8734", img: dollar, bg: "from-[#4181E3] to-[#21BBE6]" },
  { label: "Student", value: "4567", img: img, bg: "from-[#BDE341] to-[#749019]" },
  { label: "Batches", value: "65", img: classimg, bg: "from-[#FBA0A6] to-[#FE6991]" },
];

const BranchOverview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loopingMetrics = [...metrics, ...metrics]; // Duplicate for infinite illusion

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-100 px-6 py-6">
      <h2 className="text-2xl font-semibold text-[#ca406f] mb-6">Branch Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
        <CircularCardCarousel/>
          <EarningsChart />
        </div>

    
        <Card className="rounded-xl shadow-md bg-white max-h-[720px]">
          <CardContent className="p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h4>
            <ScrollArea className="h-[600px] pr-2">
              <div className="space-y-3">
                {activities.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-3 rounded-xl p-4 border border-gray-200 shadow-md bg-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:bg-gradient-to-r hover:from-[#f68aab] hover:to-[#ca406f] hover:text-white"
                    style={{ willChange: "transform" }}
                  >
                    <div className="w-10 h-10 mt-1 rounded-full bg-[#ca406f] group-hover:bg-white transition-all duration-300 flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs mt-3 text-muted-foreground group-hover:text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BranchOverview;
