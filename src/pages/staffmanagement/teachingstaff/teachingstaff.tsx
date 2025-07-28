import React, { useState } from "react";
<<<<<<< HEAD
import Header from "@/components/StaffAttendancePage/Header";
=======
import Header from "@/components/StaffAttendancePage/Header"
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
import FilterBar from "@/components/StaffAttendancePage/FilterBar";
import StaffCard from "@/components/StaffAttendancePage/StaffCard";

const StaffAttendancePage: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
<<<<<<< HEAD
    <div className="min-h-screen w-full overflow-hidden">
      <div className="w-full p-4">
        <Header
          showFilter={showFilter}
          toggleFilter={() => setShowFilter(!showFilter)}
        />

        <div
          className={`transition-all duration-300 ease-in-out ${
            showFilter
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
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
=======
    <div
      className="h-screen w-screen flex fixed">
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
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
    </div>
  );
};

export default StaffAttendancePage;
