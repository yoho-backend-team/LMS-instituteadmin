import React, { useState } from "react";
import "./FilterSection.css";
import AddCourseForm from '../Course/AddCourseForm';
import back from "../../Assets/back.png";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);

  return (
    <div
      className="filter-wrapper"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
        <h2 className="top-heading">CourseCategories</h2>
      <div className="top-bar">
        <button
          className="filter-btn"
          onClick={() => {
            setShowFilter(!showFilter);
            setShowAddCourse(false);
          }}
        >
          {showFilter ? "Hide" : "Show Filter"}
        </button>

        <button
          className="add-btn"
          onClick={() => {
            setShowAddCourse(!showAddCourse);
            setShowFilter(false);
          }}
        >
          + Add New Course
        </button>
      </div>

      {showFilter && (
        <div className="filter-content">
          <h2 className="title">Course Categories</h2>
          <input type="text" placeholder="Search Course" className="input" />
          <div className="dropdowns">
            <select className="input">
              <option value="">Search by Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select className="input">
              <option value="">Search by Categories</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
            </select>
          </div>
        </div>
      )}

      {showAddCourse && <AddCourseForm />}
    </div>
  );
};

export default FilterSection;