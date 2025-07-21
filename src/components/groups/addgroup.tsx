import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import bg from '../../../src/assets/Backdrop Image.png'
import {FONTS} from '../../constants/uiConstants'

export default function AddGroup() {
  const permissions = [
    ["Dashboard", "Groups"],
    ["Users", "User Details"],
    ["Categories", "Courses"],
    ["Course Details", "Branch Details"],
    ["Course Notes", "Course Modules"],
  ];

  return (
    <div
  className="min-h-screen px-8 py-6 bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
       <div className="bg-white top-80 shadow-md rounded-xl p-6 max-w-5xl mx-auto">
      <h2 className="text-lg font-bold text-[#CA406f] mb-2"  style={FONTS.form_head}>Add New Group</h2>
      <p className="text-gray-500 text-sm mb-4"  style={FONTS.form_des}>Set Group Permissions</p>

      {/* Group Name */}
      <label className=" text-sm font-medium !text-gray-600 mb-1"  style={FONTS.add_button}>Group Name</label>
      <Input
        defaultValue="John William"
        className="border-pink-400 w-2xl focus:ring-[#CA406f] mb-4"
      />
      
      <div className="flex items-center justify-between border-t pt-3 mb-4">
        <span className="font-medium text-gray-600" style={FONTS.card_htext}>Group Permissions</span>
         
        <div className="flex items-center space-x-2">
          <Checkbox id="selectAll" />
          <label htmlFor="selectAll" className="text-sm text-gray-600">
            Select All
          </label>
        </div>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"  style={FONTS.form_topic}>
        {permissions.map(([left, right], index) => (
          <React.Fragment key={index}>
            <PermissionSelect label={left}  />
            <PermissionSelect label={right} />
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  );
}


function PermissionSelect({ label }: { label: string }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <Select>
        <SelectTrigger className="w-full bg-white text-gray-700 border rounded-md">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-white text-gray-700 shadow-md">
          <SelectItem value="read">Read</SelectItem>
          <SelectItem value="write">Write</SelectItem>
          <SelectItem value="full">Full Access</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
