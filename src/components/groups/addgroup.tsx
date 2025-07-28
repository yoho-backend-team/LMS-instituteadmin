import React, { useState } from "react";
import Input from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import bg from "../../../src/assets/Backdrop Image.png";
import { FONTS } from "../../constants/uiConstants";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AddGroup() {
  const permissions = [
    ["Dashboard", "Groups"],
    ["Users", "User Details"],
    ["Categories", "Courses"],
    ["Course Details", "Branch Details"],
    ["Course Notes", "Course Modules"],
  ];

  const navigate = useNavigate();

  const [groupName, setGroupName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<{
    [key: string]: string;
  }>({});
  const [errors, setErrors] = useState<{
    groupName?: string;
    permissions?: string;
  }>({});
  const [selectAll, setSelectAll] = useState(false);

  const handlePermissionChange = (label: string, value: string) => {
    setSelectedPermissions((prev) => ({ ...prev, [label]: value }));
  };

  const handleBack = () => {
    navigate(-1); 
    
  };



  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      // If Select All is checked, set Full Access for all
      const allPermissions: { [key: string]: string } = {};
      permissions.flat().forEach((p) => (allPermissions[p] = "full"));
      setSelectedPermissions(allPermissions);
    } else {
      setSelectedPermissions({});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formErrors: { groupName?: string; permissions?: string } = {};

    if (!groupName.trim()) {
      formErrors.groupName = "Group name is required.";
    }
    if (Object.keys(selectedPermissions).length === 0) {
      formErrors.permissions = "At least one permission must be selected.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("✅ Form Submitted:", { groupName, selectedPermissions });
      alert("Form submitted successfully!");
    }
  };

  const handleCancel = () => {
    setGroupName("");
    setSelectedPermissions({});
    setSelectAll(false);
    setErrors({});
    console.log("❌ Form reset");
  };

  return (
    <div
      className="min-h-screen px-8 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
       <div>
      <button
        onClick={handleBack}
        className="px-4 py-2 rounded-md  text-[#CA406f] "
      >
         <ArrowLeft className="w-8 h-6"/>
      </button>
    </div>
      <div className="bg-white top-80 shadow-md rounded-xl p-6 max-w-5xl mx-auto">
        
        <h2
          className="text-lg font-bold text-[#CA406f] mb-2"
          style={FONTS.form_head}
        >
          Add New Group
        </h2>
        <p
          className="text-gray-500 text-sm mb-4"
          style={FONTS.form_des}
        >
          Set Group Permissions
        </p>

        <form onSubmit={handleSubmit}>
          {/* Group Name */}
          <label
            className="text-sm font-medium !text-gray-600 mb-1"
            style={FONTS.add_button}
          >
            Group Name
          </label>
          <Input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="border-pink-400 w-2xl focus:ring-[#CA406f] mb-1"
            placeholder="Enter group name"
          />
          {errors.groupName && (
            <p className="text-red-500 text-xs mb-2">{errors.groupName}</p>
          )}

          {/* Group Permissions */}
          <div className="flex items-center justify-between border-t pt-3 mb-4">
            <span
              className="font-medium text-gray-600"
              style={FONTS.card_htext}
            >
              Group Permissions
            </span>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="selectAll"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
              <label
                htmlFor="selectAll"
                className="text-sm text-gray-600"
              >
                Select All
              </label>
            </div>
          </div>

          {errors.permissions && (
            <p className="text-red-500 text-xs mb-2">{errors.permissions}</p>
          )}

          {/* Permissions Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={FONTS.form_topic}
          >
            {permissions.map(([left, right], index) => (
              <React.Fragment key={index}>
                <PermissionSelect
                  label={left}
                  value={selectedPermissions[left] || ""}
                  onChange={(val) =>
                    handlePermissionChange(left, val)
                  }
                />
                <PermissionSelect
                  label={right}
                  value={selectedPermissions[right] || ""}
                  onChange={(val) =>
                    handlePermissionChange(right, val)
                  }
                />
              </React.Fragment>
            ))}
          </div>

          
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-[#ca406f] text-white hover:bg-[#b23561] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PermissionSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <Select value={value} onValueChange={onChange}>
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
