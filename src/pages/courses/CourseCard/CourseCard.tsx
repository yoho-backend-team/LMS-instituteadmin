import React from "react";
import "./CourseCard.css";
import { FaCubes } from "react-icons/fa";
import dropdownIcon from "../../../assets/dropdownIcon.png"; 

type CourseCardProps = {
  category: string;
  mode: string;
  image: string;
  title: string;
  modules: number;
  price: string;
  status: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  category,
  mode,
  image,
  title,
  modules,
  price,
  status,
}) => {
  return (
    <div className="course-card">
      <div className="card-top">
        <span className="badge category">{category}</span>
        <span className="badge mode">{mode}</span>
      </div>

      <img src={image} alt={title} className="course-image" />

      <h3 className="course-title">{title}</h3>

      <div className="course-info">
        <div className="module-info">
          <FaCubes className="module-icon" />
          <span>{modules} Modules</span>
        </div>
        <span className="course-price">{price}</span>
      </div>

      <div className="card-bottom">
        
        <div className="status-button">
          <span className="status-text">{status}</span>
          <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
        </div>
        
        <button className="view-btn">View</button>
      </div>
    </div>
  );
};

export default CourseCard;