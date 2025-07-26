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
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

 const [staffList, setStaffList] = useState([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    image: "",
    dob: "01-01-1990",
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
    dob: "08-08-1988",
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
    "MERN Full Stack Development",
    "UI/UX Design",
    "Data Science & Machine Learning",
    "Python Programming",
    "DevOps & Cloud Computing",
    "Android App Development",
    "iOS App Development",
    "Cybersecurity Fundamentals",
    "Blockchain Development",
    "AI & Deep Learning",
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
    const completeStaff = {
      id: newId,
      status: "Active",
      image: "",
      ...newStaff,
    };
    setStaffList((prevList) => [...prevList, completeStaff]);
    setShowAddStaff(false);
  };

  return (
    <div className="h-full flex flex-col gap-4 transition-all duration-300 ">
      {viewStaffData ? (
        <ViewStaff staff={viewStaffData} onBack={handleBackToList} />
      ) : showAddStaff ? (
        <AddStaff onClose={handleBackToList} onSave={handleAddStaff} />
      ) : (
        <>
          {/* Header */}
          <div className="flex flex-col justify-between gap-3">
            <div className="text-[#716F6F]">
              <h2 className="font-semibold text-2xl">Teaching Staff</h2>
            </div>

            {/* Filter and Add Button */}
            <div className="flex justify-between">
              <div className="border p-2 flex items-center justify-center gap-1 bg-[#CA406F] rounded-sm text-sm text-white w-36">
                <BsSliders />
                <button onClick={() => setShowFilter((prev) => !prev)}>
                  {showFilter ? "Hide Filter" : "Show Filter"}
                </button>
              </div>
              <div className="border p-2 flex items-center justify-center gap-1 bg-[#CA406F] rounded-sm text-sm text-white w-36 ">
                <FiPlus />
                <button onClick={() => setShowAddStaff(true)}>
                  Add New Staff
                </button>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          {showFilter && (
            <div className="flex gap-5 bg-white p-2 rounded-sm">
              <div className="flex-1 p-1 flex flex-col gap-2">
                <label htmlFor="Status" className="text-[#716F6F] font-medium">Status</label>
                <CustomDropdown
                  options={statusfilteroption}
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                  placeholder="Select Status"
                  width="w-full"
                />
              </div>

              <div className="flex-1 p-1 flex flex-col gap-2">
                <label htmlFor="courses" className="text-[#716F6F] font-medium">Courses</label>
                <CustomDropdown
                  options={courseOptions}
                  value={selectedCourse}
                  onChange={setSelectedCourse}
                  placeholder="Select Course"
                  width="w-full"
                />
              </div>
            </div>
          )}

          {/* Staff Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {staffList.map((staff) => (
              <div
                key={staff.id}
                className="border grid gap-4 p-4 bg-white rounded-sm shadow-md"
              >
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-24 h-24 bg-gray-200 border-2 rounded-full overflow-hidden scrollbar-hide">
                    {staff.image ? (
                      <img
                        src={staff.image || "https://via.placeholder.com/150"}
                        alt="profile"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-24 h-24 flex items-center justify-center  rounded-full text-[#CA406F] font-bold text-xl">
                        {staff.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-[#716F6F]">
                    {staff.name}
                  </h4>
                </div>
                <div className="flex gap-2 items-center text-[#716F6F] justify-items-center">
                  <p className="">
                    <MdEmail size={20} />
                  </p>
                  <p className="font-medium">{staff.email}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-[#7D7D7D] ">
                  <p className="text-[#716F6F] font-medium">Status</p>
                  <div className="">
                    <CustomDropdown
                      options={["Active", "Inactive"]}
                      value={staff.status}
                      onChange={(newStatus) => {
                        const updatedList = staffList.map((s) =>
                          s.id === staff.id ? { ...s, status: newStatus } : s
                        );
                        setStaffList(updatedList);
                      }}
                      width="w-32"
                    />
                  </div>
                </div>

                <div className="w-full text-center border bg-[#0400FF] rounded-sm text-white">
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
