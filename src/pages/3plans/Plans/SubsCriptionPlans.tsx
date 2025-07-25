import React, { useState } from "react";
import box1 from "../../../Assets/box1.png";
import box2 from "../../../Assets/box2.png";
import back from "../../../Assets/back.png";
import PremiumPage from "./PremiumPage";

const SubscriptionPlansPage: React.FC = () => {
  const [showPremium, setShowPremium] = useState(false);

  const plans = [
    {
      title: "Basic Plan",
      price: "₹2000",
      image: box1,
      bg: "bg-[#CA406F] text-white",
      btnClass: "bg-white text-pink-600",
    },
    {
      title: "Premium Plan",
      price: "₹15000",
      image: box2,
      bg: "bg-gray-100 text-gray-800",
      btnClass: "bg-pink-600 text-white",
    },
    {
      title: "New Year Plan",
      price: "₹12000",
      image: box2,
      bg: "bg-gray-100 text-gray-800",
      btnClass: "bg-pink-600 text-white",
    },
  ];

  if (showPremium) {
    return <PremiumPage goBackToSubscription={() => setShowPremium(false)} />;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="max-w-6xl mx-auto bg-white/90 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Subscription Plans</h2>
        <p className="text-center text-gray-600 mb-6">
          All plans include 40+ advanced tools and features to boost your product.
          <br />
          Choose the best plan to fit your needs.
        </p>

        {/* Table */}
        <div className="bg-gray-100 rounded-xl p-4 mb-10 border border-blue-400 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Plan</th>
                <th className="px-4 py-2">Amount Paid</th>
                <th className="px-4 py-2">Issued Date</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3 font-semibold text-gray-600">#B4</td>
                <td className="px-4 py-3">Basic Plan – Free</td>
                <td className="px-4 py-3">₹0</td>
                <td className="px-4 py-3">2025-04-07</td>
                <td className="px-4 py-3">₹0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-lg overflow-hidden flex flex-col items-center py-6 px-4 ${plan.bg}`}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="h-32 w-80 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
              <p className="text-sm mb-2">The Plan is for everyone</p>
              <p className="text-2xl font-bold mb-4">
                {plan.price} <span className="text-sm">/Monthly</span>
              </p>
              <div className="bg-white/20 p-3 rounded-md text-sm w-full">
                <p className="font-semibold uppercase mb-2">Features</p>
                <ul className="space-y-1">
                  {["Admins", "Students", "Teachers", "Batches", "Courses", "Classes"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>✔</span> {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <button
                className="w-full mt-4 py-2 font-semibold rounded-md bg-white text-pink-600"
                onClick={() => setShowPremium(true)}
              >
                Your Plan
              </button>

              <button
                className={`w-full mt-2 py-2 font-semibold rounded-md border ${plan.btnClass}`}
              >
                Upgrade Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansPage;
