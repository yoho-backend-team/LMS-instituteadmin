// import React from "react";
import "./SubscriptionPlans.css";


const SubscriptionPlans = () => {
  return (
    <div
      className="plans-wrapper"
      style={{
        backgroundImage: `url(${""})`,
      }}
    >
     
      <div className="top-container">
        <h2>Subscription Plans</h2>
        <p>
          All plans include 40+ advanced tools and features to boost your
          product. <br /> Choose the best plan to fit your needs.
        </p>

        <div className="table">
          <div className="table-row header">
            <span>ID</span>
            <span>Plan</span>
            <span>Amount Paid</span>
            <span>Issued Date</span>
            <span>Price</span>
          </div>
          <div className="table-row">
            <span>#84</span>
            <span>Basic Plan - Free</span>
            <span>$0</span>
            <span>2025-04-07T10:01:18</span>
            <span>$0</span>
          </div>
        </div>
      </div>

     
      <div className="cards-container">
        {[
  {
    title: "Basic Plan",
    subtitle: "The Plan is for everyone",
    price: "₹2000",
    highlight: true,
    bgColor: "#CA406F", 
    
  },
  {
    title: "Premium Plan",
    subtitle: "The Plan is for Premium Plan",
    price: "₹15000",
    highlight: false,
    bgColor: "#D9D9D9", 
    
  },
  {
    title: "New Year Plan",
    subtitle: "The Plan is for exclusive plan",
    price: "₹12000",
    highlight: false,
    bgColor: "#D9D9D9", 

  },
].map((plan, index) => (
  <div
    className={`plan-card ${plan.highlight ? "highlight" : ""}`}
    key={index}
  >
    <div
      className="plan-header"
      style={{
        backgroundColor: plan.bgColor,
      }}
    />
    <h3>{plan.title}</h3>
    <p>{plan.subtitle}</p>
    <h2 className="price">
      {plan.price} <span>/Monthly</span>
    </h2>

    <div className="features">
      <h4>Features</h4>
      <ul>
        <li>Admins</li>
        <li>Students</li>
        <li>Teachers</li>
        <li>Batches</li>
        <li>Courses</li>
        <li>Classes</li>
      </ul>
    </div>

    <button className="primary-btn">Your Plan</button>
    <button
      className={`secondary-btn ${plan.highlight ? "white-border" : ""}`}
    >
      Upgrade Plan
    </button>
  </div>
))}

      </div>
    </div>
  );
};

export default SubscriptionPlans;
