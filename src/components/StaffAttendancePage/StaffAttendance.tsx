import React, { useState } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import StaffCard from "./StaffCard";
import bgImage from "../../assets/bgg.png";

const StaffAttendancePage: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div
      className="h-screen w-screen flex bg-[#fce4ec] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <div className="min-h-screen p-4">
      <Header
        showFilter={showFilter}
        toggleFilter={() => setShowFilter(!showFilter)}
      />
      <div
        className={`transition-all duration-300 ease-in-out ${
          showFilter ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <FilterBar />
      </div>

      <div className="mt-4 flex flex-wrap justify-start">
        <StaffCard
          name="Elon Musk"
          email="musk@gmail.Com"
          id={46}
          present={12}
          absent={2}
          imageUrl="https://i.pravatar.cc/150?img=1"
        />
      </div>
    </div>
    </div>
  );
};

export default StaffAttendancePage;
