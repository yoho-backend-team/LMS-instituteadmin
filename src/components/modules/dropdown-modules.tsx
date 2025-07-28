<<<<<<< HEAD
// import React from "react";
=======
import React from "react";
>>>>>>> 79421b6fcac107775c63e274ee1cb14246877e57
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {FONTS} from '../../constants/uiConstants'

function StatusCourseFilter() {
  return (
    <div className="w-90rem flex gap-6 bg-white shadow-md rounded-md p-4 -ml-4  ">
      <div className="flex flex-col w-1/2">
        <label className="text-sm text-gray-600 mb-1" style={FONTS.form_topic}>Status</label>
        <Select>
          <SelectTrigger className="w-[30rem] bg-white border rounded-md shadow-sm">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Course Select */}
      <div className="flex flex-col w-1/2">
        <label className="text-sm text-gray-600 mb-1" style={FONTS.form_topic}>Course</label>
        <Select>
          <SelectTrigger className="w-[30rem] bg-white border rounded-md shadow-sm">
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="nextjs">Next.js</SelectItem>
            <SelectItem value="nodejs">Node.js</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}


export default StatusCourseFilter