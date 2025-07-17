import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import bg from "../../../src/assets/Backdrop Image.png";

type PermissionType = "Read" | "Create" | "Update" | "Delete" | "All";

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

function PermissionManagement() {
  const [activeTab, setActiveTab] = useState<PermissionType>("Read");

  const [permissionState, setPermissionState] = useState<PermissionItem[]>(
    permissions.map((p) => ({
      ...p,
      Read: true,
      Create: false,
      Update: false,
      Delete: false,
    }))
  );

  const handleToggle = (index: number, type: "Read" | "Create" | "Update" | "Delete") => {
    setPermissionState((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [type]: !item[type] } : item
      )
    );
  };

  return (
    <div
      className="min-h-full px-8 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white shadow-md rounded-xl p-6 max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          {["Read", "Create", "Update", "Delete", "All"].map((tab) => (
            <Button
  key={tab}
  onClick={() => setActiveTab(tab as PermissionType)}
  variant={activeTab === tab ? "default" : "outline"}
  className={cn(
    activeTab === tab
      ? "bg-[#CA406f] !text-white hover:bg-[#CA406f]" // Active hover darker pink
      : "text-[#CA406f] border-[#CA406f] hover:bg-[#CA406f] hover:text-white" // Inactive hover light pink
  )}
>
  {tab}
</Button>

          ))}
        </div>

      
        <div className="space-y-3">
          {permissionState.map((item, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="flex  items-center p-2 px-2">
                <span className="font-md text-gray-600 w-80">{item.name}</span>

                {activeTab === "All" ? (
                  <div className="flex space-x-28">
                    {(["Read", "Create", "Update", "Delete"] as const).map(
                      (type) => (
                        <div
                          key={type}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <Checkbox
                            checked={item[type]}
                            onCheckedChange={() => handleToggle(index, type)}
                            className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                          />
                          <span>{type}</span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Checkbox
                      checked={
                        item[activeTab as "Read" | "Create" | "Update" | "Delete"]
                      }
                      onCheckedChange={() =>
                        handleToggle(
                          index,
                          activeTab as "Read" | "Create" | "Update" | "Delete"
                        )
                      }
                      className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 "
                    />
                    <span>{activeTab}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PermissionManagement;
