import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FONTS } from "@/constants/uiConstants";

// Type definitions
interface ChartData {
  label: string;
  value: number;
}

type ChartType = "fee" | "salary" | "pendings" | "total";

interface ChartConfig {
  [key: string]: {
    color: string;
    darkColor: string;
    lightColor: string;
  };
}

// Data sets
const feeData: ChartData[] = [
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

const salaryData: ChartData[] = [
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

const pendingsData: ChartData[] = [
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

const totalIncomeData: ChartData[] = feeData.map((d, i) => ({
  label: "",
  value: d.value + (salaryData[i]?.value || 0) + (pendingsData[i]?.value || 0),
}));

// Chart configuration
const chartConfig: ChartConfig = {
  fee: {
    color: "#23AF62",
    darkColor: "#1a8a4d",
    lightColor: "#4ade80",
  },
  salary: {
    color: "#F97316",
    darkColor: "#d4590a",
    lightColor: "#fbbf24",
  },
  pendings: {
    color: "#EC4899",
    darkColor: "#db2777",
    lightColor: "#f9a8d4",
  },
  total: {
    color: "#FACC15",
    darkColor: "#eab308",
    lightColor: "#fef08a",
  },
};

// 3D Cylindrical Bar Component
interface CylindricalBarProps {
  value: number;
  maxValue: number;
  config: ChartConfig[string];
  height: number;
}

const CylindricalBar: React.FC<CylindricalBarProps> = ({ 
  value, 
  maxValue, 
  config, 
  height 
}) => {
  const barHeight = Math.max((value / maxValue) * height, 8);
  
  return (
    <div className="relative flex flex-col items-center">
      {/* 3D Cylindrical Bar */}
      <div
        className="relative transition-all duration-300 ease-in-out"
        style={{
          width: '28px',
          height: `${barHeight}px`,
          transformStyle: 'preserve-3d',
          perspective: '200px'
        }}
      >
        {/* Value label - positioned on top of cylinder */}
        <span 
          className="absolute text-xs font-semibold text-gray-700 whitespace-nowrap z-10"
          style={{ 
            top: '-22px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          {`${value / 1000}K`}
        </span>
        
        {/* Cylinder body */}
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(90deg, 
              ${config.darkColor} 0%,
              ${config.color} 30%,
              ${config.lightColor} 50%,
              ${config.color} 70%,
              ${config.darkColor} 100%)`,
            boxShadow: `
              3px 0 8px rgba(0,0,0,0.2),
              inset -2px 0 4px rgba(0,0,0,0.1),
              inset 2px 0 4px rgba(255,255,255,0.2)
            `
          }}
        />
        
        {/* Top ellipse */}
        <div
          className="absolute left-0 w-full"
          style={{
            top: '-3px',
            height: '8px',
            background: `radial-gradient(ellipse at center, 
              ${config.lightColor} 70%,
              ${config.color} 60%,
              ${config.darkColor} 100%)`,
            borderRadius: '50%',
            boxShadow: `
              0 2px 6px rgba(0,0,0,0.3),
              inset 0 1px 2px rgba(255,255,255,0.6)
            `,
            zIndex: 2
          }}
        />
        
        {/* Bottom ellipse */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: '8px',
            transform: 'translateY(50%)'
          }}
        />
      </div>
    </div>
  );
};

// Main Component
const EarningsChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ChartType>("fee");

  const getChartData = (): ChartData[] => {
    switch (activeTab) {
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

  const getMaxValue = (): number => {
    return Math.max(...getChartData().map(d => d.value));
  };

  const yAxisLabels = ["$50K", "$40K", "$30K", "$20K", "$10K", "$0K"];

  return (
    <Card className="p-4 rounded-xl shadow-md bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800">Statistics</h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="bg-white backdrop-blur-md rounded-md p-1 hover:bg-gray-50 shadow-md transition-colors"
              aria-label="More options"
            >
              <MoreVertical className="w-5 h-5 text-pink-600" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-lg shadow-xl w-32 p-2 space-y-2">
            <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-pink-600 hover:text-white transition-colors">
              <span>Last Week</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-pink-600 hover:text-white transition-colors">
              <span>Last Month</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="group border border-gray-300 text-black font-medium text-sm rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-pink-600 hover:text-white transition-colors">
              <span>Last Year</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-800 mb-1">
        Earning Reports
      </h4>

      {/* Description and Tabs */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-600">Yearly Earnings Overview</p>
        <div className="flex space-x-6 mr-60 font-semibold text-lg" style={{...FONTS.card_head}}>
          {(Object.keys(chartConfig) as ChartType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-1 border-b-2 transition-colors capitalize ${
                activeTab === tab
                  ? "border-current"
                  : "border-transparent"
              }`}
              style={{ color: chartConfig[tab].color }}
            >
              {tab === "total" ? "Total Income" : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-56">
        {/* Y-axis */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
          {yAxisLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>

        {/* Chart bars */}
        <div className="ml-12 h-full border-l border-b border-gray-200 relative">
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2">
            {getChartData().map((data, index) => (
              <CylindricalBar
                key={index}
                value={data.value}
                maxValue={getMaxValue()}
                config={chartConfig[activeTab]}
                height={200}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EarningsChart;