import React from "react";
import "./AddCourseForm.css";

const AddCourseForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Add New Course</h2>
      <form className="course-form">
        <div className="form-row">
          <input type="text" placeholder="Course Name" />
          <input type="text" placeholder="Course Duration" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Actual Price" />
          <input type="text" placeholder="Current Price" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Star Rating" />
          <input type="text" placeholder="Total Review" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Select Branches" />
          <input type="text" placeholder="Select Category" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Learning Format" />
        </div>
        <div className="form-row">
          <textarea placeholder="Course Overview"></textarea>
          <textarea placeholder="Course Description"></textarea>
        </div>
        <div className="form-row">
          <input type="text" placeholder="Thumbnail" />
          <input type="text" placeholder="Main Image" />
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;