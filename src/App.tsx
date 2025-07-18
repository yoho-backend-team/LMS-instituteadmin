import React from "react";
import "./App.css";

import FilterSection from "./components/Filter/FilterSection";
import SubscriptionPlans from "./components/SubscriptionPlans/SubsCriptionPlans";

const App: React.FC = () => {
  return (
    <div className="App">
      

      <div className="main-content">
        
        {/* <FilterSection /> */}
        <SubscriptionPlans />
      </div>
    </div>
  );
};

export default App;
