import React from "react";
import "./AddCourseForm.css";
 
import { FaCloudUploadAlt } from "react-icons/fa";
const AddCourseForm = () => {
  return (
    <div className="add-course-form">
      <h2 className="form-heading">Add New Course</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Course Name</label>
          <input type="text" placeholder="Enter course name" />
        </div>
        <div className="form-group">
          <label>Course Duration</label>
          <select>
            <option>Select Duration</option>
            <option>1 Month</option>
            <option>3 Months</option>
          </select>
        </div>
      </div>

    
      <div className="form-row">
        <div className="form-group">
          <label>Actual Price</label>
          <input type="text" placeholder="Enter actual price" />
        </div>
        <div className="form-group">
          <label>Current Price</label>
          <input type="text" placeholder="Enter current price" />
        </div>
      </div>

   
      <div className="form-row">
        <div className="form-group">
          <label>Star Rating</label>
          <input type="text" placeholder="Enter rating" />
        </div>
        <div className="form-group">
          <label>Total Review</label>
          <input type="text" placeholder="Enter total reviews" />
        </div>
      </div>

  
      <div className="form-row">
        <div className="form-group">
          <label>Select Branches</label>
          <select>
            <option>Select Branch</option>
            <option>Branch A</option>
            <option>Branch B</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select Category</label>
          <select>
            <option>Select Category</option>
            <option>Design</option>
            <option>Development</option>
          </select>
        </div>
      </div>

    
      <div className="form-row">
        <div className="form-group">
          <label>Learning Format</label>
          <select>
            <option>Select Format</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>

     
      <div className="form-row">
        <div className="form-group">
          <label>Course Overview</label>
          <textarea placeholder="Write overview..." rows={3}></textarea>
        </div>
        <div className="form-group">
          <label>Course Description</label>
          <textarea placeholder="Write description..." rows={3}></textarea>
        </div>
      </div>

   
      <div className="form-row">
        <div className="form-group">
          <label>Thumbnail</label>
          <label className="file-upload">
            <FaCloudUploadAlt className="upload-icon" />
            <span>Choose File</span>
            <input type="file" hidden />
          </label>
        </div>
        <div className="form-group">
          <label>Main Image</label>
          <label className="file-upload">
            <FaCloudUploadAlt className="upload-icon" />
            <span>Choose File</span>
            <input type="file" hidden />
          </label>
        </div>
      </div>

      <div className="button-row">
        <button className="back-btn">Back</button>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default AddCourseForm;