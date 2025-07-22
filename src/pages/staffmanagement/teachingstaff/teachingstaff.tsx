import CustomDropdown from "@/components/StaffManagement/CustomeDropDown";
import AddStaff from "@/components/StaffManagement/modal/AddStaff";
import ViewStaff from "@/components/StaffManagement/modal/ViewStaff";
import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Teachingstaff = () => {
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [viewStaffData, setViewStaffData] = useState(null);

  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
      image: "",
      dob: "1990-01-01",
      gender: "Male",
      course: "Mathematics",
      designation: "Lecturer",
      qualification: "M.Sc",
      state: "Tamil Nadu",
      city: "Chennai",
      pinCode: "600001",
      address1: "123, ABC Street",
      address2: "",
      phone: "9876543210",
      altPhone: "9123456789",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
      image: "",
      dob: "1988-08-08",
      gender: "Female",
      course: "English",
      designation: "Assistant Professor",
      qualification: "M.A",
      state: "Kerala",
      city: "Kochi",
      pinCode: "682001",
      address1: "456, XYZ Road",
      address2: "",
      phone: "9765432109",
      altPhone: "9012345678",
    },
  ]);

  const statusfilteroption = ["Active", "Offline"];
  const courseOptions = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Computer Science",
  ];

  const handleViewProfile = (staff: any) => {
    setViewStaffData(staff);
  };

  const handleBackToList = () => {
    setViewStaffData(null);
    setShowAddStaff(false);
  };
  const handleAddStaff = (newStaff: any) => {
    const newId = staffList.length + 1;
    setStaffList((prevList) => [...prevList, { id: newId, ...newStaff }]);
    setShowAddStaff(false);
  };

  return (
    <div className="h-full flex flex-col gap-4 transition-all duration-300">
      {viewStaffData ? (
        <ViewStaff staff={viewStaffData} onBack={handleBackToList} />
      ) : showAddStaff ? (
        <AddStaff onClose={handleBackToList} onSave={handleAddStaff} />
      ) : (
        <>
          {/* Header */}
          <div className="flex flex-col justify-between gap-3">
            <div className="text-[#716F6F]">
              <h2 className="font-semibold text-xl">Teaching Staff</h2>
            </div>

            {/* Filter and Add Button */}
            <div className="flex justify-between">
              <div className="border p-2 flex items-center gap-1 bg-[#CA406F] rounded-xl text-white">
                <BsSliders />
                <button onClick={() => setShowFilter((prev) => !prev)}>
                  {showFilter ? "Hide Filter" : "Show Filter"}
                </button>
              </div>
              <div className="border p-2 flex items-center gap-1 bg-[#CA406F] rounded-xl text-white">
                <FiPlus />
                <button onClick={() => setShowAddStaff(true)}>
                  Add New Staff
                </button>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          {showFilter && (
            <div className="flex gap-5 bg-white p-2 rounded-xl">
              <div className="flex-1 p-1">
                <label htmlFor="Status">Status</label>
                <select
                  id="Status"
                  className="border rounded-md h-10 w-full px-2"
                >
                  <option value="">Select Status</option>
                  {statusfilteroption.map((Status) => (
                    <option key={Status} value={Status}>
                      {Status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 p-1">
                <label htmlFor="courses">Courses</label>
                <select
                  id="courses"
                  className="border rounded-md h-10 w-full px-2"
                >
                  <option value="">Select Course</option>
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Staff Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {staffList.map((staff) => (
              <div
                key={staff.id}
                className="border grid gap-4 p-4 bg-white rounded-xl shadow-md"
              >
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-28 h-28 border-2 rounded-full overflow-hidden">
                    <img
                      src={staff.image || "https://via.placeholder.com/150"}
                      alt="profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{staff.name}</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <MdEmail size={20} />
                  <p>{staff.email}</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-[#555]">Status</p>
                  <CustomDropdown
                    options={["Active", "Inactive"]}
                    value={staff.status}
                    onChange={(newStatus) => {
                      const updatedList = staffList.map((s) =>
                        s.id === staff.id ? { ...s, status: newStatus } : s
                      );
                      setStaffList(updatedList);
                    }}
                    width="28"
                  />
                </div>

                <div className="w-full text-center border bg-[#0000FA] rounded-xl text-white">
                  <button
                    className="p-1 w-full"
                    onClick={() => handleViewProfile(staff)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Teachingstaff;
