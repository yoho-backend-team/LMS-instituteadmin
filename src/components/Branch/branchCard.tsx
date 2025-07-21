import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import cardimg from "../../assets/institute.png";
import { FONTS } from "@/constants/uiConstants";

interface BranchCardProps {
  name: string;
  address: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ name, address }) => {
  const [status, setStatus] = useState<string>("");

  return (
    <Card className="rounded-xl shadow-sm w-[344px] ">
      <CardContent className="p-4 space-y-3">
        <div className="relative w-full h-[160px] rounded-md overflow-hidden">
          <img
            src={cardimg}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div>
          <h3  style={{...FONTS.heading_01}}>{name}</h3>
          <p style={{...FONTS.Description}}>{address}</p>
        </div>

        <div className="relative z-10">
          <Select onValueChange={(value) => setStatus(value)}>
            <SelectTrigger
              className={`w-[111px] h-[40px]  border border-grey px-2 bg-transparent shadow-none ${
                status && 'px-0 [&>svg]:hidden'
              }`}
            >
              {status ? (
                <div className="w-[111px] h-[40px] bg-[#ca406f]  text-white text-sm font-medium border rounded-md flex items-center justify-center">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              ) : (
                <SelectValue placeholder="Status" />
              )}
            </SelectTrigger>

            <SelectContent
              className="z-20 bg-white rounded-md shadow-md p-2 space-y-2"
              side="bottom"
              align="start"
            >
              <SelectItem
                value="active"
                className="bg-[#ca406f] text-white rounded-md px-4 py-2 text-sm font-medium 
                data-[highlighted]:bg-[#ca406f] hover:bg-[#ca406f] focus:bg-[#ca406f]"
              >
                Active
              </SelectItem>
              <SelectItem
                value="inactive"
                className="bg-[#ca406f] text-white mt-2 rounded-md px-4 py-2 text-sm font-medium 
                data-[highlighted]:bg-[#ca406f] hover:bg-[#ca406f] focus:bg-[#ca406f]"
              >
                Inactive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default BranchCard;
