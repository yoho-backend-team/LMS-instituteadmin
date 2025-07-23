import React from "react";

const userActivity = [
  {
    title: "Password Reset Request",
    description:
      "Password reset requested for user with email vecag76591@buicdes.com 7 Monday 2025, 5:32 PM",
    time: "4/7/2025 - 5:33:59 PM",
  },
  {
    title: "Password Reset Successfully",
    description:
      "Password reset successfully for user with email vecag76591@buicdes.com",
    time: "4/7/2025 - 5:33:59 PM",
  },
  {
    title: "Password Reset Request",
    description:
      "Password reset requested for user with email vecag76591@buicdes.com 7 Monday 2025, 5:32 PM",
    time: "4/7/2025 - 5:33:59 PM",
  },
];

const ActivityTab: React.FC = () => {
  return (
    <div className="">

      {/* User Activity Timeline */}
      <div className="bg-white rounded-sm shadow p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          User Activity Timeline
        </h2>
        <div className="relative border-l-2 border-gray-200 ml-4">
          {userActivity.map((activity, index) => (
            <div key={index} className="mb-8 ml-6 relative">
              {/* Green dot */}
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-8 top-1" />
              <h3 className="text-sm font-semibold text-gray-800">
                {activity.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <p className="text-gray-500 text-sm">{activity.description}</p>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTab;
