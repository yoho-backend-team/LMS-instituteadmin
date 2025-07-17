import { Card } from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  { label: "", fee: 10000 },
  { label: "", fee: 20000 },
  { label: "", fee: 15000 },
  { label: "", fee: 25000 },
  { label: "", fee: 5000 },
  { label: "", fee: 50000 }, // highest
  { label: "", fee: 35000 },
  { label: "", fee: 8000 },
  { label: "", fee: 36000 },
  { label: "", fee: 30000 },
  { label: "", fee: 40000 },
  { label: "", fee: 26000 },
];

export default function EarningsChart() {
  return (
    <Card className="p-4 rounded-xl shadow-md bg-white overflow-hidden">
      {/* Titles */}
      <h4 className="text-lg font-semibold text-gray-800">Statistics</h4>
      <h4 className="text-md font-semibold text-gray-800 mt-1">
        Earning Reports
      </h4>

      {/* Overview + Tabs */}
      <div className="flex justify-between items-center mt-1 mb-4">
        <p className="text-sm text-gray-500">Yearly Earnings Overview</p>
        <div className="flex space-x-4 text-sm font-semibold">
          <span className="text-green-600 border-b-2 border-green-600 pb-1">
            Fee
          </span>
          <span className="text-orange-500">Salary</span>
          <span className="text-pink-600">Pendings</span>
          <span className="text-yellow-500">Total Income</span>
        </div>
      </div>

      {/* Graph */}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={28}>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
            tickFormatter={(value) => `$${value / 1000}K`}
          />
          <Tooltip
            cursor={{ fill: "rgba(47, 217, 185, 0.1)" }}
            formatter={(value) => [`$${value}`, "Fee"]}
          />
          <Bar
            dataKey="fee"
            fill="#23AF62"
            radius={[16, 16, 0, 0]}
          >
            <LabelList
  dataKey="fee"
  position="top"
  formatter={(value) => {
    const numericValue = typeof value === "number" ? value : Number(value);
    return `${numericValue / 1000}K`;
  }}
  style={{ fill: "#333", fontWeight: "600", fontSize: 12 }}
/>

          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
