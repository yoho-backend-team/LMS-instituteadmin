import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const chartData = [
  { month: "Jan", revenue: 4000, expense: 3500 },
  { month: "Feb", revenue: 3000, expense: 2800 },
  { month: "Mar", revenue: 2000, expense: 1800 },
  { month: "Apr", revenue: 2780, expense: 2500 },
  { month: "May", revenue: 1890, expense: 1600 },
  { month: "Jun", revenue: 2390, expense: 2100 },
  { month: "Jul", revenue: 3490, expense: 3200 },
  { month: "Aug", revenue: 4000, expense: 3800 },
  { month: "Sep", revenue: 3500, expense: 3200 },
  { month: "Oct", revenue: 3200, expense: 2900 },
  { month: "Nov", revenue: 2800, expense: 2500 },
  { month: "Dec", revenue: 3900, expense: 3600 },
];

// Custom 3D Diamond Bar
const DiamondBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  const depth = 8;

  const frontColor = fill;
  const topColor = "#e55a9b";    // top highlight
  const rightColor = "#a33572";  // darker side

  return (
    <g>
      {/* Front */}
      <rect x={x} y={y} width={width} height={height} fill={frontColor} />

      {/* Top */}
      <polygon
        points={`${x},${y} ${x + depth},${y - depth} ${x + width + depth},${y - depth} ${x + width},${y}`}
        fill={topColor}
      />

      {/* Right */}
      <polygon
        points={`${x + width},${y} ${x + width + depth},${y - depth} ${x + width + depth},${y + height - depth} ${x + width},${y + height}`}
        fill={rightColor}
      />
    </g>
  );
};

export default function RevenueExpenseChart() {
  const [activeTab, setActiveTab] = useState<"revenue" | "expense">("revenue");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "revenue"
              ? "bg-[#CA406F] text-white"
              : "text-[#CA406F] hover:bg-gray-100 border border-[#CA406F]"
          }`}
        >
          Revenue
        </button>
        <button
          onClick={() => setActiveTab("expense")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "expense"
              ? "bg-[#CA406F] text-white"
              : " text-[#CA406F] hover:bg-gray-100 border border-[#CA406F]"
          }`}
        >
          Expense
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barSize={32}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              domain={[0, 5000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            />

            <Bar
              dataKey={activeTab}
              shape={<DiamondBar />}
              fill="#BF4B94"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
