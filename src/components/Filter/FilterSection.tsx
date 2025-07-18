import React, { useState } from "react";
import "./FilterSection.css";
import AddCourseForm from "../Course/AddCourseForm";
import back from "../../Assets/back.png";
import filter from "../../Assets/filter.png";

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
        //  overflow: "hidden",
      }}
    >
      <div className="filter-container">
        <h2 className="top-heading">Course Categories</h2>

        <div className="top-bar">
          <button
            className="filter-btn"
            onClick={() => {
              setShowFilter(!showFilter);
              setShowAddCourse(false);
            }}
          >
            <img src={filter} alt="filter Icon" className="filter-icon" />

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
            <div className="search-box">
              <input
                type="text"
                placeholder="Search Course"
                className="search-input"
              />
            </div>
            <div className="dropdown-row">
              <div className="dropdown-block">
                <label>Status</label>
                <select className="input">
                  <option value="">Search by Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="dropdown-block">
                <label>Status</label>
                <select className="input">
                  <option value="">Search by Category</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                </select>
              </div>
            </div>
              
          </div>
        )}

        {showAddCourse && <AddCourseForm />}
      </div>
    </div>
  );
};

export default FilterSection;
