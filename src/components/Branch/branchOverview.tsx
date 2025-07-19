import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import EarningsChart from "./charts";
import CircularCardCarousel from "./branchOverviewCards";
import { FONTS } from "@/constants/uiConstants";

const activities = new Array(8).fill({
  title: "Notes Created",
  desc: "Create | Rev - Study Material Created",
});


const BranchOverview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
 

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  px-6 py-6">
      <h2 className=" mb-6" style={{...FONTS.form_head}}>Branch Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
        <CircularCardCarousel/>
          <EarningsChart />
        </div>

    
        <Card className="rounded-xl shadow-md bg-white max-h-[800px]">
          <CardContent className="p-4">
            <h4 className=" mb-4"style={{...FONTS.card_htext}}>Recent Activities</h4>
            <ScrollArea className="h-[700px] pr-2">
              <div className="space-y-3">
                {activities.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-3 rounded-xl p-4 border border-gray-200 shadow-md bg-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:bg-gradient-to-l hover:from-[#f68aab] hover:to-[#ca406f] hover:text-white"
                    style={{ willChange: "transform" }}
                  >
                    <div className="w-10 h-10 mt-1 rounded-full bg-[#ca406f] group-hover:bg-white transition-all duration-300 flex-shrink-0" />
                    <div className="flex flex-col">
                      <p style={{...FONTS.card_head1}} className="text-[#716F6F] group-hover:text-white">{item.title}</p>
                      <p className="text-xs mt-3 text-[#716F6F] group-hover:text-white"style={{...FONTS.dropdown1}}>
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
