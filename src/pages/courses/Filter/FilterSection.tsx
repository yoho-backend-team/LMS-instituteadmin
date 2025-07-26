import React, { useState } from "react";
import AddCourseForm from "../Course/AddCourseForm";
import AddCourseNewForm from "../Editcourse/AddCourseNewForm";
import CourseCard from "../CourseCard/CourseCard";
import CourseDetail from "../CourseDetail/CourseDetail";

import filter from "../../../Assets/filter.png";
import card1 from "../../../Assets/card1.png";
import card2 from "../../../Assets/card2.png";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState<false | "original" | "new">(false);
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
    {
      id: 3,
      title: "Frontend Development",
      tag: "React",
      image: card1,
      category: "Programming",
      mode: "Online",
      modules: 12,
      price: "₹4,999",
      status: "Active",
    },
  ];

  return (
    <div className="w-full px-4 max-w-[1200px]  mx-auto">
      <h2 className="text-xl font-semibold text-[#716F6F] mb-6">Course Categories</h2>

      
      <div className="flex justify-between items-center flex-wrap gap-3 mb-6 w-full">
        {/* Show Filter button on left */}
        <button
          className="flex items-center mr-10 gap-2 px-4 py-2 bg-[#e00076] text-white font-semibold rounded-md text-base"
          onClick={() => {
            setShowFilter(!showFilter);
            setShowAddCourse(false);
            setSelectedCourse(null);
          }}
        >
          <img src={filter} alt="Filter Icon" className="w-4 h-4" />
          {showFilter ? "Hide" : "Show Filter"}
        </button>

        {/* Add Course button on right */}
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

      {/* Filter Inputs */}
      {showFilter && (
        <>
          <div className="mt-5 mb-3">
            <input
              type="text"
              placeholder="Search Course"
              className="w-full max-w-sm px-4 py-2 border border-[#ca406f] rounded-md text-sm"
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
                  Category
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                  <option value="">Search by Category</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add Course Forms */}
      {showAddCourse === "original" && <AddCourseForm onBack={handleBackToList} />}
      {showAddCourse === "new" && <AddCourseNewForm onCancel={handleBackToList} />}

      {/* Course Detail */}
      {selectedCourse && showAddCourse !== "new" && (
        <CourseDetail
          course={selectedCourse}
          onBack={handleBackToList}
          onEdit={() => {
            setShowAddCourse("new");
            setSelectedCourse(null);
          }}
        />
      )}

      {/* Course List */}
      {!showAddCourse && !selectedCourse && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mr-15 gap-6 mt-4 justify-between">
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
  );
};

export default FilterSection;
