import React, { useState } from "react";
import AddCourseForm from "../Course/AddCourseForm";
import AddCourseNewForm from "../Editcourse/AddCourseNewForm";

import CourseCard from "../CourseCard/CourseCard";
import CourseDetail from "../CourseDetail/CourseDetail";

import back from "../../../Assets/back.png";
import filter from "../../../Assets/filter.png";
import card1 from "../../../Assets/card1.png";
import card2 from "../../../Assets/card2.png";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState<
    false | "original" | "new"
  >(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleViewCourse = (course: any) => {
    setSelectedCourse(course);
  };

  const handleBackToList = () => {
    setSelectedCourse(null);
    setShowAddCourse(false);
  };

  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      tag: "React",
      image: card1,
      category: "Programming",
      mode: "Online",
      modules: 12,
      price: "₹4,999",
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Development",
      tag: "Node.js",
      image: card2,
      category: "Web Development",
      mode: "Offline",
      modules: 10,
      price: "₹3,999",
      status: "Active",
    },
  ];

  return (
    <div
      className="min-h-screen w-full p-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Buttons */}
        <div className="flex justify-between items-center gap-5 mb-6">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#e00076] text-white font-semibold rounded-md text-base"
            onClick={() => {
              setShowFilter(!showFilter);
              setShowAddCourse(false);
              setSelectedCourse(null);
            }}
          >
            <img src={filter} alt="Filter Icon" className="w-4 h-4" />
            {showFilter ? "Hide" : "Show Filter"}
          </button>

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-[#e00076] text-white font-semibold rounded-md text-base"
              onClick={() => {
                setShowAddCourse("original");
                setShowFilter(false);
                setSelectedCourse(null);
              }}
            >
              <span className="text-2xl font-light leading-none">+</span>
              Add Course
            </button>
          </div>
        </div>

        {/* Filter Section */}
        {showFilter && (
          <>
            <div className="mt-5 mb-3">
              <input
                type="text"
                placeholder="Search Course"
                className="w-[298px] px-4 py-2 border border-[#ca406f] rounded-md text-sm"
              />
            </div>

            <div className="bg-white rounded-xl p-5 mt-5 shadow-md">
              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col min-w-[250px] flex-1">
                  <label className="text-sm font-medium mb-1 text-gray-800">
                    Status
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                    <option value="">Search by Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex flex-col min-w-[250px] flex-1">
                  <label className="text-sm font-medium mb-1 text-gray-800">
                    Status
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                    <option value="">Search by Category</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Add Course Forms */}
        {showAddCourse === "original" && <AddCourseForm />}
        {showAddCourse === "new" && (
          <AddCourseNewForm onCancel={handleBackToList} />

        )}

        {/* Course Detail */}
        {selectedCourse && showAddCourse !== "new" && (
          <CourseDetail
            course={selectedCourse}
            onBack={handleBackToList}
            onEdit={() => {
              setShowAddCourse("new");
              setSelectedCourse(null); // Hide current course detail
            }}
          />
        )}

        
        {/* Course Cards */}
{!showAddCourse && !selectedCourse && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {courses.map((course) => (
      <CourseCard
        key={course.id}
        title={course.title}
        image={course.image}
        category={course.category}
        mode={course.mode}
        modules={course.modules}
        price={course.price}
        status={course.status}
        onViewClick={() => handleViewCourse(course)}
        onDeleteClick={() => {}}
        onBackClick={handleBackToList}
      />
    ))}
  </div>
)}

      </div>
    </div>
  );
};

export default FilterSection;
