import React from "react";

const tabs = ["Opened Tickets","Closed Tickets"];

type Props = {
  selected: string;
  setSelected: (tab: string) => void;
};

const TicketTabs: React.FC<Props> = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`px-4 py-2 rounded-sm border ${
            selected === tab
              ? "bg-[#CA406F] text-white border-[#CA406F]"
              : "bg-white text-gray-700 border-gray-300"
          } transition`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TicketTabs;
