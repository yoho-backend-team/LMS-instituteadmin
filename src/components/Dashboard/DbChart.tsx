import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
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

const DiamondBar = (props: any) => {
  const { x, y, width, height } = props;
  const depth = 12; // 3D isometric depth
  
  // Colors matching your Figma design
  const frontColor = "#BF4B94"; // Front face - main pink
  const topColor = "#BF4B94"; // Top face - lighter pink
  const rightColor = "#F798D3"; // Right face - darker pink
  
  return (
    <g>
      {/* Front face - main rectangular bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={frontColor}
        stroke="none"
      />
      
      {/* Top face - isometric top */}
      <polygon
        points={`
          ${x},${y} 
          ${x + depth},${y - depth} 
          ${x + width + depth},${y - depth} 
          ${x + width},${y}
        `}
        fill={topColor}
        stroke="none"
      />
      
      {/* Right face - isometric right side */}
      <polygon
        points={`
          ${x + width},${y} 
          ${x + width + depth},${y - depth} 
          ${x + width + depth},${y + height - depth} 
          ${x + width},${y + height}
        `}
        fill={rightColor}
        stroke="none"
      />
    </g>
  );
};

export default function RevenueExpenseChart() {
  const [activeTab, setActiveTab] = useState<"revenue" | "expense">("revenue");
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "revenue" 
              ? "bg-[#CA406F] text-white" 
              : "bg-gray-100 text-[#CA406F] hover:bg-gray-200"
          }`}
        >
          Revenue
        </button>
        <button
          onClick={() => setActiveTab("expense")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "expense" 
              ? "bg-[#CA406F] text-white" 
              : "bg-gray-100 text-[#CA406F] hover:bg-gray-200"
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
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              domain={[0, 5000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            />
            {/* <Tooltip 
              formatter={(value) => [`$${value}`, activeTab.charAt(0).toUpperCase() + activeTab.slice(1)]}
              labelFormatter={(label) => `Month: ${label}`}
            /> */}
            
            <Bar
              dataKey={activeTab}
              shape={<DiamondBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}