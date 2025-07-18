import { useState } from "react";
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

const feeData = [
  { label: "", value: 10000 },
  { label: "", value: 20000 },
  { label: "", value: 15000 },
  { label: "", value: 25000 },
  { label: "", value: 5000 },
  { label: "", value: 50000 },
  { label: "", value: 35000 },
  { label: "", value: 8000 },
  { label: "", value: 36000 },
  { label: "", value: 30000 },
  { label: "", value: 40000 },
  { label: "", value: 26000 },
];

const salaryData = [
  { label: "", value: 8000 },
  { label: "", value: 12000 },
  { label: "", value: 18000 },
  { label: "", value: 22000 },
  { label: "", value: 30000 },
  { label: "", value: 10000 },
  { label: "", value: 20000 },
  { label: "", value: 25000 },
  { label: "", value: 15000 },
  { label: "", value: 34000 },
  { label: "", value: 39000 },
  { label: "", value: 18000 },
];

const pendingsData = [
  { label: "", value: 3000 },
  { label: "", value: 1000 },
  { label: "", value: 5000 },
  { label: "", value: 2000 },
  { label: "", value: 1000 },
  { label: "", value: 4000 },
  { label: "", value: 6000 },
  { label: "", value: 3500 },
  { label: "", value: 4500 },
  { label: "", value: 2200 },
  { label: "", value: 1800 },
  { label: "", value: 2700 },
];

const totalIncomeData = feeData.map((d, i) => ({
  label: "",
  value:
    d.value +
    (salaryData[i]?.value || 0) +
    (pendingsData[i]?.value || 0),
}));

export default function EarningsChart() {
  const [active, setActive] = useState("fee");

  const getChartData = () => {
    switch (active) {
      case "salary":
        return salaryData;
      case "pendings":
        return pendingsData;
      case "total":
        return totalIncomeData;
      case "fee":
      default:
        return feeData;
    }
  };

  const getColor = () => {
    switch (active) {
      case "salary":
        return "#F97316"; 
      case "pendings":
        return "#EC4899"; 
      case "total":
        return "#FACC15"; 
      case "fee":
      default:
        return "#23AF62"; 
    }
  };

  

  return (
    <Card className="p-4 rounded-xl shadow-md bg-white overflow-hidden">
      <h4 className="text-lg font-semibold text-gray-800">Statistics</h4>
      <h4 className="text-md font-semibold text-gray-800 mt-1">
        Earning Reports
      </h4>

      <div className="flex justify-between items-center mt-1 mb-4">
        <p className="text-sm text-gray-500">Yearly Earnings Overview</p>
        <div className="flex space-x-6 text-sm mr-60 font-semibold">
          <span
            onClick={() => setActive("fee")}
            className={`cursor-pointer ${
              active === "fee"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-green-600 border-b-2 border-transparent"
            } pb-1`}
          >
            Fee
          </span>
          <span
            onClick={() => setActive("salary")}
            className={`cursor-pointer ${
              active === "salary"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-orange-500 border-b-2 border-transparent"
            } pb-1 ml-10`}
          >
            Salary
          </span>
          <span
            onClick={() => setActive("pendings")}
            className={`cursor-pointer ${
              active === "pendings"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-pink-600 border-b-2 border-transparent"
            } pb-1 ml-10`}
          >
            Pendings
          </span>
          <span
            onClick={() => setActive("total")}
            className={`cursor-pointer ${
              active === "total"
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-yellow-500 border-b-2 border-transparent"
            } pb-1 ml-10`}
          >
            Total Income
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={getChartData()} barSize={28}>
          <XAxis dataKey="label" axisLine={false} tickLine={false} tick={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
            tickFormatter={(value) => `$${value / 1000}K`}
          />
          <Tooltip
            cursor={{ fill: "rgba(47, 217, 185, 0.1)" }}
            formatter={(value) => [`$${value}`, active]}
          />
          <Bar dataKey="value" fill={getColor()} radius={[16, 16, 0, 0]}>
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) =>
                `${typeof value === "number" ? value / 1000 : Number(value) / 1000}K`
              }
              style={{ fill: "#333", fontWeight: "600", fontSize: 12 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
