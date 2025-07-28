import  { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import bg from "../../../src/assets/Backdrop Image.png";
import {FONTS} from '../../constants/uiConstants'

interface PermissionItem {
  name: string;
  Read: boolean;
  Create: boolean;
  Update: boolean;
  Delete: boolean;
}

const permissions: Omit<
  PermissionItem,
  "Read" | "Create" | "Update" | "Delete"
>[] = [
  { name: "Dashboard" },
  { name: "Groups" },
  { name: "Users" },
  { name: "User Details" },
  { name: "Categories" },
  { name: "Courses" },
  { name: "Course Details" },
  { name: "Branch Details" },
];

 function EditGroup() {
  const [groupName, setGroupName] = useState("John William");

  const [permissionState, setPermissionState] = useState<PermissionItem[]>(
    permissions.map((p) => ({
      ...p,
      Read: true,
      Create: false,
      Update: true,
      Delete: true,
    }))
  );


  const handleToggle = (
    index: number,
    type: "Read" | "Create" | "Update" | "Delete"
  ) => {
    setPermissionState((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [type]: !item[type] } : item
      )
    );
  };

  const handleSelectAll = () => {
    const allSelected = permissionState.every(
      (p) => p.Read && p.Create && p.Update && p.Delete
    );
    setPermissionState((prev) =>
      prev.map((item) => ({
        ...item,
        Read: !allSelected,
        Create: !allSelected,
        Update: !allSelected,
        Delete: !allSelected,
      }))
    );
  };

  const isAllSelected = permissionState.every(
    (p) => p.Read && p.Create && p.Update && p.Delete
  );

  return (
    <div
      className="min-h-full px-8 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white shadow-md rounded-xl p-6 max-w-5xl mx-auto">
        <h2 className="text-lg font-bold text-[#CA406f] mb-2" style={FONTS.form_head}>Edit Group</h2>
        <p className="text-sm text-gray-500 mb-4" style={FONTS.Description}>Set Group Permissions</p>

        {/* Group Name Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium !text-gray-700 mb-1" style={FONTS.add_button}>
            Group Name
          </label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="text-gray-500 min-w-2xl border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#CA406f]"
          />
        </div>

        
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-sm text-gray-700" style={FONTS.form_des}> Administrator Access</h3>
          <div className="flex items-center space-x-1">
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={handleSelectAll}
              className="data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
            />
            <span className="text-sm">Select All</span>
          </div>
        </div>

      
        <div className="space-y-2">
          {permissionState.map((item, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="flex justify-between items-center ">
                <span className="font-sm w-40 text-gray-600" style={FONTS.form_topic}>{item.name}</span>
                <div className="flex space-x-25">
                  {(["Read", "Create", "Update", "Delete"] as const).map(
                    (type) => (
                      <div
                        key={type}
                        className="flex items-center space-x-1 text-sm text-gray-600"
                      >
                        <Checkbox
                          checked={item[type]}
                          onCheckedChange={() => handleToggle(index, type)}
                          className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                        />
                        <span style={FONTS.Description}>{type}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


export default EditGroup