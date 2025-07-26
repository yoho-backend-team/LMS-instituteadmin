import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { curveCardinal } from "d3-shape";
import { useState } from "react";

const dataRevenue = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2800 },
  { name: "Sep", uv: 3200 },
  { name: "Oct", uv: 3100 },
  { name: "Nov", uv: 2900 },
  { name: "Dec", uv: 3700 },
];

const dataExpense = [
  { name: "Jan", uv: 2000 },
  { name: "Feb", uv: 2200 },
  { name: "Mar", uv: 1800 },
  { name: "Apr", uv: 2100 },
  { name: "May", uv: 1700 },
  { name: "Jun", uv: 1900 },
  { name: "Jul", uv: 2300 },
  { name: "Aug", uv: 2500 },
  { name: "Sep", uv: 2700 },
  { name: "Oct", uv: 2600 },
  { name: "Nov", uv: 2400 },
  { name: "Dec", uv: 2800 },
];

const cardinal = curveCardinal.tension(0.2);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-2 py-1 rounded shadow-lg text-sm text-gray-700 border border-gray-200">
        {`${payload[0].value}k`}
      </div>
    );
  }
  return null;
};

const DbChart = () => {
  const [activeTab, setActiveTab] = useState<"revenue" | "expense">("revenue");

  const data = activeTab === "revenue" ? dataRevenue : dataExpense;
  const color = activeTab === "revenue" ? "#3b82f6" : "#f43f5e";

  return (
    <div className="w-full h-85 rounded-2xl bg-gradient-to-bl from-pink-200 to-blue-200 p-4 shadow-xl">
      {/* Tabs */}
      <div className="flex gap-4 mb-3">
        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-4 py-1.5 rounded-lg shadow-md text-sm ${
            activeTab === "revenue"
              ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
              : "bg-gray-100 text-gray-500 shadow-inner"
          }`}
        >
          Revenue
        </button>
        <button
          onClick={() => setActiveTab("expense")}
          className={`px-4 py-1.5 rounded-lg shadow-md text-sm ${
            activeTab === "expense"
              ? "bg-gradient-to-br from-rose-400 to-rose-600 text-white"
              : "bg-gray-100 text-gray-500 shadow-inner"
          }`}
        >
          Expense
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.6} />
              <stop offset="100%" stopColor={color} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="name"
            stroke="#374151"
            fontSize={12}
            padding={{ left: 10, right: 10 }}
          />

          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type={cardinal}
            dataKey="uv"
            stroke={color}
            fill="url(#chartFill)"
            strokeWidth={2}
            dot={{ r: 3, stroke: "#fff", strokeWidth: 1.5 }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DbChart;
