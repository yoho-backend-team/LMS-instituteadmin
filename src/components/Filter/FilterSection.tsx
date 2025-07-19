import React, { useState } from "react";
import "./FilterSection.css";
import AddCourseForm from "../Course/AddCourseForm";
import back from "../../Assets/back.png";
import filter from "../../Assets/filter.png";
import CourseCard from "../CourseCard/CourseCard";

import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";

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
            <span className="filter-btn-content">
              <img src={filter} alt="Filter Icon" className="filter-icon" />
              {showFilter ? "Hide" : "Show Filter"}
            </span>
          </button>

          <button
            className="add-btn"
            onClick={() => {
              setShowAddCourse(!showAddCourse);
              setShowFilter(false);
            }}
          >
            <span className="add-icon">+</span> Add New Course
          </button>
        </div>

        {showFilter && (
          <>
            <div className="search-box-outside">
              <input
                type="text"
                placeholder="Search Course"
                className="search-input"
              />
            </div>

            <div className="filter-content">
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
                  <label>Category</label>
                  <select className="input">
                    <option value="">Search by Category</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="course-card-wrapper inside-filter">
              <CourseCard
                category="Web Development"
                mode="Online"
                image={card1}
                title="Mern Stack 2025"
                modules={1}
                price="₹500,000"
                status="active"
              />
              <CourseCard
                category="Manual Testing"
                mode="Online"
                image={card2}
                title="Manual Testing Basic"
                modules={1}
                price="₹1,00,000"
                status="active"
              />
            </div>
          </>
        )}

        {!showFilter && !showAddCourse && (
          <div className="course-card-wrapper">
            <CourseCard
              category="Web Development"
              mode="Online"
              image={card1}
              title="Mern Stack 2025"
              modules={1}
              price="₹500,000"
              status="active"
            />
            <CourseCard
              category="Manual Testing"
              mode="Online"
              image={card2}
              title="Manual Testing Basic"
              modules={1}
              price="₹1,00,000"
              status="active"
            />
          </div>
        )}

        {showAddCourse && <AddCourseForm />}
      </div>
    </div>
  );
};

export default FilterSection;
