import  { useState } from "react";
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
  const depth =18; // Optimal depth for 3D effect
  
  // Enhanced color scheme with better contrast
  const frontColor = "#FFFFFF";
  const topColor = "#F0F2F5";
  const rightColor = "#E5E7EB";
  const strokeColor = "#D1D5DB";
  const shadowColor = "#E5E7EB";

  // Calculate all points for precise 3D effect
  const front = {
    topLeft: { x, y },
    topRight: { x: x + width, y },
    bottomRight: { x: x + width, y: y + height },
    bottomLeft: { x, y: y + height }
  };
  
  const top = {
    backLeft: { x: x + depth, y: y - depth },
    backRight: { x: x + width + depth, y: y - depth }
  };
  
  const right = {
    backBottom: { x: x + width + depth, y: y + height - depth }
  };

  return (
    <g>
      {/* Top face - rendered first so it's behind other elements */}
      <polygon
        points={`
          ${front.topLeft.x},${front.topLeft.y}
          ${top.backLeft.x},${top.backLeft.y}
          ${top.backRight.x},${top.backRight.y}
          ${front.topRight.x},${front.topRight.y}
        `}
        fill={topColor}
        stroke={strokeColor}
        strokeWidth={0.5}
      />
      
      {/* Right face */}
      <polygon
        points={`
          ${front.topRight.x},${front.topRight.y}
          ${top.backRight.x},${top.backRight.y}
          ${right.backBottom.x},${right.backBottom.y}
          ${front.bottomRight.x},${front.bottomRight.y}
        `}
        fill={rightColor}
        stroke={strokeColor}
        strokeWidth={0.5}
      />
      
      {/* Front face - main visible part */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={frontColor}
        stroke={strokeColor}
        strokeWidth={0.5}
       
      />
      
      {/* Bottom shadow */}
      <polygon
        points={`
          ${front.bottomLeft.x},${front.bottomLeft.y}
          ${front.bottomRight.x},${front.bottomRight.y}
          ${right.backBottom.x},${right.backBottom.y}
          ${x + depth},${y + height}
        `}
        fill={shadowColor}
        opacity={0.7}
      />
      
      {/* Edge highlights */}
      <line
        x1={front.topRight.x}
        y1={front.topRight.y}
        x2={top.backRight.x}
        y2={top.backRight.y}
        stroke={strokeColor}
        strokeWidth={0.3}
      />
      <line
        x1={top.backRight.x}
        y1={top.backRight.y}
        x2={right.backBottom.x}
        y2={right.backBottom.y}
        stroke={strokeColor}
        strokeWidth={0.3}
      />
    </g>
  );
};

export default function RevenueExpenseChart() {
  const [activeTab, setActiveTab] = useState<"revenue" | "expense">("revenue");
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-sm w-full max-w-4xl mx-auto">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "revenue" 
              ? "bg-white text-gray-900 font-semibold shadow-sm" 
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Revenue
        </button>
        <button
          onClick={() => setActiveTab("expense")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "expense" 
              ? "bg-white text-gray-900 font-semibold shadow-sm" 
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Expense
        </button>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={36} // Slightly wider bars
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#374151" 
              opacity={0.5}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 5000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            />
            <Tooltip 
              formatter={(value) => [`$${value}`, activeTab.charAt(0).toUpperCase() + activeTab.slice(1)]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#374151',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
              itemStyle={{ color: '#FFFFFF' }}
              labelStyle={{ color: '#9CA3AF', fontWeight: 'bold' }}
            />
            
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