import React, { useState } from "react";
import "./AddCourseForm.css";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCourseForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div className="add-course-form">
      {!isSubmitted ? (
        <>
          <h2 className="form-heading">Add New Course</h2>

          <form onSubmit={handleSubmit}>
          
            <div className="form-row">
              <div className="form-group">
                <label>Course Name</label>
                <input type="text" placeholder="Enter course name" required />
              </div>
              <div className="form-group">
                <label>Course Duration</label>
                <select required>
                  <option>Select Duration</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                </select>
              </div>
            </div>

        
            <div className="form-row">
              <div className="form-group">
                <label>Actual Price</label>
                <input type="text" placeholder="Enter actual price" required />
              </div>
              <div className="form-group">
                <label>Current Price</label>
                <input type="text" placeholder="Enter current price" required />
              </div>
            </div>

         
            <div className="form-row">
              <div className="form-group">
                <label>Star Rating</label>
                <input type="text" placeholder="Enter rating" required />
              </div>
              <div className="form-group">
                <label>Total Review</label>
                <input type="text" placeholder="Enter total reviews" required />
              </div>
            </div>

        
            <div className="form-row">
              <div className="form-group">
                <label>Select Branches</label>
                <select required>
                  <option>Select Branch</option>
                  <option>Branch A</option>
                  <option>Branch B</option>
                </select>
              </div>
              <div className="form-group">
                <label>Select Category</label>
                <select required>
                  <option>Select Category</option>
                  <option>Design</option>
                  <option>Development</option>
                </select>
              </div>
            </div>

          
            <div className="form-row">
              <div className="form-group">
                <label>Learning Format</label>
                <select required>
                  <option>Select Format</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Course Overview</label>
                <textarea placeholder="Write overview..." rows={3} required></textarea>
              </div>
              <div className="form-group">
                <label>Course Description</label>
                <textarea placeholder="Write description..." rows={3} required></textarea>
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
              <button type="button" className="back-btn">Back</button>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h2> Thank you for submitting!</h2>
          <p>Your course has been added successfully.</p>
        </div>
      )}
    </div>
  );
};

export default AddCourseForm;