import React from "react";

const userActivity = [
  {
    title: "Password Reset Request",
    description:
      "Password reset requested for user with email vecag76591@buides.com 7 Monday 2025, 3:52 PM",
    time: "4/7/2025 – 5:33:59 PM",
  },
  {
    title: "Password Reset Successfully",
    description:
      "Password reset successfully for user with email vecag76591@buides.com",
    time: "4/7/2025 – 5:33:59 PM",
  },
  {
    title: "Password Reset Request",
    description:
      "Password reset requested for user with email vecag76591@buides.com 7 Monday 2025, 3:52 PM",
    time: "4/7/2025 – 5:33:59 PM",
  },
];

const ActivityTab: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <div className="bg-white rounded-md shadow-md p-6 relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          User Activity Timeline
        </h2>

        <div className="relative pl-6">
          {/* Vertical line */}
          

          {userActivity.map((activity, index) => (
            <div key={index} className="relative mb-8">
              {/* Green Dot */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#3ABE65] border-2 shadow-[0_0_6px_2px_rgba(34,197,94,0.6)]" />


              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start ml-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {activity.title}
                  </h3>
                  <div className="absolute left-2 h-full w-0.5 bg-gray-200" />
                  <p className="text-gray-500 text-sm mt-1">
                    {activity.description}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-sm text-gray-400 whitespace-nowrap">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTab;
