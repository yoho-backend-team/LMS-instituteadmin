import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseCategories from "./components/CourseCategories/CourseCategories";
// import PaymentManagementFees from "./components/PaymentPages/PaymentManagementFees";
// import { Button } from "@/components/ui/button";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/course" element={<CourseCategories />} />
        </Routes>
      
    </Router>
  );
}

export default App;
