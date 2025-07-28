import React, { useState } from "react";
import box1 from "../../../Assets/box1.png";
import box2 from "../../../Assets/box2.png";
import PremiumPage from "./PremiumPage";
import BasicPlan from "./BasicPlan";
import NewYearPlan from "./NewYearPlan";

const SubscriptionPlansPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | "basic" | "premium" | "newyear">(null);

  const handleGoBack = () => {
    setSelectedPlan(null);
  };

  const plans = [
    {
      title: "Basic Plan",
      price: "₹2000",
      image: box1,
      key: "basic",
      defaultBg: "bg-[#CA406F] text-white",
      btnClass: "bg-white text-pink-600",
    },
    {
      title: "Premium Plan",
      price: "₹15000",
      image: box2,
      key: "premium",
      defaultBg: "bg-gray-100 text-[#CA406F]",
      btnClass: "bg-pink-600 text-white",
    },
    {
      title: "New Year Plan",
      price: "₹12000",
      image: box2,
      key: "newyear",
      defaultBg: "bg-gray-100 text-[#CA406F]",
      btnClass: "bg-pink-600 text-white",
    },
  ];

  if (selectedPlan === "basic") return <BasicPlan goBackToSubscription={handleGoBack} />;
  if (selectedPlan === "premium") return <PremiumPage goBackToSubscription={handleGoBack} />;
  if (selectedPlan === "newyear") return <NewYearPlan goBackToSubscription={handleGoBack} />;

  return (
    <div className="min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: `url(${""})` }}>
      <div className="max-w-6xl mx-auto  shadow-xl rounded-xl p-8">
        <h2 className="text-3xl text-[#716F6F] font-bold text-center mb-2">Subscription Plans</h2>
        <p className="text-center text-gray-600 mb-6">
          All plans include 40+ advanced tools and features to boost your product.
          <br />
          Choose the best plan to fit your needs.
        </p>

       
        <div className="bg-gray-100 rounded-xl p-4 mb-10 overflow-x-auto">
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
                <td className="px-4 py-3 text-[#716F6F]">Basic Plan – Free</td>
                <td className="px-4 py-3 text-[#716F6F]">₹0</td>
                <td className="px-4 py-3 text-[#716F6F]">2025-04-07</td>
                <td className="px-4 py-3 text-[#716F6F]">₹0</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {plans.map((plan, idx) => {
            const isSelected = selectedPlan === plan.key;

            return (
              <div
                key={idx}
                className={`rounded-xl shadow-lg overflow-hidden flex flex-col items-center py-6 px-4 transition-all duration-300 ${
                  isSelected ? "bg-[#cc2f6b] text-white" : plan.defaultBg
                }`}
              >
                <img src={plan.image} alt={plan.title} className="h-32 w-80 object-contain mb-4" />
                <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                <p className="text-sm mb-2">The Plan is for everyone</p>
                <p className="text-2xl font-bold mb-4">
                  {plan.price} <span className="text-sm">/Monthly</span>
                </p>

                <div className="bg-white/20 p-3 rounded-md text-sm w-full">
                  <p className="font-semibold uppercase mb-2">Features</p>
                  <ul className="space-y-1">
                    {["Admins", "Students", "Teachers", "Batches", "Courses", "Classes"].map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-2 ${
                          isSelected && plan.key === "basic" ? "text-white" : "text-[#9B9B9B]"
                        }`}
                      >
                        <span className={isSelected && plan.key === "basic" ? "text-white" : "text-[#9B9B9B]"}>
                          ✔
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                
                <button
                  className="w-full mt-4 py-2 font-semibold rounded-md bg-white text-pink-600"
                  onClick={() => setSelectedPlan(plan.key as "basic" | "premium" | "newyear")}
                >
                  Your Plan
                </button>

                
                <button className={`w-full mt-2 py-2 font-semibold rounded-md border ${plan.btnClass}`}>
                  Upgrade Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansPage;
