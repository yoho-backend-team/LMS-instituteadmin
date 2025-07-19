import React from "react";
import "./CourseDetail.css";

const CourseDetails: React.FC = () => {
  return (
    <div className="course-details-wrapper">
      <div className="course-detail-card">
        <div className="course-image-placeholder"></div>

        <div className="course-detail-footer">
          <p className="course-time">Mon-Fri 10AM - 6PM</p>
          <p className="course-price">₹1,00,000</p>
          <button className="delete-btn">Delete</button>
        </div>
      </div>

      <div className="course-tab-section">
        <button className="active-tab">Study Materials</button>
        <button className="inactive-tab">Notes</button>
      </div>
    </div>
  );
};

export default CourseDetails;